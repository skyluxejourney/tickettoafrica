"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { CONTACT } from "../app/constants";

type Slide = {
  id: number;
  type: "image" | "video";
  src: string;
};

const slides: Slide[] = [
  { id: 0, type: "video", src: "/videos/slide-1.mp4" },
  { id: 1, type: "image", src: "/images/slide-africa-1.jpg" },
  { id: 2, type: "image", src: "/images/slide_africa_2.jpg" },
  { id: 3, type: "image", src: "/images/slide-africaa-3.jpg" },
];

// Content for each slide – first one is the original
const slideContent = [
  {
    before: "Find Your",
    highlight: "African Adventure",
    subtitle:
      "Discover the magic of Africa with journeys that turn your travel dreams into reality. Let us craft your perfect safari escape.",
  },
  {
    before: "Explore the",
    highlight: "Untamed Wild",
    subtitle:
      "Journey through breathtaking landscapes and encounter majestic wildlife in their natural habitat. Your ultimate safari awaits.",
  },
  {
    before: "Discover",
    highlight: "Rich Cultures",
    subtitle:
      "Immerse yourself in the vibrant traditions and warm hospitality of Africa's diverse communities. Experience the heartbeat of the continent.",
  },
  {
    before: "Experience",
    highlight: "Luxury Safari",
    subtitle:
      "Indulge in world-class accommodations and exclusive experiences, from private game drives to starlit dinners in the bush.",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the auto‑advance timer
  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
  }, []);

  // Start auto‑advance on mount
  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoAdvance]);

  // Play/pause video when slide changes
  useEffect(() => {
    slides.forEach((slide, index) => {
      const video = videoRefs.current[index];
      if (!video) return;
      if (index === currentSlide && slide.type === "video") {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  // Initial fade‑in
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Navigate to a specific slide – clears and restarts the timer
  const goToSlide = useCallback(
    (index: number) => {
      // Clear the existing timer
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // Set the new slide
      setCurrentSlide((index + slides.length) % slides.length);
      // Restart the timer after a short delay to avoid race conditions
      setTimeout(() => {
        startAutoAdvance();
      }, 100);
    },
    [startAutoAdvance]
  );

  return (
    <section
      className="
        relative
        h-[75vh]
        lg:h-[75vh]
        flex items-center
        overflow-visible
        pt-20 sm:pt-24
        pb-0

        /* Mobile */
        max-lg:h-[560px]

        /* Tablet */
        sm:max-lg:h-[600px]
      "
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={slide.src}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={slide.src}
                alt={`Hero slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={100}
              />
            )}
          </div>
        ))}

        {/* Global dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />

        {/* Mobile overlays */}
        <div className="absolute inset-0 max-lg:bg-black/10 pointer-events-none z-10" />
        <div className="absolute inset-0 max-lg:bg-gradient-to-t max-lg:from-black/10 max-lg:via-black/40 max-lg:to-black/50 pointer-events-none z-10" />
        <div className="absolute inset-0 max-lg:bg-black/30 pointer-events-none z-10" />

        {/* Left/Right Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToSlide(currentSlide - 1);
          }}
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            bg-black/20 hover:bg-black/40 text-white
            rounded-full p-2 transition-all duration-300
            backdrop-blur-sm border border-white/20
            hover:scale-110 pointer-events-auto
          "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToSlide(currentSlide + 1);
          }}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-20
            bg-black/20 hover:bg-black/40 text-white
            rounded-full p-2 transition-all duration-300
            backdrop-blur-sm border border-white/20
            hover:scale-110 pointer-events-auto
          "
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyei0xMiA0YzAgMS4xLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyeiIvPjwvZz48L3N2Zz4=')] pointer-events-none" />

      {/* Content – dynamically updated per slide */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-8

          /* Mobile + Tablet positioning */
          max-lg:self-start
          max-lg:pt-16

          /* Tablet slightly lower */
          sm:max-lg:pt-20
        "
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            {/* Main Heading with dynamic text */}
            <h1
              className={`mb-3 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                {slideContent[currentSlide].before}{" "}
                <span
                  className="font-bold text-transparent bg-clip-text italic drop-shadow-[0_2px_25px_rgba(0,0,0,0.4)]"
                  style={{
                    background:
                      "linear-gradient(to right, #e8f0e3, #ffffff, #d4aa2a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {slideContent[currentSlide].highlight}
                </span>
              </span>

              <span
                className="block w-24 h-0.5 rounded-full blur-sm mx-auto mt-2"
                style={{
                  background:
                    "linear-gradient(to right, #e8f0e380, #ffffff1A)",
                }}
              />
            </h1>

            {/* Subtitle with dynamic text */}
            <p
              className={`text-white/90 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-0 font-light tracking-wide leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.4)] transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {slideContent[currentSlide].subtitle}
              <br className="hidden sm:block" />
            </p>
          </div>
        </div>
      </div>

      {/* Search Engine Component (unchanged) */}
      <div
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          z-30
          w-full
          max-w-7xl
          px-4 sm:px-6 lg:px-8

          /* Desktop - unchanged */
          lg:bottom-0
          lg:translate-y-1/2

          /* Mobile + Tablet */
          max-lg:bottom-0
          max-lg:translate-y-[45%]

          transition-all
          duration-1000
          ease-out
          delay-300

          ${
            isVisible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div className="">
          <SearchEngine />
        </div>
      </div>

      {/* Scroll Indicator (unchanged) */}
      <div
        className="
          absolute
          bottom-2
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-1.5
          transition-colors
          cursor-pointer
          z-10
        "
        style={{ color: "#e8f0e380" }}
      >
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div
            className="w-0.5 h-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: "#e8f0e3" }}
          />
        </div>
      </div>

      {/* Professional Floating Call Widget (unchanged) */}
      <div
        className="
          fixed
          bottom-5
          right-4
          sm:bottom-6
          sm:right-6
          z-50
          flex
          items-center
          gap-3
        "
        style={{ pointerEvents: "none" }}
      >
        {/* Chat Card (unchanged) */}
        <div
          className={`
            hidden sm:block
            w-[260px]
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(39,78,19,0.18)]
            transition-all duration-400
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform

            ${
              isHovered
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-4 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="flex items-start gap-3">
            {/* Headphone Icon (unchanged) */}
            <div
              className="
                relative
                mt-0.5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#e8f0e3]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <span className="absolute inset-0 rounded-full bg-[#274e13]/20 animate-ping"></span>

              <Headphones
                className="
                  relative
                  z-10
                  h-5
                  w-5
                  text-[#274e13]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />
            </div>

            {/* Support Information (unchanged) */}
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

              <p className="text-base font-bold text-gray-900 group-hover:text-[#274e13] transition-colors duration-300">
                {CONTACT.phone}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button (unchanged) */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            text-white
            shadow-[0_12px_32px_rgba(39,78,19,0.38)]
            transition-all
            duration-400
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(39,78,19,0.48)]
            focus:outline-none
            focus:ring-4
            focus:ring-[#274e13]/30
            active:scale-95
            will-change-transform
          "
          style={{
            background: "linear-gradient(to right, #274e13, #3a6e1a)",
            pointerEvents: "auto",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave Rings (unchanged) */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              border-2
              border-[#274e13]/60
              animate-[ping_2s_ease-in-out_infinite]
            "
          />

          <span
            className="
              absolute
              inset-[-4px]
              rounded-full
              border-2
              border-[#274e13]/40
              animate-[pulse_2.5s_ease-in-out_infinite_0.5s]
            "
          />

          <span
            className="
              absolute
              inset-[-8px]
              rounded-full
              border-2
              border-[#274e13]/25
              animate-[pulse_3s_ease-in-out_infinite_1s]
            "
          />

          {/* Inner Glass Circle (unchanged) */}
          <span
            className="
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/12
              backdrop-blur-md
              border
              border-white/20
              group-hover:bg-white/20
              transition-all
              duration-300
            "
          >
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover Glow (unchanged) */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-br
              from-[#274e13]/0
              to-[#3a6e1a]/0
              group-hover:from-[#274e13]/30
              group-hover:to-[#3a6e1a]/30
              transition-all
              duration-500
              blur-xl
            "
          />
        </a>
      </div>
    </section>
  );
}