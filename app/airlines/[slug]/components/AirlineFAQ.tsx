"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, HelpCircle } from "lucide-react";
import type { AirlineData } from "../constants";

interface AirlineFAQProps {
  airline: AirlineData;
}

export default function AirlineFAQ({ airline }: AirlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Get data from airline object
  const airlineName = airline.airline.name;
  const phoneNumber = airline.airline.phoneNumber || "+1-888-845-0220";
  
  // Get ONLY non-policy FAQs (general questions)
  const generalFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      !question.includes('policy') &&
      !question.includes('change') &&
      !question.includes('cancel') &&
      !question.includes('reschedule') &&
      !question.includes('refund') &&
      !question.includes('fee') &&
      !question.includes('same-day') &&
      !question.includes('modification') &&
      !question.includes('difference') &&
      !question.includes('fare type') &&
      !question.includes('class') &&
      !question.includes('fare')
    );
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no general FAQs, don't render the section
  if (generalFaqs.length === 0) {
    return null;
  }

  return (
    <section className="py-4 sm:py-6 bg-white border-t" style={{ borderColor: '#e2e8f0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5" style={{ color: '#274e13' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#274e13' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1a330d' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm mt-1" style={{ color: '#1a330d99' }}>
            Find answers to the most common questions about {airlineName} flights
          </p>
          <div 
            className="w-12 h-0.5 mt-2"
            style={{
              background: `linear-gradient(to right, #274e13, #ffffff)`
            }}
          />
        </div>

        {/* FAQ List - Full Width */}
        <div className="space-y-2">
          {generalFaqs.map((faq, index) => (
            <div
              key={index}
              className={`
                border transition-all duration-300 overflow-hidden
                ${openIndex === index ? 'shadow-md' : 'hover:shadow-sm'}
              `}
              style={{
                backgroundColor: '#f5f8f3',
                borderColor: openIndex === index ? '#274e13' : '#e2e8f0'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 py-3 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-sm sm:text-base font-semibold flex-1" style={{ color: '#1a330d' }}>
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-7 h-7 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index 
                    ? 'text-white' 
                    : ''
                  }
                `}
                style={{
                  backgroundColor: openIndex === index ? '#274e13' : '#e8f0e3',
                  color: openIndex === index ? 'white' : '#274e13'
                }}>
                  {openIndex === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4">
                  <div className="pt-3 border-t" style={{ borderColor: '#e2e8f0' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#1a330dB3' }}>
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: '#274e13' }}>
                      <Phone size={14} />
                      <span>Need help? Call us: </span>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="font-semibold transition-colors"
                        style={{ color: '#274e13' }}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-left">
          <p className="text-sm" style={{ color: '#1a330d99' }}>
            Still have questions? Our travel experts are here to help you 24/7
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-white font-semibold transition-all duration-300 shadow-lg"
            style={{
              background: `linear-gradient(to right, #274e13, #3a6e1a)`,
              boxShadow: `0 10px 15px -3px #274e1333`
            }}
          >
            <Phone size={16} />
            Call Us Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}