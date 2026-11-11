import argparse
import os
import re
import sys


def strip_tags_and_ws(raw_html: str) -> str:
    # Replace JSX inline expressions like {' '} or {" "} with space
    cleaned = re.sub(r"\{\s*['\"]\s*['\"]\s*\}", " ", raw_html)
    cleaned = re.sub(r"<[^>]+>", " ", cleaned)
    cleaned = (
        cleaned.replace("&amp;", "&")
        .replace("&apos;", "'")
        .replace("&quot;", '"')
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&nbsp;", " ")
        .replace("&#39;", "'")
    )
    return re.sub(r"\s+", " ", cleaned).strip()


def derive_route_slug(file_path: str, repo_root: str) -> str:
    abs_file = os.path.abspath(file_path)
    app_dir = os.path.join(repo_root, "src", "app")
    if abs_file.startswith(app_dir + os.sep):
        rel = os.path.relpath(abs_file, app_dir)
        parts = rel.split(os.sep)
        if parts[-1].endswith(".tsx") or parts[-1].endswith(".ts"):
            parts = parts[:-1]
        if parts:
            return "/" + "/".join(parts)
        return "/"
    return "/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court"


def extract_metadata_string(content: str, field_name: str):
    # Extract metadata block first
    meta_match = re.search(
        r"export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{(.*?)\n\};",
        content,
        re.DOTALL,
    )
    block = meta_match.group(1) if meta_match else content
    # Match top-level field in metadata (before openGraph/twitter if possible)
    top_block = re.split(r"\bopenGraph\s*:", block)[0]
    m = re.search(
        rf"\b{re.escape(field_name)}\s*:\s*(['\"`])((?:\\.|(?!\1).)*)\1",
        top_block,
        re.DOTALL,
    )
    if m:
        val = m.group(2).replace("\\'", "'").replace('\\"', '"')
        return re.sub(r"\s+", " ", val).strip()
    return None


def extract_canonical(content: str):
    meta_match = re.search(
        r"export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{(.*?)\n\};",
        content,
        re.DOTALL,
    )
    block = meta_match.group(1) if meta_match else content
    m = re.search(
        r"\bcanonical\s*:\s*(['\"`])((?:\\.|(?!\1).)*)\1",
        block,
        re.DOTALL,
    )
    if m:
        return m.group(2).strip()
    return None


def compute_word_count(combined_content: str) -> int:
    # Remove import lines and metadata/schema blocks so JSON-LD doesn't inflate word count
    body = re.sub(r"^import\s+.*?;\s*$", " ", combined_content, flags=re.MULTILINE)
    body = re.sub(
        r"export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{.*?\n\};",
        " ",
        body,
        flags=re.DOTALL,
    )
    # Remove JSON-LD object definitions (schemaData / jsonLd / *Schema = { "@context": "https://schema.org" ... };)
    body = re.sub(
        r"const\s+\w+\s*(?::\s*[^=]+)?=\s*\{\s*['\"]@context['\"]\s*:\s*['\"]https://schema\.org['\"].*?\n\s*\};",
        " ",
        body,
        flags=re.DOTALL,
    )
    body = re.sub(
        r"const\s+\w+\s*(?::\s*[^=]+)?=\s*\[\s*\{\s*['\"]@context['\"]\s*:\s*['\"]https://schema\.org['\"].*?\n\s*\];",
        " ",
        body,
        flags=re.DOTALL,
    )
    # Strip JSX/HTML tags (neutralize arrow '=>' inside tag attributes first so <[^>]+> matches full tag)
    body = re.sub(r"<style\b[^>]*>.*?</style>", " ", body, flags=re.DOTALL)
    body = re.sub(r"<script\b[^>]*>.*?</script>", " ", body, flags=re.DOTALL)
    body = re.sub(r"<svg\b[^>]*>.*?</svg>", " ", body, flags=re.DOTALL)
    body = re.sub(r"=>", " ", body)
    body = re.sub(r"<[^>]+>", " ", body)
    # Strip code comments
    body = re.sub(r"/\*.*?\*/", " ", body, flags=re.DOTALL)
    body = re.sub(r"//.*?$", " ", body, flags=re.MULTILINE)
    # Keep text inside data arrays (e.g. faqs = [{ q: "...", a: "..." }]) while stripping JS punctuation/identifiers
    body = re.sub(
        r"\b(?:const|let|var|function|return|export|default|interface|type|key|idx|index|map|className|href|id|title|q|a|question|answer)\b",
        " ",
        body,
    )
    body = re.sub(r"[{}\[\]()=;:,`\"']", " ", body)
    tokens = [
        w
        for w in body.split()
        if re.search(r"[A-Za-z0-9\u0900-\u097F₹]", w)
        and not w.startswith("http")
        and not re.match(r"^(?:text|bg|border|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|sm|md|lg|xl|flex|grid|gap|rounded|shadow|hover|group|min|max|font|leading|tracking|scroll)-", w)
    ]
    return len(tokens)


