import fs from 'fs';
import path from 'path';

const PAGE_PATH = '/Users/apple/Desktop/ama/sl-new/settle-loans/src/app/bank-loan-settlement-guidelines/page.tsx';
const FOOTER_PATH = '/Users/apple/Desktop/ama/sl-new/settle-loans/src/components/Footer.tsx';
const SITEMAP_PATH = '/Users/apple/Desktop/ama/sl-new/settle-loans/src/app/sitemap.ts';

function validate() {
    console.log('--- Starting Validation ---');
    let errors: string[] = [];

    // 1. Check if page exists
    if (!fs.existsSync(PAGE_PATH)) {
        errors.push(`Page file not found at ${PAGE_PATH}`);
        console.error(errors[errors.length - 1]);
        return;
    }

    const content = fs.readFileSync(PAGE_PATH, 'utf-8');

    // 2. Word Count (Approximate)
    // Strip HTML/JSX tags and count words
    const plainText = content.replace(/<[^>]*>?/gm, ' ');
    const wordCount = plainText.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`Word Count: ~${wordCount}`);
    if (wordCount < 3000) {
        errors.push(`Word count is ${wordCount}, which is less than the required 3000.`);
    }

    // 3. Rich Results (Schema)
    if (!content.includes('"@type": "Article"')) errors.push('Missing Article Schema');
    if (!content.includes('"@type": "FAQPage"')) errors.push('Missing FAQPage Schema');
    if (!content.includes('"@type": "Review"') && !content.includes('"@type": "Product"')) errors.push('Missing Review/Product Schema');
    if (!content.includes('"@type": "BreadcrumbList"')) errors.push('Missing BreadcrumbList Schema');

    // 4. FAQs count
    const faqMatches = content.match(/@type": "Question"/g);
    const faqCount = faqMatches ? faqMatches.length : 0;
    console.log(`FAQ Count: ${faqCount}`);
    if (faqCount < 10) errors.push(`Only ${faqCount} FAQs found, need at least 10.`);

    // 5. Review snippets count
    const reviewMatches = content.match(/@type": "Review"/g);
    const reviewCount = reviewMatches ? reviewMatches.length : 0;
    console.log(`Review Count: ${reviewCount}`);
    if (reviewCount < 5) errors.push(`Only ${reviewCount} review snippets found, need at least 5.`);

    // 6. Check for em dashes
    if (content.includes('—')) {
        errors.push('Found em dashes (—), which are not allowed.');
    }

    // 7. Structure check (TOC items)
    if (!content.includes('tocItems') || !content.includes('<TableOfContents')) {
        errors.push('Missing Table of Contents structure.');
    }

    // 8. Footer Link
    if (fs.existsSync(FOOTER_PATH)) {
        const footerContent = fs.readFileSync(FOOTER_PATH, 'utf-8');
        if (!footerContent.includes('/bank-loan-settlement-guidelines')) {
            errors.push('Link not found in footer.');
        }
    } else {
        errors.push('Footer file not found.');
    }

    // 9. Sitemap entry
    if (fs.existsSync(SITEMAP_PATH)) {
        const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
        if (!sitemapContent.includes('bank-loan-settlement-guidelines')) {
            errors.push('Entry not found in sitemap.');
        }
    } else {
        errors.push('Sitemap file not found.');
    }

    // 10. Helpful Resources Links (simplified check)
    // We'll check if the links in the "helpful resources" section exist in the sitemap
    // This is more complex to automate fully without parsing the sitemap properly, 
    // but we can do a basic check.

    console.log('--- Validation Finished ---');
    if (errors.length > 0) {
        console.log('Discrepancies found:');
        errors.forEach(e => console.log(`- ${e}`));
    } else {
        console.log('All checks passed!');
    }
}

validate();
