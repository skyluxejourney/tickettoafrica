"use client";

import { 
  FileText, 
  Shield, 
  Info, 
  CheckCircle, 
  Globe, 
  Lock, 
  Eye, 
  AlertCircle,
  Phone,
  Clock,
  Sliders,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function CookiesPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Cookie Policy",
      content: [
        `This Cookie Policy explains how ${BRAND.name}, operated by Noam Flyers Inc., uses cookies and similar technologies when you visit or interact with the Website, booking pages, landing pages, communications, and related digital interfaces.`,
        `${BRAND.name} is an independent travel agency and is not an airline.`,
        "For purposes of this policy, the term 'cookies' is used broadly to include cookies and similar technologies that store information on, or access information from, a device, browser, or application environment. These technologies may include pixels, tags, scripts, software development kits (SDKs), local storage objects, and comparable identifiers."
      ]
    },
    {
      icon: Info,
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small files or similar data elements that may be stored on your device when you visit a website.",
        "They can help websites:",
        "• Remember information",
        "• Maintain a secure session",
        "• Preserve booking information",
        "• Improve website functionality",
        "• Understand how visitors use a website",
        "• Measure advertising performance",
        "• Prevent fraud",
        "• Remember selected preferences",
        "• Support customer-service functions",
        "Some cookies are placed directly by Tickettoafrica.com and Noam Flyers Inc. Others may be placed or triggered by carefully selected third-party service providers that provide services such as analytics, payment protection, advertising measurement, call tracking, or customer support."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "2. How We Use Cookies",
      content: [
        "Noam Flyers Inc. may use cookies and similar technologies for several different purposes.",
        "These purposes may include:",
        "• Website operation",
        "• Booking and checkout functionality",
        "• Security",
        "• Fraud prevention",
        "• Session management",
        "• Preference storage",
        "• Analytics",
        "• Performance measurement",
        "• Personalisation",
        "• Advertising",
        "• Campaign attribution",
        "• Call attribution",
        "• Social-media functionality",
        "• Customer-support functionality",
        "Not every technology is used for every visitor, and the technologies used may change as our Website and service providers evolve."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "3. Cookie Consent and Our Layered Approach",
      content: [
        "Tickettoafrica.com uses a layered approach to cookie transparency.",
        "When you first visit the Website, a cookie notice or consent interface may explain that cookies and similar technologies are being used.",
        "Where applicable, the consent interface may allow you to:",
        "• Accept all applicable categories",
        "• Reject non-essential technologies",
        "• Customize your preferences",
        "• Change your preferences later",
        "Strictly necessary technologies may be used without marketing consent where they are genuinely required to provide a service that you have requested, operate the Website, maintain security, or complete a transaction.",
        "Non-essential categories, such as analytics, personalisation, advertising, and certain social-media technologies, should remain optional where consent is required by applicable law."
      ]
    },
    {
      icon: Shield,
      title: "4. Strictly Necessary Technologies",
      content: [
        "Strictly necessary cookies and similar technologies help Tickettoafrica.com operate and provide core functionality.",
        "These technologies may be used to:",
        "• Maintain secure user sessions",
        "• Preserve booking and itinerary information",
        "• Support search and checkout functionality",
        "• Maintain shopping or booking-session information",
        "• Protect the booking process against fraud",
        "• Support payment or verification steps initiated by the customer",
        "• Remember necessary language or regional settings",
        "• Maintain website security",
        "• Support load balancing",
        "• Remember cookie-consent preferences",
        "If these technologies are disabled, some or all core Website functions may not operate correctly.",
        "Essential storage or similar technologies may also be used where necessary to complete a payment, verification, authentication, or booking step actively requested by the customer."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "5. Functional and Preference Technologies",
      content: [
        "Functional technologies help remember non-essential preferences and improve convenience.",
        "Depending on the Website's features, these technologies may remember:",
        "• Recently used airports",
        "• Cabin preferences",
        "• Passenger-search preferences",
        "• Language preferences",
        "• Regional preferences",
        "• Saved search settings",
        "• Communication preferences",
        "• Certain voluntarily saved account or profile information",
        "Functional technologies can make the booking experience easier, but they should not be treated as strictly necessary merely because they provide additional convenience."
      ],
      twoColumn: true
    },
    {
      icon: Eye,
      title: "6. Analytics and Measurement Technologies",
      content: [
        "Analytics technologies may help Noam Flyers Inc. understand how visitors use Tickettoafrica.com and improve the Website.",
        "Analytics may be used to understand:",
        "• Which pages receive traffic",
        "• Which pages load slowly",
        "• Where users encounter technical problems",
        "• Which search filters are useful",
        "• Where customers abandon a booking journey",
        "• How the booking funnel performs",
        "• How Website functionality can be improved",
        "• Which routes or destinations generate interest",
        "• Campaign performance",
        "• Customer-support demand generated by Website activity",
        "Where permitted, aggregated measurement may also help Noam Flyers Inc. understand whether customers who previously visited the Website later contact the company through another support channel.",
        "Analytics technologies are generally not required for the core booking function and may therefore be subject to applicable consent requirements."
      ],
      twoColumn: true
    },
    {
      icon: Phone,
      title: "7. Call and Customer-Service Attribution",
      content: [
        "Tickettoafrica.com may use technologies that help measure interactions between Website visits and customer-service contacts.",
        "For example, where the Website displays a telephone number, callback option, chat feature, or other support mechanism, applicable technology may help determine whether a customer previously visited the Website before initiating contact.",
        "Depending on the technology and applicable permissions, this information may be used for:",
        "• Service improvement",
        "• Performance measurement",
        "• Campaign attribution",
        "• Fraud prevention",
        "• Customer-support analysis",
        "• Training and operational purposes",
        "Where required by applicable law, non-essential call-attribution technologies will be subject to appropriate consent or privacy choices."
      ]
    },
    {
      icon: Sliders,
      title: "8. Personalisation Technologies",
      content: [
        "Where permitted, Tickettoafrica.com may use personalisation technologies to make Website content more relevant to a visitor.",
        "These technologies may help present:",
        "• Relevant travel content",
        "• Route suggestions",
        "• Destination ideas",
        "• Search-related information",
        "• Previously viewed information",
        "• More relevant Website messages",
        "Personalisation technologies are generally optional unless a particular technology is genuinely necessary to provide a service specifically requested by the customer."
      ]
    },
    {
      icon: Globe,
      title: "9. Advertising and Marketing Technologies",
      content: [
        "Noam Flyers Inc. may use advertising and marketing technologies to measure campaigns, understand advertising effectiveness, limit repetitive advertisements, or present more relevant promotional content.",
        "Depending on applicable permissions, these technologies may be used to:",
        "• Measure advertising performance",
        "• Attribute bookings or conversions",
        "• Understand campaign reach",
        "• Reduce repeated advertisements",
        "• Create or manage advertising audiences",
        "• Support retargeting",
        "• Measure interactions with advertisements",
        "• Improve future marketing campaigns",
        "Advertising technologies are not required for the core booking function and should be subject to applicable consent requirements.",
        "If you reject non-essential advertising technologies, Tickettoafrica.com should continue to provide core Website and booking functions, subject only to technologies genuinely necessary to operate the requested service."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "10. Social-Media Technologies",
      content: [
        "Tickettoafrica.com may use social-media technologies when the Website:",
        "• Embeds social content",
        "• Provides social-sharing functionality",
        "• Links to social-media channels",
        "• Measures engagement with travel content",
        "• Supports social-media campaigns",
        "These technologies may be controlled or triggered by third-party social-media providers.",
        "They are generally not necessary to complete an airline booking and may therefore be subject to applicable consent requirements."
      ]
    },
    {
      icon: Globe,
      title: "11. Third-Party Service Providers",
      content: [
        "Some cookies and similar technologies may be provided by third parties.",
        "These providers may support functions such as:",
        "• Website analytics",
        "• Advertising measurement",
        "• Payment protection",
        "• Fraud prevention",
        "• Customer support",
        "• Call tracking",
        "• Marketing attribution",
        "• Social-media functionality",
        "• Website performance monitoring",
        "The identity of technology providers may change as Noam Flyers Inc. changes or updates its technology stack.",
        "Where applicable, the cookie-management interface or technology inventory should identify the current provider, general purpose, category, and expected retention period."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "12. Cookie Duration",
      content: [
        "Cookies and similar technologies may operate for different periods depending on their purpose.",
        "Session Technologies",
        "Some technologies expire when:",
        "• You close your browser",
        "• Your session ends",
        "• A defined period of inactivity occurs",
        "Persistent Technologies",
        "Other technologies may remain on your device for a defined period after you leave the Website.",
        "The retention period may depend on the purpose of the technology.",
        "Where reasonably practicable, Noam Flyers Inc. aims to use a retention-led approach so that analytics, personalisation, and marketing identifiers are not retained or active longer than reasonably necessary for their intended purpose."
      ]
    },
    {
      icon: FileText,
      title: "13. Cookie Category Table",
      content: [
        "Category: Strictly Necessary",
        "Typical Purpose: Security, session continuity, fraud prevention, consent storage, payment and checkout continuity",
        "Usually Required for Core Service?: Yes",
        "Typical Retention Approach: Session or short operational period",
        "",
        "Category: Functional",
        "Typical Purpose: Preferences, saved searches, convenience settings",
        "Usually Required for Core Service?: No, but useful",
        "Typical Retention Approach: Short to medium",
        "",
        "Category: Analytics",
        "Typical Purpose: Traffic analysis, booking-funnel measurement, UX improvement, attribution",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Short to medium",
        "",
        "Category: Personalisation",
        "Typical Purpose: Route suggestions, content relevance, prior-search information",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Category: Advertising",
        "Typical Purpose: Retargeting, campaign measurement, audience management, frequency control",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Category: Social Media",
        "Typical Purpose: Sharing, embedded content, engagement measurement",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Actual cookie names, providers, purposes, and retention periods may vary over time and should be reviewed through the Website's applicable cookie-management interface."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "14. Managing Your Cookie Preferences",
      content: [
        "You may manage cookie preferences through the cookie settings or consent-management interface made available on Tickettoafrica.com.",
        "Depending on the available functionality, you may be able to:",
        "• Accept all cookie categories",
        "• Reject non-essential categories",
        "• Accept selected categories",
        "• Change your choices later",
        "You may also use your browser or device settings to block or delete cookies.",
        "However, blocking all cookies may interfere with Website functionality, including:",
        "• Secure login",
        "• Booking-session continuity",
        "• Saved preferences",
        "• Search functionality",
        "• Payment processes",
        "• Fraud-prevention checks",
        "• Checkout functionality",
        "Deleting cookies after beginning a booking may also affect your ability to resume a partially completed search or booking journey."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "15. Privacy Preference Signals",
      content: [
        "Where required or applicable, Noam Flyers Inc. may evaluate whether Tickettoafrica.com recognizes browser-based privacy preference signals or other legally recognized opt-out mechanisms.",
        "The availability and treatment of such signals may depend on:",
        "• Applicable law",
        "• Technical capabilities",
        "• Browser or device configuration",
        "• The type of privacy signal received",
        "Where applicable, additional information will be provided through the Website's privacy-choice interface."
      ]
    },
    {
      icon: Lock,
      title: "16. Cookies and Personal Information",
      content: [
        "Information collected through cookies and similar technologies may sometimes constitute personal information or personal data, particularly where it can be connected to an identifiable or reasonably identifiable person, device, account, or booking.",
        "Where this occurs, the information will be handled in accordance with the applicable Privacy Policy and relevant privacy requirements.",
        "The Privacy Policy provides additional information concerning matters such as:",
        "• Data security",
        "• Retention",
        "• Service providers",
        "• Data sharing",
        "• Privacy rights",
        "• Requests concerning personal information",
        "This Cookie Policy should therefore be read together with the applicable Privacy Policy and any Your Privacy Choices interface provided on Tickettoafrica.com."
      ]
    },
    {
      icon: CheckCircle,
      title: "17. Cookie Consent Does Not Affect Essential Services",
      content: [
        "Where consent is not required for a technology because it is genuinely necessary to provide a service requested by the customer, that technology may continue to operate even when non-essential categories have been rejected.",
        "For example, a customer may still need essential technologies to:",
        "• Maintain a secure booking session",
        "• Preserve an itinerary during checkout",
        "• Complete a payment step",
        "• Prevent fraudulent activity",
        "• Maintain essential Website security",
        "Rejecting analytics or advertising technologies should not, where technically and legally feasible, prevent customers from using core booking functionality."
      ]
    },
    {
      icon: Clock,
      title: "18. Changes to Cookie Technology",
      content: [
        "Noam Flyers Inc. may change the technologies used on Tickettoafrica.com as its Website, booking systems, analytics infrastructure, advertising arrangements, security tools, or service providers evolve.",
        "The categories described in this policy are intended to remain relatively stable even if individual technology providers change.",
        "Where appropriate, the current cookie-management interface should provide more specific information regarding the technologies currently active on the Website."
      ]
    },
    {
      icon: Info,
      title: "19. Changes to This Cookie Policy",
      content: [
        "Noam Flyers Inc. may update this Cookie Policy from time to time to reflect:",
        "• Changes in technology",
        "• Website functionality",
        "• Analytics tools",
        "• Advertising practices",
        "• Third-party service providers",
        "• Privacy requirements",
        "• Legal requirements",
        "• Business operations",
        "The latest version will be made available on Tickettoafrica.com.",
        "If changes materially affect how non-essential cookie information is used and applicable law requires renewed consent, Noam Flyers Inc. may request consent again rather than relying solely on a previous consent choice."
      ]
    },
    {
      icon: FileText,
      title: "20. Consent Banner",
      content: [
        "When applicable, Tickettoafrica.com's cookie notice may state:",
        "We use necessary cookies to keep Tickettoafrica.com secure and functioning. With your permission, we may also use analytics, personalisation, advertising, and similar technologies to understand how the Website is used, improve the booking experience, measure marketing performance, and provide more relevant travel content. You can accept all, reject non-essential technologies, or customize your choices at any time."
      ]
    },
    {
      icon: CheckCircle,
      title: "21. Cookie Preference Process",
      content: [
        "The general cookie-management process may be summarized as follows:",
        "User Visits Tickettoafrica.com",
        "↓",
        "Cookie Notice / Consent Interface Appears",
        "↓",
        "User Selects a Preference",
        "↓",
        "Accept All → Necessary + Applicable Optional Categories",
        "Reject Non-Essential → Necessary Technologies Only",
        "Customize → User Selects Individual Categories",
        "↓",
        "Preference Is Stored Where Applicable",
        "↓",
        "Website Applies the Selected Preferences",
        "↓",
        "User Can Update Preferences Later"
      ]
    },
    {
      icon: Phone,
      title: "22. Contact",
      content: [
        "If you have questions regarding this Cookie Policy or the use of cookies and similar technologies on Tickettoafrica.com, please use the contact information provided on the Website.",
        "",
        "Tickettoafrica.com",
        "Operated by Noam Flyers Inc."
      ]
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
            <span className="text-[#1a330d]/60">Cookie Policy</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                Cookie Policy
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
                  {/* Heading with icon */}
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
                  
                  {/* Content */}
                  <div className="w-full text-sm sm:text-base lg:text-base leading-relaxed text-justify">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 w-full" : "space-y-2 sm:space-y-3 w-full"}>
                        {section.content.map((paragraph, pIndex) => {
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-1 sm:h-2 col-span-2" />;
                          }

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

                          if (paragraph.startsWith("Category:") || paragraph.startsWith("User Visits")) {
                            return (
                              <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base font-semibold" style={{ color: '#1a330d' }}>
                                {paragraph}
                              </p>
                            );
                          }

                          if (paragraph === "↓") {
                            return (
                              <p key={pIndex} className="w-full col-span-2 text-center text-sm sm:text-base" style={{ color: '#274e13' }}>
                                {paragraph}
                              </p>
                            );
                          }

                          return (
                            <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base" style={{ color: '#1a330d/60' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
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
                Need Help With Your Travel Plans?
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