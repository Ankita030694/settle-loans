const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/unsecured-personal-loan-definition/page.tsx');
const sitemapPath = path.join(__dirname, 'src/app/sitemap.ts');
const footerPath = path.join(__dirname, 'src/components/Footer.tsx');

let errors = [];

function check() {
    if (!fs.existsSync(pagePath)) {
        console.error('Page file does not exist.');
        process.exit(1);
    }
    
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // 1. Check schemas
    const schemaMatch = content.match(/const schemaData = (\{.*?\});\n/s);
    if (!schemaMatch) {
        errors.push("Could not find schemaData object.");
    } else {
        // We do a rough string search or try to parse
        const schemaString = content.substring(content.indexOf('const schemaData = {'), content.indexOf('};', content.indexOf('const schemaData = {')) + 1);
        if (!schemaString.includes('"@type": "Article"')) errors.push("Missing Article schema.");
        if (!schemaString.includes('"@type": "FAQPage"')) errors.push("Missing FAQPage schema.");
        if (!schemaString.includes('"@type": "Product"')) errors.push("Missing Product schema.");
        if (!schemaString.includes('"@type": "BreadcrumbList"')) errors.push("Missing BreadcrumbList schema.");
        if (!schemaString.includes('"@type": "AggregateRating"')) errors.push("Missing AggregateRating schema.");
        
        const reviewCountMatch = schemaString.match(/"@type": "Review"/g);
        if (!reviewCountMatch || reviewCountMatch.length < 5) {
            errors.push(`Less than 5 reviews in schema. Found: ${reviewCountMatch ? reviewCountMatch.length : 0}`);
        }
        
        const faqCountMatch = schemaString.match(/"@type": "Question"/g);
        if (!faqCountMatch || faqCountMatch.length < 10) {
            errors.push(`Less than 10 FAQs in schema. Found: ${faqCountMatch ? faqCountMatch.length : 0}`);
        }
    }

    // 2. Check word count (excluding code syntax and schema)
    const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/\{[^}]+\}/g, ' ');
    const words = textOnly.split(/\s+/).filter(w => w.length > 0);
    // Since JSX has a lot of attributes, we can do a rough count of the whole file. If > 3500 it's likely over 3000 words.
    // Better, extract just the text inside tags.
    const textInsideTags = content.match(/>([^<]+)</g)?.map(s => s.slice(1, -1).trim()).filter(s => s.length > 0).join(' ') || '';
    const wordCount = textInsideTags.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`Word count approximation (text in tags): ${wordCount}`);
    if (wordCount < 3000) {
        errors.push(`Content word count is less than 3000. Found approx: ${wordCount}`);
    }

    // 3. Em dashes
    if (content.includes('—') || content.includes('&mdash;') || content.includes('\\u2014')) {
        errors.push("Found em dashes in the content.");
    }
    
    // 4. Sitemap
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (!sitemapContent.includes('/unsecured-personal-loan-definition')) {
        errors.push("Page not added to sitemap.");
    }
    
    // 5. Footer
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    if (!footerContent.includes('/unsecured-personal-loan-definition')) {
        errors.push("Page not added to Footer.");
    }

    if (errors.length > 0) {
        console.error("Errors found:");
        errors.forEach(e => console.error("- " + e));
        process.exit(1);
    } else {
        console.log("All checks passed!");
    }
}

check();
