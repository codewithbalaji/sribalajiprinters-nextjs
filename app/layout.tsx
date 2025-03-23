import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Sri Balaji Printers - Professional Printing Services in Chennai',
    template: '%s | Sri Balaji Printers'
  },
  description: 'Professional printing services in Chennai. We offer high-quality digital printing, offset printing, and wide format printing solutions for all your business needs.',
  keywords: [
    "Sri Balaji Printers",
    "Best printing services in Chennai",
    "Digital printing services in Ambattur",
    "Offset printing company in Chennai",
    "Business card printing in Ambattur",
    "High-quality brochure printing in Chennai",
    "Custom flex banner printing in Ambattur",
    "Affordable visiting card printing in Chennai",
    "Professional letterhead printing services in Ambattur",
    "Bill book printing services near me",
    "Wedding invitation printing in Chennai",
    "Bulk pamphlet printing services in Ambattur",
    "Sticker and label printing in Chennai",
    "High-resolution banner printing in Ambattur",
    "Custom flyer printing services in Chennai",
    "Corporate printing solutions in Chennai",
    "Premium visiting card printing in Ambattur",
    "Low-cost flex printing in Chennai",
    "Urgent digital printing services in Ambattur",
    "Eco-friendly printing services in Chennai",
    "Offset printing for business branding in Ambattur"
  ],
  authors: [{ name: 'Sri Balaji Printers' }],
  creator: 'Sri Balaji Printers',
  publisher: 'Sri Balaji Printers',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://sribalajiprinters.com'),
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
