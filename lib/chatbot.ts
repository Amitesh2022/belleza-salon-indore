// A small, fully client-side "assistant" for the salon's static site.
//
// There is no server behind this (the site is exported as static HTML for
// GitHub Pages), so this deliberately is NOT a generative-AI chatbot calling
// an external LLM — that would need a paid backend and a way to hide an API
// key, neither of which a static export can do safely. Instead this is a
// fast, honest, keyword-driven assistant that answers from the salon's real
// data (services, prices, location, FAQs) and hands off to WhatsApp/phone
// for anything it can't answer confidently — it never invents information
// (e.g. it will not guess opening hours, which aren't published anywhere
// on the site).

import { faqs } from "./faqs";
import { services } from "./services";
import { formatPrice, searchServices } from "./prices";
import { mapsHref, phoneDisplay, phoneHref, whatsappBookHref, whatsappHref } from "./contact";

export type BotLink = { label: string; href: string };
export type BotReply = { text: string; links?: BotLink[] };

const GREETING_WORDS = ["hi", "hii", "hiii", "hello", "hey", "namaste", "helo"];
const THANKS_WORDS = ["thanks", "thank you", "thankyou", "thnx", "ty"];

function normalize(input: string): string {
  return input.trim().toLowerCase();
}

function includesAny(text: string, words: string[]): boolean {
  return words.some((w) => text.includes(w));
}

export function getBotReply(rawInput: string): BotReply {
  const text = normalize(rawInput);

  if (!text) {
    return {
      text: "Ask me about a service, its price, our location, or how to book — or tap a suggestion below.",
    };
  }

  // Greeting
  if (GREETING_WORDS.some((w) => text === w || text.startsWith(w + " "))) {
    return {
      text:
        "Hi! I'm the Belleza Salon assistant. I can help with prices, services, location and booking. What would you like to know?",
    };
  }

  // Thanks
  if (includesAny(text, THANKS_WORDS)) {
    return { text: "You're welcome! Anything else I can help with?" };
  }

  // Location / directions
  if (includesAny(text, ["where", "location", "address", "direction", "map", "reach", "far"])) {
    return {
      text:
        "Belleza Salon is at Shop No. 4, Shakuntala Supermarket, near D-Mart, Chota Bangarda Road, Indore — convenient for Chota Bangarda, Sangam Nagar and near Indore Airport.",
      links: [{ label: "Get directions", href: mapsHref }],
    };
  }

  // Hours — we deliberately do NOT guess these; they aren't published anywhere on the site.
  if (includesAny(text, ["hour", "timing", "time", "open", "close", "holiday"])) {
    return {
      text:
        "I don't have today's exact opening hours loaded here — the fastest way to confirm is a quick WhatsApp message or call, and the salon will reply directly.",
      links: [
        { label: "Ask on WhatsApp", href: whatsappHref },
        { label: `Call ${phoneDisplay}`, href: phoneHref },
      ],
    };
  }

  // Booking
  if (includesAny(text, ["book", "appointment", "schedule", "slot", "reserve"])) {
    return {
      text: "You can book in under a minute on WhatsApp, or call the salon directly.",
      links: [
        { label: "Book on WhatsApp", href: whatsappHref },
        { label: `Call ${phoneDisplay}`, href: phoneHref },
      ],
    };
  }

  // Price / service lookup — the most valuable path, so it runs before generic FAQ matching.
  const isPriceQuestion = includesAny(text, [
    "price",
    "cost",
    "charge",
    "rate",
    "how much",
    "kitna",
    "fee",
  ]);
  const matches = searchServices(rawInput, 5);

  if (matches.length > 0) {
    const lines = matches
      .map((m) => `• ${m.name} — ${formatPrice(m.price)}`)
      .join("\n");
    return {
      text: `Here's what I found:\n${lines}`,
      links: [
        { label: "See full price list", href: "/price-list/" },
        { label: "Book this on WhatsApp", href: whatsappBookHref(matches[0].name) },
      ],
    };
  }

  if (isPriceQuestion) {
    return {
      text:
        "Our full price list covers hair, cut & colour, skin care, waxing, and nails — tell me a specific service (e.g. “pedicure” or “global colour”) and I'll pull its price, or browse everything on the Price List page.",
      links: [{ label: "Open Price List", href: "/price-list/" }],
    };
  }

  // "What services do you offer" style
  if (includesAny(text, ["service", "offer", "what do you do", "menu"])) {
    const lines = services.map((s) => `• ${s.title} — ${s.items.join(", ")}`).join("\n");
    return {
      text: `Here's what we offer:\n${lines}`,
      links: [{ label: "See prices", href: "/price-list/" }],
    };
  }

  // FAQ keyword overlap (very small corpus, so a simple word-overlap score is enough)
  const inputWords = new Set(text.split(/\W+/).filter((w) => w.length > 2));
  let bestFaq: { faq: (typeof faqs)[number]; score: number } | null = null;
  for (const faq of faqs) {
    const faqWords = faq.question.toLowerCase().split(/\W+/).filter((w) => w.length > 2);
    const score = faqWords.reduce((acc, w) => acc + (inputWords.has(w) ? 1 : 0), 0);
    if (score > 0 && (!bestFaq || score > bestFaq.score)) {
      bestFaq = { faq, score };
    }
  }
  if (bestFaq) {
    return { text: bestFaq.faq.answer };
  }

  // Honest fallback — this is a small rule-based assistant, not a generative AI,
  // so say so rather than pretending to understand.
  return {
    text:
      "I'm a simple assistant so I might've missed that — message the salon directly on WhatsApp and a real person will help right away.",
    links: [{ label: "Message on WhatsApp", href: whatsappHref }],
  };
}

export const quickReplies: { label: string; prompt: string }[] = [
  { label: "💰 Prices", prompt: "What are your prices?" },
  { label: "💇 Services", prompt: "What services do you offer?" },
  { label: "📍 Location", prompt: "Where are you located?" },
  { label: "📅 Book now", prompt: "I want to book an appointment" },
];
