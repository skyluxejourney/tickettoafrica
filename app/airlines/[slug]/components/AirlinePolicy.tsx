"use client";

import Image from "next/image";
import { Phone, ChevronRight, Calendar, Edit, CheckCircle, ArrowRight, Clock, Headphones } from "lucide-react";
import { BRAND, COMPANY } from "@/app/constants";
import type { AirlineData } from "../constants";

interface AirlinePolicyProps {
  airline: AirlineData;
}

export default function AirlinePolicy({ airline }: AirlinePolicyProps) {
  // Get phone number from airline data
  const phoneNumber = airline.airline.phoneNumber || COMPANY.phone || "+1-888-845-0220";
  
  // Get ONLY policy-related FAQs
  const policyFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      question.includes('policy') ||
      question.includes('change') ||
      question.includes('cancel') ||
      question.includes('reschedule') ||
      question.includes('refund') ||
      question.includes('fee') ||
      question.includes('same-day') ||
      question.includes('modification') ||
      question.includes('difference') ||
      question.includes('fare type') ||
      question.includes('class') ||
      question.includes('fare')
    );
  });

  const steps = [
    {
      icon: Calendar,
      title: "Select Your New Flight",
      description: "Choose your preferred new flight dates and times from available options.",
    },
    {
      icon: Edit,
      title: "Review Change Details",
      description: "Review the change details, including any fare differences or applicable fees.",
    },
    {
      icon: CheckCircle,
      title: "Confirm & Get Confirmation",
      description: "Confirm your changes and receive your updated itinerary via email.",
    },
  ];

  // Get the brand domain (remove spaces and convert to lowercase)
  const brandDomain = BRAND.name.toLowerCase().replace(/\s/g, '');

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#f5f8f3' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Side - 70% */}
          <div className="lg:w-[70%] border-r-0 lg:border-r" style={{ borderColor: '#e2e8f0' }}>
            <div className="pr-0 lg:pr-8">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3" style={{ color: '#1a330d' }}>
                {airline.airline.name} Flight Change, Reschedule & Cancellation
              </h2>
              
              {/* Phone Number */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-2 rounded-full text-white"
                  style={{
                    background: `linear-gradient(to right, #274e13, #3a6e1a)`
                  }}
                >
                  <Phone size={16} />
                </div>
                <span className="text-sm sm:text-base font-medium" style={{ color: '#1a330d' }}>
                  Call Airlines Helpdesk:{" "}
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="font-bold transition-colors"
                    style={{ color: '#274e13' }}
                  >
                    {phoneNumber}
                  </a>
                </span>
              </div>

              {/* Hero Banner - Brand Style with Left Fade */}
              <div className="relative w-full mb-10 overflow-hidden border border-[#E2E8F0]/10 shadow-2xl" style={{ backgroundColor: '#1a330d' }}>

                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/changeflightposter.jpg"
                    alt={`Change or Cancel Flight - ${BRAND.name}`}
                    fill
                    className="object-cover object-center"
                  />

                  {/* Left-side fade overlay - Updated to green theme */}
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(to right, #1a330dF2, #1a330dBF, transparent)`
                  }} />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row min-h-[460px]">

                  {/* LEFT CONTENT */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-2xl">

                    {/* Brand */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 backdrop-blur-md border border-white/10 text-white px-4 py-3" style={{ backgroundColor: '#274e131A' }}>
                        <Image
                          src="/logo/tikiticket.png"
                          alt={BRAND.name}
                          width={28}
                          height={28}
                          className="object-contain"
                        />

                        <div className="leading-tight">
                          <p className="text-sm font-bold tracking-wide !text-white">
                            {brandDomain}.com
                          </p>
                          <p className="text-[11px] text-white/70 !text-white/70">
                            24/7 Airline Support
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-3">

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight !text-white">
                        {airline.airline.name}
                      </h2>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold !text-white">
                        Change or Cancel
                      </h2>

                      {/* Flight Divider */}
                      <div className="flex items-center gap-4 py-2 max-w-md">
                        <div className="h-px flex-1 bg-white/20" />

                        <span className="text-3xl sm:text-4xl italic font-semibold !text-white">
                          Flight
                        </span>

                        <div className="h-px flex-1 bg-white/20" />
                      </div>

                      {/* With Brand - Updated accent color */}
                      <div className="flex items-center gap-3 text-lg text-white/90">
                        <span className="!text-white">with</span>

                        <Image
                          src="/logo/tikiticket.png"
                          alt={BRAND.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />

                        <span className="font-extrabold !text-white italic" style={{ color: '#e8f0e3' }}>
                          {BRAND.name}
                        </span>
                      </div>

                      <p className="max-w-xl text-sm sm:text-base text-white/75 leading-relaxed pt-2 !text-white/75">
                        Get instant assistance for flight changes, cancellations, same-day
                        rebooking, fare difference guidance, and refund-related queries from
                        our travel experts at {BRAND.name}.
                      </p>
                    </div>

                    {/* Features - Updated to green theme */}
                    <div className="mt-8 space-y-5">

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ backgroundColor: '#274e13' }}>
                          <Calendar size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            Change or Cancel
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Modify your flight hassle-free
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ backgroundColor: '#274e13' }}>
                          <Clock size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            Save on Change Fees
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Explore available fee-saving options
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ backgroundColor: '#274e13' }}>
                          <Headphones size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            24/7 Support
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Real travel assistance anytime
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE - background image remains visible */}
                  <div className="lg:w-[38%]" />
                </div>

                {/* CALL BAR - Updated to green theme */}
                <div className="relative z-10 text-white border-t border-white/10" style={{ backgroundColor: '#1a330dF2' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#e8f0e3' }}>
                        <Phone size={22} style={{ color: '#274e13' }} />
                      </div>

                      <div>
                        <p className="text-sm text-white/80 font-medium !text-white/80">
                          Call Now
                        </p>

                        <p className="text-lg sm:text-xl font-extrabold tracking-wide !text-white">
                          {phoneNumber}
                        </p>
                      </div>
                    </div>

                    <a
                      href={"tel:" + phoneNumber.replace(/\s/g, "")}
                      className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 shadow-lg"
                      style={{
                        backgroundColor: '#e8f0e3',
                        color: '#274e13'
                      }}
                    >
                      <Phone size={18} />
                      Call 24/7
                    </a>

                  </div>
                </div>
              </div>

              {/* Policy Queries - Only Policy Related FAQs */}
              <div className="space-y-4">
                {policyFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5 border hover:border-[#274e13]/30 group"
                    style={{
                      borderColor: '#e2e8f0'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: '#e8f0e3',
                          }}
                        >
                          <ChevronRight size={14} style={{ color: '#274e13' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-semibold transition-colors" style={{ color: '#1a330d' }}>
                          {faq.question}
                        </h3>
                        <div className="mt-2">
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#1a330dB3' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 30% - Image with Green Tint */}
          <div className="lg:w-[30%] flex items-start justify-center">
            <div className="sticky top-24 relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/reviewusposter.png"
                  alt={`Review Us Now - ${BRAND.name}`}
                  width={400}
                  height={600}
                  className="w-full max-w-[400px] h-auto object-contain"
                />
                {/* Green tint overlay on the right side image */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, #274e1322, transparent 50%, #274e1322)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Steps Section */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e2e8f0' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1a330d' }}>
              Change Your {airline.airline.name} Flight with {BRAND.name}
            </h3>
            <div 
              className="w-16 h-1 mx-auto mt-3 rounded-full"
              style={{
                background: `linear-gradient(to right, #274e13, #ffffff)`
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 border hover:border-[#274e13]/30 group"
                style={{
                  borderColor: '#e2e8f0'
                }}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #274e13, #ffffff)`
                  }}
                >
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full transition-colors duration-300 flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: '#e8f0e3',
                    }}
                  >
                    <step.icon className="w-8 h-8 transition-colors duration-300" style={{ color: '#274e13' }} />
                  </div>
                  <h4 className="text-base font-semibold transition-colors" style={{ color: '#1a330d' }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: '#1a330d99' }}>
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6" style={{ color: '#ffffff4D' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Unbeatable Deals CTA - Fixed with proper green gradient */}
          <div className="mt-10 p-6 sm:p-8 text-center text-white shadow-xl" style={{
            background: `linear-gradient(to right, #274e13, #3a6e1a, #274e13)`
          }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-bold flex items-center gap-2 !text-white">
                  <Phone className="w-6 h-6 animate-pulse !text-white" />
                  For Unbeatable Deals, Call Us Today!
                </h4>
                <p className="text-white/80 text-sm mt-1">
                  Get exclusive discounts and personalized assistance from our travel experts at {BRAND.name}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <Phone className="w-4 h-4 !text-white" />
                  <span className="font-bold text-base !text-white">24/7 Support</span>
                </div>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="bg-white px-6 py-3 rounded-full font-bold hover:bg-[#f5f8f3] transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
                  style={{ color: '#274e13' }}
                >
                  <Phone size={18} />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}