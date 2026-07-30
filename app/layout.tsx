import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://amitesh2022.github.io/belleza-salon-indore";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default:
        "Belleza Salon Indore | Hair, Beauty & Salon Price List",
      template: "%s | Belleza Salon Indore",
    },
    description:
      "Explore Belleza Salon Indore prices for haircuts, hair spa, hair colour, facials, waxing, manicure, pedicure, nails and massage services.",
    keywords: [
      "Belleza Salon Indore",
      "salon price list Indore",
      "haircut price Indore",
      "hair spa price Indore",
      "hair colour salon Indore",
      "facial price Indore",
      "waxing price Indore",
      "nail extension price Indore",
      "manicure pedicure Indore",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName: "Belleza Salon",
      title: "Belleza Salon Indore | Hair, Beauty & Price List",
      description:
        "Explore the complete Belleza Salon service and price list in Indore.",
      images: [
        {
          url: `${siteUrl.replace(/\/$/, "")}/og.png`,
          width: 1200,
          height: 630,
          alt: "Belleza Salon in Indore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Belleza Salon Indore | Hair, Beauty & Price List",
      description:
        "Explore the complete Belleza Salon service and price list in Indore.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
