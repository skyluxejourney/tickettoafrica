"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import { Phone, Headphones } from "lucide-react";
import { BRAND } from "@/app/constants";
import type { AirlineData } from "../constants";

interface AirlineHeroProps {
  airline: AirlineData;
}

export default function AirlineHero({ airline }: AirlineHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract airline name from the data
  const airlineName = airline.airline.name;
  
  // Split the title to highlight the airline name
  const titleParts = airline.hero.title.split(airlineName);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image - Flight with Green & White Theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroback.jpg"
          alt={`${airlineName} flights - Ticket To Africa`}
          fill
          className="object-cover object-center brightness-[0.9] contrast-[1.05] scale-105 transition-transform duration-[2s] ease-out"
          priority
          quality={100}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 13% Green Tint on Left Side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#274e13]/20 to-transparent" />
      </div>

      {/* Decorative Accent Line - Top */}
      <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-[#274e13] via-white to-[#e8f0e3]" />

      {/* Content - Left Aligned & Full Width */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full text-left">
          <h1 
            className={`mb-4 sm:mb-5 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {titleParts.length > 1 ? (
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)]">
                {titleParts[0]}
                <span 
                  className="italic bg-gradient-to-r from-[#e8f0e3] via-white to-[#d4aa2a] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,170,42,0.15)]"
                >
                  {airlineName}
                </span>
                {titleParts[1]}
              </span>
            ) : (
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)]">
                {airline.hero.title}
              </span>
            )}
          </h1>

          <p 
            className={`text-white/80 italic text-sm sm:text-base md:text-lg w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed max-w-none drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            Ticket To Africa is an independent travel agency. Our agents can help you understand {airlineName} Airlines&apos; published change, cancellation, name-correction, and upgrade policies so you can decide on the right next step for your trip.
          </p>

          {/* Search Engine Component */}
          <div 
            className={`relative z-20 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Decorative Accent Line - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gradient-to-r from-[#e8f0e3] via-white to-[#274e13]" />

      {/* Professional Floating Call Widget - Fixed hover behavior and pointer events */}
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
                {airline.hero.ctaPhone}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button */}
        <a
          href={`tel:${airline.hero.ctaPhone}`}
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