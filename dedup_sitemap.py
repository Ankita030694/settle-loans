import re

with open('src/app/sitemap.ts', 'r') as f:
    content = f.read()

header_match = re.search(r'(.*?return\s*\[)(.*)(\]\s*\}\s*)$', content, re.DOTALL)
if header_match:
    header = header_match.group(1)
    array_content = header_match.group(2)
    footer = header_match.group(3)

    blocks = []
    current_block = ''
    for line in array_content.split('\n'):
        current_block += line + '\n'
        if '},' in line or (line.strip().endswith('}') and 'url:' not in line):
            if current_block.strip():
                blocks.append(current_block)
            current_block = ''
            
    if current_block.strip():
        blocks.append(current_block)
        
    seen = set()
    unique_blocks = []
    
    for block in blocks:
        url_match = re.search(r'url:\s*`\$\{baseUrl\}/([^`]+)`', block)
        if url_match:
            url = url_match.group(1)
            if url not in seen:
                seen.add(url)
                unique_blocks.append(block)
        else:
            unique_blocks.append(block)
            
    new_array_content = ''.join(unique_blocks)
    new_content = header + new_array_content + footer
    
    with open('src/app/sitemap.ts', 'w') as f:
        f.write(new_content)
    print('Deduplicated sitemap')
else:
    print('Could not parse sitemap')
