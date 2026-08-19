// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import TravelDeals from "@/components/TravelDeals";
import ExclusiveDeals from "@/components/ExclusiveDeals";
import Whypaymore from "@/components/Whypaymoresection";
import { COMPANY, CONTACT } from "./constants";


const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": COMPANY.name,
  "url": `https://${COMPANY.domain}`,
  "logo": `https://${COMPANY.domain}/logo/tikiticket.png`,
  "description": "Book cheap flights, luxury hotels, and customized safari packages to Africa. Best deals on Cape Town, Nairobi, Cairo, Marrakech & more.",
  "email": CONTACT.email,
  "telephone": CONTACT.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110075",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT.phone,
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "opens": "00:00",
      "closes": "23:59",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ]
    }
  },
  "priceRange": "$$",
  "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer"],
  "currenciesAccepted": ["USD", "INR", "EUR"],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ✅ HOMEPAGE SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        />
        <Hero />
        <WhyChooseUs />
        <TravelDeals />
        <ExclusiveDeals />
        <Whypaymore />
      </main>
      <Footer />
    </>
  );
}