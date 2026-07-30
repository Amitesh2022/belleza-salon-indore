// Shared contact details + link builders used across the homepage,
// the price list page, and the chat widget.

export const phoneDisplay = "+91 78794 12318";
export const phoneHref = "tel:+917879412318";
const whatsappNumber = "917879412318";

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Belleza Salon, I would like to book an appointment.",
)}`;

/** A WhatsApp deep link pre-filled with a specific service name, for "quick book" buttons. */
export function whatsappBookHref(serviceName: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Belleza Salon, I'd like to book: ${serviceName}.`,
  )}`;
}

export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Shop%20No.%204%2C%20Shakuntala%20Supermarket%2C%20Near%20D-Mart%2C%20Chota%20Bangarda%20Road%2C%20Indore";

export const instagramHref =
  "https://www.instagram.com/belleza_famliysalon?igsh=MTNnYWZtbjRpdWlwZA==";

export const addressLines = [
  "Shop No. 4, Shakuntala Supermarket",
  "Near D-Mart, Chota Bangarda Road",
  "Indore, Madhya Pradesh",
];
