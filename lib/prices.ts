// Belleza Salon price list.
// Transcribed directly from the salon's price-list spreadsheet.
// Keep this file as the single source of truth for pricing shown on the
// homepage teasers, the /price-list page, and the chatbot's answers.

export type SimpleItem = {
  name: string;
  price: number | null; // null = ask in person / varies (e.g. "on consultation")
  note?: string;
};

export type SimpleGroup = {
  kind: "simple";
  title: string;
  items: SimpleItem[];
};

export type CompareGroup = {
  kind: "compare";
  title: string;
  columns: string[];
  rows: { name: string; prices: (number | null)[] }[];
};

export type PriceGroup = SimpleGroup | CompareGroup;

export type PriceCategory = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  groups: PriceGroup[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: "hair-services",
    label: "Hair Services",
    shortLabel: "Hair",
    description:
      "Hair spa, dandruff and hairfall treatments, and smoothing/straightening services, priced by hair length.",
    groups: [
      {
        kind: "simple",
        title: "Hair spa & treatments",
        items: [
          { name: "Basic Hair Spa – Upto Neck", price: 600 },
          { name: "Basic Hair Spa – Upto Shoulder", price: 800 },
          { name: "Basic Hair Spa – Waist & Below", price: 1100 },
          { name: "Dandruff Treatment", price: 1000 },
          { name: "Hairfall Treatment", price: 1200 },
          { name: "Smart Bond Treatment", price: 1500 },
          { name: "Protein Hair Spa – Upto Neck", price: 1000 },
          { name: "Protein Hair Spa – Upto Shoulder", price: 1200 },
          { name: "Protein Hair Spa – Waist & Below", price: 1500 },
          { name: "Premium Hair Spa – Upto Neck", price: 2000 },
          { name: "Premium Hair Spa – Upto Shoulder", price: 2200 },
          { name: "Premium Hair Spa – Waist & Below", price: 2500 },
        ],
      },
      {
        kind: "simple",
        title: "Smoothening, rebonding & straightening",
        items: [
          { name: "Smoothening – Upto Neck", price: 3000 },
          { name: "Smoothening – Upto Shoulder", price: 4500 },
          { name: "Smoothening – Waist & Below", price: 6500 },
          { name: "Rebonding – Upto Neck", price: 5500 },
          { name: "Rebonding – Upto Shoulder", price: 6500 },
          { name: "Rebonding – Waist & Below", price: 7500 },
          { name: "Kera Straight – Upto Neck", price: 6000 },
          { name: "Kera Straight – Upto Shoulder", price: 8000 },
          { name: "Kera Straight – Waist & Below", price: 10000 },
        ],
      },
    ],
  },
  {
    id: "cut-style-colour",
    label: "Cut, Style & Colour",
    shortLabel: "Cut & Colour",
    description:
      "Haircuts, wash & styling, and root touch-up / global colour and highlight services.",
    groups: [
      {
        kind: "simple",
        title: "Cut & style",
        items: [
          { name: "Cut & Style", price: 350 },
          { name: "Kid's Hair Cut", price: 250 },
          { name: "Fringe Cut", price: 150 },
          { name: "Wash & Plain Dryer", price: 150 },
          { name: "Keratin Hair Wash", price: 250 },
          { name: "Wash & Blow Dryer – Upto Neck", price: 250 },
          { name: "Wash & Blow Dryer – Upto Shoulder", price: 300 },
          { name: "Wash & Blow Dryer – Waist & Below", price: 350 },
          { name: "Wash & Ironing – Upto Neck", price: 350 },
          { name: "Wash & Ironing – Upto Shoulder", price: 500 },
          { name: "Wash & Ironing – Waist & Below", price: 600 },
          { name: "Tongs – Upto Neck", price: 400 },
          { name: "Tongs – Upto Shoulder", price: 500 },
          { name: "Tongs – Waist & Below", price: 600 },
        ],
      },
      {
        kind: "simple",
        title: "Colour",
        items: [
          { name: "Root Touchup – 1 Inch", price: 600 },
          { name: "Root Touchup – 2 Inch", price: 900 },
          { name: "Organic Root Touchup – 1 Inch", price: 800 },
          { name: "Organic Root Touchup – 2 Inch", price: 1000 },
          { name: "Global Colouring – Upto Neck", price: 2000 },
          { name: "Global Colouring – Upto Shoulder", price: 3000 },
          { name: "Global Colouring – Waist & Below", price: 4000 },
          { name: "Global Highlights – Upto Neck", price: 2500 },
          { name: "Global Highlights – Upto Shoulder", price: 3500 },
          { name: "Global Highlights – Waist & Below", price: 5000 },
          {
            name: "Customization Highlight",
            price: null,
            note: "On consultation",
          },
        ],
      },
    ],
  },
  {
    id: "skin-care-detan",
    label: "Skin Care & De-Tan",
    shortLabel: "Bleach & De-Tan",
    description:
      "Bleach and de-tan treatments by body area — compare both options side by side.",
    groups: [
      {
        kind: "compare",
        title: "Bleach vs. De-Tan by area",
        columns: ["Bleach", "De-Tan"],
        rows: [
          { name: "Face", prices: [200, 300] },
          { name: "Face & Neck", prices: [350, 400] },
          { name: "Face, Neck & Blouseline", prices: [400, 500] },
          { name: "Under Arms", prices: [80, 100] },
          { name: "Feet", prices: [250, 300] },
          { name: "Full Arms", prices: [350, 500] },
          { name: "Half Arms", prices: [300, 400] },
          { name: "Full Legs", prices: [600, 800] },
          { name: "Half Legs", prices: [400, 500] },
          { name: "Midriff", prices: [350, 400] },
          { name: "Full Back", prices: [450, 500] },
          { name: "Half Back", prices: [250, 300] },
          { name: "Full Front", prices: [450, 500] },
          { name: "Half Front", prices: [300, 400] },
          { name: "Full Body", prices: [1800, 2200] },
        ],
      },
    ],
  },
  {
    id: "skin-care-advanced",
    label: "Advanced Skin Care",
    shortLabel: "Facials",
    description:
      "Clean-ups, facials and mask top-ups for a deeper skin-care routine.",
    groups: [
      {
        kind: "simple",
        title: "Clean-up",
        items: [
          { name: "Basic Cleanup", price: 400 },
          { name: "Fruit Cleanup", price: 500 },
          { name: "Hydra Cleanup", price: 600 },
          { name: "Purifying Cleanup", price: 600 },
          { name: "White Brightening Cleanup", price: 900 },
          { name: "Swete Cleanup", price: 900 },
          { name: "Organic Cleanup", price: 1200 },
        ],
      },
      {
        kind: "simple",
        title: "Facials",
        items: [
          { name: "Basic Facial", price: 600 },
          { name: "Instant Glow (Lotus)", price: 1200 },
          { name: "Bye Bye Tan Facial Adanse", price: 1000 },
          { name: "Sensi Balance Facial", price: 1200 },
          { name: "Fruit Facials (Basic)", price: 800 },
          { name: "Complexion Enhancement", price: 1500 },
          { name: "0+ Facial", price: 1500 },
          { name: "Organic Facial", price: 2000 },
          { name: "Goji Brightening Facial", price: 2500 },
          { name: "0+ Sublime Facial", price: 3000 },
          { name: "Pampering Facial", price: 4000 },
        ],
      },
      {
        kind: "simple",
        title: "Mask top-ups",
        items: [
          { name: "Glow Mask", price: 350 },
          { name: "Fruit Mask", price: 500 },
          { name: "Skin Firming Mask", price: 800 },
          { name: "Green Tea Mask", price: 800 },
          { name: "Rubber Mask", price: 800 },
          { name: "Collagen Mask", price: 1200 },
        ],
      },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    shortLabel: "Waxing",
    description: "Regular and flavoured (chocolate/rica-style) waxing by area.",
    groups: [
      {
        kind: "simple",
        title: "Regular waxing",
        items: [
          { name: "Underarms", price: 50 },
          { name: "Full Arms", price: 150 },
          { name: "Half Legs", price: 250 },
          { name: "Full Legs", price: 350 },
          { name: "Midriff", price: 250 },
          { name: "Full Back / Front", price: 350 },
          { name: "Full Front", price: 350 },
          { name: "Full Body Waxing", price: 1350 },
          { name: "Bikini Line", price: 1000 },
        ],
      },
      {
        kind: "simple",
        title: "Flavoured waxing",
        items: [
          { name: "Face Waxing", price: 350 },
          { name: "Chin", price: 50 },
          { name: "Upper Lips", price: 50 },
          { name: "Eyebrow", price: 50 },
          { name: "Underarms", price: 80 },
          { name: "Full Arms", price: 350 },
          { name: "Half Legs", price: 300 },
          { name: "Full Legs", price: 500 },
          { name: "Midriff", price: 350 },
          { name: "Full Back", price: 400 },
          { name: "Full Front", price: 400 },
          { name: "Full Body Waxing", price: 2000 },
          { name: "Bikini Line", price: 1500 },
        ],
      },
    ],
  },
  {
    id: "nails-exfoliation",
    label: "Nails & Exfoliation",
    shortLabel: "Nails & Spa",
    description:
      "Manicures, pedicures, nail art and extensions, plus exfoliation and massage add-ons.",
    groups: [
      {
        kind: "simple",
        title: "Nails",
        items: [
          { name: "Change of Polish", price: 60 },
          { name: "Feet Polish", price: 100 },
          { name: "Cut & Polish", price: 150 },
          { name: "Basic Pedicure", price: 450 },
          { name: "Basic Manicure", price: 350 },
          { name: "Aroma Pedicure", price: 550 },
          { name: "Aroma Manicure", price: 450 },
          { name: "Luxury Pedicure", price: 800 },
          { name: "Luxury Manicure", price: 600 },
          { name: "Relaxing Foot Spa with Machine", price: 1200 },
          { name: "Feet Massage – 20 Mins", price: 250 },
          { name: "Feet Massage – 30 Mins", price: 350 },
          { name: "Gel Nail Paint", price: 600 },
          { name: "Nail Extension", price: 3000 },
          { name: "Body Exfoliation", price: 800 },
          { name: "Back Exfoliation", price: 350 },
          { name: "Hand Exfoliation", price: 250 },
        ],
      },
      {
        kind: "simple",
        title: "Exfoliation & massage",
        items: [
          { name: "Half Hand Exfoliation", price: 300 },
          { name: "Full Leg Exfoliation", price: 450 },
          { name: "Half Legs Exfoliation", price: 300 },
          { name: "Body Massage", price: 1500 },
          { name: "Back Massage", price: 400 },
          { name: "Hand Massage", price: 250 },
          { name: "Feet Massage", price: 250 },
        ],
      },
    ],
  },
];

