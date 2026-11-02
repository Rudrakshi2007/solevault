import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickAddModal } from '@/components/QuickAddModal';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import { AtmosphericBackground } from '@/components/AtmosphericBackground';

export const metadata: Metadata = {
  title: 'SOLEVAULT | Find Your Next Obsession',
  description:
    'The digital flagship for luxury footwear, curated grails, and iconic sneaker culture. Explore authentic silhouettes with verified specifications in INR.',
  keywords: [
    'sneakers',
    'luxury footwear',
    'air jordan',
    'adidas samba',
    'new balance 990',
    'asics gel kayano',
    'running shoes',
    'streetwear',
    'india',
  ],
  openGraph: {
    title: 'SOLEVAULT | Premium Sneaker E-Commerce Experience',
    description: 'Find Your Next Obsession. The luxury digital flagship for global footwear culture.',
    url: 'https://solevault.vercel.app',
    siteName: 'SOLEVAULT',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-white min-h-screen flex flex-col justify-between selection:bg-[#D943A4] selection:text-white relative font-sans antialiased bg-[#063C78]">
        {/* 5-Layer Real CSS Atmospheric Background */}
        <AtmosphericBackground />

        {/* Foreground Content Stack */}
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
        </div>

        {/* Global Modals & Drawers */}
        <CartDrawer />
        <QuickAddModal />
        <SizeGuideModal />
      </body>
    </html>
  );
}
