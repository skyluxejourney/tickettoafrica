"use client";

import { 
  FileText, 
  DollarSign, 
  AlertCircle, 
  Globe, 
  Info, 
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Megaphone,
  Link,
  CreditCard,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function AdvertiserDisclosurePolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Advertiser Disclosure",
      content: [
        `This Advertiser Disclosure explains how ${BRAND.name}, operated by Noam Flyers Inc., may display advertising, sponsored placements, affiliate links, compensated recommendations, referral arrangements, promotional offers, and other commercial content across its Website and related communication channels.`,
        `${BRAND.name} is an independent travel agency and is not an airline, hotel operator, cruise line, airport authority, government agency, or other transportation operator.`,
        "The presence of an airline, hotel, travel supplier, financial product, destination, brand, or other third-party advertiser on Tickettoafrica.com does not by itself mean that Noam Flyers Inc. owns, operates, controls, or officially represents that company."
      ]
    },
    {
      icon: DollarSign,
      title: "1. Advertising and Commercial Relationships",
      content: [
        "Noam Flyers Inc. may receive compensation in connection with certain advertising or promotional relationships.",
        "Depending on the arrangement, compensation may include:",
        "• Advertising placement fees",
        "• Affiliate commissions",
        "• Referral fees",
        "• Cost-per-click compensation",
        "• Cost-per-acquisition compensation",
        "• Promotional or campaign fees",
        "• Sponsored-content payments",
        "• Media or marketing support",
        "• Preferred-placement fees",
        "• Other commercially agreed compensation",
        "The existence of compensation does not make Tickettoafrica.com the official website of an airline, hotel, cruise line, or other travel supplier.",
        "Compensation also does not automatically mean that Noam Flyers Inc. controls the supplier's prices, availability, operating policies, cancellation rules, or conditions of carriage."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "2. Clear Advertising Identification",
      content: [
        "Tickettoafrica.com aims to identify paid or commercially influenced content clearly and in understandable language.",
        "Depending on the nature of the relationship, labels may include:",
        "• Advertisement",
        "• Sponsored",
        "• Paid Placement",
        "• Affiliate Link",
        "• Promoted Partner",
        "• Sponsored Placement",
        "• ReservationEase Offer — where applicable to a first-party service",
        "The label used should correspond to the actual commercial relationship.",
        "Noam Flyers Inc. does not intend to rely on vague language such as 'we work with great brands' where a more direct explanation of a paid relationship is appropriate.",
        "Where a page contains a recommendation, promotion, or endorsement for which compensation may be received, the disclosure may appear near the beginning of the relevant content and/or near the applicable link, offer, or placement."
      ],
      twoColumn: true
    },
    {
      icon: Megaphone,
      title: "3. Types of Advertising and Promotional Content",
      content: [
        "Tickettoafrica.com may display different forms of commercial content.",
        "Examples may include:",
        "• Banner advertisements",
        "• Promotional tiles",
        "• Destination sponsorships",
        "• Travel-partner offers",
        "• Hotel or car rental promotions",
        "• Travel-financing offers",
        "• Card-related offers",
        "• Newsletter advertisements",
        "• Sponsored destination content",
        "• Affiliate offers",
        "• Referral placements",
        "• Preferred supplier placements",
        "• Promotional landing pages",
        "• Third-party travel offers",
        "Some promotional content may be advertising inventory purchased by a third party.",
        "Other content may involve an affiliate or referral relationship where Noam Flyers Inc. may receive compensation if a customer clicks, books, purchases, or otherwise completes a qualifying action.",
        "Tickettoafrica.com may also promote its own services. These are first-party promotions rather than third-party advertising."
      ],
      twoColumn: true
    },
    {
      icon: Link,
      title: "4. Affiliate Links",
      content: [
        "Some links displayed on Tickettoafrica.com may be affiliate or referral links.",
        "If a customer clicks or completes a qualifying transaction through such a link, Noam Flyers Inc. may receive compensation.",
        "Where appropriate, affiliate or referral content should be identified as such.",
        "Affiliate compensation does not necessarily increase the price paid by the customer. However, the applicable supplier's own pricing, terms, taxes, fees, and conditions will govern the underlying transaction."
      ]
    },
    {
      icon: DollarSign,
      title: "5. Sponsored Content",
      content: [
        "Noam Flyers Inc. may publish or display sponsored content, including destination guides, travel articles, promotional pages, newsletters, social-media content, or other editorial-style material.",
        "Where content has been materially sponsored or paid for by a third party, it may be identified using terms such as:",
        "• Sponsored",
        "• Paid Promotion",
        "• Sponsored Content",
        "A sponsorship does not necessarily mean that Noam Flyers Inc. independently endorses every product, service, statement, or representation made by the sponsoring company.",
        "Customers should review the applicable supplier's information and terms before making a purchase."
      ]
    },
    {
      icon: Globe,
      title: "6. Preferred or Paid Placement",
      content: [
        "Certain advertisers, suppliers, or partners may receive preferred placement through a commercial arrangement.",
        "Where a placement is materially influenced by payment or sponsorship, Tickettoafrica.com may identify the placement as:",
        "• Sponsored Placement",
        "• Paid Placement",
        "or another substantially similar disclosure.",
        "Paid placement should not be interpreted as a guarantee that the promoted supplier has the lowest price, best service, highest availability, or most suitable option for every customer."
      ]
    },
    {
      icon: Info,
      title: "7. Search Results and Recommendations",
      content: [
        "Tickettoafrica.com may use various factors when displaying travel options, recommendations, or promotional content.",
        "Depending on the page or booking environment, these factors may include:",
        "• Price",
        "• Availability",
        "• Route relevance",
        "• Travel dates",
        "• Customer search criteria",
        "• Supplier participation",
        "• Popularity",
        "• Technical feed quality",
        "• Customer demand",
        "• Commercial relationships",
        "• Promotional arrangements",
        "Where a search result, recommendation, or placement is materially influenced by payment, sponsorship, or another commercial arrangement, the applicable commercial relationship may be disclosed near the relevant placement.",
        "Payment for placement does not automatically mean that an option is recommended solely because it is paid."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "8. Supplier Identity and Independence",
      content: [
        "Tickettoafrica.com is an independent travel agency.",
        "If an airline, hotel, car-rental company, cruise line, or other travel supplier is displayed on the Website, that supplier's name, logo, trademark, or other identifying information may be used to identify the relevant travel product or service.",
        "The appearance of a supplier's branding does not necessarily mean that the customer is visiting that supplier's official website.",
        "Noam Flyers Inc. should not present supplier logos, names, URLs, telephone numbers, support channels, or other identifying information in a manner intended to falsely suggest that the customer is dealing directly with the supplier when the transaction is actually being handled by Noam Flyers Inc. or another intermediary.",
        "This principle applies to:",
        "• Advertisements",
        "• Search pages",
        "• Landing pages",
        "• Destination pages",
        "• Blogs",
        "• Emails",
        "• Social-media content",
        "• Promotional campaigns",
        "• Telephone scripts",
        "• Customer-service communications"
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "9. Third-Party Websites",
      content: [
        "Some advertisements, affiliate links, or promotional offers may take customers away from Tickettoafrica.com.",
        "Where a link directs a customer to an external website, the applicable context may identify that the customer is leaving Tickettoafrica.com.",
        "Once a customer leaves Tickettoafrica.com, the third party's own:",
        "• Pricing",
        "• Availability",
        "• Privacy practices",
        "• Cookie practices",
        "• Terms and conditions",
        "• Cancellation policies",
        "• Refund policies",
        "• Booking procedures",
        "may apply.",
        "Noam Flyers Inc. does not automatically control the conduct, content, availability, or policies of an independent third-party website."
      ]
    },
    {
      icon: CreditCard,
      title: "10. Advertising Technology and Measurement",
      content: [
        "Noam Flyers Inc. may use third-party advertising, analytics, attribution, or measurement technologies to operate, measure, and improve advertising campaigns.",
        "Depending on applicable settings and requirements, these technologies may help measure:",
        "• Impressions",
        "• Clicks",
        "• Conversions",
        "• Campaign reach",
        "• Attributed bookings",
        "• Audience suppression",
        "• Advertising performance",
        "• Website interactions",
        "Information about cookies, tracking technologies, analytics, and applicable privacy choices is addressed separately in the applicable Privacy Policy and Cookie Policy.",
        "This Advertiser Disclosure focuses on the commercial relationship behind advertising and promotional content."
      ],
      twoColumn: true
    },
    {
      icon: Megaphone,
      title: "11. Social Media and Influencer Content",
      content: [
        "The same disclosure principles may apply to social-media content, creator campaigns, influencer promotions, and other endorsements.",
        "If Noam Flyers Inc. pays for, sponsors, or receives compensation in connection with an endorsement or promotional campaign, the commercial relationship should be disclosed in a manner that is reasonably visible where the endorsement is presented.",
        "Examples of appropriate language may include:",
        "• Sponsored",
        "• Paid Partnership",
        "• Advertisement",
        "• Paid Promotion",
        "• Affiliate Link",
        "A commercial disclosure should not be intentionally hidden in a location where a reasonable user would be unlikely to see it before relying on the endorsement."
      ]
    },
    {
      icon: AlertCircle,
      title: "12. Advertising Does Not Guarantee Supplier Performance",
      content: [
        "An advertisement, sponsorship, affiliate relationship, or promotional placement does not guarantee:",
        "• Availability",
        "• Lowest pricing",
        "• Airline performance",
        "• Hotel performance",
        "• Flight operation",
        "• Schedule reliability",
        "• Refund eligibility",
        "• Cancellation eligibility",
        "• Supplier service quality",
        "The applicable supplier's own terms, fare rules, contract of carriage, booking conditions, and applicable law govern the underlying travel service."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "13. Advertising Relationship Table",
      content: [
        "Relationship Type: Sold advertising inventory",
        "Example: Banner advertisement from a travel brand",
        "Appropriate User-Facing Label: Advertisement",
        "",
        "Relationship Type: Affiliate relationship",
        "Example: Link that may generate commission from a qualifying purchase",
        "Appropriate User-Facing Label: Affiliate Link / We May Earn Commission",
        "",
        "Relationship Type: Sponsored editorial",
        "Example: Destination content funded by a commercial partner",
        "Appropriate User-Facing Label: Sponsored / Paid Promotion",
        "",
        "Relationship Type: Preferred placement",
        "Example: Supplier pays for highlighted positioning",
        "Appropriate User-Facing Label: Sponsored Placement / Paid Placement",
        "",
        "Relationship Type: First-party promotion",
        "Example: Noam Flyers Inc. promotes its own booking or support service",
        "Appropriate User-Facing Label: Tickettoafrica.com Offer / Our Service",
        "",
        "Relationship Type: External redirect",
        "Example: Link sends customer to an independent third-party website",
        "Appropriate User-Facing Label: You Are Leaving Tickettoafrica.com"
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "14. Example Commercial Disclosure",
      content: [
        "Some links or placements on Tickettoafrica.com may be paid advertisements, sponsored placements, or affiliate links. If you click or make a qualifying purchase through certain placements, Noam Flyers Inc. may receive compensation.",
        "Compensation for advertising or placement does not make Tickettoafrica.com the official website of the airline, hotel, or other travel supplier displayed.",
        "The applicable supplier's pricing, availability, fare rules, cancellation policies, and operating conditions remain subject to that supplier's own terms."
      ]
    },
    {
      icon: Info,
      title: "15. Platform Advertising Disclosures",
      content: [
        "Noam Flyers Inc. may participate in advertising verification, advertiser-identity, or transparency programs operated by advertising platforms.",
        "When an advertising platform provides its own public advertiser information, such as advertiser identity or location, that information is controlled and displayed by the relevant platform according to its own policies and systems.",
        "This Advertiser Disclosure is intended to complement—not replace—those platform-level disclosures."
      ]
    },
    {
      icon: Shield,
      title: "16. Independence of Commercial Decisions",
      content: [
        "Commercial relationships may form part of Noam Flyers Inc.'s broader advertising and marketing activities.",
        "However, the existence of an advertising or affiliate relationship should not be interpreted as a representation that a supplier is the official, exclusive, or only available travel provider on Tickettoafrica.com.",
        "Where applicable, customers should evaluate travel options based on the information presented, including price, itinerary, availability, fare conditions, and other relevant booking criteria."
      ]
    },
    {
      icon: CheckCircle,
      title: "17. Advertising Disclosure Process",
      content: [
        "The general commercial-disclosure process may be summarized as follows:",
        "Content or Offer Appears on Tickettoafrica.com",
        "↓",
        "Is There Compensation, Sponsorship, or Affiliate Consideration?",
        "↓",
        "No → Normal Site/Service Identification",
        "Yes → Apply Appropriate Commercial Label",
        "↓",
        "Does the Link Leave Tickettoafrica.com?",
        "↓",
        "Yes → Identify External Destination Where Appropriate",
        "No → Keep Applicable Commercial Disclosure Near the Placement",
        "↓",
        "Third-Party Terms May Apply After Redirect"
      ]
    },
    {
      icon: Clock,
      title: "18. Changes to This Advertiser Disclosure",
      content: [
        "Noam Flyers Inc. may update this Advertiser Disclosure from time to time to reflect changes in its advertising relationships, marketing practices, technology, third-party advertising services, or applicable legal requirements.",
        "The latest version will be made available on Tickettoafrica.com.",
        "Where appropriate, material changes may be accompanied by an updated 'Last Updated' date.",
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
            <span className="text-[#1a330d]/60">Advertiser Disclosure</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                Advertiser Disclosure Policy
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

                          if (paragraph.startsWith("Relationship Type:") || paragraph.startsWith("Content or Offer Appears")) {
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