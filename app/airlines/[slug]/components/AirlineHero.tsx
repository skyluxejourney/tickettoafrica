"use client";

import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import heroImage from "@/public/images/skyluxe-hero-banner.jpg";
import { BRAND } from "@/app/constants";

interface AirlineHeroProps {
  airlineName: string;
}

export default function AirlineHero({ airlineName }: AirlineHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image - Flight with Green & White Theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroback.jpg"
          alt={`${airlineName} flights - ${BRAND.name}`}
          fill
          className="object-cover object-center brightness-[0.9] contrast-[1.05]"
          priority
          quality={100}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* 13% Green Tint on Left Side */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, #274e1321, transparent 40%)`
          }}
        />
      </div>

      {/* Decorative Accent Line - Top */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #274e13, #ffffff, #e8f0e3)`
        }}
      />

      {/* Content - Left Aligned & Full Width */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full text-left">
          <h1 className="mb-4 sm:mb-5">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight" style={{
              textShadow: '0 2px 30px rgba(0,0,0,0.5), 0 4px 50px rgba(0,0,0,0.3)'
            }}>
              Need Help With a{" "}
              <span 
                className="text-transparent bg-clip-text italic whitespace-nowrap"
                style={{
                  background: `linear-gradient(to right, #e8f0e3, #ffffff, #d4aa2a)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(212, 170, 42, 0.15)'
                }}
              >
                {airlineName}
              </span>
              <span className="text-white"> Airlines</span>
              <br />
              <span className="text-white">Change, Cancellation & Upgrades?</span>
            </span>
          </h1>

          <p className="text-white/80 text-sm sm:text-base md:text-lg w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed max-w-none" style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.4)'
          }}>
            {BRAND.name} is an independent travel agency. Our agents can help you understand {airlineName} Airlines' published change, cancellation, name-correction, and upgrade policies so you can decide on the right next step for your trip.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20">
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Decorative Accent Line - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #e8f0e3, #ffffff, #274e13)`
        }}
      />
    </section>
  );
}