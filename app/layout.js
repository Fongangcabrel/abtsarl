import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'ABT – African Business Trade | Transport & Logistique à Kribi & Douala',
  description:
    "Commissionnaire en douane, transit, transport national et manutention à Kribi et Douala. African Business Trade Sarl dessert le Cameroun, le Tchad, la RCA et le Congo. L'intégrité dans les affaires.",
  keywords: [
    'transit douane Cameroun',
    'transport Kribi Douala',
    'logistique Tchad RCA Congo',
    'manutention conteneurs',
    'ABT African Business Trade',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
