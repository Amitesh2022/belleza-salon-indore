import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatWidget from "@/components/ChatWidget";
import { instagramHref, mapsHref } from "@/lib/contact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://amitesh2022.github.io/belleza-salon-indore";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Belleza Salon | Haircut & Beauty Salon in Chota Bangarda, Indore",
    template: "%s | Belleza Salon Indore",
  },
  description:
    "Book men’s, women’s and kids’ haircuts at Belleza Salon near D-Mart, Chota Bangarda, Indore. See the full price list for hair colour, spa, waxing, skin and nail services.",
  keywords: [
    "haircut near me",
    "salon near me",
    "hair salon Chota Bangarda",
    "family salon Indore",
    "ladies salon Chota Bangarda",
    "men's haircut Chota Bangarda",
    "salon near D-Mart Chota Bangarda",
    "unisex salon near Indore Airport",
    "bridal makeup Indore",
    "hair colour salon Indore",
    "salon price list Indore",
    "facial price Chota Bangarda",
    "waxing price Indore",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: `${siteUrl.replace(/\/$/, "")}/favicon.ico`, sizes: "any" },
      {
        url: `${siteUrl.replace(/\/$/, "")}/icon-512.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      { url: `${siteUrl.replace(/\/$/, "")}/apple-touch-icon.png`, sizes: "180x180" },
    ],
  },
  manifest: `${siteUrl.replace(/\/$/, "")}/site.webmanifest`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Belleza Salon",
    title: "Belleza Salon | Hair • Beauty • Makeup",
    description:
      "Your neighbourhood family salon near D-Mart, Chota Bangarda, Indore.",
    images: [
      {
        url: `${siteUrl.replace(/\/$/, "")}/og.png`,
        width: 1200,
        height: 630,
        alt: "Belleza Salon in Chota Bangarda, Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belleza Salon | Hair • Beauty • Makeup",
    description: "Family salon near D-Mart, Chota Bangarda, Indore.",
    images: [`${siteUrl.replace(/\/$/, "")}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "BeautySalon"],
  name: "Belleza Salon",
  alternateName: "De Belleza Family Salon",
  description:
    "Family hair and beauty salon near D-Mart in Chota Bangarda, Indore, offering haircuts, styling, colour, hair spa, makeup, skin care and nail services.",
  telephone: "+91-78794-12318",
  priceRange: "₹₹",
  image: `${siteUrl}/og.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 4, Shakuntala Supermarket, Near D-Mart, Chota Bangarda Road",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Chota Bangarda", "Sangam Nagar", "Indore Airport", "Indore"],
  sameAs: [instagramHref],
  hasMap: mapsHref,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-78794-12318",
    contactType: "appointments",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
