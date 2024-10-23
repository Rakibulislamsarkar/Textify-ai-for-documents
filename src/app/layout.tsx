import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import { usePathname } from "next/navigation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const soehne = localFont({  
  src: "/fonts/soehne-buch.6f91d491.ttf",
  variable: "--font-soehne",
});

export const metadata: Metadata = {
  title: "Textify - your documents, now conversational",
  description: "Instantly converse with your documents—upload, ask questions, and get answers effortlessly",
  icons: [{ rel: "icon", url: "favicon.png" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
      <html lang="en" className={"${soehne.variable}"}>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        
        {children}
      </body>
      
      
    </html>
    </ClerkProvider>
  );
}