def verify_page(
    file_path: str,
    sitemap_path: str,
    footer_path: str,
    no_fake_ratings: bool = False,
    check_sitemap_footer: bool = False,
    min_words: int = 3000,
):
    issues = []

    if os.path.isdir(file_path):
        file_path = os.path.join(file_path, "page.tsx")

    if not os.path.exists(file_path):
        return [f"File {file_path} does not exist."]

    with open(file_path, "r", encoding="utf-8") as f:
        page_content = f.read()

    # Load any co-located .tsx client components in the same route folder
    route_dir = os.path.dirname(os.path.abspath(file_path))
    sibling_contents = []
    if os.path.isdir(route_dir):
        for fname in sorted(os.listdir(route_dir)):
            fpath = os.path.join(route_dir, fname)
            if (
                fname.endswith(".tsx")
                and os.path.abspath(fpath) != os.path.abspath(file_path)
                and os.path.isfile(fpath)
            ):
                with open(fpath, "r", encoding="utf-8") as sf:
                    sibling_contents.append((fname, sf.read()))

    combined_content = page_content + "\n" + "\n".join(c for _, c in sibling_contents)
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    slug = derive_route_slug(file_path, repo_root)

    # 1. Check word count
    word_count = compute_word_count(combined_content)
    if min_words > 0:
        if word_count < min_words:
            issues.append(f"Word count is {word_count}, which is less than {min_words}.")
        else:
            print(f"Word count check passed: {word_count} words.")
    else:
        print(f"Word count (tool mode): {word_count} words.")

    # 2. Check for em dashes
    if (
        "—" in combined_content
        or "&mdash;" in combined_content
        or "&#8212;" in combined_content
        or "\\u2014" in combined_content
        or re.search(r"(?<!\!)\s--\s", combined_content)
    ):
        issues.append("Page contains em dashes (—) or spaced double hyphens.")

    # 3. Metadata checks (enforced strictly for differentiation-lane pages)
    if no_fake_ratings:
        canonical = extract_canonical(page_content)
        expected_canonical = f"https://www.settleloans.in{slug}"
        if not canonical:
            issues.append("Missing canonical URL in metadata.alternates.canonical.")
        elif canonical != expected_canonical:
            issues.append(
                f"Canonical mismatch: got '{canonical}', expected '{expected_canonical}'."
            )
        else:
            print(f"Canonical check passed: {canonical}")

        title = extract_metadata_string(page_content, "title")
        if not title:
            issues.append("Missing metadata.title.")
        else:
            if len(title) > 55:
                issues.append(
                    f"metadata.title is {len(title)} chars (> 55 limit): '{title}'"
                )
            if not title.endswith("| SettleLoans"):
                issues.append(
                    f"metadata.title must end with '| SettleLoans': '{title}'"
                )
            if len(title) <= 55 and title.endswith("| SettleLoans"):
                print(f"Title check passed ({len(title)} chars): {title}")

        desc = extract_metadata_string(page_content, "description")
        if not desc:
            issues.append("Missing metadata.description.")
        else:
            if len(desc) < 120 or len(desc) > 150:
                issues.append(
                    f"metadata.description is {len(desc)} chars (must be 120-150): '{desc}'"
                )
            else:
                print(f"Meta description check passed ({len(desc)} chars).")

    # 4. Heading hierarchy & length checks (H1, H2, no skipped levels, no headings in aside)
    for aside_match in re.finditer(
        r"<aside\b[^>]*>(.*?)</aside>", combined_content, re.DOTALL
    ):
        aside_headings = re.findall(r"<h[1-6]\b", aside_match.group(1), re.IGNORECASE)
        if aside_headings:
            issues.append(
                f"Found heading tag(s) {aside_headings} inside <aside> (must use div/span per SEO_AND_SECURITY_COMPLIANCE.md)."
            )

    heading_matches = list(
        re.finditer(
            r"<(h[1-6])\b[^>]*>(.*?)</\1>",
            combined_content,
            re.DOTALL | re.IGNORECASE,
        )
    )
    h1_texts = []
    h2_texts = []
    prev_level = 0
    for hm in heading_matches:
        tag = hm.group(1).lower()
        level = int(tag[1])
        htext = strip_tags_and_ws(hm.group(2))
        if prev_level == 0 and level != 1:
            issues.append(f"First heading on page is <{tag}> ('{htext}'), expected <h1>.")
        elif prev_level > 0 and level > prev_level + 1:
            issues.append(
                f"Skipped heading level from <h{prev_level}> to <{tag}> ('{htext}')."
            )
        prev_level = level

        if level == 1:
            h1_texts.append(htext)
            if len(htext) >= 70:
                issues.append(f"<h1> is {len(htext)} chars (must be < 70): '{htext}'")
        elif level == 2:
            h2_texts.append(htext)
            if len(htext) >= 70:
                issues.append(f"<h2> is {len(htext)} chars (must be < 70): '{htext}'")

    if len(h1_texts) != 1:
        issues.append(f"Expected exactly 1 <h1>, found {len(h1_texts)}.")
    else:
        print(f"H1 check passed ({len(h1_texts[0])} chars): {h1_texts[0]}")

    seen_h2 = set()
    dup_h2 = []
    for h2 in h2_texts:
        norm = h2.lower().strip()
        if norm in seen_h2 and not re.fullmatch(r"\{.*?\}", norm):
            dup_h2.append(h2)
        seen_h2.add(norm)
    if dup_h2:
        issues.append(f"Duplicate <h2> headings found: {dup_h2}")
    elif h2_texts:
        print(f"H2 check passed: {len(h2_texts)} unique <h2> headings, all < 70 chars.")

    # 5. Check Schema JSON-LD
    has_schema_block = (
        "https://schema.org" in combined_content
        and "application/ld+json" in combined_content
    )
    if not has_schema_block:
        issues.append("JSON-LD schema script (application/ld+json) not found in page.")
    else:
        if not re.search(r'["\']@type["\']\s*:\s*["\']Article["\']', combined_content):
            issues.append("Article schema missing.")
        if not re.search(r'["\']@type["\']\s*:\s*["\']FAQPage["\']', combined_content):
            issues.append("FAQPage schema missing.")
        if not re.search(
            r'["\']@type["\']\s*:\s*["\']BreadcrumbList["\']', combined_content
        ):
            issues.append("BreadcrumbList schema missing.")

        if no_fake_ratings:
            if (
                re.search(r'["\']@type["\']\s*:\s*["\']Product["\']', combined_content)
                or re.search(
                    r'["\']@type["\']\s*:\s*["\']AggregateRating["\']', combined_content
                )
                or "aggregateRating" in combined_content
                or re.search(r'["\']@type["\']\s*:\s*["\']Review["\']', combined_content)
            ):
                issues.append(
                    "Forbidden Product / AggregateRating / Review schema found (--no-fake-ratings)."
                )
            else:
                print(
                    "Schema check passed: Article + FAQPage + BreadcrumbList present, zero fake ratings."
                )
        else:
            if (
                not re.search(
                    r'["\']@type["\']\s*:\s*["\']Product["\']', combined_content
                )
                or "aggregateRating" not in combined_content
            ):
                issues.append("Review/Product schema missing.")

    # 6. Check FAQs & <details name="faq-accordion">
    details_tags = re.findall(r"<details\b[^>]*>", combined_content)
    if not details_tags:
        issues.append('No <details name="faq-accordion"> elements found for FAQs.')
    else:
        missing_name = [
            d for d in details_tags if not re.search(r'name\s*=\s*["\']faq-accordion["\']', d)
        ]
        if missing_name:
            issues.append(
                f'{len(missing_name)} <details> tag(s) missing name="faq-accordion".'
            )

    schema_questions = re.findall(
        r'["\']@type["\']\s*:\s*["\']Question["\']', combined_content
    )
    array_faqs = re.findall(r"\{\s*(?:q|question)\s*:", combined_content)
    faq_count = max(
        len(details_tags) if len(details_tags) > 1 else 0,
        len(array_faqs),
        len(schema_questions),
    )
    if faq_count < 10:
        issues.append(f"Found only {faq_count} FAQs, need at least 10.")
    elif len(schema_questions) < 10:
        issues.append(
            f"FAQPage JSON-LD has only {len(schema_questions)} Question entities, need at least 10."
        )
    else:
        print(
            f"FAQ count check passed: {faq_count} FAQs ({len(schema_questions)} in FAQPage schema)."
        )

    # 7. Legacy review snippets OR differentiation-lane funnel & RBI date check
    if not no_fake_ratings:
        review_entries = re.findall(r'name:\s*".*?",\s*loc:', combined_content)
        if len(review_entries) < 5:
            issues.append(
                f"Found only {len(review_entries)} review snippets, need at least 5."
            )
        else:
            print(f"Review count check passed: {len(review_entries)} reviews.")
    else:
        if "LoanSettlementAssessmentFunnel" not in combined_content:
            issues.append("LoanSettlementAssessmentFunnel not embedded on page.")
        if re.search(r"\bJuly\s+1,?\s+2026\b|\b1\s+July\s+2026\b|\bJuly\s+2026\b", combined_content, re.IGNORECASE):
            issues.append(
                "Contains 'July 2026' reference (RBI new recovery directions take effect 1 January 2027)."
            )

    # 8. Sitemap & Footer check (always in legacy mode, or when --check-sitemap-footer is passed)
    if check_sitemap_footer or not no_fake_ratings:
        if os.path.exists(sitemap_path):
            with open(sitemap_path, "r", encoding="utf-8") as f:
                sitemap_content = f.read()
                if slug not in sitemap_content:
                    issues.append(f"Page '{slug}' not found in sitemap ({sitemap_path}).")
                else:
                    print("Sitemap check passed.")
        else:
            issues.append(f"Sitemap file {sitemap_path} not found.")

        if os.path.exists(footer_path):
            with open(footer_path, "r", encoding="utf-8") as f:
                footer_content = f.read()
                if slug not in footer_content:
                    issues.append(f"Page '{slug}' not found in footer ({footer_path}).")
                else:
                    print("Footer check passed.")
        else:
            issues.append(f"Footer file {footer_path} not found.")

    return issues


