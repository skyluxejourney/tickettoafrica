// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import StatCounter from '@/components/StatCounter';
import { COMPANY, META } from './constants';

// ✅ Saira Font Import
const sairaFont = {
  className: 'saira-font',
  style: {
    fontFamily: '"Saira", sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '400',
    fontStyle: 'normal',
    fontVariationSettings: '"wdth" 100',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  
  title: {
    default: `${COMPANY.name} | Flights, Hotels & Safari Packages to Africa`,
    template: `%s | ${COMPANY.name}`,
  },
  
  description: 'Book cheap flights, luxury hotels, and customized safari packages to Africa. Best deals on Cape Town, Nairobi, Cairo, Marrakech & more. 24/7 customer support.',
  
  keywords: [
    COMPANY.name,
    'cheap flights to Africa',
    'Africa holiday packages',
    'Cape Town package',
    'Nairobi package',
    'Cairo package',
    'Marrakech package',
    'safari packages',
    'Victoria Falls package',
    'Serengeti safari',
    'book flights online',
    'luxury travel agency',
    'holiday deals',
    'South Africa travel',
    'Kenya travel',
    'Egypt travel',
    'Morocco travel',
  ],
  
  authors: [{ name: COMPANY.name }],
  
  openGraph: {
    title: `${COMPANY.name} | Flights, Hotels & Safari Packages to Africa`,
    description: 'Book cheap flights, luxury hotels, and customized safari packages to Africa. Best deals on Cape Town, Nairobi, Cairo, Marrakech & more.',
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Travel to Africa`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Flights, Hotels & Safari Packages to Africa`,
    description: 'Book cheap flights, luxury hotels, and customized safari packages to Africa.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: `https://${COMPANY.domain}`,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased saira-font">
      <head>
        {/* ✅ Saira Font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          /* Saira Font Classes */
          .saira-font {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-light {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 300;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-regular {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-medium {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-semibold {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-bold {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-extrabold {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          .saira-black {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 900;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          /* Apply Saira globally */
          body {
            font-family: "Saira", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: "Saira", sans-serif;
            font-weight: 700;
            font-optical-sizing: auto;
            font-variation-settings: "wdth" 100;
          }
        `}</style>
      </head>
      <body className="min-h-full bg-white text-gray-900 flex flex-col">
        <StatCounter />
        {children}
      </body>
    </html>
  );
}