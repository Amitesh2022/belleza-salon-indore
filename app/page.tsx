import { allServices, formatPrice, serviceGroups } from "./salon-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://amitesh2022.github.io/belleza-salon-indore";

const faqs = [
  {
    question: "How much does a haircut cost at Belleza Salon?",
    answer:
      "A cut and style is ₹350, a kid’s haircut is ₹250, and a fringe cut is ₹150, according to the current salon price list.",
  },
  {
    question: "What hair treatments are available?",
    answer:
      "The price list includes hair spa, dandruff and hair fall treatments, Smartbond, smoothening, rebonding and Kera Strait services.",
  },
  {
    question: "Does Belleza Salon offer skin and nail services?",
    answer:
      "Yes. The listed services include cleanups, facials, masks, bleach, detan, waxing, manicure, pedicure, gel nail paint and nail extensions.",
  },
  {
    question: "Are prices different for longer hair?",
    answer:
      "Several hair services have separate prices for hair up to the neck, up to the shoulder, and waist length or below. Check the exact service below.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Belleza Salon",
  description:
    "Hair and beauty salon in Indore offering haircuts, styling, hair spa, hair colour, skin care, waxing, nail care and massage services.",
  url: siteUrl,
  image: `${siteUrl.replace(/\/$/, "")}/og.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  priceRange: "₹50–₹10,000",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Belleza Salon service price list",
    itemListElement: allServices.map((service) => ({
      "@type": "Offer",
      priceCurrency: "INR",
      ...(typeof service.price === "number" ? { price: service.price } : {}),
      itemOffered: {
        "@type": "Service",
        name: service.name,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="announcement">
        <span>Hair • Beauty • Skin • Nails in Indore</span>
        <a href="#prices">View salon prices</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Belleza Salon home">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Salon • Indore</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#prices">Price list</a>
          <a href="#about">About</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="button button-small button-outline" href="#prices">
          Explore prices
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Belleza Salon in Indore</p>
            <h1>
              Your look,
              <br />
              <em>your Belleza.</em>
            </h1>
            <p className="hero-intro">
              Explore transparent prices for haircuts, styling, hair care,
              colour, facials, waxing, nails and more at Belleza Salon.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#prices">
                View complete price list <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="#hair-care">
                Explore hair treatments
              </a>
            </div>
            <div className="local-proof" aria-label="Salon highlights">
              <div>
                <strong>{allServices.length}+ listed services</strong>
                <span>Prices in Indian rupees</span>
              </div>
              <div>
                <strong>Hair to skin</strong>
                <span>Care under one roof</span>
              </div>
              <div>
                <strong>Based in Indore</strong>
                <span>Belleza Salon</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Belleza Salon">
            <div className="spark spark-one">✦</div>
            <div className="spark spark-two">✦</div>
            <div className="arch">
              <div className="arch-inner">
                <span className="mirror-letter">B</span>
                <span className="mirror-caption">hair • beauty • care</span>
              </div>
            </div>
            <div className="offer-seal">
              <span>Plan your visit</span>
              <strong>See every listed price</strong>
            </div>
            <div className="leaf leaf-one" />
            <div className="leaf leaf-two" />
            <div className="leaf leaf-three" />
          </div>
        </section>

        <section className="service-strip" aria-label="Popular salon services">
          <span>Haircut</span>
          <span>Hair colour</span>
          <span>Hair spa</span>
          <span>Facials</span>
          <span>Waxing</span>
          <span>Nails</span>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Hair and beauty services</p>
              <h2>Choose the care that fits you.</h2>
            </div>
            <p>
              Belleza Salon’s current menu covers everyday grooming, special
              care and longer hair treatments.
            </p>
          </div>
          <div className="service-grid">
            {serviceGroups.slice(0, 4).map((group, index) => (
              <article className="service-card" key={group.id}>
                <span className="service-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.services.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <span>{service.name}</span>
                      <strong>{formatPrice(service.price)}</strong>
                    </li>
                  ))}
                </ul>
                <a href={`#${group.id}`}>
                  View all prices <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="price-section" id="prices">
          <div className="price-heading">
            <p className="eyebrow">Complete salon price list</p>
            <h2>Clear prices before you visit.</h2>
            <p>
              Every service and price below comes from the salon’s supplied
              price workbook. “Price on consultation” reflects the workbook’s
              “on seat” entry.
            </p>
          </div>
          <nav className="price-nav" aria-label="Price list sections">
            {serviceGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                {group.title}
              </a>
            ))}
          </nav>
          <div className="price-groups">
            {serviceGroups.map((group) => (
              <section className="price-group" id={group.id} key={group.id}>
                <header>
                  <div>
                    <p className="eyebrow">Belleza Salon</p>
                    <h3>{group.title}</h3>
                  </div>
                  <p>{group.description}</p>
                </header>
                <ul className="price-list">
                  {group.services.map((service) => (
                    <li key={service.name}>
                      <span>{service.name}</span>
                      <strong>{formatPrice(service.price)}</strong>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="price-disclaimer">
            Prices are presented as supplied and may change. Confirm the
            service and final price with the salon before treatment.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="about-arch">
              <span>B</span>
            </div>
            <p>Care for every chapter</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Belleza Salon, Indore</p>
            <h2>Hair and beauty care, clearly priced.</h2>
            <p>
              From a quick fringe cut to a full hair treatment, the complete
              menu helps you compare options before choosing your service.
            </p>
            <div className="values">
              <div>
                <span>01</span>
                <p>
                  <strong>Hair services</strong>
                  Cuts, styling, spa, colour, smoothening and more.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Skin and body care</strong>
                  Cleanups, facials, bleach, detan, waxing and massage.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Nail care</strong>
                  Polish, manicure, pedicure, gel paint and extensions.
                </p>
              </div>
            </div>
            <a className="text-link" href="#prices">
              Browse all {allServices.length} listed services{" "}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Before you choose</p>
              <h2>Frequently asked questions</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Find your service</p>
          <h2>Start with the price list.</h2>
          <p>Compare Belleza Salon services for your next visit in Indore.</p>
          <div>
            <a className="button button-primary" href="#prices">
              See all salon prices
            </a>
            <a className="button button-quiet" href="#top">
              Back to top
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Salon • Indore</small>
          </span>
        </a>
        <p>
          Haircuts, hair care, colour, skin care, waxing, nails and massage in
          Indore.
        </p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#prices">Prices</a>
          <a href="#faq">FAQs</a>
        </div>
        <small>© 2026 Belleza Salon. Prices subject to confirmation.</small>
      </footer>

      <div className="mobile-booking">
        <a href="#services">Services</a>
        <a href="#prices">View prices</a>
      </div>
    </>
  );
}
