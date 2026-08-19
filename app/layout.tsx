// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import StatCounter from '@/components/StatCounter';
import { COMPANY, META } from './constants';

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          /* Libertinus Serif Font Classes */
          .libertinus-serif-regular {
            font-family: "Libertinus Serif", serif;
            font-weight: 400;
            font-style: normal;
          }

          .libertinus-serif-semibold {
            font-family: "Libertinus Serif", serif;
            font-weight: 600;
            font-style: normal;
          }

          .libertinus-serif-bold {
            font-family: "Libertinus Serif", serif;
            font-weight: 700;
            font-style: normal;
          }

          .libertinus-serif-regular-italic {
            font-family: "Libertinus Serif", serif;
            font-weight: 400;
            font-style: italic;
          }

          .libertinus-serif-semibold-italic {
            font-family: "Libertinus Serif", serif;
            font-weight: 600;
            font-style: italic;
          }

          .libertinus-serif-bold-italic {
            font-family: "Libertinus Serif", serif;
            font-weight: 700;
            font-style: italic;
          }

          /* Apply Libertinus Serif globally */
          body {
            font-family: "Libertinus Serif", serif;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: "Libertinus Serif", serif;
            font-weight: 700;
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