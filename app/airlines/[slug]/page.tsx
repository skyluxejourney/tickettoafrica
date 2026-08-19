// app/airlines/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirlineHero from "./components/AirlineHero";
import AirlinePolicy from "./components/AirlinePolicy";
import AirlineFAQ from "./components/AirlineFAQ";
import { getAirlineBySlug, getAirlineSlugs, type AirlineData } from "./constants";
import { COMPANY } from "../../constants";

// Generate static params for all airlines
export async function generateStaticParams() {
  return getAirlineSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each airline
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    return {
      title: "Airline Not Found",
      description: "The requested airline page could not be found.",
    };
  }

  return {
    title: airline.metadata.title,
    description: airline.metadata.description,
    keywords: airline.metadata.keywords,
    openGraph: {
      title: airline.metadata.title,
      description: airline.metadata.description,
      type: "website",
      siteName: airline.airline.name,
      url: `https://${COMPANY.domain}/airlines/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: airline.metadata.title,
      description: airline.metadata.description,
    },
    alternates: {
      canonical: `https://${COMPANY.domain}/airlines/${slug}`,
    },
  };
}

// For Next.js 15+, use this syntax
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AirlinePage({ params }: Props) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    notFound();
  }

  // ✅ AIRLINE SCHEMA MARKUP
  const airlineSchema = {
    "@context": "https://schema.org",
    "@type": "Airline",
    "name": airline.airline.name,
    "url": `https://${COMPANY.domain}/airlines/${slug}`,
    "description": airline.metadata.description,
    "brand": {
      "@type": "Brand",
      "name": airline.airline.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://${COMPANY.domain}/flights?airline=${slug}`
      },
      "query-input": "required name=airline"
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* ✅ AIRLINE SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(airlineSchema) }}
        />
        <AirlineHero airline={airline} />
        <AirlinePolicy airline={airline} />
        <AirlineFAQ airline={airline} />
      </main>
      <Footer />
    </>
  );
}