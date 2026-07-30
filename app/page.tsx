import Link from "next/link";
import {
  addressLines,
  instagramHref,
  mapsHref,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "@/lib/contact";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";

export default function Home() {
  return (
    <main id="main-content">
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
              <div className="service-price-hints">
                {service.priceHints.map((hint) => (
                  <span key={hint}>{hint}</span>
                ))}
              </div>
              <a href={whatsappHref}>
                Ask about this service <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
        <p className="price-note">
          Prices above are starting rates — see the exact price for every
          service on our <Link href="/price-list/">full price list</Link>, or
          message us for a personalised quote before your appointment.
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
              {addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
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
  );
}
