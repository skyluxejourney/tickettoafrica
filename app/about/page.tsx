"use client";

import { 
  Info, 
  Shield, 
  Compass, 
  Globe, 
  Award, 
  Lightbulb, 
  Heart, 
  Package, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Phone,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function AboutPage() {
  const sections = [
    {
      icon: Info,
      title: `About ${BRAND.name}`,
      content: [
        "Independent Travel Agency • Operated by Noam Flyers Inc. • ARC Accredited • Customer Driven",
        `${BRAND.name} is an independent online flight booking platform operated by Noam Flyers Inc., a travel services company focused on making air travel simpler, more transparent, and more convenient for travelers.`,
        `As an independent travel agency, ${BRAND.name} provides customers with access to flight options from multiple airlines and travel providers without being tied to a single carrier. We are not an airline and do not represent ourselves as an airline. Our goal is to give travelers the flexibility to compare available flight options and choose the itinerary that best fits their needs.`,
        "From finding competitive fares to assisting customers before and after their booking, our focus is on combining modern technology with knowledgeable travel support."
      ]
    },
    {
      icon: Shield,
      title: "Our Commitment to You",
      content: [
        `At ${BRAND.name}, we believe customers should have confidence when making their travel arrangements. As an independently operated travel platform under Noam Flyers Inc., we are committed to providing a straightforward booking experience and responsive customer assistance.`,
        "Our commitment includes:",
        "• Secure payment processing",
        "• Protected booking transactions",
        "• Access to multiple airline and itinerary options",
        "• Assistance with eligible booking changes and disruptions",
        "• Clear information regarding applicable booking terms and conditions",
        "• Customer support throughout the travel process",
        "• Continuous improvements based on customer feedback"
      ],
      twoColumn: true
    },
    {
      icon: Compass,
      title: "Who We Are",
      content: [
        `${BRAND.name} was created with a simple objective: make flight booking easier for travelers.`,
        "We understand that arranging international or domestic travel can sometimes be complicated. Travelers may have to compare different airlines, schedules, connection times, fare conditions, and available services before making a decision.",
        "Our platform brings these considerations together in a convenient digital experience while maintaining access to human travel assistance when customers need additional support.",
        `Noam Flyers Inc. operates ${BRAND.name} as an independent travel platform, combining technology, travel-industry knowledge, and customer service to support travelers throughout their booking journey.`
      ]
    },
    {
      icon: Globe,
      title: "Our Independence – Your Choice",
      content: [
        `Our independence is an important part of the ${BRAND.name} experience.`,
        "Because we are not an airline, our platform is designed to present flight options from different carriers rather than limiting travelers to the services of one airline. Customers can evaluate available itineraries based on factors such as:",
        "• Fare",
        "• Travel dates",
        "• Departure and arrival times",
        "• Number of stops",
        "• Total journey duration",
        "• Available fare types",
        "• Baggage provisions",
        "• Cabin class",
        "• Airline preferences",
        "Our objective is to help customers make informed travel decisions based on their individual requirements."
      ],
      twoColumn: true
    },
    {
      icon: Award,
      title: "ARC Accreditation",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc., an ARC-accredited travel agency.`,
        "Airlines Reporting Corporation (ARC) is an established organization supporting the airline and travel industry in the United States. Our ARC relationship forms part of our operational framework for airline ticketing and travel services.",
        "Customers should always review the applicable fare rules, ticket conditions, cancellation terms, and other restrictions associated with their individual reservation before completing a purchase."
      ]
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      content: [
        "Our mission is to make travel planning simple, accessible, and customer focused.",
        `Whether you are arranging a family vacation, planning an international trip, traveling for business, or organizing a complex multi-city itinerary, ${BRAND.name} is designed to help you navigate your available flight choices more efficiently.`,
        "We combine technology with travel expertise so customers can spend less time dealing with complicated booking processes and more time preparing for their journey."
      ]
    },
    {
      icon: Heart,
      title: "Our Core Values",
      content: [
        "• Transparency — We aim to provide customers with clear information about available fares, services, and applicable terms before they complete a booking.",
        "• Customer First — Our customers are at the center of our service. We listen to feedback and continuously work to improve the booking experience.",
        "• Choice — As an independent travel platform, we provide access to flight options from multiple airlines and routes.",
        "• Reliability — We work to provide dependable booking assistance and customer support throughout the travel process.",
        "• Innovation — We use modern technology and digital tools to make searching and arranging travel more convenient.",
        "• Responsibility — We encourage travelers to consider itinerary efficiency and available options when making their travel decisions."
      ],
      twoColumn: true
    },
    {
      icon: Package,
      title: "What We Offer",
      content: [
        `${BRAND.name} is more than a flight search interface. We provide a range of travel booking and assistance services designed around different types of travelers.`,
        "Our services include:",
        "• Domestic and international flight searches",
        "• Flight fare comparison",
        "• One-way and round-trip bookings",
        "• Multi-city and complex itinerary planning",
        "• Economy, Premium Economy, and Business Class options",
        "• Flexible fare options where available",
        "• Assistance with eligible flight changes",
        "• Assistance with eligible cancellations and refunds",
        "• Seat selection assistance where available",
        "• Travel itinerary assistance",
        "• Corporate and business travel support",
        "• Travel planning assistance",
        "• Customer support for booking-related questions",
        "Available services and conditions may vary depending on the airline, fare type, route, and individual reservation."
      ],
      twoColumn: true
    },
    {
      icon: TrendingUp,
      title: "Technology Meets Travel Expertise",
      content: [
        `${BRAND.name} combines digital technology with human travel assistance.`,
        "Our platform is designed to help customers search and evaluate available flight options efficiently. At the same time, our travel support team can assist customers who require additional guidance during the booking process.",
        "We recognize that technology alone cannot address every travel situation. Flight schedules can change, plans can evolve, and travelers may sometimes require personalized assistance. That is why we believe the best travel experience combines convenient technology with human support."
      ]
    },
    {
      icon: Clock,
      title: "Our Story",
      content: [
        `${BRAND.name} was developed by Noam Flyers Inc. to provide travelers with a modern alternative for arranging air travel.`,
        "The travel industry continues to evolve, and customers increasingly expect the convenience of online booking while still valuing access to knowledgeable assistance when something unexpected happens.",
        `${BRAND.name} was created around this principle.`,
        "Our approach is straightforward: provide customers with convenient access to flight choices, clear booking information, and travel assistance when it is needed.",
        "As we grow, we remain focused on improving our technology, expanding our travel services, and listening to the people who use our platform."
      ]
    },
    {
      icon: CheckCircle,
      title: `The ${BRAND.name} Difference`,
      content: [
        `What distinguishes ${BRAND.name} is the combination of independence, technology, and customer service.`,
        "We understand that every traveler has different priorities. Some customers are focused on price, while others prioritize convenient schedules, fewer connections, baggage allowances, cabin class, or flexibility.",
        "Our role is to help customers evaluate the options available to them and make a decision that suits their individual travel requirements.",
        "We do not believe travel should be unnecessarily complicated. From the initial flight search through the booking process and eligible post-booking assistance, our objective is to make the experience as straightforward as possible."
      ]
    },
    {
      icon: Shield,
      title: "Travel With Confidence",
      content: [
        "Every journey is different.",
        `Whether you are visiting family overseas, taking a European vacation, traveling for work, or connecting multiple destinations into one itinerary, ${BRAND.name} is here to help you arrange your travel.`,
        "Our team understands that a flight reservation represents more than a ticket. It may represent an important family event, a business opportunity, a long-awaited vacation, or a journey to somewhere new.",
        "That is why we treat every customer interaction with care and professionalism."
      ]
    },
    {
      icon: Globe,
      title: "Our Commitment to the Future",
      content: [
        `As the travel industry changes, ${BRAND.name} will continue investing in technology, service, and customer experience.`,
        "Our goal is to build a travel platform that customers can return to whenever they need help arranging their next journey.",
        "We are committed to providing:",
        "• Easier flight searching",
        "• Convenient booking experiences",
        "• Greater access to travel choices",
        "• Helpful customer assistance",
        "• Clearer travel information",
        "• Continuous platform improvements",
        `At ${BRAND.name}, our goal is simple: Make it easier for you to get where you want to go.`,
        `Thank you for choosing ${BRAND.name}, operated by Noam Flyers Inc. We look forward to being part of your next journey.`
      ],
      twoColumn: true
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#274e13' }}>
              Home
            </NextLink>
            <span className="text-[#1a330d]/30">›</span>
            <span className="text-[#1a330d]/60">About Us</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                About Us
              </h1>
              <div 
                className="w-10 sm:w-12 h-0.5 sm:h-1 mt-2 sm:mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #274e13, #3a6e1a)`
                }}
              />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-6 sm:mt-8">
                  {/* Heading with icon - properly aligned on same line */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div 
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#e8f0e3' }}
                    >
                      <Icon size={16} className="sm:w-4 sm:h-4" style={{ color: '#274e13' }} />
                    </div>
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Content - Full width on mobile, aligned properly */}
                  <div className="w-full text-sm sm:text-base lg:text-base leading-relaxed text-justify">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 w-full" : "space-y-2 sm:space-y-3 w-full"}>
                        {section.content.map((paragraph, pIndex) => {
                          // Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-1 sm:h-2 col-span-2" />;
                          }

                          // Render bullet point - full width, single row alignment
                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 w-full col-span-2 md:col-span-1 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#274e13' }}
                                />
                                <span className="leading-relaxed text-sm sm:text-base flex-1" style={{ color: '#1a330d/60' }}>
                                  {paragraph.substring(2)}
                                </span>
                              </div>
                            );
                          }

                          // Normal paragraph - full width
                          return (
                            <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base" style={{ color: '#1a330d/60' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      // If content is a React element (like the table), wrap it for scrolling
                      <div className="w-full overflow-x-auto overflow-y-hidden">
                        <div className="min-w-[640px] sm:min-w-0">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div 
              className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg text-white w-full"
              style={{
                background: `linear-gradient(to right, #274e13, #3a6e1a)`
              }}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 !text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base"
                style={{
                  backgroundColor: '#f5f8f3',
                  color: '#274e13'
                }}
              >
                <Phone size={16} className="sm:w-4 sm:h-4" />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}