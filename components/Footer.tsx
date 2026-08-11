"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

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

  const topAirlines = [
    { name: "Ethiopian Airlines", slug: "ethiopian-airlines" },
    { name: "EgyptAir", slug: "egyptair" },
  ];

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
      <footer className="bg-[#f5f8f3] text-[#1a330d]/80">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
            {/* Brand & About */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo/tikiticket.png"
                    alt={BRAND.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1a330d] tracking-wide font-heading italic">
                    {BRAND.name}
                  </h2>
                  <p className="text-xs text-[#274e13] font-medium tracking-wider uppercase">
                    {BRAND.tagline || "Travel Assistance"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#1a330d]/60 leading-relaxed mb-4 max-w-xs">
                Your trusted partner for unforgettable travel experiences across Africa. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#1a330d]/60">
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-[#274e13]" />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} className="text-[#274e13]" />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#1a330d] font-semibold text-lg mb-4 relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.isModal ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.name, true)}
                        className="text-sm text-[#1a330d]/60 hover:text-[#274e13] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1 h-1 bg-[#274e13]/40 rounded-full group-hover:bg-[#274e13] transition-colors" />
                        {link.name}
                      </a>
                    ) : link.name === "Home" ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-sm text-[#1a330d]/60 hover:text-[#274e13] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1 h-1 bg-[#274e13]/40 rounded-full group-hover:bg-[#274e13] transition-colors" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#1a330d]/60 hover:text-[#274e13] transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#274e13]/40 rounded-full group-hover:bg-[#274e13] transition-colors" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Airlines */}
            <div>
              <h3 className="text-[#1a330d] font-semibold text-lg mb-4 relative">
                Top Airlines
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm text-[#1a330d]/60 hover:text-[#274e13] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#274e13]/40 rounded-full group-hover:bg-[#274e13] transition-colors" />
                      {airline.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-[#1a330d] font-semibold text-lg mb-4 relative">
                Legal Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#1a330d]/60 hover:text-[#274e13] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#274e13]/40 rounded-full group-hover:bg-[#274e13] transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
{/* Newsletter Section */}
<div className="mt-12 pt-8 border-t border-[#274e13]/10">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div>
      <h4 className="text-[#1a330d] font-semibold text-base">
        Subscribe to Our Newsletter
      </h4>
      <p className="text-sm text-[#1a330d]/40">
        Get the best travel deals straight to your inbox
      </p>
    </div>
    <div className="flex w-full sm:w-auto flex-col xs:flex-row sm:flex-row gap-2 sm:gap-0">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border border-[#274e13]/20 rounded-lg sm:rounded-l-full sm:rounded-r-none text-[#1a330d] placeholder-[#1a330d]/30 focus:outline-none focus:border-[#274e13] transition-colors text-sm w-full sm:w-auto"
      />
      <button className="px-5 py-2.5 bg-gradient-to-r from-[#274e13] to-[#3a6e1a] hover:from-[#3a6e1a] hover:to-[#4a8a2a] text-white rounded-lg sm:rounded-r-full sm:rounded-l-none font-semibold transition-all duration-300 flex items-center justify-center sm:justify-center gap-2 text-sm whitespace-nowrap shadow-lg shadow-[#274e13]/20 w-full sm:w-auto">
        <Send size={14} />
        Subscribe
      </button>
    </div>
  </div>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#274e13]/10 bg-[#f5f8f3]/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1a330d]/40">
              <p>
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-[#274e13] transition-colors">
                  Privacy Policy
                </Link>
                <span className="w-px h-3 bg-[#274e13]/10" />
                <Link href="/terms-of-service" className="hover:text-[#274e13] transition-colors">
                  Terms of Service
                </Link>
                <span className="w-px h-3 bg-[#274e13]/10" />
                <Link href="/cookies" className="hover:text-[#274e13] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}