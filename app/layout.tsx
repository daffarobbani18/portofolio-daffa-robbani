import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import CustomCursor from "@/src/components/CustomCursor";
import AnimatedBackground from "@/src/components/AnimatedBackground";
import CommandPalette from "@/src/components/CommandPalette";
import Preloader from "@/src/components/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creative Technologist | Portfolio",
  description: "Portfolio sinematik seorang Creative Technologist yang menampilkan project dan keahlian dalam pengembangan web modern.",
  keywords: ["portfolio", "web developer", "creative technologist", "next.js", "typescript"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Creative Technologist | Portfolio",
    description: "Portfolio sinematik seorang Creative Technologist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-white cursor-none`}
      >
        {/* Preloader - Hacker Terminal Loading */}
        <Preloader />
        
        {/* Animated Aurora Background */}
        <AnimatedBackground />
        
        {/* Film Grain Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-noise opacity-[0.15] mix-blend-overlay" />
        
        {/* Command Palette - Global */}
        <CommandPalette />
        
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
