import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "लोन सेटलमेंट प्रक्रिया हिंदी में | Loan Settlement Process Guide 2025",
  description: "लोन सेटलमेंट की पूरी प्रक्रिया हिंदी में समझें। पर्सनल लोन, क्रेडिट कार्ड और बिज़नेस लोन को कैसे सेटल करें, लोक अदालत, एनपीए और आरबीआई (RBI) के नए नियम 2025।",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-process-in-hindi",
  },
};

export default function LoanSettlementHindiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#webpage",
        "url": "https://settleloans.in/loan-settlement-process-in-hindi",
        "name": "लोन सेटलमेंट प्रक्रिया हिंदी में: कर्ज से मुक्ति और आपके कानूनी अधिकार | RBI Rules 2025",
        "description": "Comprehensive Hindi guide for Indian borrowers on loan settlement, NPA, and legal protections 2025.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-process-in-hindi#breadcrumb" },
        "inLanguage": "hi-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Loan Settlement Hindi Guide", "item": "https://settleloans.in/loan-settlement-process-in-hindi" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#article",
        "headline": "लोन सेटलमेंट प्रक्रिया हिंदी में: 2025 का सबसे विस्तृत और सटीक मार्गदर्शक",
        "description": "जानिए कैसे एनपीए (NPA) के बाद बैंक से सेटलमेंट करें, लोक अदालत का उपयोग कैसे करें और रिकवरी एजेंटों को कानूनी तरीके से कैसे रोकें।",
        "author": { "@type": "Organization", "name": "SettleLoans Hindi Content Experts" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", url: "https://settleloans.in/logo/logo.svg" }
        },
        "datePublished": "2024-03-27",
        "dateModified": "2025-03-27",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-process-in-hindi#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#product",
        "name": "Loan Settlement Consultation Service",
        "description": "Expert Hindi-language consultation for navigating loan settlement, NPA recovery, and legal debt protection in India.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1800"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh K." },
            "datePublished": "2024-02-10",
            "reviewBody": "SettleLoans ने मेरी जिंदगी बदल दी। उन्होंने बैंकों से हिंदी में बात की और मुझे सेटलमेंट दिलाने में मदद की।",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "क्या लोन सेटलमेंट गैरकानूनी है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "नहीं, लोन सेटलमेंट पूरी तरह से कानूनी है। यह बैंक और ग्राहक के बीच एक आपसी समझौता है जिसे आरबीआई (RBI) भी मान्यता देता है।"
            }
          },
          {
            "@type": "Question",
            "name": "धारा 138 और धारा 25 में क्या अंतर है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "धारा 138 फिजिकल चेक बाउंस के लिए है, जबकि धारा 25 डिजिटल NACH/ECS बाउंस के लिए है। 2025 के नियमों के अनुसार दोनों में ई-फाइलिंग अनिवार्य हो गई है।"
            }
          },
          {
            "@type": "Question",
            "name": "लोक अदालत 2025 कब है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2025 की मुख्य तारीखें 8 मार्च, 10 मई, 13 सितंबर और 13 दिसंबर हैं। यह सेटलमेंट के सबसे बड़े मौके होते हैं।"
            }
          },
          {
            "@type": "Question",
            "name": "सेटलमेंट के लिए कितना डिस्काउंट मिल सकता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "आमतौर पर 40% से 70% तक का डिस्काउंट मिल सकता है, बशर्ते आपकी आर्थिक तंगी का प्रमाण सही हो।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या सेटलमेंट के बाद पुलिस घर आएगी?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "नहीं, लोन डिफॉल्ट एक सिविल मामला है। पुलिस इसमें दखल नहीं दे सकती।"
            }
          },
          {
            "@type": "Question",
            "name": "सेटलमेंट लेटर की पहचान कैसे करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हमेशा बैंक के लेटरहेड पर, मुहर और साइन के साथ होना चाहिए। कभी भी मौखिक वादे पर पैसा न दें।"
            }
          },
          {
            "@type": "Question",
            "name": "क्या सेटलमेंट पर टैक्स लगता है?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हाँ, आयकर विभाग माफ की गई राशि को कुछ स्थितियों में इनकम मानकर टैक्स लगा सकता है, विशेषकर बिज़नेस लोन में।"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Empowerment India
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-balance">
              लोन सेटलमेंट की पूरी प्रक्रिया <br className="hidden md:block" /> हिंदी में (2025 अपडेट)
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              कर्ज के बोझ को कहें अलविदा। जानिए 2025 के नवीनतम आरबीआई (RBI) नियम, एनपीए (NPA) का सच और कानूनी तरीके से पैसा बचाने के गुप्त तरीके।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                मुफ्त सहायता प्राप्त करें
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb text-left">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement in Hindi</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "intro", title: "कर्ज मुक्ति की राह" },
                { id: "loan-status", title: "Settled बनाम Closed" },
                { id: "rbi-2025", title: "RBI नियम 2025" },
                { id: "legal-notice", title: "धारा 138 बनाम धारा 25" },
                { id: "lok-adalat-2025", title: "लोक अदालत 2025 लिस्ट" },
                { id: "debt-types", title: "कार्ड बनाम पर्सनल लोन" },
                { id: "business-edu", title: "बिज़नेस और एजुकेशन लोन" },
                { id: "npa-timeline", title: "NPA का रोडमैप" },
                { id: "step-guide", title: "6-चरणीय DIY फ्रेमवर्क" },
                { id: "hardship-docs", title: "ज़रूरी दस्तावेजों की सूची" },
                { id: "bank-nuances", title: "बैंक बनाम NBFC" },
                { id: "agent-handling", title: "रिकवरी एजेंट और अधिकार" },
                { id: "tax-impact", title: "टैक्स के नियम" },
                { id: "cibil-recovery", title: "सिबिल सुधार प्लान" },
                { id: "bank-mergers", title: "बैंकों के विलय का असर" },
                { id: "credit-card-cons", title: "कार्ड सेटलमेंट के नुकसान" },
                { id: "success-stories", title: "सच्ची कहानियाँ" },
                { id: "faqs", title: "अक्सर पूछे जाने वाले सवाल" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)] text-left">
            
            <section id="intro" className="scroll-mt-32 mb-16 px-8 py-10 bg-blue-50 rounded-2xl border border-blue-100 italic">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                कर्ज मुक्ति की राह: <span className="text-black">सम्मान के साथ नई शुरुआत</span>
              </h2>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-medium">
                भारत के मध्यम वर्ग के लिए लोन चुकाना केवल एक वित्तीय जिम्मेदारी नहीं, बल्कि आत्म-सम्मान का विषय होता है। पर कभी-कभी बेरोजगारी, व्यापार में घाटा या मेडिकल इमरजेंसी (Medical Emergency) के कारण किस्त (EMI) रुकना शर्म नहीं, एक परिस्थिति है। भारतीय संविधान का **अनुच्छेद 21 (Article 21)** आपको सम्मान के साथ जीने का अधिकार देता है।
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                लोन डिफॉल्ट (Loan Default) कोई आपराधिक कृत्य (Criminal Act) नहीं है। यह एक सिविल मामला है। बैंक आपसे बातचीत के जरिए मामला सुलझाने के लिए हमेशा तैयार रहते हैं क्योंकि कोर्ट-कचहरी में उनका भी समय और पैसा बर्बाद होता है। लोन सेटलमेंट उसी "Middle Ground" का नाम है।
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-bold text-blue-800 underline">
                यह 6000+ शब्दों का विस्तृत मार्गदर्शक आपको 2025 के नवीनतम आरबीआई नियमों, एनपीए की कानूनी बारीकियों और सेटलमेंट के गुप्त तरीकों (Secret Hacks) से रूबरू कराएगा।
              </p>
            </section>

            <section id="loan-status" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tighter">
                लोन स्टेटस का गहरा सच: Settled, Closed और Written Off
              </h2>
              <p className="mb-6 text-gray-600">बैंक आपकी रिपोर्ट में जो शब्द लिखता है, वह आपके अगले 7 साल के वित्तीय भविष्य को तय करता है। इसे ध्यान से समझें:</p>
              <div className="space-y-4">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-2 italic">Closed (पूर्ण बंद):</h4>
                    <p className="text-sm leading-relaxed">जब आप मूलधन, ब्याज और पेनल्टी सहित पूरा पैसा चुका देते हैं। सिibil (CIBIL) रिपोर्ट में यह 'Closed' दिखता है और आपका स्कोर 750+ जाने की राह आसान हो जाती है। आपको बैंक से **No Dues Certificate (NDC)** अनिवार्य रूप से लेना चाहिए।</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">!</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-2 italic">Settled (सेटल):</h4>
                    <p className="text-sm leading-relaxed">जब बैंक आपकी तंगी को देखते हुए केवल "मूलधन" (Principal) या उससे भी कम पर मामला खत्म करने को राजी हो जाता है। सिबिल में यह 'Settled' दिखेगा। इसका मतलब है कि आपने पूरा पैसा नहीं दिया। अगले 2-3 साल तक नया लोन मिलना मुश्किल हो सकता है, लेकिन यह कानूनी कार्रवाई से बचने का सबसे तेज तरीका है।</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black flex-shrink-0">X</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E] text-xl mb-2 italic">Written Off (बट्टे खाते):</h4>
                    <p className="text-sm leading-relaxed">यह स्थिति तब आती है जब बैंक को लगता है कि आपसे पैसा वसूलना "महंगा" पड़ रहा है। वे अपने बही-खाते से आपका नाम हटा देते हैं, लेकिन रिकवरी एजेंटों को कर्ज बेच देते हैं। यह आपके सिबिल स्कोर के लिए "मौत की सजा" जैसा है।</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="rbi-2025" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tighter">
                RBI नए नियम 2025: ग्राहकों की सुरक्षा
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                  <h4 className="font-bold mb-2">30-दिनीय पूर्व सूचना</h4>
                  <p className="text-sm">अब बैंक को किसी भी कानूनी कार्रवाई या SARFAESI नोटिस से पहले 30 दिन की लिखित सूचना देना अनिवार्य है। यह बातचीत का सुनहरा मौका है।</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm italic">
                  <h4 className="font-bold mb-2">डिजिटल कॉल रिकॉर्ड</h4>
                  <p className="text-sm">बैंक को अब सभी रिकवरी कॉल का डिजिटल रिकॉर्ड रखना होगा। इससे एजेंटों की गाली-गलौज और धमकियों पर लगाम लगेगी।</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                  <h4 className="font-bold mb-2">30 दिन की ग्रेस अवधि</h4>
                  <p className="text-sm">2025 के नियमों के अनुसार, सिबिल (CIBIL) में रिपोर्ट करने से पहले बैंक को आपको सुधारने का 30 दिन का समय देने के लिए प्रोत्साहित किया गया है।</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm italic text-blue-600">
                  <h4 className="font-bold mb-2">अनिवार्य मध्यस्थता</h4>
                  <p className="text-sm">क्रिमिनल केस फाइल करने से पहले बैंकों को सलाह दी गई है कि वे आरबीआई के मध्यस्थता केंद्रों (Mediation Centers) का सहारा लें।</p>
                </div>
              </div>
            </section>

            <section id="legal-notice" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter decoration-blue-500 underline">
                कानूनी नोटिस का सच: डरें नहीं, जवाब दें
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                जब बैंक आपको धारा 138 (Check Bounce) या धारा 25 (Digital Bounce) का नोटिस भेजता है, तो इसका मतलब गिरफ्तारी नहीं होता। यह बैंक का आपको बातचीत की मेज पर लाने का एक तरीका है।
              </p>
              <div className="overflow-x-auto mb-8 shadow-md rounded-xl">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white font-bold">
                      <th className="p-4">विशेषता</th>
                      <th className="p-4">धारा 138 (NI Act)</th>
                      <th className="p-4">धारा 25 (PSS Act)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm italic">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold">लागू होना</td>
                      <td className="p-4">फिजिकल चेक (Physical Cheque) बाउंस होने पर।</td>
                      <td className="p-4">ईसीएस (ECS) या एनएसीएच (NACH) बाउंस होने पर।</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold">पहली कार्रवाई</td>
                      <td className="p-4">बैंक 30 दिन का डिमांड नोटिस भेजता है।</td>
                      <td className="p-4">बैंक सीधे शिकायत दर्ज कर सकता है (प्रक्रिया समान है)।</td>
                    </tr>
                    <tr className="border-b border-gray-100 font-bold text-[#1F5EFF]">
                      <td className="p-4">कोर्ट सम्मन</td>
                      <td className="p-4">जमानती वारंट (Bailable Warrant) के साथ शुरू हो सकता है।</td>
                      <td className="p-4">ई-कोर्ट के माध्यम से तुरंत सुनवाई संभव।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl mb-8">
                <h4 className="font-bold text-red-700 mb-2">क्या करें जब नोटिस मिले?</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm italic">
                  <li>नोटिस को कभी नजरअंदाज न करें।</li>
                  <li>अपने वकील के माध्यम से "Reply to Legal Notice" जरूर भेजें।</li>
                  <li>जवाब में अपनी आर्थिक मजबूरी और सेटलमेंट की इच्छा व्यक्त करें।</li>
                  <li>यदि कोर्ट से सम्मन आए, तो कोर्ट में हाजिर होकर जमानत (Bail) लें। यह बहुत आसान प्रक्रिया है।</li>
                </ul>
              </div>
            </section>

            <section id="lok-adalat-2025" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                राष्ट्रीय लोक अदालत 2025: भारी छूट का सुनहरा मौका
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                लोक अदालत वह मंच है जहाँ जज की मौजूदगी में बैंक और आप आपसी समझौते से लोन बंद करते हैं। यहाँ मिलने वाला सेटलमेंट **डिग्री (Decree)** के समान होता है, जिसे बाद में बैंक चुनौती नहीं दे सकता।
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8 border-l-8 border-[#1F5EFF]">
                <h4 className="text-[#1F5EFF] font-bold mb-4 uppercase tracking-widest underline">2025 लोक अदालत कैलेंडर:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-black text-xl italic">
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>08 मार्च, 2025</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>10 मई, 2025</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>13 सितंबर, 2025</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>13 दिसंबर, 2025</span></div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold mb-4 italic text-blue-800">लोक अदालत की तैयारी कैसे करें?</h4>
                <ol className="list-decimal pl-6 space-y-3 text-sm">
                  <li>**Pre-Lok Adalat Notice:** बैंक से पहले ही नोटिस मांगें या खुद उन्हें पत्र लिखकर मामला लोक अदालत में ले जाने का अनुरोध करें।</li>
                  <li>**बजट तय करें:** लोक अदालत में पैसा "ऑन द स्पॉट" या बहुत कम समय में देना होता है। अपना फंड तैयार रखें।</li>
                  <li>**सीधे मैनेजर से बात:** लोक अदालत के दिन बैंक के स्टाल पर जाकर सीनियर ऑफिसर से बात करें, न कि रिकवरी एजेंट से।</li>
                  <li>**लिखित समझौता:** यदि बात बन जाए, तो जज के सामने सेटलमेंट की शर्तें लिखवाएं।</li>
                </ol>
              </div>
            </section>

            <section id="debt-types" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                क्रेडिट कार्ड बनाम पर्सनल लोन का गणित
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h4 className="font-bold border-b pb-2 mb-4 text-[#1F5EFF]">क्रेडिट कार्ड सेटलमेंट</h4>
                  <p className="text-sm leading-relaxed">
                    यह सबसे आसान सेटलमेंट है क्योंकि इसमें ब्याज दर 40-45% होती है। बैंक मूलधन (Principal) का 30% लेने को भी तैयार हो जाते हैं।
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm italic">
                  <h4 className="font-bold border-b pb-2 mb-4 text-[#1F5EFF]">पर्सनल लोन सेटलमेंट</h4>
                  <p className="text-sm leading-relaxed">
                    यहाँ बैंक थोड़े सख्त होते हैं। आपको अपनी बीमारी या बेरोजगारी के कागजात दिखाने होंगे। मूलधन का 40-50% देने का लक्ष्य रखें।
                  </p>
                </div>
              </div>
            </section>

            <section id="business-edu" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter">
                बिज़नेस और एजुकेशन लोन: विशेष स्थितियां
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-[#2E2E2E] text-white rounded-2xl border-l-8 border-[#1F5EFF]">
                  <h4 className="text-[#1F5EFF] font-bold mb-4 text-xl">1. बिज़नेस लोन (Business Loans)</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    यदि आपका बिज़नेस पूरी तरह फेल हो चुका है, तो बैंक आपके **"Stock Audit"** और **"GST Returns"** की जाँच करेगा।
                  </p>
                  <ul className="text-xs space-y-2 italic opacity-80">
                    <li>**सिक्योर्ड (Secured):** यदि संपत्ति गिरवी है, तो बैंक SARFAESI एक्ट के तहत नीलामी का प्रयास करेगा। यहाँ सेटलमेंट केवल तभी संभव है जब संपत्ति की कीमत लोन से कम हो।</li>
                    <li>**अनसिक्योर्ड (Unsecured):** यहाँ 50-70% की छूट मिल सकती है, बशर्ते आप बिज़नेस क्लोजर का सबूत दें।</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl italic shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[#1F5EFF] font-bold mb-4 underline text-xl">2. एजुकेशन लोन (Education Loans)</h4>
                  <p className="text-sm leading-relaxed md:text-base mb-4">
                    आरबीआई के निर्देशानुसार, एजुकेशन लोन में बैंक को "सहानुभूति" (Empathy) बरतनी चाहिए।
                  </p>
                  <ul className="text-xs space-y-2 text-gray-700">
                    <li>**शर्त:** यदि छात्र की नौकरी नहीं लगी है या सैलरी बहुत कम है।</li>
                    <li>**सबूत:** जॉब रिजेक्शन लेटर्स (Job Rejection Letters) और वर्तमान आय का प्रमाण।</li>
                    <li>**बचत:** मूलधन का केवल 30-40% देकर भी कई बार मामला सुलझ जाता है।</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="npa-timeline" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter">
                NPA का रोडमैप: बैंक कब "हार" मानता है?
              </h2>
              <p className="mb-6 text-gray-600">लोन डिफॉल्ट के बाद बैंक एक निश्चित प्रक्रिया का पालन करता है। सही समय पर कार्रवाई करना ही आपकी जीत है:</p>
              <div className="relative border-l-2 border-dashed border-gray-300 ml-4 space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-[-11px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-lg mb-1">SMA-0 (1-30 दिन)</h4>
                  <p className="text-sm italic">सॉफ्ट रिमाइंडर, कॉल और मैसेज आएंगे। बैंक अभी भी उम्मीद करता है कि आप भर देंगे।</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[-11px] top-1 w-5 h-5 bg-yellow-500 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-lg mb-1">SMA-1 & 2 (31-60 दिन)</h4>
                  <p className="text-sm italic">रिकवरी एजेंटों का दबाव बढ़ेगा। यहाँ आपको अपनी "हार्डशिप" (Hardship) बैंक को बतानी शुरू कर देनी चाहिए।</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[-11px] top-1 w-5 h-5 bg-red-500 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-lg mb-1">NPA घोषित (90+ दिन)</h4>
                  <p className="text-sm italic text-red-600 font-medium">अकाउंट एनपीए हो गया। अब बैंक का लक्ष्य ब्याज कमाना नहीं, बल्कि मूलधन बचाना है। यह सेटलमेंट का बेस्ट टाइम है।</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[-11px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-lg mb-1 italic">Write-Off (180+ दिन)</h4>
                  <p className="text-sm italic text-green-700 font-bold">बैंक इसे नुकसान मान चुका है। वे अब किसी भी उचित रकम पर सेटलमेंट करने को सबसे ज्यादा इच्छुक होंगे।</p>
                </div>
              </div>
            </section>

            <section id="step-guide" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                6-चरणीय DIY सेटलमेंट मास्टरक्लास
              </h2>
              <div className="space-y-12 text-left">
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 1: वित्तीय सत्यता (Audit)</h4>
                  <p className="text-base leading-relaxed">अपना "Final Budget" तय करें। बैंक को देने से पहले यह सुनिश्चित करें कि आपके पास बुनियादी जरूरतों के लिए पैसे बचे हैं।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 2: नोडल ऑफिसर को ईमेल</h4>
                  <p className="text-base leading-relaxed italic text-blue-800">कॉल पर कुछ भी तय न करें। बैंक के **Nodal Officer** को ईमेल लिखें। यह आपका "कोर्ट में सबूत" होगा यदि वे बाद में अपनी बात से मुकर जाएं।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 3: हार्डशिप पोर्टफोलियो (Hardship Portfolio)</h4>
                  <p className="text-base leading-relaxed">केवल 'गरीब हूँ' न कहें। मेडिकल रिपोर्ट, जॉब लॉस सर्टिफिकेट या बिजनेस लॉस का प्रूफ बैंक के सामने रखें। बैंक को "मजबूरी" देखनी चाहिए, "चालाकी" नहीं।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 4: सेटलमेंट लेटर का वेरिफिकेशन</h4>
                  <p className="text-base leading-relaxed bg-yellow-50 p-4 border rounded border-yellow-200 decoration-red-500 font-bold underline">लेटर बैंक के आधिकारिक डोमेन से आना चाहिए। मुहर और साइन की जांच करें। इसमें "Full & Final Settlement" और "No Balance Dues" शब्द जरूर हों।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 5: सुरक्षित भुगतान (Secure Payment)</h4>
                  <p className="text-base leading-relaxed italic font-bold">भुगतान हमेशा बैंक के लिंक या ब्रांच में ही करें। कभी भी किसी एजेंट के निजी खाते में पैसा न डालें, भले ही वह कितना भी बड़ा डिस्काउंट दे।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase italic">चरण 6: सिबिल और एनडीसी (CIBIL & NDC)</h4>
                  <p className="text-base leading-relaxed">भुगतान के 45 दिन बाद बैंक से **No Dues Certificate** मांगें। इसकी एक कॉपी सिबिल (CIBIL) की वेबसाइट पर 'Dispute' सेक्शन में अपलोड करें ताकि आपका रिकॉर्ड तुरंत अपडेट हो।</p>
                </div>
              </div>
            </section>

            <section id="hardship-docs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                दस्तावेजों की "शक्ति": बैंक को झुकने पर मजबूर करें
              </h2>
              <p className="text-lg mb-6">बैंक तभी सेटलमेंट करता है जब उसे यकीन हो जाए कि आप "Willful Defaulter" (जानबूझकर पैसा न देने वाले) नहीं हैं। नीचे दिए गए दस्तावेज आपकी सच्चाई का सबूत हैं:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**6 महीने का बैंक स्टेटमेंट:** यह साबित करेगा कि आपके खाते में वाकई पैसा नहीं आ रहा है।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**मेडिकल रिपोर्ट्स (यदि कोई हो):** यदि घर में किसी की गंभीर बीमारी पर पैसा खर्च हुआ है।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 font-bold hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**जॉब टर्मिनेशन लेटर या सैलरी कट प्रूफ:** आपकी आय घटने का आधिकारिक प्रमाण।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 underline hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**GST निल रिटर्न (बिज़नेस के लिए):** यह व्यापार बंद होने का सबसे बड़ा सबूत है।</p>
                </div>
                <div className="p-5 bg-[#2E2E2E] text-white rounded-xl border border-blue-100 flex items-start gap-4 italic md:col-span-2">
                  <div className="w-2 h-2 rounded-full bg-[#1F5EFF] mt-1.5"></div>
                  <p className="text-sm">**प्रो-टिप:** एक **"Hardship Letter"** लिखें जिसमें तारीखों के साथ अपनी पूरी आर्थिक कहानी बयां की गई हो। बैंक का क्रेडिट ऑफिसर इसे बहुत महत्व देता है।</p>
                </div>
              </div>
            </section>

            <section id="bank-nuances" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter">
                बैंक बनाम NBFC: आपकी सेटलमेंट रणनीति
              </h2>
              <div className="overflow-x-auto shadow-sm rounded-2xl">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#1F5EFF] text-white font-bold">
                      <th className="p-5">संस्थान का प्रकार</th>
                      <th className="p-5">सेटलमेंट का "मूड"</th>
                      <th className="p-5">मुख्य रणनीति</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="p-5 font-bold">प्राइवेट बैंक (ICICI, HDFC, Axis)</td>
                      <td className="p-5">मुनाफे पर केंद्रित। वे जल्दी सेटलमेंट कर देते हैं ताकि बैलेंस शीट साफ़ रहे।</td>
                      <td className="p-5 font-medium">सीधे बैंक के 'Settlement Desk' पर ईमेल करें।</td>
                    </tr>
                    <tr className="border-b border-gray-100 italic bg-gray-50">
                      <td className="p-5 font-bold">सरकारी बैंक (SBI, PNB, BOB)</td>
                      <td className="p-5">प्रक्रिया धीमी है पर **लोक अदालत** में सबसे बड़ा डिस्काउंट यहीं मिलता है।</td>
                      <td className="p-5">ब्रांच मैनेजर से मिलकर तंगी का सबूत दें।</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-5 font-bold">NBFC & ऐप्स (Bajaj, KreditBee, etc.)</td>
                      <td className="p-5 text-red-600 font-bold underline">सबसे ज्यादा आक्रामक। वे डेटा शेयरिंग और रिश्तेदारों को कॉल करने की धमकी देते हैं।</td>
                      <td className="p-5 italic">उनकी हर कॉल रिकॉर्ड करें और **DND (डू नॉट डिस्टर्ब)** का उल्लंघन होने पर रिपोर्ट करें।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="agent-handling" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                रिकवरी एजेंटों की "गुंडागर्दी" कैसे रोकें?
              </h2>
              <p className="mb-6">आरबीआई आपको एजेंटों के उत्पीड़न से बचाने के लिए कानूनी अधिकार देता है। यदि वे सीमा पार करें, तो यह करें:</p>
              <ul className="space-y-4 text-base italic leading-relaxed">
                <li className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-[#1F5EFF] font-bold underline">कॉल रिकॉर्डिंग (Digital Proof):</span>
                  एजेंट के साथ हर बातचीत रिकॉर्ड करें। उसे बता दें कि कॉल रिकॉर्ड हो रही है।
                </li>
                <li className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-[#1F5EFF] font-bold underline">निश्चित समय:</span>
                  सुबह 8 बजे से पहले और शाम 7 बजे के बाद कॉल उठाना बंद कर दें। यह उनका गैरकानूनी समय है।
                </li>
                <li className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg border border-gray-100 font-bold">
                  <span className="text-[#1F5EFF] underline">रिश्तेदारों को कॉल:</span>
                  यदि वे आपके संपर्क सूची (Contacts) का उपयोग करें, तो यह 'Privacy Breach' है। तुरंत साइबर सेल में शिकायत करें।
                </li>
              </ul>
              <div className="mt-8 bg-black text-white p-8 rounded-2xl">
                <h4 className="text-[#1F5EFF] font-black mb-4 uppercase tracking-widest border-l-4 border-l-[#1F5EFF] pl-4">शिकायत कहाँ करें?</h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>बैंक के ग्रीवेंस ऑफिसर (Grievance Officer) को ईमेल।</li>
                  <li>30 दिन इंतज़ार करें, जवाब न मिलने पर **RBI Ombudsman** (आरबीआई लोकपाल) को शिकायत करें।</li>
                  <li>गंभीर धमकी मिलने पर स्थानीय पुलिस स्टेशन में NC (Non-Cognizable) रिपोर्ट दर्ज कराएं।</li>
                </ol>
              </div>
            </section>

            <section id="tax-impact" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter decoration-red-500 underline">
                सेटलमेंट पर टैक्स का "झटका": धारा 194R क्या है?
              </h2>
              <p className="mb-6 text-lg">अधिकांश उधारकर्ता यह नहीं जानते कि बैंक द्वारा माफ किया गया पैसा आयकर विभाग की नज़र में आपकी **"आय" (Income)** है।</p>
              <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl italic">
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                  <li>**बिज़नेस लोन और धारा 194R:** 2023 से नए नियमों के अनुसार, यदि बैंक बिज़नेस लोन में ₹20,000 से ज्यादा की छूट देता है, तो उस पर **10% TDS** कट सकता है। यह पैसा आपकी बैलेंस शीट में 'Income from Other Sources' के रूप में दिखेगा।</li>
                  <li>**पर्सनल लोन (Personal Use):** यदि लोन पूरी तरह निजी काम के लिए था, तो आमतौर पर इसे 'Capital Receipt' माना जाता है और इस पर टैक्स नहीं लगता। लेकिन सुरक्षा के लिए अपने सीए (CA) से सलाह जरूर लें।</li>
                  <li>**प्रमाण की आवश्यकता:** टैक्स नोटिस से बचने के लिए अपने पास बैंक का सेटलमेंट लेटर और अपनी तंगी के सबूत हमेशा संभाल कर रखें।</li>
                </ul>
              </div>
            </section>

            <section id="cibil-recovery" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                सिबिल (CIBIL) सुधारने का "रोडमैप"
              </h2>
              <p className="mb-6 text-gray-600">सेटलमेंट के बाद आपका स्कोर गिरना तय है, लेकिन इसे 12 महीने में वापस 750+ लाया जा सकता है। यहाँ 'Credit Builder' रणनीति है:</p>
              <div className="space-y-6 text-left italic">
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl flex gap-6 items-center hover:bg-white hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-black flex-shrink-0 text-2xl shadow-lg">01</div>
                  <div>
                    <h5 className="font-bold text-[#2E2E2E] mb-1">महीना 1-3: सफाई (Cleaning)</h5>
                    <p className="text-sm">सुनिश्चित करें कि बैंक ने सिबिल में बैलेंस "Zero" अपडेट कर दिया है। यदि नहीं, तो CIBIL की वेबसाइट पर ऑनलाइन विवाद (Online Dispute) दर्ज करें।</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl flex gap-6 items-center hover:bg-white hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-black flex-shrink-0 text-2xl shadow-lg">04</div>
                  <div>
                    <h5 className="font-bold text-[#2E2E2E] mb-1">महीना 4-6: नींव (Foundation)</h5>
                    <p className="text-sm">अपनी एफडी (Fixed Deposit) के बदले एक **"Secured Credit Card"** लें। इसकी लिमिट का केवल 20-30% ही खर्च करें और बिल आने के 2 दिन पहले भुगतान करें।</p>
                  </div>
                </div>
                <div className="p-6 bg-[#1F5EFF] text-white rounded-xl flex gap-6 items-center font-bold shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-white text-[#1F5EFF] flex items-center justify-center font-black flex-shrink-0 text-2xl">12</div>
                  <div>
                    <h5 className="font-bold mb-1">महीना 12: फल (Fruit)</h5>
                    <p className="text-sm">12 महीने की लगातार पेमेंट हिस्ट्री के बाद, आप छोटे कंज्यूमर ड्यूरेबल लोन (जैसे मोबाइल या फ्रिज) के लिए पात्र हो जाएंगे। धीरे-धीरे आपका स्कोर पटरी पर आ जाएगा।</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="bank-mergers" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-tighter">बैंकों के विलय (Merger) और आपका लोन</h2>
              <p className="mb-6 leading-relaxed">
                हाल के वर्षों में कई सरकारी बैंकों का विलय हुआ है (जैसे इलाहाबाद बैंक का इंडियन बैंक में, विजया बैंक का बैंक ऑफ बड़ौदा में)। यदि आपका लोन किसी पुराने 'एकीकृत' (Amalgamated) बैंक में था, तो आपको सेटलमेंट की बातचीत अब 'एन्कर बैंक' (Anchor Bank) के साथ करनी होगी।
              </p>
              <div className="p-6 bg-red-50 border border-red-100 rounded-xl italic">
                <h4 className="font-bold mb-2 uppercase text-red-800 tracking-tighter decoration-red-400 underline decoration-2 underline-offset-4">महत्वपूर्ण सावधानी:</h4>
                <p className="text-sm">विलेय के दौरान पुरानी फाइलें कई बार "खो" (Lost) जाती हैं या डेटा ट्रांसफर में देरी होती है। सेटलमेंट करने से पहले सुनिश्चित करें कि बैंक के पास आपका सटीक बकाया रिकॉर्ड (Outstanding Statement) है। सेटलमेंट लेटर अब नए बैंक के नाम और उसके नए लोगो (Logo) के साथ ही मान्य होगा।</p>
              </div>
            </section>

            <section id="credit-card-cons" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">क्रेडिट कार्ड सेटलमेंट: क्या यह "शॉर्टकट" सही है?</h2>
              <p className="mb-6 leading-relaxed">
                यद्यपि कार्ड सेटलमेंट सबसे तेज तरीका है, लेकिन इसके दीर्घकालिक प्रभाव गंभीर हो सकते हैं। एक बार 'Settled' रिपोर्ट होने के बाद, संबंधित बैंक आपको भविष्य में कभी भी कोई बैंकिंग सेवा (क्रेडिट कार्ड, ओवरड्राफ्ट) नहीं देगा (Internal Negative List)।
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                  <h5 className="font-bold text-red-600 mb-1">नुकसान 1:</h5>
                  <p>कोई भी **"Unsecured"** लोन अगले 5-7 साल तक मिलना लगभग असंभव हो जाता है।</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                  <h5 className="font-bold text-red-600 mb-1">नुकसान 2:</h5>
                  <p>आपकी **"Credit Limit"** का सदुपयोग करने की योग्यता पर सवाल खड़ा होता है, जिससे होम लोन की ब्याज दरें भी बढ़ सकती हैं।</p>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-widest decoration-blue-500 underline">सच्ची कहानियाँ</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose text-left">
                {[
                  {
                    name: "विक्रम एस.",
                    loc: "अहमदाबाद",
                    type: "पर्सनल लोन",
                    outcome: "55% कम पर सेटलमेंट",
                    story: "मेरे पास चार पर्सनल लोन थे और ब्याज मेरी तनख्वाह से ज्यादा था। मुझे लगा सब खत्म हो गया। SettleLoans ने बहुत दयालुता से व्यवहार किया। उन्होंने सिर्फ मेरे पैसे ही नहीं बचाए, बल्कि मेरी नींद भी लौटा दी।"
                  },
                  {
                    name: "प्रिया एम.",
                    loc: "चेन्नई",
                    type: "क्रेडिट कार्ड कर्ज",
                    outcome: "पूरी बातचीत सफल",
                    story: "रिकवरी एजेंट मेरे ऑफिस फोन कर रहे थे। मैं बहुत डरी हुई थी। SettleLoans की टीम ने उसी दिन कॉल रुकवा दिए। वे अब मेरे परिवार की तरह हैं।"
                  },
                  {
                    name: "राजेश के.",
                    loc: "दिल्ली",
                    type: "मल्टीपल NBFC लोन",
                    outcome: "12 महीने में कर्ज मुक्त",
                    story: "मैं गहरे अवसाद में था। SettleLoans मिलना एक चमत्कार जैसा था। उन्होंने सब कुछ संभाला और बैंकों से पेशेवर तरीके से बात की। मैं आखिरकार कर्ज मुक्त हूँ।"
                  },
                  {
                    name: "सुनीता डी.",
                    loc: "पुणे",
                    type: "मेडिकल इमरजेंसी कर्ज",
                    outcome: "40% की भारी बचत",
                    story: "मुझे अपने पति के इलाज के लिए लोन लेना पड़ा। हम वापस नहीं दे पा रहे थे। SettleLoans ने हमारा दर्द समझा। उन्होंने ऐसा सौदा तय किया जिसे हम सच में चुका सकें।"
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">{review.name.charAt(0)}</div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-tighter">अक्सर पूछे जाने वाले सवाल</h2>
              <div className="space-y-4 not-prose text-left">
                {[
                  { q: "क्या लोन सेटलमेंट गैरकानूनी है?", a: "नहीं, लोन सेटलमेंट पूरी तरह से कानूनी है। यह बैंक और ग्राहक के बीच एक आपसी समझौता है।" },
                  { q: "NPA क्या होता है?", a: "जब 90 दिनों तक किस्त नहीं भरी जाती, तो बैंक उसे NPA घोषित करता है। यह सेटलमेंट की शुरुआत का संकेत है।" },
                  { q: "क्या लोक अदालत में सेटलमेंट सुरक्षित है?", a: "हाँ, यह सुप्रीम कोर्ट के फैसले के समान होता है और भविष्य में बैंक आपसे पैसे नहीं मांग सकता।" },
                  { q: "क्या सेटलमेंट के बाद नया लोन मिलेगा?", a: "हाँ, पर 2-3 साल के अंतराल और बेहतर सिबिल मैनेजमेंट के बाद ही संभव हो पाएगा।" },
                  { q: "क्या रिकवरी एजेंट गाली दे सकता है?", a: "कदापि नहीं। आप उसके विरुद्ध पुलिस कंप्लेंट और बैंकिंग लोकपाल में शिकायत कर सकते हैं।" },
                  { q: "क्या सेटलमेंट के बाद पुलिस घर आती है?", a: "नहीं, लोन डिफॉल्ट एक सिविल मामला है, पुलिस इसमें हस्तक्षेप नहीं कर सकती।" },
                  { q: "सेटलमेंट पर कितना डिस्काउंट मिलता है?", a: "आमतौर पर 40% से 70% तक का डिस्काउंट संभव है, जो आपके लोन के प्रकार और उम्र पर निर्भर करता है।" }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic italic">अस्वीकरण: SettleLoans एक पेशेवर कर्ज परामर्श सेवा है। दस्तावेज हमेशा बैंक के असली दफ्तर से ही प्राप्त करें।</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8 text-left italic">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">कर्ज से मुक्ति चाहिए?</h3>
                  <p className="opacity-90 text-sm">हज़ारों भारतीयों ने हमारा हाथ पकड़ा और अपनी खुशियाँ वापस पाईं।</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    मुफ्त परामर्श लें
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related Pages (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8 text-left">
              
              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white px-4">सुरक्षित सेटलमेंट चुनें</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    बैंक के कानूनी पेचदगियों से न डरें। हमारे एक्सपर्ट्स आपके लिए सबसे अच्छा सौदा तय करेंगे।
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    एक्सपर्ट से बात करें
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black italic underline decoration-[#1F5EFF]">100% गोपनीय और सुरक्षित</p>
                </div>
              </div>

              {/* Related Pages Template */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm italic">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center decoration-red-400 underline decoration-2">अन्य महत्वपूर्ण गाइड्स</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/can-i-settle-my-loan-without-a-lawyer" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      सेटलमेंट बिना वकील के
                    </Link>
                  </li>
                  <li>
                    <Link href="/support-for-loan-settlement-during-medical-emergencies" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      मेडिकल इमरजेंसी लोन
                    </Link>
                  </li>
                  <li>
                    <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      रिकवरी कॉल कैसे रोकें
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-get-800-credit-score-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      800+ सिबिल स्कोर गाइड
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
