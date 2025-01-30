
// export default Website
import React from 'react';
// import Header from '../components/Header/Nav';
import LandingPage from '../components/Video';
import HowItWorks from '../components/FeaturesProcess';
import BeautifulWorks from '../section/BeautifulWorks';
import Footer from '../components/Footer';
import Faq from '../components/FAQ';
import ScrollToTop from '../components/ScrollToTop';
import CTA from '../components/About/CTA';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing/Price';
import Header from '../components/Header';
import { Helmet } from 'react-helmet-async';


function Website() {
    return (
      <>
        <Helmet>
          {/* Balises pour SEO */}
          <title>DocxTalk - Simplify your administrative documents</title>
          <meta
            name="description"
            content="DocxTalk is your SaaS solution to easily generate, manage and send your administrative documents and automate your business. Try it for free today!"
          />
          
          {/* Balises Open Graph */}
          <meta property="og:title" content="DocxTalk - Simplify your administrative documents" />
          <meta 
            property="og:description" 
            content="DocxTalk is your SaaS solution to easily generate, manage and send your administrative documents and automate your business. Try it for free today!" 
          />
          <meta property="og:image" content="https://docxtalks.com/app/UntitledDocxtalk-removebg-preview.png" />
          <meta property="og:image:alt" content="Logo of DocxTalk" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://docxtalks.com/" />
          <meta property="og:type" content="website" />

          {/* JSON-LD pour le logo */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "DocxTalk",
                "url": "https://docxtalks.com",
                "logo": "https://docxtalks.com/app/UntitledDocxtalk-removebg-preview.png",
                "sameAs": [
                  "https://www.linkedin.com/company/docxtalks",
                  "https://twitter.com/docxtalks"
                ]
              }
            `}
          </script>
        </Helmet>

        <Header />
        <LandingPage id="landingPage" />
        <HowItWorks id="howItWorks" />
        <BeautifulWorks id="beautifulWorks" />
        <Pricing id="pricing" />
        <Faq id="faq" />
        <Contact id="contact" />
        <CTA />
        <Footer />
      </>
    );
  }
  
  export default Website;
  