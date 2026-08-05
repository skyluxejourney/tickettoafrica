"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  PhoneCall,
  Phone,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

const navItems = [
  { name: "FLIGHTS", isActive: true },
  { name: "LIVE HELP?" },
  { name: "BLOG" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; isActive?: boolean }) => {
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
          fixed top-2 left-0 w-full z-50 px-3 sm:px-6
          transition-all duration-500 ease-in-out
          ${scrolled ? "pt-0.5 sm:pt-1" : "pt-1 sm:pt-2"}
        `}
      >
        <div
          className={`
          max-w-7xl mx-auto rounded-2xl xl:rounded-full border transition-all duration-500 ease-in-out
            ${
              scrolled
                ? "border-white/30 bg-white/95 backdrop-blur-xl shadow-2xl py-0"
                : "border-white/20 bg-white/80 backdrop-blur-xl shadow-lg"
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between px-2 sm:px-4 md:px-6
              transition-all duration-500 ease-in-out
              ${scrolled ? "py-1 sm:py-1.5" : "py-1.5 sm:py-2"}
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={scrolled ? 32 : 36}
                  height={scrolled ? 32 : 48}
                  className="transition-all duration-500 group-hover:scale-105 group-hover:rotate-6"
                  priority
                />
              </div>

              <div>
                <h1
                  className={`
                    font-heading
                    font-bold
                    italic
                    tracking-tight
                    leading-tight
                    transition-all duration-500 ease-in-out
                    relative
                    ${scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"}
                  `}
                  style={{ color: '#274e13' }}
                >
                  {BRAND.name}
                </h1>
                <p
                  className={`
                    font-body
                    leading-tight
                    font-medium
                    tracking-[0.15em] sm:tracking-[0.2em]
                    uppercase
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}
                  `}
                  style={{ color: '#3a6e1a' }}
                >
                  {BRAND.tagline}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center justify-center flex-1 gap-1.5 lg:gap-3 xl:gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`
                    group
                    flex items-center
                    font-body
                    font-medium
                    transition-all
                    duration-200
                    px-1.5 lg:px-2.5
                    py-1
                    rounded-full
                    ${scrolled ? "text-[7px] lg:text-[8px] xl:text-[10px]" : "text-[8px] lg:text-[9px] xl:text-[12px]"}
                    tracking-wider
                    relative
                    ${
                      item.isActive
                        ? "bg-[#e8f0e3]"
                        : "hover:bg-[#e8f0e3]"
                    }
                  `}
                  style={{
                    color: item.isActive ? '#274e13' : '#1a330d',
                  }}
                >
                  {item.name}
                  {item.isActive && (
                    <span 
                      className="absolute inset-x-2 -bottom-0.5 h-0.5"
                      style={{
                        background: `linear-gradient(to right, #274e13, #ffffff)`
                      }}
                    />
                  )}
                  {!item.isActive && (
                    <span 
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                      style={{
                        background: `linear-gradient(to right, #274e13, #ffffff)`
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE - Call Only Deals - BIGGER & MORE PROMINENT */}
            <div className="hidden xl:flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={`
                  flex items-center gap-2 sm:gap-3 md:gap-4
                  transition-all duration-300
                  rounded-full
                  border-2
                  ${scrolled ? "px-3 sm:px-4 py-1 sm:py-1.5" : "px-4 sm:px-5 py-1.5 sm:py-2"}
                  cursor-pointer
                  hover:scale-105 active:scale-95
                  group
                  shadow-lg
                `}
                style={{
                  background: `linear-gradient(to right, #1a330d, #274e13)`,
                  borderColor: '#3a6e1a4D',
                  boxShadow: `0 10px 15px -3px #274e1333`
                }}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(to bottom right, #ffffff, #3a6e1a)`
                    }}
                  >
                    <Phone
                      size={scrolled ? 14 : 16}
                      className="text-white sm:w-4 sm:h-4"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span
                    className={`
                      font-body
                      font-bold
                      text-white/80
                      transition-all duration-300
                      ${scrolled ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]"}
                      uppercase tracking-wider
                    `}
                  >
                    Call Only Deals
                  </span>
                  <span
                    className={`
                      font-body
                      font-bold
                      transition-all duration-300
                      ${scrolled ? "text-[10px] sm:text-[12px]" : "text-[12px] sm:text-[14px]"}
                    `}
                    style={{ color: '#ffffff' }}
                  >
                    {CONTACT.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* MOBILE/TABLET BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                xl:hidden
                transition-colors
                p-1
                rounded-full
                flex-shrink-0
              "
              style={{ color: '#1a330d' }}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                xl:hidden
                px-4 sm:px-6
                pb-4 sm:pb-6
                space-y-1
                animate-in
                slide-in-from-top-2
                duration-200
              "
            >
              <div className="pt-2 border-t" style={{ borderColor: '#e8f0e3' }}>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                    }}
                    className={`
                      w-full
                      flex items-center gap-3
                      transition-all
                      duration-200
                      px-3 py-2.5 sm:py-3
                      rounded-xl
                      font-body
                      text-xs sm:text-sm
                      font-semibold
                      tracking-wider
                      ${
                        item.isActive
                          ? "bg-[#e8f0e3]"
                          : "hover:bg-[#e8f0e3]"
                      }
                    `}
                    style={{
                      color: item.isActive ? '#274e13' : '#1a330d',
                    }}
                  >
                    {item.name}
                    {item.isActive && (
                      <span 
                        className="ml-auto w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#274e13' }}
                      />
                    )}
                  </button>
                ))}
                
                <div className="mt-3 pt-3 border-t" style={{ borderColor: '#e8f0e3' }}>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 border"
                    style={{
                      background: `linear-gradient(to right, #1a330d, #274e13)`,
                      borderColor: '#3a6e1a33'
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(to bottom right, #ffffff, #3a6e1a)`
                      }}
                    >
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-medium text-white/60">
                        Call Only Deals
                      </p>
                      <p 
                        className="font-body text-xs font-bold"
                        style={{ color: '#ffffff' }}
                      >
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