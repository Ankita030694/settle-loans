import re
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_style = False
    def handle_starttag(self, tag, attrs):
        if tag == 'style' or tag == 'script':
            self.in_style = True
    def handle_endtag(self, tag):
        if tag == 'style' or tag == 'script':
            self.in_style = False
    def handle_data(self, data):
        if not self.in_style:
            self.text.append(data)

def count_words(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    return_idx = content.find('return (')
    jsx = content[return_idx:]

    parser = TextExtractor()
    parser.feed(jsx)
    extracted = ' '.join(parser.text)
    extracted = re.sub(r'\{[^\}]*\}', ' ', extracted)
    extracted = re.sub(r'&apos;', "'", extracted)
    extracted = re.sub(r'&amp;', '&', extracted)
    words_jsx = [w for w in re.split(r'\s+', extracted) if w.strip() and not re.match(r'^[\W_]+$', w)]

    faq_texts = []
    faq_matches = re.findall(r'question:\s*\"([^\"]+)\",\s*answer:\s*\(\s*<p>(.*?)</p>\s*\)', content, re.DOTALL)
    for q, a in faq_matches:
        a_clean = re.sub(r'<[^>]+>', ' ', a)
        a_clean = re.sub(r'&apos;', "'", a_clean)
        a_clean = re.sub(r'&amp;', '&', a_clean)
        faq_texts.append(q + ' ' + a_clean)

    faq_all = ' '.join(faq_texts)
    words_faq = [w for w in re.split(r'\s+', faq_all) if w.strip() and not re.match(r'^[\W_]+$', w)]

    total_words = len(words_jsx) + len(words_faq)
    print(f"JSX words: {len(words_jsx)}")
    print(f"FAQ words: {len(words_faq)}")
    print(f"TOTAL VISIBLE WORDS: {total_words}")
    return total_words

if __name__ == '__main__':
    count_words('/Users/piyushmishra/Desktop/SettleLoan/settle-loans/src/app/icici-personal-loan-settlement/IciciPersonalLoanSettlementClient.tsx')
