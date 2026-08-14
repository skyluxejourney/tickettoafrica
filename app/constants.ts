// Company Information
export const COMPANY = {
  name: "Ticket to Africa",
  domain: "tickettoafrica.com",
  email: "Reservations@tickettoafrica.com",
  phone: "+1-8338772671",
  phoneRaw: "18338772671",
  address: "Basement Plot Number 35 Sector 11 Dwarka New Delhi 110075",
  year: new Date().getFullYear(),
};

// Social Media Links
export const SOCIAL = {
  facebook: "https://facebook.com/tickettoafrica",
  twitter: "https://twitter.com/tickettoafrica",
  instagram: "https://instagram.com/tickettoafrica",
  youtube: "https://youtube.com/tickettoafrica",
};

// Contact Information
export const CONTACT = {
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: COMPANY.address,
  supportHours: "24/7 Customer Support",
};

// Brand Assets
export const BRAND = {
  name: COMPANY.name,
  tagline: "Travel & Adventures",
  logo: "/logo/tikiticket.png", // Consider updating logo path if you have a new logo
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Luxury Travel & Holiday Packages`,
  description: `Book luxury holiday packages, flights, hotels and customized trips with ${COMPANY.name}.`,
  keywords: [
    COMPANY.name,
    "travel agency",
    "holiday packages",
    "flights",
    "hotels",
    "Cape Town package",
    "Nairobi package",
    "Cairo package",
    "Marrakech package",
  ],
};

export default {
  COMPANY,
  SOCIAL,
  CONTACT,
  BRAND,
  META,
};