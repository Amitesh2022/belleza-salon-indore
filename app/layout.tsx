import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "belleza-salon-indore.sites.openai.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: {
      default:
        "Belleza Salon | Haircut & Beauty Salon in Chota Bangarda, Indore",
      template: "%s | Belleza Salon Indore",
    },
    description:
      "Book men’s, women’s and kids’ haircuts at Belleza Salon near D-Mart, Chota Bangarda, Indore. Hair colour, spa, makeup, skin and nail services.",
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
    ],
    alternates: {
      canonical: "/",
    },
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
          url: new URL("/og.png", baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Belleza Salon in Chota Bangarda, Indore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Belleza Salon | Hair • Beauty • Makeup",
      description:
        "Family salon near D-Mart, Chota Bangarda, Indore.",
      images: [new URL("/og.png", baseUrl).toString()],
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
}

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
