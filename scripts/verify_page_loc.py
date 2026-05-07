import os
import re
import json

def verify_page(file_path, sitemap_path, footer_path):
    issues = []
    
    if not os.path.exists(file_path):
        return [f"File {file_path} does not exist."]

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check word count (rough estimate by splitting on whitespace)
    # Removing script tags and JSX tags for better count
    clean_text = re.sub(r'<[^>]+>', ' ', content)
    clean_text = re.sub(r'\{[^}]+\}', ' ', clean_text)
    words = clean_text.split()
    word_count = len(words)
    if word_count < 3000:
        issues.append(f"Word count is {word_count}, which is less than 3000.")
    else:
        print(f"Word count check passed: {word_count} words.")

    # Check for em dashes
    if '—' in content or '--' in content:
        issues.append("Page contains em dashes or double hyphens.")

    # Check for schema
    schema_match = re.search(r'const schemaData = (\{.*?\});', content, re.DOTALL)
    if schema_match:
        try:
            schema_json = schema_match.group(1)
            # Remove trailing comma if any before parsing
            schema_json = re.sub(r',\s*\}', '}', schema_json)
            schema_json = re.sub(r',\s*\]', ']', schema_json)
            # This is a very rough way to parse JS object to JSON
            # In a real scenario, we might need a better JS parser
            # But let's check for key strings instead
            if '"@type": "Article"' not in content:
                issues.append("Article schema missing.")
            if '"@type": "FAQPage"' not in content:
                issues.append("FAQ schema missing.")
            if '"@type": "Product"' not in content or '"aggregateRating"' not in content:
                issues.append("Review/Product schema missing.")
            if '"@type": "BreadcrumbList"' not in content:
                issues.append("Breadcrumb schema missing.")
        except Exception as e:
            issues.append(f"Error parsing schema: {e}")
    else:
        issues.append("Schema data not found in page.")

    # Check FAQ count
    # Counting entries in the FAQ section of schema or the component
    faq_entries = re.findall(r'\{\s*q:', content)
    if len(faq_entries) < 10:
        issues.append(f"Found only {len(faq_entries)} FAQs, need at least 10.")
    else:
        print(f"FAQ count check passed: {len(faq_entries)} FAQs.")

    # Check review snippets count
    review_entries = re.findall(r'name:\s*".*?",\s*loc:', content)
    if len(review_entries) < 5:
        issues.append(f"Found only {len(review_entries)} review snippets, need at least 5.")
    else:
        print(f"Review count check passed: {len(review_entries)} reviews.")

    # Check sitemap
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
            if '/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court' not in sitemap_content:
                issues.append("Page not found in sitemap.")
            else:
                print("Sitemap check passed.")
    else:
        issues.append(f"Sitemap file {sitemap_path} not found.")

    # Check footer
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
            if '/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court' not in footer_content:
                issues.append("Page not found in footer.")
            else:
                print("Footer check passed.")
    else:
        issues.append(f"Footer file {footer_path} not found.")

    return issues

if __name__ == "__main__":
    file_to_check = "/Users/apple/Desktop/ama/sl-new/settle-loans/src/app/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court/page.tsx"
    sitemap = "/Users/apple/Desktop/ama/sl-new/settle-loans/src/app/sitemap.ts"
    # Assuming Footer is in components/Footer.tsx or similar
    footer = "/Users/apple/Desktop/ama/sl-new/settle-loans/src/components/Footer.tsx"
    
    results = verify_page(file_to_check, sitemap, footer)
    if not results:
        print("All checks passed successfully!")
    else:
        print("Issues found:")
        for issue in results:
            print(f"- {issue}")
