"use client";

import { useState } from "react";
import { 
  LayoutGrid, 
  Plane, 
  Scale, 
  ChevronRight,
  Phone
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { BRAND, CONTACT } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function SitemapPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  // Exact arrays taken from the Footer component
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "#", isModal: true },
    { name: "Site Map", href: "/sitemap" },
  ];

  const legalLinks = [
    { name: "Terms & Condition", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Taxes and Fees", href: "/taxes-fees" },
  ];

  // Helper function to generate slug from airline name
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get top airlines from the airlinesDataMap - limit to 7 for display (same as footer)
  const allAirlines = Object.values(airlinesDataMap);
  const topAirlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name)
    .slice(0, 7)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  const handleLinkClick = (e: React.MouseEvent, linkName: string, isModal?: boolean) => {
    if (isModal) {
      e.preventDefault();
      setSelectedLink(linkName);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="transition-colors" style={{ color: '#274e13' }}>
              Home
            </Link>
            <span className="text-[#1a330d]/30">›</span>
            <span className="text-[#1a330d]/60">Sitemap</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                Sitemap
              </h1>
              <p className="text-sm mt-2 leading-relaxed text-justify" style={{ color: '#1a330d/60' }}>
                Welcome to {BRAND.name}. This sitemap provides a comprehensive 
                overview of all the main pages, legal policies, and airline partners available 
                on our website to help you navigate our services.
              </p>
              <div 
                className="w-12 h-1 rounded-full mt-3"
                style={{
                  background: `linear-gradient(to right, #274e13, #3a6e1a)`
                }}
              />
            </div>

            {/* Sitemap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Quick Links Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f0e3' }}
                  >
                    <LayoutGrid size={16} style={{ color: '#274e13' }} />
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: '#1a330d' }}>Quick Links</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 pl-4" style={{ borderColor: '#e8f0e3' }}>
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.name, true)}
                          className="flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer group"
                          style={{ color: '#1a330d/60' }}
                        >
                          <ChevronRight 
                            size={14} 
                            className="transition-colors flex-shrink-0"
                            style={{ color: '#274e13/40' }}
                          />
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      ) : link.name === "Home" ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer group"
                          style={{ color: '#1a330d/60' }}
                        >
                          <ChevronRight 
                            size={14} 
                            className="transition-colors flex-shrink-0"
                            style={{ color: '#274e13/40' }}
                          />
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                          style={{ color: '#1a330d/60' }}
                        >
                          <ChevronRight 
                            size={14} 
                            className="transition-colors flex-shrink-0"
                            style={{ color: '#274e13/40' }}
                          />
                          <span className="group-hover:underline">{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Airlines Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f0e3' }}
                  >
                    <Plane size={16} style={{ color: '#274e13' }} />
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: '#1a330d' }}>Top Airlines</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 pl-4" style={{ borderColor: '#e8f0e3' }}>
                  {topAirlines.map((airline) => (
                    <li key={airline.name}>
                      <Link
                        href={`/airlines/${airline.slug}`}
                        className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                        style={{ color: '#1a330d/60' }}
                      >
                        <ChevronRight 
                          size={14} 
                          className="transition-colors flex-shrink-0"
                          style={{ color: '#274e13/40' }}
                        />
                        <span className="group-hover:underline">{airline.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links Column */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f0e3' }}
                  >
                    <Scale size={16} style={{ color: '#274e13' }} />
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: '#1a330d' }}>Legal & Policies</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 pl-4" style={{ borderColor: '#e8f0e3' }}>
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                        style={{ color: '#1a330d/60' }}
                      >
                        <ChevronRight 
                          size={14} 
                          className="transition-colors flex-shrink-0"
                          style={{ color: '#274e13/40' }}
                        />
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div 
              className="mt-10 p-6 rounded-lg text-white"
              style={{
                background: `linear-gradient(to right, #274e13, #3a6e1a)`
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-sm mb-4 !text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and any questions you may have.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                style={{
                  backgroundColor: '#f5f8f3',
                  color: '#274e13',
                }}
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}