"use client";

import { useState } from "react";
import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones } from "lucide-react";
import heroBanner from "@/public/images/backhero.jpg";
import { BRAND, CONTACT } from "@/app/constants";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backhero.jpg"
          alt="Ticket to Africa - Travel Experiences"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Clean Dark Overlay - No Bluish Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 13% Green Tint on Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#274e13]/20 to-transparent" />
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyei0xMiA0YzAgMS4xLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyeiIvPjwvZz48L3N2Zz4=')]" />

      {/* Decorative Accent Line - Top */}
      <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-[#274e13] via-white to-[#e8f0e3]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Two Lines Only */}
          <h1 className="max-w-4xl mx-auto mb-3 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)]">
              Discover the World's
            </span>
            <span className="relative inline-block">
              <span 
                className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text leading-[1.1] tracking-tight italic drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]"
                style={{
                  background: `linear-gradient(to right, #e8f0e3, #ffffff, #d4aa2a)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Best Travel Experiences
              </span>
              <span 
                className="absolute -bottom-0.5 left-0 w-full h-1 rounded-full blur-sm"
                style={{
                  background: `linear-gradient(to right, #ffffff80, #274e131A)`
                }}
              />
            </span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-light tracking-wide leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Curated luxury journeys to the most breathtaking destinations.
            <br className="hidden sm:block" />
            Let us craft your perfect escape.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20">
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Decorative Accent Line - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-[#e8f0e3] via-white to-[#274e13]" />

      {/* Scroll Indicator - Positioned at bottom of section */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors cursor-pointer z-10"
        style={{ color: '#ffffff80' }}
      >
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div 
            className="w-0.5 h-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#ffffff' }}
          />
        </div>
      </div>

      {/* Professional Floating Call Widget - Fixed pointer events */}
      <div 
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
        style={{ pointerEvents: 'none' }}
      >
        {/* Chat Card - Only appears when hovering the button directly */}
        <div
          className={`
            hidden sm:block
            w-[260px]
            rounded-sm
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(39,78,19,0.18)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform
            ${isHovered 
              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }
          `}
        >
          <div className="flex items-start gap-3">
            {/* Support Icon */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f0e3] transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-[#274e13]/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-[#274e13] transition-transform duration-300 group-hover:rotate-12" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  24/7 Call Assistance
                </p>
              </div>
              <p className="text-base font-bold text-gray-900 transition-colors duration-300">
                {CONTACT.phone}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_12px_32px_rgba(39,78,19,0.45)] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:shadow-[0_20px_45px_rgba(39,78,19,0.55)] focus:outline-none focus:ring-4 focus:ring-[#274e13]/30 active:scale-95 will-change-transform bg-gradient-to-r from-[#274e13] to-[#3a7520]"
          style={{ pointerEvents: 'auto' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave Rings */}
          <span className="absolute inset-0 rounded-full border-2 border-[#274e13]/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-[#274e13]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-[#274e13]/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          {/* Inner Circle */}
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#274e13]/0 to-[#3a7520]/0 group-hover:from-[#274e13]/30 group-hover:to-[#3a7520]/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}