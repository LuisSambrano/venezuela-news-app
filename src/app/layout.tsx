import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
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
  metadataBase: new URL("https://venezuelanews.app"), // Replace with actual domain when live
  title: {
    default: "M&T Venezuela | Inteligencia Informativa",
    template: "%s | M&T Venezuela"
  },
  description: "Búnker digital de inteligencia Open-Source. Noticias verificadas, monitoreo económico en tiempo real y análisis forense de DDHH.",
  keywords: [
    "Venezuela", "Noticias", "OSINT", "Inteligencia", "Derechos Humanos", 
    "Censura", "Libertad de Expresión", "Dólar Monitor", "Crisis Humanitaria", 
    "Verificación", "Desinformación", "Seguridad Digital"
  ],
  authors: [{ name: "M&T Venezuela Intelligence Unit" }],
  creator: "M&T Venezuela",
  publisher: "M&T Venezuela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "M&T Venezuela | Inteligencia Informativa",
    description: "Búnker digital de inteligencia contra la censura. Monitoreo en tiempo real y verdad verificada.",
    url: "https://venezuelanews.app",
    siteName: "M&T Venezuela",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public/
        width: 1200,
        height: 630,
        alt: "M&T Venezuela Intelligence Hub",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&T Venezuela | Inteligencia Informativa",
    description: "La Verdad es Poder. Sistema de inteligencia open-source contra la desinformación.",
    images: ["/twitter-image.jpg"], // Needs to be added to public/
    creator: "@MandTVenezuela", // Replace with actual handle
  },
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
};




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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "name": "M&T Venezuela",
              "url": "https://venezuelanews.app",
              "logo": "https://venezuelanews.app/logo.png",
              "sameAs": [
                "https://twitter.com/MandTVenezuela",
                "https://instagram.com/MandTVenezuela"
              ],
              "missionCoveragePrioritiesPolicy": "https://venezuelanews.app/institucional/etica",
              "correctionsPolicy": "https://venezuelanews.app/institucional/verificacion",
              "verificationFactCheckingPolicy": "https://venezuelanews.app/institucional/metodologia"
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LazyMotionProvider>
            <main className="min-h-screen">
            {children}
          </main>
          </LazyMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
