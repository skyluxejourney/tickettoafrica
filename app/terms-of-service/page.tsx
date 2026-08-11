"use client";

import { 
  FileText, 
  Shield, 
  CreditCard, 
  BookOpen,
  Scale,
  Users,
  Lock,
  Eye,
  FileCheck,
  ChevronRight,
  Home,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Info,
  Phone,
  MessageSquare,
  Mail,
  Printer,
  Share2,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      id: "identity",
      icon: Shield,
      title: "1. Identity, Scope and Definitions",
      subs: [
        { title: "Corporate Identity and Operator", text: "These Terms & Conditions govern access to and use of the TickettoEurope.com website, any associated mobile experience, any contact-centre or phone-assisted booking service offered under the TickettoEurope.com brand, and any booking request, ticketing request, exchange, cancellation request, refund request, waiver request, reissue request, or related customer-support activity processed by Noam Flyers Inc. for travel services sold through TickettoEurope.com." },
        { title: "ARC Accreditation and Verification", text: "Noam Flyers Inc. is an ARC-accredited travel agency. ARC accreditation reflects participation in recognised U.S. travel-agency ticketing and settlement infrastructure. It does not change the legal identity of Noam Flyers Inc. into that of an airline, and it does not mean that Noam Flyers Inc. owns, operates, controls, or represents any airline." },
        { title: "Independent Agency Status and Airline Non-Affiliation", text: "TickettoEurope.com is an independent travel agency platform operated by Noam Flyers Inc. TickettoEurope.com is not an airline. TickettoEurope.com does not operate aircraft. TickettoEurope.com does not control airline schedules, aircraft swaps, staffing, airport operations, baggage systems, check-in counters, boarding decisions, or air-traffic events." },
        { title: "Definitions", text: "For purposes of these Terms: 'Travel Supplier' means any airline, codeshare carrier, partner carrier, consolidator, wholesaler, GDS-linked supplier, hotel, transportation provider, or other travel-service provider whose inventory or rules apply to your booking. 'Booking Request' means your request to search, reserve, or purchase a travel service through TickettoEurope.com. 'Ticketed' means that an airline ticket has been issued and/or that the relevant supplier reservation has been made and confirmed with an identifying reference such as a ticket number, PNR, reservation number, or record locator." },
        { title: "Acceptance, Eligibility and Permitted Use", text: "You may use TickettoEurope.com only if you are legally capable of entering a binding contract. You must provide accurate information and use the platform only for legitimate travel-shopping, travel-booking, and booking-servicing purposes." },
        { title: "Supplier Terms and Incorporated Airline Rules", text: "By booking through TickettoEurope.com, you acknowledge that your journey is subject not only to these Terms but also to the rules of the relevant Travel Supplier. These underlying airline terms may include liability limits, baggage limits, check-in rules, refusal-to-carry provisions, schedule-change rights, rerouting provisions, and claim deadlines." }
      ]
    },
    {
      id: "booking",
      icon: CreditCard,
      title: "2. Booking, Pricing, Fees and Payment",
      subs: [
        { title: "Booking Channels", text: "TickettoEurope.com supports two primary booking channels: Online self-service and Assisted phone booking. Online self-service allows you to search, compare, enter passenger details, review the total, and pay through the website yourself. Assisted phone booking involves speaking with an agent who helps research options, explains fare conditions, enters data, and assists with placing the booking." },
        { title: "Dynamic Pricing and Fare Accuracy", text: "Air fares are dynamic. Inventory, booking class, seat availability, route combinations, carrier-imposed charges, and taxes may change before ticketing. Every quote shown on TickettoEurope.com should therefore be understood as subject to availability, subject to fare-rule validation, subject to supplier confirmation, and subject to correction of a genuine pricing or tax error." },
        { title: "Total Price Disclosure, Taxes and Surcharges", text: "Where an airfare is advertised or displayed as a price to purchase a ticket, applicable mandatory government taxes and fees and mandatory carrier-imposed charges should be reflected as required by applicable law. The total price shown before payment may include: Base fare, Carrier-imposed surcharge, Government taxes and airport charges, TickettoEurope.com service fee, Optional airline extras, and Airport/border/entry charges not collected at booking." },
        { title: "Payment Authorisation, Merchant of Record and Secure Processing", text: "Payments made through TickettoEurope.com are processed by Noam Flyers Inc. using payment methods made available during checkout or communicated by an authorised agent during an assisted booking flow. TickettoEurope.com may require full payment at the time of booking unless an instalment or deferred-payment option is expressly offered." },
        { title: "Failed Payments, Reversals and Chargebacks", text: "If a payment authorisation fails, is reversed, is later declined, is flagged as high risk, or cannot be completed for settlement reasons, the booking request may be suspended, cancelled, or never finalised. A ticket is not guaranteed merely because you reached the end of a checkout screen if the payment did not settle or the booking was blocked for verification." },
        { title: "Pricing Errors, Tax Changes and Currency Conversion", text: "Despite reasonable efforts to publish accurate fares and totals, technical or human errors may occur. If there is a genuine and demonstrable pricing error, tax miscalculation, stale inventory error, or carrier surcharge change, TickettoEurope.com may contact you with the corrected amount and the options available." }
      ]
    },
    {
      id: "ticketing",
      icon: FileCheck,
      title: "3. Ticketing, Confirmation, Cancellations and Refunds",
      subs: [
        { title: "Fulfilment Policy and Ticket Issuance", text: "A booking request is fulfilled when the relevant ticket is issued and/or the relevant reservation is confirmed and communicated to you, subject to supplier-specific exceptions. A booking acknowledgement, order number, payment receipt, or 'request received' message should not automatically be read as proof that the airline has finally accepted the booking." },
        { title: "24-Hour Handling and Agency Policy", text: "The U.S. Department of Transportation's 24-hour rule for qualifying direct-airline bookings does not automatically apply to tickets purchased through travel agents or online travel agencies. TickettoEurope.com therefore adopts the following position: a penalty-free cancellation is not automatically guaranteed merely because the request falls within 24 hours." },
        { title: "Voluntary Changes and Exchanges", text: "If you ask to change an existing ticket: the airline or validating carrier must permit the change; the new itinerary must have eligible inventory; any fare difference must be paid; any airline exchange/change penalty must be paid where applicable; any TickettoEurope.com post-ticket exchange fee may apply; and the reissued ticket may carry new or different fare rules." },
        { title: "Refundable and Non-Refundable Fares", text: "Refundable fare: May be eligible for refund to the original payment method, subject to fare rules and cancellation timing. Non-refundable fare: Usually not eligible for cash refund after the applicable cancellation/void period. Restricted/basic fare: May prohibit changes, credits, or refunds depending on fare conditions." },
        { title: "Airline Cancellations, Significant Schedule Changes", text: "Where an airline cancels a flight or makes a qualifying significant schedule change, applicable law and airline policy may provide customers with rebooking or refund rights. Where Noam Flyers Inc. / TickettoEurope.com is the merchant of record for the airfare and applicable law requires a refund, we will process the proper airfare refund when due." },
        { title: "No-Shows, Missed Departures and Missed Connections", text: "A no-show may result in severe consequences. Unless the airline rule, formal waiver, or mandatory law provides otherwise: if you do not travel on the first unused segment and do not notify the airline or TickettoEurope.com before departure, remaining value may be lost; onward or return segments may be cancelled." },
        { title: "Name Corrections, Name Changes and Reissues", text: "TickettoEurope.com distinguishes between: Minor correction (a spelling, formatting, or ordering issue that still refers to the same traveller), Material name change (a change that may effectively attempt to substitute a different traveller), and Transfer request (an attempt to transfer a ticket to another person). Only minor corrections may be possible." },
        { title: "Ancillary Services, Baggage, Seats and Special Requests", text: "Seat selection, meal preferences, wheelchair assistance, infant linkage, unaccompanied-minor handling, and similar items may be requests rather than guarantees. If TickettoEurope.com assists with an ancillary request, the request may require a separate service fee and the airline may decline, modify, or reassign the service." }
      ]
    },
    {
      id: "responsibilities",
      icon: Shield,
      title: "4. Responsibilities, Liability, Fraud Prevention and Data Use",
      subs: [
        { title: "Traveller Responsibilities and Document Compliance", text: "Travellers are responsible for obtaining and maintaining all required travel documents. You must: enter each traveller's name accurately; ensure passports and visas are valid; verify entry and transit requirements; provide mandatory passenger information; comply with immigration, customs, security, health, and other applicable requirements." },
        { title: "Check-in, Boarding and Timeline Compliance", text: "Travellers are responsible for meeting airline check-in and boarding deadlines. You should arrive sufficiently early to allow time for: security screening; baggage drop; document verification; immigration procedures; airport transfers within the terminal; and gate boarding." },
        { title: "Limitation of Liability", text: "Because TickettoEurope.com is an independent travel agency and not an operating carrier, our liability is limited to the services we actually perform. To the maximum extent permitted by applicable law, TickettoEurope.com shall not be liable for losses arising from airline cancellations, delays, schedule changes, rerouting, missed connections, aircraft substitutions, denied boarding, oversales, seating changes, baggage loss/delay/damage, and other supplier-related issues." },
        { title: "Indemnity", text: "You agree to indemnify and hold harmless Noam Flyers Inc., TickettoEurope.com, and their officers, employees, contractors, processors, and service providers against losses, costs, claims, liabilities, penalties, and expenses arising out of: your breach of these Terms; inaccurate passenger information supplied by you; violation of supplier rules or applicable law; fraudulent use of a payment instrument; and misuse of the platform." },
        { title: "Verification, Fraud Controls and Sanctions Screening", text: "Travel transactions may involve fraud, card misuse, identity mismatch, and regulatory controls. TickettoEurope.com may therefore conduct: cardholder verification; billing-address verification; device-risk checks; document checks; duplicate-booking checks; fraud screening; sanctions screening; and other reasonable security checks." },
        { title: "Privacy Summary", text: "TickettoEurope.com may collect and process information required to search, book, ticket, confirm, service, cancel, refund, or otherwise administer travel arrangements. This may include: traveller names; contact details; itinerary information; payment information; billing information; passport or travel-document information where necessary." },
        { title: "Advertiser and Affiliate Disclosure", text: "TickettoEurope.com may display sponsored placements, paid search or metasearch traffic, affiliate links, co-branded promotional content, and promotional rates funded partly or entirely by partners. Where TickettoEurope.com receives a commission, referral payment, advertising payment, or other material benefit connected with presented content, the relationship may be disclosed where appropriate." }
      ]
    },
    {
      id: "legal",
      icon: BookOpen,
      title: "5. General Legal Terms and Customer-Facing Snippets",
      subs: [
        { title: "Governing Law and Disputes", text: "These Terms and any dispute arising out of or relating to TickettoEurope.com, Noam Flyers Inc., or a TickettoEurope.com booking request shall be governed by the laws of the applicable jurisdiction designated by Noam Flyers Inc. and applicable U.S. federal law, except to the extent mandatory consumer law requires otherwise." },
        { title: "Electronic Communications and Notices", text: "You agree that TickettoEurope.com may communicate with you electronically through: email; SMS; website notices; account/dashboard notices; booking messages; or other digital communications. These communications may concern bookings, payments, schedule changes, cancellations, servicing requests, fraud verification, refund status, or policy updates." },
        { title: "Intellectual Property and Acceptable Website Use", text: "All TickettoEurope.com platform content, except third-party airline or supplier content used under applicable rights, belongs to Noam Flyers Inc. or its licensors. You may not: copy, mirror, scrape, frame, or harvest the platform without permission; use bots or scripted processes to query fares at scale; or interfere with site security or payment flows." },
        { title: "Changes to These Terms, Severability, Waiver and Survival", text: "TickettoEurope.com may amend these Terms from time to time to reflect changes in law, payment rules, supplier practice, product design, service-fee structures, dispute processes, or internal risk controls. Updated Terms become effective when posted unless a different effective date is stated." }
      ]
    }
  ];

  // Customer-facing snippets
  const snippets = [
    { title: "Independent Agency Status", text: "TickettoEurope.com is operated by Noam Flyers Inc., an independent travel agency. We are not an airline and do not operate flights." },
    { title: "ARC Accreditation Statement", text: "Noam Flyers Inc. is an ARC-accredited travel agency. ARC accreditation reflects participation in recognised travel-agency ticketing and settlement infrastructure." },
    { title: "Booking Channel Statement", text: "You may book online yourself or request phone assistance. Assisted bookings may carry different or higher service fees than online self-service bookings." },
    { title: "Fare Volatility Statement", text: "Air fares are dynamic and may change until ticketed and confirmed by the airline or supplier." },
    { title: "Total Price Statement", text: "The final amount charged by Noam Flyers Inc. will be shown before payment confirmation. Optional airline extras may be charged separately by the airline." },
    { title: "Refund Rights Statement", text: "Refund and credit eligibility depends on airline fare rules, applicable law, timing, and whether Noam Flyers Inc. or the airline is the merchant of record." },
    { title: "24-Hour Statement", text: "Airline 24-hour cancellation rules do not automatically apply to third-party agency bookings." },
    { title: "No-Show Statement", text: "Most no-show bookings may lose value unless the airline rule, waiver, or applicable law provides relief." },
    { title: "Name-Correction Statement", text: "Minor spelling corrections may be possible if the airline allows them. Traveller substitutions or ticket transfers are generally not permitted." },
    { title: "Document-Responsibility Statement", text: "Travellers are responsible for ensuring that names, passports, visas, and other travel documents are accurate and valid for the full journey." }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f5f8f3] to-white pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm mb-6">
            <NextLink href="/" className="flex items-center gap-1 text-[#274e13] hover:text-[#3a6e1a] transition-colors font-medium">
              <Home size={14} />
              Home
            </NextLink>
            <span className="text-[#1a330d]/30">›</span>
            <span className="text-[#1a330d]/60 font-medium">Terms & Conditions</span>
          </nav>

          {/* Hero Section */}
          <div className="relative mb-10 overflow-hidden rounded-2xl p-8 sm:p-12" style={{
            background: `linear-gradient(135deg, #0c1a08, #1a330d, #274e13)`
          }}>
            <div className="absolute inset-0 opacity-10" style={{
              background: `radial-gradient(circle at 20% 50%, #ffffff, transparent 70%)`
            }} />
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{
              background: `radial-gradient(circle, #ffffff, transparent 70%)`
            }} />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <FileText size={22} className="text-white" />
                </div>
                <span className="text-white/60 text-xs font-medium tracking-[0.2em] uppercase border border-white/10 px-3 py-1 rounded-full">
                  Legal
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Terms & Conditions
              </h1>
              <p className="text-white/60 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
                Please read these terms carefully before using {BRAND.name}. They govern your use of our platform and services.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 border border-white/10 flex items-center gap-2">
                  <Clock size={12} />
                  Last Updated: November 2024
                </span>
                <span className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 border border-white/10 flex items-center gap-2">
                  <FileCheck size={12} />
                  Version 1.0
                </span>
                <span className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/60 border border-white/10 flex items-center gap-2">
                  <Globe size={12} />
                  Applicable Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-10 bg-white rounded-xl shadow-sm border border-[#e8f0e3] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#e8f0e3] bg-[#fafcf8] flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#e8f0e3]">
                <BookOpen size={16} className="text-[#274e13]" />
              </div>
              <h2 className="text-sm font-semibold text-[#1a330d]">Table of Contents</h2>
              <span className="ml-auto text-xs text-[#1a330d]/40 bg-[#f5f8f3] px-2 py-1 rounded-full border border-[#e8f0e3]">
                {sections.length} Sections
              </span>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f5f8f3] transition-all duration-200 group border border-transparent hover:border-[#e8f0e3]"
                  >
                    <div className="p-1.5 rounded-lg bg-[#f5f8f3] group-hover:bg-[#e8f0e3] transition-colors">
                      <Icon size={14} className="text-[#274e13]" />
                    </div>
                    <span className="text-sm text-[#1a330d]/70 group-hover:text-[#1a330d] transition-colors flex-1">
                      {section.title}
                    </span>
                    <ChevronRight size={14} className="text-[#1a330d]/20 group-hover:text-[#274e13] transition-colors flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-xl shadow-sm border border-[#e8f0e3] overflow-hidden scroll-mt-20 transition-all hover:shadow-md"
                >
                  {/* Section Header */}
                  <div className="px-6 py-4 border-b border-[#e8f0e3] flex items-center gap-3 bg-gradient-to-r from-[#fafcf8] to-white">
                    <div className="p-2 rounded-lg bg-[#e8f0e3]">
                      <Icon size={18} className="text-[#274e13]" />
                    </div>
                    <h2 className="text-lg font-bold text-[#1a330d]">
                      {section.title}
                    </h2>
                    <span className="ml-auto text-xs text-[#1a330d]/30">Section</span>
                  </div>

                  {/* Section Content */}
                  <div className="p-6 space-y-5">
                    {section.subs.map((sub, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#274e13] group-hover:scale-150 transition-transform" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-[#274e13] mb-1.5">
                              {sub.title}
                            </h3>
                            <p className="text-sm text-[#1a330d]/70 leading-relaxed text-justify">
                              {sub.text}
                            </p>
                          </div>
                        </div>
                        {index < section.subs.length - 1 && (
                          <div className="ml-5 mt-3 border-l-2 border-[#e8f0e3] h-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customer-Facing Snippets */}
          <div className="mt-10 bg-white rounded-xl shadow-sm border border-[#e8f0e3] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#e8f0e3] bg-gradient-to-r from-[#fafcf8] to-white flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-[#e8f0e3]">
                <MessageSquare size={16} className="text-[#274e13]" />
              </div>
              <h2 className="text-sm font-semibold text-[#1a330d]">Customer-Facing Snippets</h2>
              <span className="ml-auto text-xs text-[#1a330d]/40 bg-[#f5f8f3] px-2 py-1 rounded-full border border-[#e8f0e3]">
                Quick Reference
              </span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {snippets.map((snippet, index) => (
                <div key={index} className="p-4 rounded-lg border border-[#e8f0e3] hover:border-[#274e13]/30 transition-all hover:shadow-sm bg-[#fafcf8] group">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#274e13] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#274e13] uppercase tracking-wider mb-0.5">
                        {snippet.title}
                      </h4>
                      <p className="text-sm text-[#1a330d]/60 leading-relaxed">
                        {snippet.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-[#e8f0e3] bg-[#fafcf8] flex items-center justify-between">
              <p className="text-xs text-[#1a330d]/40">
                These short statements are intended to summarise, not replace, the full Terms & Conditions.
              </p>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg hover:bg-[#e8f0e3] transition-colors text-[#1a330d]/40 hover:text-[#274e13]">
                  <Printer size={14} />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-[#e8f0e3] transition-colors text-[#1a330d]/40 hover:text-[#274e13]">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-[#e8f0e3]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#e8f0e3]">
                  <Phone size={18} className="text-[#274e13]" />
                </div>
                <h3 className="text-sm font-semibold text-[#1a330d]">Need Help?</h3>
              </div>
              <p className="text-sm text-[#1a330d]/60 leading-relaxed">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-[#274e13] text-white rounded-lg font-semibold hover:bg-[#3a6e1a] transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-[#e8f0e3]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#e8f0e3]">
                  <Mail size={18} className="text-[#274e13]" />
                </div>
                <h3 className="text-sm font-semibold text-[#1a330d]">Email Support</h3>
              </div>
              <p className="text-sm text-[#1a330d]/60 leading-relaxed">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:Reservations@tickettoafrica.com"
                className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 border-2 border-[#274e13] text-[#274e13] rounded-lg font-semibold hover:bg-[#274e13] hover:text-white transition-all duration-300"
              >
                <Mail size={16} />
                Email Support
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#1a330d]/30">
              {BRAND.name} is operated by Noam Flyers Inc. • Terms & Conditions Version 1.0
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}