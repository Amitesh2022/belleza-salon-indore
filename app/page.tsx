const phoneDisplay = "+91 78794 12318";
const phoneHref = "tel:+917879412318";
const whatsappHref =
  "https://wa.me/917879412318?text=Hello%20Belleza%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Shop%20No.%204%2C%20Shakuntala%20Supermarket%2C%20Near%20D-Mart%2C%20Chota%20Bangarda%20Road%2C%20Indore";
const instagramHref =
  "https://www.instagram.com/belleza_famliysalon?igsh=MTNnYWZtbjRpdWlwZA==";

const services = [
  {
    number: "01",
    title: "Haircuts & styling",
    description:
      "Personalised cuts and styling for men, women and children—from clean classics to a fresh new look.",
    items: ["Men’s haircut", "Women’s haircut", "Kids’ haircut", "Blow-dry & styling"],
  },
  {
    number: "02",
    title: "Colour & hair care",
    description:
      "Colour, conditioning and smoothing services selected around your hair goals and routine.",
    items: ["Hair colour", "Highlights", "Hair spa", "Keratin treatment"],
  },
  {
    number: "03",
    title: "Beauty & skin",
    description:
      "Thoughtful grooming and skin-care services in a comfortable, family-friendly setting.",
    items: ["Facial & cleanup", "Waxing", "Manicure", "Pedicure"],
  },
  {
    number: "04",
    title: "Makeup & nails",
    description:
      "Event-ready makeup and detailed nail services for weddings, parties and your everyday style.",
    items: ["Bridal makeup", "Party makeup", "Nail art", "Nail extensions"],
  },
];

