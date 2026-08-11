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
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Helper function to generate slug from airline name - with safety check
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get top airlines from the airlinesDataMap - limit to 7 for display
  const allAirlines = Object.values(airlinesDataMap);
  const topAirlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name) // Filter out any with undefined name
    .slice(0, 7)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    setSelectedLink(linkName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer className="text-[#1a330d]/80" style={{ backgroundColor: '#f5f8f3' }}>
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
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
                  <h2 className="text-xl font-bold tracking-wide font-heading italic" style={{ color: '#1a330d' }}>
                    {BRAND.name}
                  </h2>
                  <p className="text-xs font-medium tracking-wider uppercase" style={{ color: '#274e13' }}>
                    {BRAND.tagline || "Travel Assistance"}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: '#1a330d99' }}>
                Your trusted partner for unforgettable travel experiences across the world. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#1a330d99' }}>
                <div className="flex items-center gap-1">
                  <Award size={14} style={{ color: '#274e13' }} />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} style={{ color: '#274e13' }} />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#1a330d' }}>
                Quick Links
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #274e13, #ffffff)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.name)}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                      style={{ color: '#1a330d99' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#274e1366',
                        }}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Airlines */}
            <div>
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#1a330d' }}>
                Top Airlines
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #274e13, #ffffff)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                      style={{ color: '#1a330d99' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#274e1366',
                        }}
                      />
                      {airline.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#1a330d' }}>
                Contact Us
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #274e13, #ffffff)`
                  }}
                />
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#1a330d99' }}>
                  <Phone size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#274e13' }} />
                  <span>{CONTACT.phone || "+1 (855) 467-8570"}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#1a330d99' }}>
                  <Mail size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#274e13' }} />
                  <span>{COMPANY.email || "support@tickettoafrica.com"}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#1a330d99' }}>
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#274e13' }} />
                  <span>{COMPANY.address || "Addis Ababa, Ethiopia"}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#1a330d99' }}>
                  <Clock size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#274e13' }} />
                  <span>{CONTACT.supportHours || "24/7 Support"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#274e131A' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-base" style={{ color: '#1a330d' }}>
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm" style={{ color: '#1a330d40' }}>
                  Get the best travel deals straight to your inbox
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border rounded-l-full focus:outline-none transition-colors text-sm"
                  style={{
                    borderColor: '#274e1333',
                    color: '#1a330d',
                  }}
                />
                <button 
                  className="px-5 py-2.5 text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #274e13, #3a6e1a)`,
                    boxShadow: `0 10px 15px -3px #274e1333`
                  }}
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: '#274e131A', backgroundColor: '#f5f8f3CC' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#1a330d40' }}>
              <p>
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="transition-colors" style={{ color: '#1a330d40' }}>
                  Privacy Policy
                </a>
                <span className="w-px h-3" style={{ backgroundColor: '#274e131A' }} />
                <a href="#" className="transition-colors" style={{ color: '#1a330d40' }}>
                  Terms of Service
                </a>
                <span className="w-px h-3" style={{ backgroundColor: '#274e131A' }} />
                <a href="#" className="transition-colors" style={{ color: '#1a330d40' }}>
                  Cookie Policy
                </a>
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