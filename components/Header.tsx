"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

const navItems = [
  { name: "FLIGHTS", isActive: true },
  { name: "LIVE HELP?" },
  { name: "CONTACT US", isContact: true, path: "/contact" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; isActive?: boolean; isContact?: boolean; path?: string }) => {
    // If it's the Contact Us link, let it navigate normally
    if (item.isContact) {
      return;
    }
    
    if (item.isActive) {
      return;
    }
    
    setSelectedTab(item.name);
    setShowModal(true);
    
    if (open) {
      setOpen(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTab("");
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 px-4 sm:px-6
          transition-all duration-700 ease-out
          ${scrolled ? "pt-1" : "pt-4"}
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        `}
      >
        <div
          className={`
            max-w-[90vw] mx-auto rounded-lg border transition-all duration-500 ease-in-out
            ${scrolled
              ? "border-[#E2E8F0] bg-white shadow-lg"
              : "border-[#E2E8F0] bg-white shadow-md"
            }
            hover:shadow-xl transition-shadow duration-300
          `}
        >
          <div
            className={`
              flex items-center justify-between px-3 sm:px-4 md:px-5
              transition-all duration-500 ease-in-out
              ${scrolled ? "py-1.5" : "py-2"}
            `}
          >
            {/* LOGO - Ticket To Africa with Homepage Link */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={scrolled ? 30 : 34}
                  height={scrolled ? 30 : 34}
                  className="transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
                  priority
                />
              </div>

              <div>
                <h1
                  className={`
                    font-bold
                    text-[#1a330d]
                    italic
                    tracking-tight
                    leading-tight
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-sm" : "text-base"}
                    group-hover:text-[#274e13] transition-colors duration-300
                  `}
                >
                  {BRAND.name}
                </h1>
                <p
                  className={`
                    text-[#3a6e1a]
                    leading-tight
                    font-medium
                    tracking-[0.15em]
                    uppercase
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-[6px]" : "text-[7px]"}
                  `}
                >
                  {BRAND.tagline}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-2 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path || "#"}
                  onClick={() => handleNavClick(item)}
                  className={`
                    relative
                    font-medium
                    transition-all
                    duration-300
                    px-2.5
                    py-1.5
                    text-xs
                    tracking-wider
                    ${item.isActive
                      ? "text-[#274e13] cursor-default"
                      : "text-[#1a330d]/70 hover:text-[#274e13]"
                    }
                    hover:scale-105 active:scale-95
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                    ${item.isContact ? "cursor-pointer" : "cursor-pointer"}
                  `}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  {item.isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] rounded-full animate-pulse" />
                  )}
                  {!item.isActive && !item.isContact && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  )}
                  {item.isContact && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#274e13] to-[#ffffff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* RIGHT SIDE - Call Only Deals */}
            <div className="hidden lg:flex items-center">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={`
                  flex items-center gap-2
                  bg-gradient-to-r from-[#1a330d] to-[#274e13]
                  hover:from-[#274e13] hover:to-[#3a6e1a]
                  transition-all duration-300
                  rounded-lg
                  px-3 py-1.5
                  cursor-pointer
                  hover:scale-105 active:scale-95
                  shadow-md
                  hover:shadow-lg
                  group
                  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                `}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <Phone size={12} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[7px] font-bold text-white/70 tracking-[0.1em] uppercase">
                    Call Only Deals
                  </span>
                  <span className="text-[10px] font-bold text-white transition-colors duration-300 group-hover:text-[#e8f0e3]">
                    {CONTACT.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* MOBILE/TABLET BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden
                text-[#1a330d]
                hover:text-[#274e13]
                transition-all
                duration-300
                p-1.5
                rounded-lg
                hover:bg-[#e8f0e3]
                flex-shrink-0
                hover:scale-110 active:scale-90
              "
              aria-label="Toggle menu"
            >
              {open ? (
                <X size={20} className="animate-in spin-in duration-300" />
              ) : (
                <Menu size={20} className="animate-in slide-in-from-left duration-300" />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                lg:hidden
                px-4 sm:px-6
                pb-4
                space-y-1
                animate-in
                slide-in-from-top-2
                duration-300
                fade-in
              "
            >
              <div className="pt-2 border-t border-[#e8f0e3]">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.path || "#"}
                    onClick={() => {
                      if (item.isContact) {
                        setOpen(false);
                        return;
                      }
                      handleNavClick(item);
                    }}
                    className={`
                      w-full
                      flex items-center justify-between
                      transition-all
                      duration-300
                      px-3 py-2.5
                      rounded-lg
                      text-sm
                      font-medium
                      tracking-wider
                      ${item.isActive
                        ? "text-[#274e13] bg-[#e8f0e3] cursor-default"
                        : "text-[#1a330d]/70 hover:text-[#274e13] hover:bg-[#e8f0e3]"
                      }
                      hover:scale-[1.02] active:scale-95
                      animate-in slide-in-from-left duration-300
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{item.name}</span>
                    {item.isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#274e13] animate-pulse" />
                    )}
                  </Link>
                ))}
                
                <div className="mt-3 pt-3 border-t border-[#e8f0e3]">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#1a330d] to-[#274e13] rounded-lg px-4 py-3 hover:from-[#274e13] hover:to-[#3a6e1a] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white/30">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-white/70 tracking-[0.1em] uppercase">
                        Call Only Deals
                      </p>
                      <p className="text-xs font-bold text-white">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedTab}
      />
    </>
  );
}