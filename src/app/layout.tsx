import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "24/7 Security Guard Services London & South East | ASK Security",
    template: "%s | ASK Security London",
  },
  description: "Professional 24/7 security guard services across London & South East. SIA-licensed guards for events, corporate, retail & residential. Get a free quote: +44 7476 058050",
  keywords: ["security guards London", "security services London", "SIA security guards", "event security London", "corporate security", "retail security", "close protection"],
  authors: [{ name: "ASK Security London" }],
  creator: "ASK Security London",
  publisher: "Ask Prime Security Ltd",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://asksecurity.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "24/7 Security Guard Services London & South East | ASK Security",
    description: "Professional 24/7 security guard services across London & South East. SIA-licensed guards for events, corporate, retail & residential.",
    url: "https://asksecurity.co.uk",
    siteName: "ASK Security London",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Security Guard Services London & South East | ASK Security",
    description: "Professional 24/7 security guard services across London & South East. SIA-licensed guards.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": "ASK Security London",
              "alternateName": "Ask Prime Security Ltd",
              "url": "https://asksecurity.co.uk",
              "telephone": "+447476058050",
              "email": "contact@asksecurity.co.uk",
              "priceRange": "££",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "169 Watling Street",
                "addressLocality": "Radlett",
                "postalCode": "WD7 7NQ",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5255",
                "longitude": "-0.0863"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "areaServed": [
                { "@type": "City", "name": "London" },
                { "@type": "AdministrativeArea", "name": "South East England" }
              ],
              "description": "Professional 24/7 security guard services across London and South East England. SIA-licensed security personnel for corporate, retail, event, and personal protection.",
              "sameAs": ["https://www.facebook.com/profile.php?id=61576186452339", "https://www.instagram.com/asksecurityltd/"]
            }),
          }}
        />
      </head>
      <body className={`${oswald.variable} ${sourceSans3.variable} antialiased min-h-screen flex flex-col`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FF8C00] text-white px-4 py-2 z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-20 bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
