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
  metadataBase: new URL("https://venezuelanews.app"),
  title: {
    default: "M&T Venezuela | Noticias",
    template: "%s | M&T Venezuela"
  },
  description: "Periodismo independiente sobre Venezuela. Noticias verificadas, análisis editorial y cobertura continua.",
  keywords: [
    "Venezuela", "Noticias", "Periodismo", "Noticias Venezuela",
    "Actualidad", "Economía", "Política", "Sociedad"
  ],
  authors: [{ name: "M&T Venezuela" }],
  creator: "M&T Venezuela",
  publisher: "M&T Venezuela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "M&T Venezuela | Noticias",
    description: "Periodismo independiente sobre Venezuela. Noticias verificadas y cobertura continua.",
    url: "https://venezuelanews.app",
    siteName: "M&T Venezuela",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M&T Venezuela",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&T Venezuela | Noticias",
    description: "Periodismo independiente sobre Venezuela. Noticias verificadas y cobertura continua.",
    images: ["/twitter-image.jpg"],
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
              "logo": "https://venezuelanews.app/icon.png",
              "description": "Periodismo independiente sobre Venezuela.",
              "ethicsPolicy": "https://venezuelanews.app/institucional/etica",
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
