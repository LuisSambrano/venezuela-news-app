import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import "./globals.css";

// Font Configuration (Matching Brand)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "M&T Venezuela | Inteligencia Informativa",
  description: "Portal de Inteligencia Open-Source. Noticias verificadas, monitoreo económico y análisis forense.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png", // We will need to generate this
    apple: "/icon.png",
  }
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
