// Homepage "at a glance" service categories.
// Price hints below are curated by hand from lib/prices.ts (not auto-computed)
// so we never blend a priced group with an unpriced one into a misleading
// single figure — e.g. makeup has no fixed price in the salon's price list,
// so it is always labelled "on consultation" rather than given a number.
// If lib/prices.ts changes, double-check these hints still hold.

export type ServiceCard = {
  number: string;
  title: string;
  description: string;
  items: string[];
  priceHints: string[];
};

export const services: ServiceCard[] = [
  {
    number: "01",
    title: "Haircuts & styling",
    description:
      "Personalised cuts and styling for men, women and children—from clean classics to a fresh new look.",
    items: ["Men’s haircut", "Women’s haircut", "Kids’ haircut", "Blow-dry & styling"],
    priceHints: ["Cut & style from ₹150"],
  },
  {
    number: "02",
    title: "Colour & hair care",
    description:
      "Colour, conditioning and smoothing services selected around your hair goals and routine.",
    items: ["Hair colour", "Highlights", "Hair spa", "Keratin treatment"],
    priceHints: ["Hair spa & colour from ₹600"],
  },
  {
    number: "03",
    title: "Beauty & skin",
    description:
      "Thoughtful grooming and skin-care services in a comfortable, family-friendly setting.",
    items: ["Facial & cleanup", "Waxing", "Manicure", "Pedicure"],
    priceHints: ["Waxing from ₹50", "Facials from ₹400"],
  },
  {
    number: "04",
    title: "Makeup & nails",
    description:
      "Event-ready makeup and detailed nail services for weddings, parties and your everyday style.",
    items: ["Bridal makeup", "Party makeup", "Nail art", "Nail extensions"],
    priceHints: ["Nails from ₹60", "Makeup on consultation"],
  },
];
