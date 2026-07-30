import Link from "next/link";
import { instagramHref, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <>
      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">B</span>
          <span>
            <strong>Belleza</strong>
            <small>Family Salon • Indore</small>
          </span>
        </Link>
        <p>
          Haircuts, hair care, beauty, makeup and nails near D-Mart, Chota
          Bangarda.
        </p>
        <div className="footer-links">
          <Link href="/price-list/">Price List</Link>
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
