"use client";

import { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Lock, Shield, Award, Headphones } from "lucide-react";
import { BRAND } from "@/app/constants";

export default function WhyTrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const trustFeatures = [
    {
      icon: Users,
      title: "Team of Travel Professionals",
      description: "Our travel experts are available around the clock to assist with your flight bookings.",
    },
    {
      icon: DollarSign,
      title: "Best Price Guaranteed",
      description: "Say Goodbye to Expensive Flights – Grab Budget-Friendly Tickets Today.",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "Experience hassle-free and secure flight bookings with our user-friendly platform.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:pt-20 lg:py-5 overflow-hidden" 
      style={{ backgroundColor: '#f5f8f3' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading - Left Aligned */}
          <div 
            className={`mb-8 sm:mb-10 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
              Why Millions Trust
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: `linear-gradient(to right, #274e13, #468f21)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {BRAND.name}
              </span>
            </h2>
            <div 
              className="w-12 h-1 rounded-full mt-3"
              style={{
                background: `linear-gradient(to right, #274e13, #ffffff)`
              }}
            />
          </div>

          {/* Three Small Cards in a Row - Attached to each other */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`
                    group
                    bg-white
                    p-5 sm:p-6
                    transition-all duration-500 ease-out
                    hover:bg-[#f5f8f3]
                    border-r border-[#e2e8f0]
                    hover:shadow-xl
                    hover:z-10
                    relative
                    hover:border-[#ffffff]/30
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                    transitionDelay: `${200 + index * 150}ms`
                  }}
                >
                  {/* Icon on the left */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-lg icon-wrapper"
                        style={{
                          backgroundColor: '#e8f0e3',
                          color: '#274e13',
                        }}
                      >
                        <Icon size={20} className="transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-sm sm:text-base font-bold mb-1 transition-colors duration-300"
                        style={{ color: '#1a330d' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#1a330dB3' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay for the icon */}
                  <style jsx>{`
                    .group:hover .icon-wrapper {
                      background: linear-gradient(to right, #274e13, #3a6e1a);
                      color: white !important;
                    }
                    .group:hover .icon-wrapper svg {
                      color: white !important;
                    }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 