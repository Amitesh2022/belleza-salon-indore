import type { Metadata } from "next";
import Link from "next/link";
import PriceListExplorer from "@/components/PriceListExplorer";
import { priceCategories } from "@/lib/prices";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Full Price List",
  description:
    "Complete, up-to-date price list for Belleza Salon in Chota Bangarda, Indore — haircuts, hair colour & spa, skin care, waxing, and nail services.",
  alternates: {
    canonical: "/price-list/",
  },
  openGraph: {
    url: "/price-list/",
    title: "Belleza Salon – Full Price List",
    description:
      "Every service and price at Belleza Salon, Chota Bangarda, Indore.",
  },
};

// Flatten the price list into schema.org Offers so search engines can match
// specific services to specific prices for this page.
const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hair, beauty and skin care services",
  provider: {
    "@type": ["HairSalon", "BeautySalon"],
    name: "Belleza Salon",
  },
  areaServed: "Indore",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Belleza Salon price list",
    itemListElement: priceCategories.flatMap((category) =>
      category.groups.flatMap((group) => {
        if (group.kind === "simple") {
          return group.items
            .filter((item) => item.price !== null)
            .map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.name, category: category.label },
              priceCurrency: "INR",
              price: item.price,
            }));
        }
        return group.rows.flatMap((row) =>
          group.columns
            .map((col, i) => ({ col, price: row.prices[i] }))
            .filter((c) => c.price !== null)
            .map(({ col, price }) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `${row.name} (${col})`,
                category: category.label,
              },
              priceCurrency: "INR",
              price,
            })),
        );
      }),
    ),
  },
};

export default function PriceListPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />

      <section className="section price-hero">
        <p className="eyebrow">Transparent pricing</p>
        <h1>The full Belleza Salon price list</h1>
        <p className="price-hero-intro">
          Every service we offer, in one place. Search for a service below or
          browse by category — tap “Book” on any row to message us on
          WhatsApp with that exact service already filled in.
        </p>
      </section>

      <section className="section price-list-section">
        <PriceListExplorer />
      </section>

      <section className="final-cta">
        <p className="eyebrow">Don’t see what you’re looking for?</p>
        <h2>Ask us — we’re happy to help.</h2>
        <p>
          Some services (like bridal and party makeup) are quoted after a
          quick consultation, since they depend on what you have in mind.
        </p>
        <div>
          <a className="button button-primary" href={whatsappHref}>
            Message on WhatsApp
          </a>
          <a className="button button-quiet" href={phoneHref}>
            Call {phoneDisplay}
          </a>
        </div>
        <p className="price-back-link">
          <Link href="/#services">← Back to service overview</Link>
        </p>
      </section>
    </main>
  );
}
