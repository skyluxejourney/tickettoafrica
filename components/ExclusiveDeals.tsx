"use client";

import { Phone, ArrowRight, Star, Users, Shield, Tag, Sparkles, Crown, Clock, Globe, Award } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

export default function ExclusiveDealsPoster() {
  // Use static positions instead of Math.random() to avoid hydration mismatches
  const particles = [
    { left: "10%", top: "20%", delay: "0s", duration: "4s" },
    { left: "25%", top: "45%", delay: "0.5s", duration: "5s" },
    { left: "40%", top: "15%", delay: "1s", duration: "3.5s" },
    { left: "55%", top: "60%", delay: "1.5s", duration: "4.5s" },
    { left: "70%", top: "25%", delay: "0.3s", duration: "5.5s" },
    { left: "85%", top: "50%", delay: "0.8s", duration: "4s" },
    { left: "15%", top: "75%", delay: "1.2s", duration: "3s" },
    { left: "35%", top: "85%", delay: "0.6s", duration: "6s" },
    { left: "50%", top: "35%", delay: "1.8s", duration: "4.2s" },
    { left: "65%", top: "80%", delay: "0.2s", duration: "5s" },
    { left: "80%", top: "15%", delay: "0.9s", duration: "3.8s" },
    { left: "5%", top: "50%", delay: "1.4s", duration: "4.7s" },
    { left: "45%", top: "70%", delay: "0.7s", duration: "5.2s" },
    { left: "75%", top: "40%", delay: "1.1s", duration: "3.3s" },
    { left: "95%", top: "30%", delay: "0.4s", duration: "4.8s" },
    { left: "20%", top: "10%", delay: "1.6s", duration: "5.8s" },
    { left: "60%", top: "90%", delay: "0.1s", duration: "3.9s" },
    { left: "30%", top: "55%", delay: "1.3s", duration: "4.3s" },
    { left: "88%", top: "70%", delay: "0.5s", duration: "5.1s" },
    { left: "12%", top: "90%", delay: "0.8s", duration: "4.6s" },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative overflow-hidden shadow-2xl"
          style={{
            background: `linear-gradient(135deg, #1a330d, #274e13, #3a6e1a)`
          }}
        >
          {/* Modern Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#ffffff' }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: '#e8f0e3' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: '#ffffff' }} />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* Static Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                  backgroundColor: i % 2 === 0 ? '#ffffff4D' : '#e8f0e333',
                  width: i % 3 === 0 ? '3px' : '2px',
                  height: i % 3 === 0 ? '3px' : '2px',
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 xl:p-14 text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20" style={{ backgroundColor: '#274e1344' }}>
                <Crown size={16} style={{ color: '#e8f0e3' }} />
                <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">
                  Premium Travel Deals
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white !text-white mb-4 leading-tight">
                Exclusive{" "}
                <span className="relative">
                  <span className="relative z-10" style={{ color: '#e8f0e3' }}>
                    Savings
                  </span>
                  <span 
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full blur-sm"
                    style={{ backgroundColor: '#e8f0e34D' }}
                  />
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-90">
                  Up to <span className="font-bold" style={{ color: '#e8f0e3' }}>20%</span> Off
                </span>
              </h2>

              <p className="text-white/90 !text-white/90 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Call now and let our professional agents book your ticket at the best price.
                Limited time offer – don't miss out!
              </p>

              {/* Trust Badges - Modern Design */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#274e1344' }}>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white/90 text-xs font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#274e1344' }}>
                  <Users size={14} className="text-white/80" />
                  <span className="text-white/90 text-xs font-medium">2.5M+ Bookings</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#274e1344' }}>
                  <Shield size={14} className="text-white/80" />
                  <span className="text-white/90 text-xs font-medium">Secure Payment</span>
                </div>
              </div>

              {/* CTA Buttons - Modern Design */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 backdrop-blur-sm rounded-full px-6 sm:px-7 py-3 w-full sm:w-auto transition-all duration-300 border border-white/20 hover:scale-105 group"
                  style={{ backgroundColor: '#274e1344' }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base tracking-wider">
                    {CONTACT.phone}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-[#1a330d] px-8 sm:px-10 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2 group"
                  style={{
                    background: `linear-gradient(135deg, #e8f0e3, #ffffff)`,
                    boxShadow: `0 10px 20px -5px #0000004D`
                  }}
                >
                  <span>Call Now</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image - Airport Baggage */}
            <div className="relative lg:w-1/2 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] xl:min-h-[420px]">
              <img
                src="/images/exclusive.jpg"
                alt="Exclusive Travel Deals"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(to left, #1a330d44, transparent 40%, #1a330d88)` }}
              />
              
              {/* Modern Floating Badge - Fixed Position */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-2xl rotate-2 z-10">
                <div className="text-center">
                  <div className="text-xs font-bold tracking-wider text-[#1a330d]">Save Up To</div>
                  <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#274e13' }}>20%</div>
                  <div className="text-[8px] sm:text-[10px] text-[#1a330d]/60 font-medium">Limited Time</div>
                </div>
              </div>

              {/* Modern Bottom Badge - Updated with tickettoafrica.com */}
              <div className="absolute bottom-6 left-4 right-4 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20" style={{ backgroundColor: '#1a330d88' }}>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-white flex-wrap">
                  <div className="flex items-center gap-2">
                    <Clock size={14} style={{ color: '#e8f0e3' }} />
                    <span className="text-xs font-medium">24/7 Support</span>
                  </div>
                  <div className="w-px h-5 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Globe size={14} style={{ color: '#e8f0e3' }} />
                    <span className="text-xs font-medium">tickettoafrica.com</span>
                  </div>
                  <div className="w-px h-5 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Award size={14} style={{ color: '#e8f0e3' }} />
                    <span className="text-xs font-medium">Trusted</span>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(3deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(0) translateX(-8px) rotate(0deg); 
            opacity: 0.3; 
          }
          75% { 
            transform: translateY(15px) translateX(8px) rotate(-3deg); 
            opacity: 0.7; 
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}