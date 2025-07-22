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
  title: "Vikram | Web & AI Developer",
  description: "A Next js app",
  icons:{
    icon: "/images/po.jpg"
  }
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
