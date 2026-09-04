# Project SEO, Security & Architecture Compliance Guidelines

This document outlines mandatory coding and architectural standards for `settleloans.in`. All newly created pages, routes, template updates, and server configurations MUST strictly comply with these rules.

---

## 1. Domain Normalization & Canonical Rules
* **Primary Domain Standard:** The primary canonical domain for all pages is strictly `https://www.settleloans.in/`.
* **Canonical Tag Generation:**
  * Every HTML page must include an absolute canonical tag in the `<head>` rendered server-side/at build time:
    `<link rel="canonical" href="https://www.settleloans.in/page-slug" />`
  * Never output `non-www` or relative URLs in canonical tags.
* **Server-Level Redirects:**
  * Configure server routing (`.htaccess`, `nginx.conf`, Next.js `redirects()`, or hosting edge rules) so all `non-www` (`https://settleloans.in/*`) requests automatically 301 permanent redirect to their exact `www` equivalent (`https://www.settleloans.in/*`).
* **Internal Linking:**
  * All internal links across navigation menus, footers, sidebars, and body content must hardcode or resolve directly to `https://www.settleloans.in/...`.

---

## 2. On-Page Title Tag Standards
* **Pixel Width & Character Limit:**
  * Every page title `<title>` must be kept strictly under **55 characters** and under **550 pixels** in width to prevent Google SERP truncation (`...`).
* **Title Structure Formula:**
  * Standard template: `[Topic / City / Service Name] | SettleLoans`
* **Implementation Rule:**
  * Title tags must be rendered via template engine variables or SEO configuration fields in `export const metadata: Metadata`. Do NOT use client-side JavaScript to swap or inject title tags in the DOM.

---

## 3. Server HTTP Security Headers
All server responses must output the following security headers directly from the edge/web server layer:

* **X-Frame-Options:** `SAMEORIGIN`
* **X-Content-Type-Options:** `nosniff`
* **Referrer-Policy:** `strict-origin-when-cross-origin`
* **Content-Security-Policy (CSP):** `default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';`

---

## 4. Heading Hierarchy & HTML Structure
* **H1 Usage:** Exactly ONE `<h1>` per page representing the primary topic, under 70 characters.
* **H2 Usage:** `<h2>` tags are reserved exclusively for main content sections under the main heading, under 70 characters, sequentially ordered. No duplicate text across H2 tags on a single page.
* **UI Components:** Do NOT use heading tags (`<h1>`-`<h6>`) in global layout elements (headers, footers, sidebars, modals, cookie banners). Use `<div>` or `<span>` styled with CSS instead.

---

## 5. Developer Checklist Before Publishing New Pages
Before creating or deploying any new page or route:
1. Verify URL uses `https://www.settleloans.in/slug`.
2. Verify canonical tag is present and explicitly matches the `www` URL.
3. Verify `<title>` tag is under 55 characters (~550px).
4. Verify meta description is strictly between 120 and 150 characters (< 980px).
5. Verify heading hierarchy: single `<h1>` (< 70 chars), clean `<h2>` (< 70 chars), sequentially ordered.
6. Verify all `<details>` tags in FAQ sections include `name="faq-accordion"`.
7. Run `curl -I` on the new URL to verify server security headers are active.

---

## 6. Meta Description Standards
* **Length Limit:** Keep meta descriptions strictly between **120 and 150 characters** (and under 980 pixels).
* **Rendering:** Must be hardcoded into raw HTML response or rendered via server-side templates (`metadata.description`).
* **Content:** Include clear action-oriented summary and key topic phrase.

---

## 7. Extended Server Security Headers
All HTTP responses must output:
* `X-Frame-Options: SAMEORIGIN`
* `X-Content-Type-Options: nosniff`
* `Referrer-Policy: strict-origin-when-cross-origin`
* `Content-Security-Policy: default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';`

---

## 8. Heading Hierarchy Rules
* **H1 Tag:** Exactly 1 per page, under 70 characters.
* **H2 Tags:** Used for section breakdowns, under 70 characters, sequentially ordered. No duplicate text across H2 tags on a single page.
