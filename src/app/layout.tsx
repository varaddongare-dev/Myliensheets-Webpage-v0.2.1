import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import ClientFloatingLogos from "@/components/ClientFloatingLogos";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta", 
});

export const metadata = {
  title: "Myelinsheets",
  description: "Neuromarketing Framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} ${jakartaSans.variable} antialiased min-h-screen bg-white text-black relative overflow-x-hidden `}>
        {/* Safely renders on the client side without throwing Server Component errors */}
        <ClientFloatingLogos />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}