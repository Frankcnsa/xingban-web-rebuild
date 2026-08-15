import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AIProcurer — Your AI Companion for a Safer, Brighter Life',
  description:
    'AI-powered personal assistants for elderly users. Get health guidance, scam alerts, daily reminders, and a friendly chat — all in one place.',
  keywords: ['AI companion', 'senior wellness', 'scam protection', 'elderly assistant'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        <Header />
        <main className="flex min-h-[calc(100vh-200px)] flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
