import Link from "next/link";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/contact";

export default function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span>Now welcoming appointments in Chota Bangarda</span>
        <a href={phoneHref}>Call {phoneDisplay}</a>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Belleza Salon home">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Hair • Beauty • Makeup</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#services">Services</Link>
          <Link href="/price-list/">Price List</Link>
          <Link href="/#about">About</Link>
          <Link href="/#visit">Visit</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>
        <a className="button button-small button-outline" href={whatsappHref}>
          Book on WhatsApp
        </a>
      </header>
    </>
  );
}
