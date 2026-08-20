import os
import glob

pages = [
    'recovery-agents-calling-relatives-friends',
    'recovery-agent-visiting-workplace-office',
    'lok-adalat-notice-for-personal-loan',
    'section-138-cheque-bounce-loan-default',
    'can-i-go-to-jail-for-loan-default',
    'how-to-avoid-loan-settlement-scams',
    'loan-settlement-vs-debt-consolidation',
    'how-to-settle-credit-card-debt',
    'bank-one-time-settlement-ots-policy',
    'no-dues-certificate-after-loan-settlement'
]

base_dir = '/Users/piyushmishra/Desktop/SettleLoan/settle-loans/src/app'

# 1. Patch schema
injection = """
      "image": "https://settleloans.in/logo/logo.svg",
      "telephone": "+91-9821219819",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "India"
      },"""

for page in pages:
    page_file = os.path.join(base_dir, page, 'page.tsx')
    if os.path.exists(page_file):
        with open(page_file, 'r') as f:
            content = f.read()
            
        if 'priceRange' not in content:
            target1 = '"@type": "FinancialService",'
            target2 = "'@type': 'FinancialService',"
            if target1 in content:
                content = content.replace(target1, target1 + injection)
            elif target2 in content:
                content = content.replace(target2, target2 + injection.replace('"', "'"))
            
            with open(page_file, 'w') as f:
                f.write(content)

# 2. Inject CompanySection
for page in pages:
    page_dir = os.path.join(base_dir, page)
    client_files = glob.glob(os.path.join(page_dir, '*Client.tsx'))
    if not client_files: continue
    
    client_file = client_files[0]
    with open(client_file, 'r') as f:
        lines = f.read().split('\n')
        
    import_str = "import CompanySection from '@/components/CompanySection';"
    if import_str in '\n'.join(lines):
        continue
        
    insert_idx = 0
    for i, line in enumerate(lines):
        if line.strip() in ["'use client';", '"use client";']:
            insert_idx = i + 1
            break
            
    lines.insert(insert_idx, import_str)
    content = '\n'.join(lines)
    
    faq_markers = [
        '{/* Section 9: FAQs */}',
        '{/* Section 8: FAQs */}',
        '{/* Section 7: FAQs */}',
        '{/* Section 10: FAQs */}',
        '{/* Section 11: FAQs */}',
        '{/* Section 12: FAQs */}',
        '<section id="faqs"'
    ]
    
    for marker in faq_markers:
        if marker in content:
            content = content.replace(marker, "<CompanySection />\n\n            " + marker)
            break
            
    with open(client_file, 'w') as f:
        f.write(content)

print("Patched 10 new pages.")
