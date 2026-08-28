import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blaze Note — Ghi chép, phiên dịch & tóm tắt cuộc họp bằng AI',
  description:
    'Trợ lý cuộc họp AI: phiên âm realtime, phiên dịch 50+ ngôn ngữ, biên bản & tóm tắt tự động. Hỗ trợ Zoom, Teams, Google Meet.',
  keywords: [
    'Blaze Note',
    'bNote',
    'ghi chú cuộc họp',
    'biên bản họp tự động',
    'phiên dịch cuộc họp',
    'phiên âm tiếng Việt',
    'AI meeting notes',
    'real-time translation'
  ],
  icons: {
    icon: '/blaze-favicon.png',
    apple: '/blaze-touch.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-['Gilroy',sans-serif] bg-white text-stone-800 antialiased selection:bg-emerald-500/20">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
