import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600'], // Choose weights you need
  style: ['normal', 'italic'], // Optional styles
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: "Vikram Singh | Full-Stack Developer & AI Specialist",
    template: "%s | Vikram Singh"
  },
  description: "Professional Full-Stack Developer and AI Specialist specializing in Next.js, React, TypeScript, and Agentic AI. Available for hire. View my portfolio, projects, and experience.",
  keywords: [
    "Vikram Singh",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "AI Developer",
    "Agentic AI",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "JavaScript Developer",
    "Node.js Developer",
    "Hire Developer",
    "Remote Developer"
  ],
  authors: [{ name: "Vikram Singh" }],
  creator: "Vikram Singh",
  publisher: "Vikram Singh",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikrambuilds.site", // Replace with your actual domain
    siteName: "Vikram Singh Portfolio",
    title: "Vikram Singh | Full-Stack Developer & AI Specialist",
    description: "Professional Full-Stack Developer and AI Specialist specializing in Next.js, React, TypeScript, and Agentic AI. Available for hire.",
    images: [
      {
        url: "/images/vikram_.png", // Your profile image
        width: 1200,
        height: 630,
        alt: "Vikram Singh - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Singh | Full-Stack Developer & AI Specialist",
    description: "Professional Full-Stack Developer and AI Specialist. Available for hire.",
    creator: "@vikramdotdev",
    images: ["/images/vikram_.png"],
  },
  icons: {
    icon: "/images/po.jpg",
    shortcut: "/images/po.jpg",
    apple: "/images/po.jpg",
  },
  metadataBase: new URL("https://vikrambuilds.site"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  category: "Portfolio",
  classification: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
         <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
