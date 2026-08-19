// app/manifest.ts
import { MetadataRoute } from 'next';
import { COMPANY } from './constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.name} - Flights & Safari Packages`,
    short_name: 'TicketToAfrica',
    description: `Book cheap flights, luxury hotels, and safari packages to Africa with ${COMPANY.name}.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}