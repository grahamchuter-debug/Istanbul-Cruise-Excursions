import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "How far is Istanbul Airport from Galataport?",
    answer:
      "Istanbul Airport (IST) is about 45–60 minutes north of Galataport by road depending on traffic. Pre-book transfers for embarkation and disembarkation days.",
  },
  {
    question: "Where do cruise ships dock in Istanbul?",
    answer:
      "Cruise ships berth at Galataport Istanbul on the Karaköy waterfront. The terminal is a short tram ride from the Historic Peninsula — see our Istanbul Cruise Port Guide.",
  },
  {
    question: "Can I walk from Galataport to the Old City?",
    answer:
      "Walking to Sultanahmet via Galata Bridge takes 45–60 minutes. Most cruise passengers use the T1 tram or a taxi to maximise sightseeing time.",
  },
  {
    question: "Should I book Hagia Sophia tickets in advance?",
    answer:
      "Yes, when timed-entry applies. Pre-booking reduces queue risk on busy summer cruise days. Your excursion operator may include tickets.",
  },
  {
    question: "What currency and language should I expect?",
    answer:
      "The Turkish lira is used throughout the city. Turkish is the local language; English is widely spoken at major sights, Galataport and on organised excursions.",
  },
  {
    question: "Is street food safe in Istanbul?",
    answer:
      "Busy stalls with high turnover are generally fine. Choose cooked food, avoid tap water and carry hand sanitiser. See our food guide for cruise-day dining advice.",
  },
  {
    question: "What if my flight is much later than disembarkation?",
    answer:
      "Store luggage at Galataport area hotels or use a late-transfer service, then explore Sultanahmet or take a Bosphorus stroll before heading to IST with a comfortable buffer.",
  },
  {
    question: "Are your excursions and services bookable now?",
    answer:
      "We're an independent Istanbul cruise planning resource. Our guides help you choose the right options for your port day; use the enquiry form for personalised advice.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