// ---- Derived helpers -------------------------------------------------

export function formatPrice(price: number | null): string {
  if (price === null) return "On consultation";
  return `₹${price.toLocaleString("en-IN")}`;
}

function allSimpleItems(): { category: PriceCategory; item: SimpleItem }[] {
  const out: { category: PriceCategory; item: SimpleItem }[] = [];
  for (const category of priceCategories) {
    for (const group of category.groups) {
      if (group.kind === "simple") {
        for (const item of group.items) out.push({ category, item });
      }
    }
  }
  return out;
}

/** Simple keyword search across every priced line item — powers the chatbot + on-page search box. */
export function searchServices(query: string, limit = 6) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: { category: string; name: string; price: number | null }[] = [];

  for (const { category, item } of allSimpleItems()) {
    if (
      item.name.toLowerCase().includes(q) ||
      category.label.toLowerCase().includes(q)
    ) {
      results.push({ category: category.label, name: item.name, price: item.price });
    }
  }
  for (const category of priceCategories) {
    for (const group of category.groups) {
      if (group.kind !== "compare") continue;
      for (const row of group.rows) {
        if (row.name.toLowerCase().includes(q)) {
          results.push({
            category: category.label,
            name: `${row.name} (${group.columns.join(" / ")})`,
            price: row.prices.find((p) => p !== null) ?? null,
          });
        }
      }
    }
  }
  return results.slice(0, limit);
}