if __name__ == "__main__":
    repo_root_default = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    parser = argparse.ArgumentParser(
        description="Verify SettleLoans page SEO, structure, schema, and word count."
    )
    parser.add_argument(
        "file",
        nargs="?",
        default=os.path.join(
            repo_root_default,
            "src/app/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court/page.tsx",
        ),
        help="Path to page.tsx (or route directory) to verify.",
    )
    parser.add_argument(
        "--no-fake-ratings",
        action="store_true",
        help="Exempt differentiation-lane pages from Product/aggregateRating schema and enforce strict new-page compliance.",
    )
    parser.add_argument(
        "--check-sitemap-footer",
        action="store_true",
        help="Also verify that the route slug is present in src/app/sitemap.ts and src/components/Footer.tsx.",
    )
    parser.add_argument(
        "--min-words",
        type=int,
        default=3000,
        help="Minimum word count threshold (default: 3000; pass 0 for interactive tools).",
    )
    args = parser.parse_args()

    sitemap = os.path.join(repo_root_default, "src/app/sitemap.ts")
    footer = os.path.join(repo_root_default, "src/components/Footer.tsx")

    results = verify_page(
        args.file,
        sitemap,
        footer,
        no_fake_ratings=args.no_fake_ratings,
        check_sitemap_footer=args.check_sitemap_footer,
        min_words=args.min_words,
    )
    if not results:
        print("All checks passed successfully!")
        sys.exit(0)
    else:
        print("Issues found:")
        for issue in results:
            print(f"- {issue}")
        sys.exit(1)
