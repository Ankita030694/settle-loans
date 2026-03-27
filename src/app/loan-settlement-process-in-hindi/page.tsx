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
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-process-in-hindi#faq",
        "mainEntity": [
          { q: "क्या लोन सेटलमेंट गैरकानूनी है?", a: "नहीं, लोन सेटलमेंट पूरी तरह से कानूनी है। यह बैंक और ग्राहक के बीच एक आपसी समझौता है जिसे आरबीआई (RBI) भी मान्यता देता है।" },
          { q: "धारा 138 और धारा 25 में क्या अंतर है?", a: "धारा 138 फिजिकल चेक बाउंस के लिए है, जबकि धारा 25 डिजिटल NACH/ECS बाउंस के लिए है। 2025 के नियमों के अनुसार दोनों में ई-फाइलिंग अनिवार्य हो गई है।" },
          { q: "लोक अदालत 2025 कब है?", a: "2025 की मुख्य तारीखें 8 मार्च, 10 मई, 13 सितंबर और 13 दिसंबर हैं। यह सेटलमेंट के सबसे बड़े मौके होते हैं।" },
          { q: "सेटलमेंट के लिए कितना डिस्काउंट मिल सकता है?", a: "आमतौर पर 40% से 70% तक का डिस्काउंट मिल सकता है, बशर्ते आपकी आर्थिक तंगी का प्रमाण सही हो।" },
          { q: "क्या सेटलमेंट के बाद पुलिस घर आएगी?", a: "नहीं, लोन डिफॉल्ट एक सिविल मामला है। पुलिस इसमें दखल नहीं दे सकती।" },
          { q: "सेटलमेंट लेटर की पहचान कैसे करें?", a: "हमेशा बैंक के लेटरहेड पर, मुहर और साइन के साथ होना चाहिए। कभी भी मौखिक वादे पर पैसा न दें।" },
          { q: "क्या सेटलमेंट पर टैक्स लगता है?", a: "हाँ, आयकर विभाग माफ की गई राशि को कुछ स्थितियों में इनकम मानकर टैक्स लगा सकता है, विशेषकर बिज़नेस लोन में।" }
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
                { id: "success-stories", title: "सच्ची कहानियाँ" },
                { id: "faqs", title: "अक्सर पूछे जाने वाले सवाल" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)] text-left">
            
            <section id="intro" className="scroll-mt-32 mb-16 px-8 py-10 bg-blue-50 rounded-2xl border border-blue-100 italic">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                कर्ज अपराध नहीं है: <span className="text-black">अपना सम्मान वापस पाएँ</span>
              </h2>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-medium">
                भारत के मध्यम वर्ग के लिए लोन चुकाना सम्मान की बात होती है, पर कभी-कभी हालात खराब होने पर किस्त (EMI) रुक जाना शर्म का विषय बन जाता है। याद रखें, आप अकेले नहीं हैं। करोड़ों भारतीय इस दौर से गुजर रहे हैं। लोन सेटलमेंट कोई "कानूनी लड़ाई" नहीं, बल्कि एक व्यावसायिक समझौता है।
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 underline">
                यह 5000+ शब्दों का विस्तृत लेख आपको 2025 के नवीनतम आरबीआई नियमों के आधार पर कर्ज से मुक्ति दिलाने के लिए तैयार किया गया है।
              </p>
            </section>

            <section id="loan-status" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tighter">
                लोन स्टेटस: Settled, Closed और Written Off में अंतर
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Closed (बंद):</h4>
                    <p className="text-sm">जब आप पूरा पैसा समय पर चुका देते हैं। सिबिल के लिए यह सबसे बेहतरीन स्थिति है। आपको 'No Dues Certificate' मिलता है।</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">!</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Settled (सेटल):</h4>
                    <p className="text-sm">जब आप पूरी रकम नहीं चुका पाते और बैंक कम पैसे में मामला खत्म करता है। सिबिल में 'Settled' लिखा आता है, जिससे भविष्य में लोन मिलना थोड़ा मुश्किल हो सकता है।</p>
                  </div>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black flex-shrink-0">X</div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Written Off (बट्टे खाते में डालना):</h4>
                    <p className="text-sm">जब बैंक मान लेता है कि पैसा नहीं मिलेगा और वह उसे रिकॉर्ड से हटा देता है। यह सिबिल के लिए सबसे हानिकारक है और भविष्य के सभी लोन विकल्प बंद कर देता है।</p>
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
                कानूनी समझ: धारा 138 बनाम धारा 25
              </h2>
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
                      <td className="p-4 font-bold">क्षेत्र</td>
                      <td className="p-4">फिजिकल चेक बाउंस</td>
                      <td className="p-4">डिजिटल NACH/ECS बाउंस</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold">प्रकृति</td>
                      <td className="p-4">अर्ध-आपराधिक (Quasi-Criminal)</td>
                      <td className="p-4">अर्ध-आपराधिक (Quasi-Criminal)</td>
                    </tr>
                    <tr className="border-b border-gray-100 font-bold text-[#1F5EFF]">
                      <td className="p-4">2025 अपडेट</td>
                      <td className="p-4">90 दिनों में केस निपटान का लक्ष्य</td>
                      <td className="p-4">डिजिटल साक्ष्यों की सख्त जाँच</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic text-gray-400">नोट: लीगल नोटिस मिलने का मतलब गिरफ्तारी नहीं है। यह केवल एक अदालती प्रक्रिया की शुरुआत है।</p>
            </section>

            <section id="lok-adalat-2025" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                राष्ट्रीय लोक अदालत 2025 की सूची
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                लोक अदालत वह जगह है जहाँ बैंक हार मान लेते हैं और ग्राहक जीत जाते हैं। यहाँ आप 50-80% तक की छूट पा सकते हैं।
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8 border-l-8 border-[#1F5EFF]">
                <h4 className="text-[#1F5EFF] font-bold mb-4 uppercase tracking-widest underline">2025 की मुख्य तारीखें:</h4>
                <ul className="space-y-4 font-black text-xl italic">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>08 मार्च, 2025</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>10 मई, 2025</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>13 सितंबर, 2025</span></li>
                  <li className="flex justify-between pb-2"><span>13 दिसंबर, 2025</span></li>
                </ul>
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
                बिज़नेस और एजुकेशन लोन में सेटलमेंट
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-[#2E2E2E] text-white rounded-2xl">
                  <h4 className="text-[#1F5EFF] font-bold mb-4">बिज़नेस लोन (Business Loans):</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    यदि आपका बिज़नेस पूरी तरह फेल हो चुका है, तो बैंक स्टॉक ऑडिट और पुराने टर्नओवर की जाँच करेगा। कोलैटरल (गिरवी) लोन में सेटलमेंट थोड़ा मुश्किल होता है, लेकिन अनसिक्योर्ड बिज़नेस लोन में 50-60% की छूट मिल सकती है।
                  </p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl italic">
                  <h4 className="text-[#1F5EFF] font-bold mb-4 underline">एजुकेशन लोन (Education Loans):</h4>
                  <p className="text-sm leading-relaxed md:text-base">
                    इसमें मानवीय पक्ष (Emotional Aspect) मजबूत होता है। यदि छात्र की नौकरी नहीं लगी है या आर्थिक स्थिति बेहद खराब है, तो बैंक लोक अदालत के जरिए काफी ज्यादा रियायत दे सकते हैं। छात्र के डिग्री प्रूफ और जॉब सर्च रिकॉर्ड बैंक को ज़रूर दिखाएँ।
                  </p>
                </div>
              </div>
            </section>

            <section id="npa-timeline" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter">
                NPA का रोडमैप (0-180 दिन)
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center font-black flex-shrink-0">01</div>
                  <p className="text-sm">**SMA-1 (31-60 दिन):** बैंक कर्मचारी प्यार से कॉल करेंगे। डराने की कोशिश शुरू होगी।</p>
                </li>
                <li className="flex gap-4 items-start opacity-70">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center font-black flex-shrink-0">02</div>
                  <p className="text-sm">**NPA (90+ दिन):** आपका अकाउंट बैंक के नजरिए से "घाटा" बन चुका है। बातचीत यहीं से गंभीर होती है।</p>
                </li>
                <li className="flex gap-4 items-start font-bold text-green-600">
                  <div className="w-12 h-12 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center font-black flex-shrink-0">03</div>
                  <p className="text-sm">**The Sweet Spot (120+ दिन):** बैंक अब सेटलमेंट लेटर देने के लिए खुद ऑफर भेज सकता है।</p>
                </li>
              </ul>
            </section>

            <section id="step-guide" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                6-चरणीय DIY सेटलमेंट फ्रेमवर्क
              </h2>
              <div className="space-y-12 text-left">
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 1: वित्तीय ऑडिट</h4>
                  <p className="text-base leading-relaxed">तय करें कि आप सच में कितना दे सकते हैं। यदि 5 लाख का लोन है और आपके पास केवल 1.5 लाख हैं, तो वही आपका आधार है।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 2: औपचारिक सूचना (Digital Trail)</h4>
                  <p className="text-base leading-relaxed italic">बैंक के नोडल ऑफिसर को ईमेल भेजें। फोन कॉल पर कभी भरोसा न करें। ईमेल में अपना अकाउंट नंबर और तंगी का कारण साफ लिखें।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 3: हार्डशिप पोर्टफोलियो</h4>
                  <p className="text-base leading-relaxed">अस्पताल के बिल, जॉब जाने का लेटर या बिजनेस क्लोजर का प्रूफ बैंक को दें। बिना सबूत के बैंक आपको "जानबूझकर पेमेंट न करने वाला" (Willful Defaulter) मान सकता है।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 4: सेटलमेंट लेटर की जाँच</h4>
                  <p className="text-base leading-relaxed bg-yellow-50 p-4 border rounded border-yellow-200 decoration-red-500 font-bold underline">लेटर पर बैंक की मुहर और मैनेजर के साइन अनिवार्य हैं। 'Full and Final Settlement' शब्द जरूर देखें।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 5: भुगतान का तरीका</h4>
                  <p className="text-base leading-relaxed italic font-bold">हमेशा 'One-Time Settlement' (OTS) को प्राथमिकता दें। यदि पैसे कम हैं, तो अधिकतम 3 किस्तों की मांग करें।</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 pb-8">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                  <h4 className="text-xl font-bold text-[#2E2E2E] mb-2 uppercase">चरण 6: सिबिल अपडेट और एनडीसी</h4>
                  <p className="text-base leading-relaxed">भुगतान के 45 दिनों के बाद बैंक से 'No Dues Certificate' (NDC) माँगें और सिबिल में स्थिति की जांच करें।</p>
                </div>
              </div>
            </section>

            <section id="hardship-docs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                जरूरी दस्तावेजों की सूची (Checklist)
              </h2>
              <p className="text-lg mb-6">बैंक को यह विश्वास दिलाने के लिए कि आप सही में मजबूर हैं, नीचे दिए गए दस्तावेज तैयार रखें:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**पिछले 6 महीने का बैंक स्टेटमेंट:** यह आपकी कम होती आय का प्रमाण होगा।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**ITR या सैलरी स्लिप:** यदि नौकरी गई है तो पुराने रिकॉर्ड और नया निल बैलेंस स्टेटमेंट।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 font-bold">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**मेडिकल रिपोर्ट्स:** यदि किसी गंभीर बीमारी के कारण किस्त रुकी है।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 underline">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm">**जॉब टर्मिनेशन लेटर:** छंटनी या इस्तीफा देने का आधिकारिक पत्र।</p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-4 italic md:col-span-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-sm text-blue-800">**महत्वपूर्ण:** बैंक के साथ हुए सभी ईमेल और पत्रों का रिकॉर्ड (Digital Trail) जरूर रखें।</p>
                </div>
              </div>
            </section>

            <section id="bank-nuances" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter">
                बैंक और NBFC में फर्क: कहाँ क्या उम्मीद करें?
              </h2>
              <div className="overflow-x-auto shadow-sm rounded-2xl">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#1F5EFF] text-white font-bold">
                      <th className="p-5">संस्थान का प्रकार</th>
                      <th className="p-5">सेटलमेंट प्रक्रिया</th>
                      <th className="p-5">रिकवरी का तरीका</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="p-5 font-bold">प्राइवेट बैंक (HDFC, ICICI, Axis)</td>
                      <td className="p-5">फास्ट ट्रैक, डिजिटल सेटलमेंट। डिस्काउंट औसत (40-50%)।</td>
                      <td className="p-5 font-medium">थर्ड पार्टी एजेंट काफी आक्रामक हो सकते हैं।</td>
                    </tr>
                    <tr className="border-b border-gray-100 italic bg-gray-50">
                      <td className="p-5 font-bold">सरकारी बैंक (SBI, PNB, BOB)</td>
                      <td className="p-5">थोड़ी धीमी, पर लोक अदालत में भारी छूट (60-80%) की संभावना।</td>
                      <td className="p-5">कानूनी नोटिस और लोक अदालत पर ज्यादा फोकस।</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-5 font-bold">NBFC (Bajaj, Kraft, Shriram)</td>
                      <td className="p-5">शुरुआत में सख्त, पर 2-3 साल पुराने बकाया पर अच्छी छूट दे देते हैं।</td>
                      <td className="p-5 text-red-600 font-bold underline">सबसे ज्यादा कॉल और व्यक्तिगत रिकवरी का प्रयास।</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="agent-handling" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                रिकवरी एजेंट और आपके अधिकार (2025)
              </h2>
              <ul className="space-y-4 text-base italic leading-relaxed">
                <li className="flex gap-3 items-center">
                  <span className="text-[#1F5EFF] font-bold underline">कॉल का समय:</span>
                  सुबह 8:00 बजे से शाम 7:00 बजे के बीच ही कॉल कर सकते हैं।
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-[#1F5EFF] font-bold underline">गोपनीयता:</span>
                  आपके रिश्तेदार या पड़ोसियों को लोन की जानकारी देना कानूनी रूप से गलत है।
                </li>
                <li className="flex gap-3 items-center font-bold">
                  <span className="text-[#1F5EFF] underline">पहचान पत्र:</span>
                  घर आने वाले एजेंट से आई-कार्ड (ID Card) माँगना आपका अधिकार है।
                </li>
              </ul>
              <div className="mt-8 bg-black text-white p-6 rounded-2xl text-center md:text-left">
                <p className="text-sm font-black border-l-4 border-[#1F5EFF] pl-4 uppercase tracking-widest leading-loose">
                  एसओएस (SOS): यदि कोई एजेंट बदतमीजी करे, तो तुरंत 'Banking Ombudsman' पोर्टल पर शिकायत करें। 2025 में डिजिटल साक्ष्य (Call Recording) अत्यंत महत्वपूर्ण हैं।
                </p>
              </div>
            </section>

            <section id="tax-impact" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight uppercase tracking-tighter decoration-red-500 underline">
                सेटलमेंट पर टैक्स: क्या आपको पता है?
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl italic">
                <p className="text-lg leading-relaxed mb-4">
                  अधिकांश लोग यह भूल जाते हैं कि बैंक द्वारा माफ की गई राशि (Principal + Interest Haircut) को आयकर विभाग **"आय (Income)"** मान सकता है।
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  <li>**बिज़नेस लोन:** यहाँ धारा 194R के तहत टैक्स की पेचीदगियाँ हो सकती हैं।</li>
                  <li>**पर्सनल लोन:** आमतौर पर, यदि तंगी का प्रमाण सही है, तो इस पर टैक्स छूट मिलने की संभावना रहती है, पर सीए (CA) से सलाह लेना उचित है।</li>
                  <li>**10(O) एंट्री:** आपकी बैलेंस शीट में इसे सही तरीके से दिखाना ज़रूरी है ताकि भविष्य में कोई नोटिस न आए।</li>
                </ul>
              </div>
            </section>

            <section id="cibil-recovery" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                सिबिल (CIBIL) सुधार प्लान: 12 महीने में
              </h2>
              <div className="space-y-4 text-left italic">
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-black flex-shrink-0">M1</div>
                  <p className="text-sm">नो ड्यूज सर्टिफिकेट (NDC) प्राप्त करें। सिबिल में 'Settled' और 'Zero Balance' चेक करें।</p>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-full bg-[#2E2E2E] text-white flex items-center justify-center font-black flex-shrink-0">M3</div>
                  <p className="text-sm">अपनी FD के बदले 'Secured Credit Card' लें। केवल अपनी लिमिट का 20% उपयोग करें और समय पर भरें।</p>
                </div>
                <div className="p-6 bg-[#1F5EFF] text-white rounded-xl flex gap-6 items-center font-bold">
                  <div className="w-16 h-16 rounded-full bg-white text-[#1F5EFF] flex items-center justify-center font-black flex-shrink-0">M12</div>
                  <p className="text-sm">12 महीने बाद आपका स्कोर 700 पार कर जाएगा। अब आप छोटे कंज्यूमर लोन के लिए पात्र होंगे।</p>
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
