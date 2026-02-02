import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Font Configuration (Antigravity Standard)
const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&T Venezuela | Inteligencia Informativa",
  description: "Portal de Inteligencia Open-Source. Noticias verificadas, monitoreo económico y análisis forense.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png", 
    apple: "/icon.png",
  }
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
