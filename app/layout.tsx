import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TicketToAfrica | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with TicketToAfrica.',
  keywords: [
    'Skyluxe Journey',
    'ticket to africa',
    'travel agency',
    'holiday packages',
    'flights',
    'hotels',
    'Cape Town package',
    'Nairobi package',
    'Cairo package',
    'Marrakech package',
  ],
  icons: {
    icon: '/favicon.ico',
  },
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
        {children}
      </body>
    </html>
  );
}