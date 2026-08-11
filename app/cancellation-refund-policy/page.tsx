"use client";

import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CreditCard, 
  Clock, 
  Info, 
  Heart,
  CheckCircle,
  Phone,
  DollarSign,
  Users,
  XCircle,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function CancellationRefundPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Cancellation & Refund Policy",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. ${BRAND.name} is an independent travel agency and is not an airline. Noam Flyers Inc. facilitates the sale of airline inventory and may provide both online self-service booking and optional assisted booking and customer-support services.`,
        "Airline tickets, airline schedules, aircraft changes, baggage handling, fare-family restrictions, no-show consequences, and many refund rights are controlled by the applicable airline and its fare rules, rather than by Noam Flyers Inc. Noam Flyers Inc. does, however, control its own agency service fees, its refund-request handling process, and refunds of amounts that Noam Flyers Inc. is required to return when it is the applicable merchant of record.",
        "This Cancellation & Refund Policy explains how voluntary cancellations, voluntary refund requests, airline disruptions, future travel credits, airline waivers, ancillary-service refunds, and Noam Flyers Inc. service-fee reversals are handled.",
        "This policy should be read together with the applicable Fare Disclosure, Taxes & Fees, and Post-Ticketing Service Fees information published on Tickettoafrica.com.",
        "Where this policy refers to 'our fees', this means fees charged by Noam Flyers Inc. for its own agency services. It does not refer to airline penalties, fare differences, airport charges, government taxes, baggage charges, seat fees, or other supplier-imposed amounts."
      ]
    },
    {
      icon: XCircle,
      title: "1. Voluntary and Involuntary Cancellations",
      content: [
        "A voluntary cancellation occurs when a customer chooses not to travel, changes their plans, cannot use their itinerary, or wishes to replace the booking with another travel arrangement.",
        "An involuntary cancellation or refund situation generally occurs when the airline or another protected event causes the itinerary to be cancelled or materially disrupted. Depending on the circumstances, this may include:",
        "• An airline cancellation",
        "• A significant schedule change",
        "• Certain class-of-service downgrades",
        "• Certain airline operational disruptions",
        "• Other circumstances recognized under applicable law or airline policy",
        "These situations may be subject to different refund and rebooking rules. Customers should not assume that a refund right applicable to an involuntary airline disruption automatically applies to a voluntary cancellation."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "2. Airline Rules Control the Underlying Ticket",
      content: [
        "For airline tickets, the applicable airline fare rules are the starting point for determining whether a ticket can be cancelled, refunded, exchanged, or converted into a future travel credit.",
        "Depending on the fare purchased:",
        "• A ticket may be fully refundable",
        "• A ticket may be refundable subject to deductions",
        "• A ticket may be changeable but non-refundable",
        "• A ticket may qualify only for future travel credit",
        "• A ticket may have no remaining value after cancellation or no-show",
        "• An airline may require direct handling for certain low-cost-carrier or ancillary services",
        "Noam Flyers Inc.'s agency service fees do not change the underlying airline fare rules.",
        "A non-refundable airline ticket does not become refundable merely because a customer requests a refund through Tickettoafrica.com."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "3. Airline Cancellation or Significant Schedule Change",
      content: [
        "If an airline cancels a flight or makes a significant schedule change and the customer does not accept the alternative offered, the customer may be entitled to a refund depending on applicable law, airline rules, and the merchant-of-record structure of the transaction.",
        "Where Noam Flyers Inc. is the merchant of record for the applicable airfare and a refund is legally or contractually due, Noam Flyers Inc. will process the applicable airfare refund to the original form of payment within the timeframe required by applicable law.",
        "For qualifying transactions, applicable U.S. Department of Transportation refund requirements may establish different processing periods depending on the payment method.",
        "Where the airline is responsible for a particular ancillary refund, such as certain baggage or other services that were not provided, Noam Flyers Inc. may assist with documentation and routing of the request. However, Noam Flyers Inc. cannot accelerate a carrier-controlled decision beyond the authority available to the agency."
      ]
    },
    {
      icon: XCircle,
      title: "4. Voluntary Cancellation Requests",
      content: [
        "For voluntary cancellations, the fare rules applicable to the purchased airline ticket determine the underlying refund or credit entitlement.",
        "A customer may be eligible for:",
        "• A full or partial refund",
        "• A future travel credit",
        "• A ticket exchange",
        "• A refund after applicable airline deductions",
        "• No remaining ticket value",
        "Even when an airline permits a voluntary refund, Noam Flyers Inc. may charge a separate post-ticketing processing or service fee for the work involved in reviewing and processing the request.",
        "Such work may include:",
        "• Reviewing the ticket and fare rules",
        "• Determining refund eligibility",
        "• Contacting the airline or supplier",
        "• Requesting a waiver where appropriate",
        "• Processing the refund request",
        "• Updating the reservation",
        "• Calculating applicable amounts",
        "• Communicating the outcome to the customer",
        "Noam Flyers Inc. will not represent its own service fee as an airline tax, government charge, or airline-imposed penalty.",
        "Any applicable agency fee will be disclosed separately or included in the applicable total before payment or service authorization."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "5. Requests Within 24 Hours of Booking",
      content: [
        "Customers who wish to cancel shortly after making a reservation should submit their request immediately through the contact method provided in their booking confirmation.",
        "Customers should understand that statutory airline 24-hour reservation and refund requirements do not necessarily apply in the same manner to reservations purchased through third-party travel agencies or online travel agencies.",
        "Where the applicable airline policy, ticketing status, fare conditions, purchase timing, and other eligibility requirements permit a full reversal, Noam Flyers Inc. may process the eligible cancellation and refund.",
        "Where the airline's applicable policy does not permit a reversal, or the request falls outside the applicable conditions, the booking will be handled according to the fare rules governing the ticket.",
        "A customer should therefore not assume that every booking made through Tickettoafrica.com automatically qualifies for a 24-hour cancellation or refund."
      ]
    },
    {
      icon: Clock,
      title: "6. Refunds After Travel Has Started",
      content: [
        "Once travel has commenced, only the unused portion of a ticket may potentially be refundable, exchangeable, or creditable, and only when permitted by the applicable fare rules.",
        "The refundable amount on a partially used ticket may be substantially different from the original amount paid.",
        "Airline fare calculations may require:",
        "• Fare reconstruction",
        "• Recalculation of used and unused segments",
        "• Reassessment of taxes",
        "• Application of fare restrictions",
        "• Recalculation based on the original fare conditions",
        "The unused portion of a ticket is therefore not necessarily valued by simply subtracting the price of the used flight from the original purchase price.",
        "Additional review time may be required for partially used tickets, and an applicable post-ticketing service fee may apply."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "7. No-Show Cancellations",
      content: [
        "A no-show generally occurs when a passenger fails to travel on a scheduled flight without cancelling or changing the reservation in accordance with the applicable airline rules.",
        "No-show consequences can be significant.",
        "Depending on the airline and fare purchased:",
        "• The remaining ticket value may be forfeited",
        "• Future segments may be cancelled",
        "• A refund may no longer be available",
        "• A reinstatement may require airline approval",
        "• A future credit may not be available",
        "• Additional fees may apply",
        "Noam Flyers Inc. may assist in requesting reinstatement, a waiver, or recovery of remaining ticket value where such an option exists.",
        "However, no reinstatement, refund, waiver, or credit is guaranteed unless approved under the applicable airline rules.",
        "Customers should contact Tickettoafrica.com as soon as possible if they know they will miss a scheduled departure."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "8. Special Refund and Waiver Requests",
      content: [
        "Certain circumstances may qualify for special review or an airline waiver.",
        "Depending on the airline and applicable rules, examples may include:",
        "• Medical incapacity",
        "• Bereavement",
        "• Visa refusal",
        "• Duplicate bookings",
        "• Denied boarding",
        "• Certain military orders",
        "• Significant airline schedule disruptions",
        "• Other circumstances specifically recognized by an airline",
        "These situations do not automatically create a refund entitlement unless required by applicable law or the airline's applicable policy.",
        "Noam Flyers Inc. may request supporting documentation where required.",
        "Documentation may include, depending on the situation:",
        "• Medical documentation",
        "• Death certificate or other bereavement documentation",
        "• Visa refusal documentation",
        "• Military orders",
        "• Airline disruption records",
        "• Other supporting evidence requested by the applicable airline",
        "Noam Flyers Inc. may submit or escalate an eligible waiver request to the airline on the customer's behalf.",
        "If the airline approves the request, the refund, credit, or other waiver will be processed according to the airline's decision.",
        "If the airline declines the request, the customer will be informed of the outcome and the booking will remain subject to the applicable fare rules.",
        "An applicable Noam Flyers Inc. service fee may still apply where substantive agency work has been performed, unless the applicable published fee schedule states otherwise."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "9. Ancillary Services and Additional Purchases",
      content: [
        "Refunds involving airline ancillary services are treated separately from the underlying airfare.",
        "Ancillary services may include:",
        "• Checked baggage",
        "• Seat selection",
        "• Seat upgrades",
        "• Priority services",
        "• Special-service requests",
        "• Other airline-provided services",
        "If Noam Flyers Inc. collected an agency service fee and the related booking never ticketed, or if Noam Flyers Inc. is otherwise required to reverse that fee, the applicable agency-fee component will be handled by Noam Flyers Inc.",
        "If an airline ancillary service was purchased but was not provided, the refund obligation may depend on the airline, the merchant-of-record structure, applicable law, and the specific service involved.",
        "Noam Flyers Inc. may assist customers by collecting and submitting relevant documentation, which may include:",
        "• Ticket numbers",
        "• Booking references",
        "• Receipts",
        "• EMD references",
        "• Baggage documentation",
        "• Seat-selection records",
        "• Other proof of purchase or non-provision of service",
        "Where the airline controls the applicable refund, the final decision may remain with the carrier."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "10. Future Travel Credits",
      content: [
        "Some non-refundable tickets may qualify for a future travel credit instead of a cash refund.",
        "Where an airline provides a future travel credit, the credit may be subject to conditions such as:",
        "• Expiration dates",
        "• Passenger-name restrictions",
        "• Transfer restrictions",
        "• Route restrictions",
        "• Fare differences",
        "• Change fees",
        "• Airline-specific redemption requirements",
        "Noam Flyers Inc. will communicate the applicable credit information available from the airline.",
        "Customers should carefully review the expiration date and conditions of any future travel credit."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "11. Refunds to the Original Form of Payment",
      content: [
        "Where a refund is approved, refunds are generally returned to the original form of payment used for the transaction.",
        "Noam Flyers Inc. may require identity verification before discussing refund amounts or making changes to refund-related information.",
        "Customers may be required to provide information such as:",
        "• Booking reference",
        "• Ticket number",
        "• Passenger name",
        "• Email address used for the booking",
        "• Other information reasonably necessary to verify the transaction",
        "Refunds should not normally be redirected to a different payment method unless permitted by applicable law, payment-processing requirements, or operational circumstances and appropriately authorized."
      ]
    },
    {
      icon: CreditCard,
      title: "12. Payment Authorizations and Failed Bookings",
      content: [
        "A payment authorization, pending bank transaction, or temporary hold does not necessarily mean that a ticket has been issued.",
        "A booking may remain subject to:",
        "• Payment verification",
        "• Fare revalidation",
        "• Availability confirmation",
        "• Fraud screening",
        "• Manual review",
        "• Airline ticketing",
        "• Supplier confirmation",
        "If payment has been authorized but the booking cannot ultimately be ticketed, Noam Flyers Inc. will take appropriate steps to reverse, void, or refund the applicable amount in accordance with the payment processor, bank, supplier, and applicable transaction circumstances.",
        "The time required for a pending authorization to disappear may depend on the customer's bank or payment provider."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "13. Refund Request Information",
      content: [
        "When submitting a cancellation or refund request, customers should provide:",
        "• Tickettoafrica.com booking reference",
        "• Airline confirmation or PNR",
        "• Ticket number, where available",
        "• Passenger name",
        "• Email address used for the booking",
        "• Travel dates",
        "• Reason for cancellation or refund request",
        "• Supporting documentation, where applicable",
        "Providing complete information helps Noam Flyers Inc. review the request efficiently.",
        "Customers should submit cancellation requests as soon as they know they will not travel because airline rules may become more restrictive as departure approaches."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "14. Refund Processing and Communication",
      content: [
        "After receiving a refund request, Noam Flyers Inc. may need to determine:",
        "• Whether the ticket has been issued",
        "• Whether the ticket has been partially or fully used",
        "• Whether the cancellation is voluntary or involuntary",
        "• Which airline fare rules apply",
        "• Whether an airline waiver is available",
        "• Whether the transaction qualifies for a refund under applicable law",
        "• Whether an agency service fee applies",
        "• Whether an airline or another supplier must approve the refund",
        "Customers will be informed of the applicable outcome once the review is completed or when the airline provides its decision.",
        "A request being submitted does not mean that a refund has been approved."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "15. Refund Denials",
      content: [
        "If an airline denies a refund request, Noam Flyers Inc. will communicate the applicable result and, where reasonably available, identify potential next steps.",
        "Depending on the circumstances, available options may include:",
        "• Rebooking",
        "• Using remaining ticket value",
        "• Applying for an airline future travel credit",
        "• Requesting an airline waiver",
        "• Providing additional supporting documentation",
        "• Appealing through an applicable airline process",
        "If the issue concerns a Noam Flyers Inc. agency service fee rather than the airline fare, the customer may request a review through the applicable customer-service escalation process."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "16. Agency Service Fees",
      content: [
        "Noam Flyers Inc. service fees are separate from airline fare rules and airline-imposed charges.",
        "Depending on the service requested, an agency fee may apply for:",
        "• Cancellation processing",
        "• Refund processing",
        "• Ticket changes",
        "• Rebooking",
        "• Waiver requests",
        "• Complex itinerary servicing",
        "• Post-ticketing assistance",
        "• Other agency services",
        "An agency service fee does not represent an airline penalty or government charge.",
        "Where applicable, the customer will be informed of the agency service fee before the relevant service is authorized.",
        "Unless expressly stated otherwise, completion of agency work may result in the applicable service fee remaining payable even if the airline subsequently denies the requested refund or waiver."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "17. Merchant-of-Record Considerations",
      content: [
        "The entity responsible for processing or refunding a particular amount may depend on the transaction structure.",
        "For this reason, customers should distinguish between:",
        "• Airline airfare",
        "• Airline taxes and charges",
        "• Airline ancillary services",
        "• Noam Flyers Inc. agency service fees",
        "• Third-party supplier charges",
        "Where Noam Flyers Inc. is the applicable merchant of record and is responsible for a refund, it will process the refund in accordance with applicable law and the terms governing the transaction.",
        "Where another supplier or airline is responsible for the applicable amount, Noam Flyers Inc. may assist with communication and documentation but cannot guarantee the supplier's decision or processing time."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "18. Cancellation and Refund Responsibility Table",
      content: [
        "Scenario: Customer changes plans before departure",
        "Primary Decision-Maker: Airline fare rules + Noam Flyers Inc. processing",
        "Typical Result: Future credit, refund, exchange, or no remaining value depending on fare",
        "",
        "Scenario: Request shortly after booking",
        "Primary Decision-Maker: Airline policy + ticket status + agency process",
        "Typical Result: Possible reversal if eligible and timely; not automatically guaranteed",
        "",
        "Scenario: Airline cancels or significantly changes flight",
        "Primary Decision-Maker: Airline event + applicable merchant of record",
        "Typical Result: Refund, rebooking, or applicable airline alternative",
        "",
        "Scenario: Unused baggage, seat, or ancillary service",
        "Primary Decision-Maker: Airline or applicable merchant of record",
        "Typical Result: Ancillary refund where required or permitted",
        "",
        "Scenario: Medical, bereavement, or visa-related request",
        "Primary Decision-Maker: Airline waiver review",
        "Typical Result: Possible refund or credit if waiver is approved or required",
        "",
        "Scenario: No-show",
        "Primary Decision-Maker: Airline",
        "Typical Result: Possible loss of value unless reinstatement or waiver is approved",
        "",
        "Scenario: Agency service-fee dispute",
        "Primary Decision-Maker: Noam Flyers Inc.",
        "Typical Result: Review based on disclosed fee and service performed"
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "19. Important Refund Disclaimer",
      content: [
        "A refund request does not itself guarantee that a refund will be issued.",
        "Refund eligibility depends on the applicable airline fare rules, ticket status, airline policies, applicable law, merchant-of-record structure, and the specific circumstances of the cancellation.",
        "Noam Flyers Inc. cannot guarantee a refund, waiver, credit, or reinstatement where the applicable airline or supplier does not authorize it and no independent legal right requires it."
      ]
    },
    {
      icon: Shield,
      title: "20. Legal and Policy Clause",
      content: [
        "Voluntary cancellations and voluntary refund requests remain subject to the rules of the airline and the fare purchased.",
        "Noam Flyers Inc.'s own service fees do not convert a non-refundable airline ticket into a refundable ticket and do not create rights that the airline has not granted.",
        "Where a refund is required by applicable law or where Noam Flyers Inc. is responsible for returning funds as the applicable merchant of record, the refund will be handled in accordance with the applicable legal requirements and transaction terms."
      ]
    },
    {
      icon: Users,
      title: "21. Customer Responsibility",
      content: [
        "Customers are responsible for reviewing their booking confirmation, ticket conditions, cancellation restrictions, refund conditions, travel-credit expiration dates, and applicable service fees.",
        "Customers should contact Tickettoafrica.com promptly if:",
        "• They need to cancel",
        "• They will not be able to travel",
        "• Their airline has cancelled or significantly changed their flight",
        "• They believe a refund is due",
        "• They did not receive a purchased ancillary service",
        "• They received a notice that their ticket has been cancelled",
        "• They need assistance with a future travel credit",
        "Delaying a cancellation or refund request may affect the available options under the applicable airline rules."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "22. Final Statement",
      content: [
        "Tickettoafrica.com and Noam Flyers Inc. are committed to providing clear information about cancellation and refund procedures.",
        "Because Tickettoafrica.com acts as an independent travel agency, customers should understand that airline fare rules and supplier policies can differ significantly between airlines, routes, fare types, and ticket conditions.",
        "Our role is to facilitate the booking, provide applicable agency services, communicate available options, and process refunds or other transactions within the authority available to us.",
        "",
        "Tickettoafrica.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  // Post-Ticketing Service Fees Sections
  const feeSections = [
    {
      icon: FileText,
      title: "Post-Ticketing Service Fees",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. ${BRAND.name} is an independent travel agency and is not an airline.`,
        "This page explains the post-ticketing service fees that Noam Flyers Inc. may charge after a reservation has been confirmed or an airline ticket has been issued. These fees may apply when customers request services such as cancellation processing, refund assistance, ticket exchanges, reissues, future-travel-credit handling, waiver requests, name-correction administration, duplicate-booking investigation, or other post-sale services.",
        "Noam Flyers Inc.'s post-ticketing service fees are separate from any charges imposed by an airline, airport, government authority, supplier, or other third party. Such additional amounts may include airline penalties, fare differences, government taxes, airport charges, baggage fees, seat-selection fees, supplier penalties, or other applicable charges."
      ]
    },
    {
      icon: Info,
      title: "1. Purpose of Post-Ticketing Service Fees",
      content: [
        "Post-ticketing services often require substantially more manual work than the original booking process.",
        "Depending on the request, Noam Flyers Inc. may need to:",
        "• Review the customer's ticket and fare rules",
        "• Determine whether the requested action is permitted",
        "• Contact the airline or supplier",
        "• Request a waiver or exception",
        "• Calculate applicable fare differences",
        "• Process a refund request",
        "• Process a ticket exchange or reissue",
        "• Review ticket usage and remaining value",
        "• Submit supporting documentation",
        "• Update reservation records",
        "• Coordinate payment or refund information",
        "• Communicate the outcome to the customer",
        "Because these services require additional agency resources, Noam Flyers Inc. may charge a separate post-ticketing service fee."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "2. When a Post-Ticketing Fee May Apply",
      content: [
        "A post-ticketing service fee may apply when a customer requests assistance after a booking has been confirmed or a ticket has been issued.",
        "Examples include:",
        "• Voluntary cancellation",
        "• Refund requests",
        "• Ticket exchanges",
        "• Ticket reissues",
        "• Future travel credit assistance",
        "• Name corrections",
        "• Duplicate booking investigation",
        "• No-show recovery requests",
        "• Waiver requests",
        "• Medical or bereavement documentation handling",
        "• Visa-related waiver requests",
        "• Military waiver requests",
        "• Ancillary-service refund requests",
        "• Schedule-change assistance involving a customer-requested alternative",
        "• Other manual post-ticketing services",
        "The applicable fee depends on the type and complexity of the service requested."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "3. Agency Fees Are Separate From Airline Charges",
      content: [
        "Noam Flyers Inc.'s post-ticketing service fees are agency fees.",
        "They are separate from:",
        "• Airline cancellation penalties",
        "• Airline change fees",
        "• Fare differences",
        "• Airline no-show penalties",
        "• Government taxes",
        "• Airport charges",
        "• Baggage charges",
        "• Seat-selection charges",
        "• Airline ancillary fees",
        "• Supplier penalties",
        "• Other third-party charges",
        "Payment of a Noam Flyers Inc. service fee does not eliminate or replace an airline-imposed charge.",
        "Where an airline requires an additional payment to complete a requested change, exchange, reissue, cancellation, or other transaction, that amount will be separate from the applicable Noam Flyers Inc. service fee."
      ],
      twoColumn: true
    },
    {
      icon: Users,
      title: "4. Fee Per Passenger, Ticket, or Service Request",
      content: [
        "Unless otherwise stated, post-ticketing service fees may be assessed per passenger, per ticket, or per service request, depending on the nature of the transaction.",
        "A booking involving multiple passengers or multiple tickets may therefore result in more than one service fee where separate work is required.",
        "For example, if individual passenger tickets must be processed separately, the applicable service may need to be performed separately for each ticket.",
        "Where a single service request covers multiple passengers and can reasonably be completed as one transaction, Noam Flyers Inc. may determine the applicable fee based on the published fee schedule or the amount quoted before the service begins."
      ]
    },
    {
      icon: AlertCircle,
      title: "5. Fee Does Not Guarantee Airline Approval",
      content: [
        "Payment of a post-ticketing service fee does not guarantee that an airline or supplier will approve the requested action.",
        "For example:",
        "• A requested name change may not be permitted",
        "• A refund may be prohibited by the fare rules",
        "• A waiver may be denied",
        "• A missed flight may have no remaining value",
        "• A low-cost-carrier reservation may require direct airline handling",
        "• An airline may reject a requested exception",
        "• A ticket may no longer qualify for a particular change or refund",
        "The Noam Flyers Inc. service fee compensates the agency for the applicable service work. It does not represent a guarantee that the airline will approve the requested outcome unless the specific service is expressly described as success-based."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "6. Requests That Cannot Be Completed",
      content: [
        "Noam Flyers Inc. may determine that a requested post-ticketing service cannot be completed because of airline rules, ticket status, timing, supplier restrictions, technical limitations, or other circumstances.",
        "Where a request is clearly impossible before substantive work begins, Noam Flyers Inc. will generally not charge the applicable service fee or will reverse a fee that was collected for that request.",
        "Where substantive agency work has already begun, the applicable service fee may remain payable even if the airline or supplier subsequently declines the requested action."
      ]
    },
    {
      icon: XCircle,
      title: "7. Voluntary Cancellation Assistance",
      content: [
        "Customers may request assistance cancelling an airline ticket after ticket issuance.",
        "The applicable airline fare rules determine whether the ticket is:",
        "• Refundable",
        "• Refundable subject to deductions",
        "• Eligible for future travel credit",
        "• Exchangeable",
        "• Subject to a cancellation penalty",
        "• Non-refundable",
        "• Without remaining value",
        "Where Noam Flyers Inc. provides cancellation assistance, an applicable post-ticketing service fee may be charged in addition to any airline-imposed cancellation penalty or other applicable amount."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "8. Refund Processing",
      content: [
        "A refund request may require Noam Flyers Inc. to review the ticket, determine eligibility, contact the airline, submit documentation, calculate applicable amounts, and process or monitor the refund.",
        "An applicable refund-processing service fee may therefore apply.",
        "The service fee remains separate from the actual refund amount approved by the airline or otherwise required under applicable law.",
        "Where a refund is denied because the ticket is non-refundable or otherwise ineligible, Noam Flyers Inc. may still charge the disclosed service fee where substantive refund-processing work was performed."
      ]
    },
    {
      icon: CreditCard,
      title: "9. Ticket Exchange and Reissue",
      content: [
        "Customers requesting a ticket change or reissue may be responsible for:",
        "• The applicable Noam Flyers Inc. service fee;",
        "• Any airline change penalty, if applicable;",
        "• Any fare difference;",
        "• Any additional taxes or government charges; and",
        "• Any other supplier-imposed amount required to complete the transaction.",
        "Before processing an exchange or reissue, Noam Flyers Inc. may provide the customer with the applicable total amount required to complete the requested change."
      ]
    },
    {
      icon: CreditCard,
      title: "10. Future Travel Credit Assistance",
      content: [
        "Where an airline permits a cancelled ticket to retain value as a future travel credit, Noam Flyers Inc. may assist with documenting, reviewing, or applying the credit.",
        "A service fee may apply for manual assistance.",
        "Future travel credits may be subject to airline-specific conditions, including:",
        "• Expiration dates",
        "• Passenger restrictions",
        "• Transfer restrictions",
        "• Route restrictions",
        "• Fare differences",
        "• Change restrictions",
        "• Redemption requirements",
        "Noam Flyers Inc. does not control the airline's future-credit rules."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "11. Name Correction Services",
      content: [
        "Name corrections are subject to the applicable airline's rules.",
        "Where an airline permits a minor correction, Noam Flyers Inc. may assist with the correction process and charge the applicable service fee.",
        "A full passenger-name change may not be permitted by the airline.",
        "If the airline requires cancellation and rebooking instead of a name correction, the customer may be responsible for the applicable fare difference, airline charges, and Noam Flyers Inc. service fee.",
        "Payment of a name-correction service fee does not guarantee airline approval."
      ]
    },
    {
      icon: AlertCircle,
      title: "12. No-Show and Missed-Flight Assistance",
      content: [
        "A customer who misses a scheduled flight without cancelling or changing the reservation in accordance with the applicable airline rules may be considered a no-show.",
        "No-show consequences may include:",
        "• Loss of ticket value",
        "• Cancellation of remaining flight segments",
        "• Loss of future travel credit",
        "• Additional airline charges",
        "• Requirement for airline approval before reinstatement",
        "Noam Flyers Inc. may attempt to request reinstatement, recovery of remaining value, or an applicable waiver.",
        "A no-show recovery or reinstatement service fee may apply.",
        "Noam Flyers Inc. does not guarantee that the airline will approve reinstatement or recovery."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "13. Waiver and Special-Case Requests",
      content: [
        "Noam Flyers Inc. may assist with requests involving circumstances such as:",
        "• Medical situations",
        "• Bereavement",
        "• Visa refusal",
        "• Military orders",
        "• Severe travel disruptions",
        "• Duplicate bookings",
        "• Other circumstances for which an airline may provide a discretionary waiver",
        "Supporting documentation may be required.",
        "A waiver-processing fee may apply depending on the type and complexity of the request.",
        "An airline may independently approve or deny the requested waiver.",
        "Any airline waiver applies only according to the airline's decision and does not automatically waive Noam Flyers Inc.'s own service fee."
      ]
    },
    {
      icon: DollarSign,
      title: "14. Ancillary-Service Refund Assistance",
      content: [
        "Customers may request assistance with refunds involving airline ancillary services, including:",
        "• Seats",
        "• Checked baggage",
        "• Priority services",
        "• Upgrades",
        "• Other paid airline services",
        "Where manual agency assistance is required, a service fee may apply.",
        "The actual refund entitlement remains subject to the airline's rules, applicable law, merchant-of-record structure, and whether the service was provided."
      ]
    },
    {
      icon: Clock,
      title: "15. Schedule-Change Assistance",
      content: [
        "When an airline makes a schedule change or cancellation, Noam Flyers Inc. may assist the customer with the airline's proposed alternative.",
        "Where the customer simply accepts an eligible airline-provided alternative, Noam Flyers Inc. may not charge a post-ticketing service fee for basic schedule-change assistance, subject to the applicable service terms.",
        "If the customer requests an alternative itinerary that requires additional agency work beyond the standard airline-provided solution, a post-ticketing service fee may apply.",
        "Any airline fare difference or other applicable airline charge will remain separate."
      ]
    },
    {
      icon: Info,
      title: "16. Duplicate Booking Investigation",
      content: [
        "Customers who believe that duplicate reservations have been created may request assistance investigating and consolidating the bookings.",
        "A nominal service fee may apply where manual investigation is required.",
        "Where a duplicate booking was clearly caused by an error attributable to Noam Flyers Inc., the applicable agency fee may be waived."
      ]
    },
    {
      icon: FileText,
      title: "17. Ticket Copies and Itinerary Resends",
      content: [
        "Basic requests for a ticket copy, itinerary resend, or booking-status confirmation may generally be provided without a post-ticketing service fee.",
        "However, if extensive manual research or retrieval from archived records is required, an administrative fee may apply where disclosed before the service is performed."
      ]
    },
    {
      icon: CreditCard,
      title: "18. Chargeback and Duplicate-Payment Investigations",
      content: [
        "Where a customer requests an investigation into a duplicate payment or billing issue, Noam Flyers Inc. may review the relevant booking, payment records, transaction history, and ticketing records.",
        "A service fee may apply for customer-requested research unless the investigation confirms that the issue resulted from a Noam Flyers Inc. billing error.",
        "This does not limit any customer's rights under applicable law or applicable payment-network dispute procedures."
      ]
    },
    {
      icon: FileText,
      title: "19. Proposed Post-Ticketing Service Fee Schedule",
      content: [
        "The following fee schedule should be published only after internal adoption and alignment with customer-service scripts, booking disclosures, payment procedures, and staff training.",
        "",
        "Service Category: Cancellation assistance within 24 hours where airline/fare permits reversal — online self-service",
        "Noam Flyers Inc. Service Fee: USD 0.00",
        "",
        "Service Category: Cancellation assistance within 24 hours where airline/fare permits reversal — agent-assisted",
        "Noam Flyers Inc. Service Fee: USD 25.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 50.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — international economy",
        "Noam Flyers Inc. Service Fee: USD 75.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — premium cabin",
        "Noam Flyers Inc. Service Fee: USD 100.00",
        "",
        "Service Category: Voluntary refund processing — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 100.00",
        "",
        "Service Category: Voluntary refund processing — international economy",
        "Noam Flyers Inc. Service Fee: USD 175.00",
        "",
        "Service Category: Voluntary refund processing — premium cabin",
        "Noam Flyers Inc. Service Fee: USD 200.00",
        "",
        "Service Category: Exchange/reissue more than 10 days before departure — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 75.00",
        "",
        "Service Category: Exchange/reissue more than 10 days before departure — international economy",
        "Noam Flyers Inc. Service Fee: USD 150.00",
        "",
        "Service Category: Exchange/reissue within 10 days of departure — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 125.00",
        "",
        "Service Category: Exchange/reissue within 10 days of departure — international economy or premium cabin",
        "Noam Flyers Inc. Service Fee: USD 200.00",
        "",
        "Service Category: Minor name-correction administration where permitted by airline",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 100.00",
        "",
        "Service Category: Full name-change or cancel/rebook handling where airline does not permit correction",
        "Noam Flyers Inc. Service Fee: Quoted before action",
        "",
        "Service Category: No-show reinstatement or missed-flight recovery request",
        "Noam Flyers Inc. Service Fee: USD 150.00",
        "",
        "Service Category: Duplicate-booking investigation and consolidation request",
        "Noam Flyers Inc. Service Fee: USD 25.00",
        "",
        "Service Category: Medical, bereavement, visa, military, or other documentary waiver request",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 150.00 depending on complexity",
        "",
        "Service Category: Ancillary refund assistance for seat, baggage, or unused paid service",
        "Noam Flyers Inc. Service Fee: USD 25.00 per ancillary item or service request",
        "",
        "Service Category: Airline schedule-change assistance where customer accepts the airline's proposed alternative",
        "Noam Flyers Inc. Service Fee: No Noam Flyers Inc. fee",
        "",
        "Service Category: Schedule-change assistance requiring a customer-requested alternative outside the airline's default offer",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 100.00",
        "",
        "Service Category: Ticket copy, itinerary resend, or basic booking-status request",
        "Noam Flyers Inc. Service Fee: No fee, unless extensive archive research is required",
        "",
        "Service Category: Customer-requested chargeback research or duplicate-payment investigation",
        "Noam Flyers Inc. Service Fee: USD 35.00 unless a Noam Flyers Inc. billing error is confirmed"
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "20. Fee Disclosure Before Service",
      content: [
        "Where a post-ticketing service fee applies, Noam Flyers Inc. will disclose the applicable agency fee before the customer authorizes the service, unless the fee has already been clearly disclosed and accepted under the applicable booking or service terms.",
        "The customer should have an opportunity to review the applicable:",
        "• Agency service fee",
        "• Airline penalty",
        "• Fare difference",
        "• Taxes",
        "• Supplier charges",
        "• Other applicable amounts",
        "before authorizing a charge or proceeding with the requested service."
      ]
    },
    {
      icon: CreditCard,
      title: "21. Refundability of Post-Ticketing Service Fees",
      content: [
        "Post-ticketing service fees compensate Noam Flyers Inc. for agency work performed after the original booking.",
        "Unless expressly identified as a success-based service:",
        "• A service fee may be non-refundable once substantive work has begun.",
        "• An airline's denial of a request does not automatically make the agency service fee refundable.",
        "If Noam Flyers Inc. determines that a request is clearly impossible before substantive work begins, the applicable fee should generally not be charged or should be reversed.",
        "If a fee was collected but Noam Flyers Inc. performed no substantive work on the request, the fee may be refunded.",
        "Any fee waiver or reduction applies only to Noam Flyers Inc.'s own fee and does not automatically waive an airline or supplier charge."
      ]
    },
    {
      icon: Heart,
      title: "22. Compassionate Fee Reductions",
      content: [
        "Noam Flyers Inc. may, at its discretion, reduce or waive its own post-ticketing service fee in appropriate circumstances.",
        "Examples may include:",
        "• Bereavement",
        "• Active military orders",
        "• Severe accessibility-related inability to use available self-service tools",
        "• Other comparable hardship circumstances recognized by Noam Flyers Inc.",
        "Where a reduction or waiver is granted, it applies only to Noam Flyers Inc.'s own service fee.",
        "It does not automatically waive:",
        "• Airline penalties",
        "• Fare differences",
        "• Government charges",
        "• Airport fees",
        "• Supplier charges",
        "• Other third-party costs",
        "Any compassionate reduction should be based on reasonable supporting documentation and applied consistently according to Noam Flyers Inc.'s internal procedures."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "23. Payment and Original Form of Payment",
      content: [
        "Where a refund or monetary adjustment is approved, Noam Flyers Inc. generally processes the applicable amount to the original form of payment, subject to applicable law, payment-provider requirements, fraud controls, and the transaction structure.",
        "Customers should not assume that a refund can automatically be transferred to:",
        "• A different credit card",
        "• Another person's card",
        "• A different bank account",
        "• A different payment method",
        "Identity verification may be required before a monetary adjustment is processed."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "24. Customer Acknowledgment",
      content: [
        "By authorizing a post-ticketing service, the customer acknowledges that:",
        "• The applicable Noam Flyers Inc. service fee has been disclosed.",
        "• The service fee is separate from airline and supplier charges.",
        "• Payment of the service fee does not guarantee airline approval.",
        "• The requested action remains subject to applicable airline rules.",
        "• Additional airline or supplier charges may apply.",
        "• The customer has had an opportunity to review the applicable charges before authorizing the service."
      ]
    },
    {
      icon: Shield,
      title: "25. Legal Clause",
      content: [
        "Noam Flyers Inc.'s post-ticketing service fees compensate the agency for after-sale travel services and administrative work.",
        "These fees are separate from airline-imposed penalties, fare differences, government taxes, airport charges, baggage fees, seat fees, supplier charges, and other third-party costs.",
        "Payment of a Noam Flyers Inc. post-ticketing service fee does not guarantee that an airline or supplier will approve a requested cancellation, refund, waiver, exchange, reissue, name correction, reinstatement, or other requested action.",
        "Any airline or supplier decision remains subject to that provider's applicable rules, policies, availability, and applicable law."
      ]
    },
    {
      icon: FileText,
      title: "26. Final Statement",
      content: [
        "Tickettoafrica.com is committed to providing transparent information about post-ticketing service charges.",
        "Noam Flyers Inc. will distinguish its own agency service fees from charges imposed by airlines, suppliers, airports, governments, or other third parties.",
        "Customers will be informed of applicable agency fees before authorization of the relevant post-ticketing service, subject to the terms governing the original transaction and the applicable service requested.",
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
            <span className="text-[#1a330d]/60">Cancellation & Refund Policy</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1a330d' }}>
                Cancellation & Refund Policy
              </h1>
              <div 
                className="w-10 sm:w-12 h-0.5 sm:h-1 mt-2 sm:mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #274e13, #3a6e1a)`
                }}
              />
            </div>

            {/* Cancellation & Refund Policy Sections */}
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

                          if (paragraph.startsWith("Scenario:") || paragraph.startsWith("Service Category:") || paragraph.startsWith("Noam Flyers Inc. Service Fee:")) {
                            return (
                              <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base font-semibold" style={{ color: '#1a330d' }}>
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

            {/* Post-Ticketing Service Fees Section */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8f0e3' }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#1a330d' }}>
                Post-Ticketing Service Fees
              </h2>
              <div 
                className="w-10 sm:w-12 h-0.5 sm:h-1 mb-6 rounded-full"
                style={{
                  background: `linear-gradient(to right, #274e13, #3a6e1a)`
                }}
              />
              
              {feeSections.map((section, index) => {
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

                            if (paragraph.startsWith("Service Category:") || paragraph.startsWith("Noam Flyers Inc. Service Fee:")) {
                              return (
                                <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base font-semibold" style={{ color: '#1a330d' }}>
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
            </div>

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