const faqs = [
  {
    question: "Where is Belleza Salon in Indore?",
    answer:
      "Belleza Salon is at Shop No. 4, Shakuntala Supermarket, near D-Mart on Chota Bangarda Road, Indore.",
  },
  {
    question: "Do you offer haircuts for men, women and children?",
    answer:
      "Yes. Belleza is a family salon offering men’s, women’s and kids’ haircuts, styling and grooming services.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Tap the WhatsApp button or call +91 78794 12318. Tell us the service and your preferred time, and the salon will confirm availability.",
  },
  {
    question: "Which areas are close to the salon?",
    answer:
      "The salon is convenient for Chota Bangarda, Sangam Nagar, the D-Mart area and neighbourhoods near Indore Airport.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "BeautySalon"],
  name: "Belleza Salon",
  alternateName: "De Belleza Family Salon",
  description:
    "Family hair and beauty salon near D-Mart in Chota Bangarda, Indore, offering haircuts, styling, colour, hair spa, makeup, skin care and nail services.",
  telephone: "+91-78794-12318",
  priceRange: "₹₹",
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://amitesh2022.github.io/belleza-salon-indore"}/og.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 4, Shakuntala Supermarket, Near D-Mart, Chota Bangarda Road",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: [
    "Chota Bangarda",
    "Sangam Nagar",
    "Indore Airport",
    "Indore",
  ],
  sameAs: [instagramHref],
  hasMap: mapsHref,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-78794-12318",
    contactType: "appointments",
    availableLanguage: ["English", "Hindi"],
  },
  makesOffer: services.flatMap((service) =>
    service.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item,
      },
    })),
  ),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="announcement">
        <span>Now welcoming appointments in Chota Bangarda</span>
        <a href={phoneHref}>Call {phoneDisplay}</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Belleza Salon home">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Hair • Beauty • Makeup</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="button button-small button-outline" href={whatsappHref}>
          Book on WhatsApp
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Your neighbourhood salon in Indore</p>
            <h1>
              Beautiful hair.
              <br />
              <em>Beautiful you.</em>
            </h1>
            <p className="hero-intro">
              A friendly family salon near D-Mart, Chota Bangarda for modern
              haircuts, beauty care, makeup and nails—all under one roof.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappHref}>
                Book on WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-quiet" href={phoneHref}>
                Call the salon
              </a>
            </div>
            <div className="local-proof" aria-label="Salon highlights">
              <div>
                <strong>For everyone</strong>
                <span>Men • Women • Kids</span>
              </div>
              <div>
                <strong>Easy to find</strong>
                <span>Near D-Mart</span>
              </div>
              <div>
                <strong>Local & friendly</strong>
                <span>Chota Bangarda</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Belleza Salon beauty studio">
            <div className="spark spark-one">✦</div>
            <div className="spark spark-two">✦</div>
            <div className="arch">
              <div className="arch-inner">
                <span className="mirror-letter">B</span>
                <span className="mirror-caption">feel your best</span>
              </div>
            </div>
            <div className="offer-seal">
              <span>New here?</span>
              <strong>Book your first visit</strong>
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
          <span>Makeup</span>
          <span>Nails</span>
          <span>Skin care</span>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Everything you need</p>
              <h2>Salon services, made personal</h2>
            </div>
            <p>
              Start with a consultation. We’ll help you choose a look and
              service that suits your hair, style and occasion.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={whatsappHref}>
                  Ask about this service <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="price-note">
            Prices vary by hair length, product and service. Message us for a
            personalised quote before your appointment.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="about-arch">
              <span>B</span>
            </div>
            <p>Style for every chapter</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Welcome to Belleza</p>
            <h2>A family salon where feeling comfortable comes first.</h2>
            <p>
              Whether it’s a quick haircut, a colour refresh or getting ready
              for a special day, our goal is simple: thoughtful service and a
              result that feels like you.
            </p>
            <div className="values">
              <div>
                <span>01</span>
                <p>
                  <strong>Personal attention</strong>
                  We listen before we begin.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Family friendly</strong>
                  Services for men, women and children.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Convenient location</strong>
                  Close to D-Mart on Chota Bangarda Road.
                </p>
              </div>
            </div>
            <a className="text-link" href={instagramHref}>
              See our latest work on Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section visit-section" id="visit">
          <div className="visit-card">
            <div>
              <p className="eyebrow">Visit Belleza Salon</p>
              <h2>Your new look is closer than you think.</h2>
              <address>
                Shop No. 4, Shakuntala Supermarket
                <br />
                Near D-Mart, Chota Bangarda Road
                <br />
                Indore, Madhya Pradesh
              </address>
            </div>
            <div className="visit-actions">
              <a className="button button-cream" href={mapsHref}>
                Get directions <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-light-outline" href={phoneHref}>
                {phoneDisplay}
              </a>
              <p>Call or message to confirm today’s hours and availability.</p>
            </div>
          </div>
          <div className="nearby">
            <span>Convenient for</span>
            <strong>Chota Bangarda</strong>
            <strong>Sangam Nagar</strong>
            <strong>Near Indore Airport</strong>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Before you visit</p>
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
          <p className="eyebrow">Ready for a refresh?</p>
          <h2>Let’s find your next look.</h2>
          <p>Message Belleza Salon and request your preferred appointment.</p>
          <div>
            <a className="button button-primary" href={whatsappHref}>
              Book on WhatsApp
            </a>
            <a className="button button-quiet" href={phoneHref}>
              Call {phoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Family Salon • Indore</small>
          </span>
        </a>
        <p>
          Haircuts, hair care, beauty, makeup and nails near D-Mart, Chota
          Bangarda.
        </p>
        <div className="footer-links">
          <a href={instagramHref}>Instagram</a>
          <a href={mapsHref}>Directions</a>
          <a href={phoneHref}>Call</a>
        </div>
        <small>© 2026 Belleza Salon. All rights reserved.</small>
      </footer>

      <div className="mobile-booking">
        <a href={phoneHref}>Call</a>
        <a href={whatsappHref}>Book on WhatsApp</a>
      </div>
    </>
  );
}
