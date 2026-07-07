import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export const terminals: Terminal[] = [
  {
    name: "Galataport Main Terminal",
    quay: "Karaköy waterfront — purpose-built cruise terminal",
    usedBy:
      "Most cruise ships (MSC, Costa, Royal Caribbean, Celebrity, Norwegian, AIDA and similar)",
    cityAccess:
      "T1 tram to Sultanahmet (15–20 min) or taxi to Historic Peninsula (15–35 min depending on traffic)",
  },
  {
    name: "Galataport North Berth",
    quay: "Northern section of Galataport quay",
    usedBy: "Larger vessels and peak-season overflow scheduling",
    cityAccess:
      "Same terminal facilities — follow signs to tram stop or taxi rank at the port exit",
  },
  {
    name: "Salıpazarı / alternate berths",
    quay: "Occasional use when Galataport scheduling requires",
    usedBy: "Smaller ships or exceptional port arrangements",
    cityAccess:
      "Short taxi or tram connection to Karaköy and Sultanahmet — confirm your berth on cruise documents",
  },
];

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideSections: PortGuideSection[] = [
  {
    heading: "Where cruise ships dock in Istanbul",
    paragraphs: [
      "Cruise ships call at Galataport Istanbul, a modern terminal on the Karaköy waterfront where the Golden Horn meets the Bosphorus. Unlike industrial ports far from the sights, Galataport puts you within reach of two continents — but the UNESCO-listed Historic Peninsula (Hagia Sophia, Blue Mosque, Topkapi Palace) still requires a transfer across the Golden Horn.",
      "Galataport opened as a dedicated cruise hub with shops, restaurants and a museum district at the quay. Most large ships berth along the main terminal piers. Your cruise documents confirm the exact berth and gangway location.",
    ],
  },
  {
    heading: "Walking feasibility from Galataport",
    paragraphs: [
      "You can walk from Galataport into Karaköy and Galata within minutes — excellent for a harbour coffee, the Galata Tower viewpoint or a Bosphorus-side stroll. Walking to the Historic Peninsula (Sultanahmet) is possible for fit passengers (roughly 45–60 minutes via Galata Bridge) but not recommended on a short port day when time is better spent on sights.",
      "For mosque and palace visits, most cruise passengers use the T1 tram from Karaköy to Sultanahmet (one of the world's great tram rides across the Golden Horn) or a taxi. See our walking from Galataport guide for step-by-step routes.",
    ],
  },
  {
    heading: "Taxis, traffic and public transport",
    paragraphs: [
      "Official yellow taxis queue at Galataport. Fares are metered; traffic through the Old City can be heavy mid-morning and mid-afternoon. Budget 15–35 minutes to Sultanahmet by taxi depending on congestion — sometimes longer on Fridays around prayer time.",
      "The T1 tram line connects Karaköy (near Galataport) to Sultanahmet, the Grand Bazaar and beyond. Buy an Istanbulkart at the port area or use contactless where accepted. Trams are frequent but crowded on busy ship days.",
      "Pre-booked shore excursions avoid route-finding and include cruise-timed returns — the safest option when you want both Old City and Bosphorus in one day.",
    ],
  },
  {
    heading: "Currency, tipping and practicalities",
    paragraphs: [
      "The Turkish lira (TRY) is the local currency. Cards are widely accepted at major sights and restaurants; carry some cash for bazaar stalls, simit vendors and small tips. ATMs are available near Galataport and in Sultanahmet.",
      "Tipping is appreciated but not obligatory — round up taxi fares and leave 10% at sit-down restaurants if service was good. Bargaining is expected in the Grand Bazaar; fixed prices apply at most museum shops.",
      "Free port Wi-Fi may be limited — download offline maps, mosque dress-code reminders and any timed-entry tickets before you leave the ship.",
    ],
  },
  {
    heading: "Mosque dress code and security",
    paragraphs: [
      "Active mosques including the Blue Mosque require modest dress: shoulders and knees covered, women should bring a headscarf. Scarves are often available at entrances but bringing your own saves queue time. Shoes are removed before entering prayer halls.",
      "Major sights use airport-style security screening. Allow 15–30 minutes for queues at Hagia Sophia, Topkapi Palace and the Blue Mosque on peak summer cruise days. Timed tickets for Hagia Sophia should be booked in advance when possible.",
    ],
  },
  {
    heading: "Return-to-ship advice",
    paragraphs: [
      "Always confirm your all-aboard time — usually 30–60 minutes before departure. Work backwards from Galataport: allow transfer time from Sultanahmet (tram or taxi), plus a generous buffer for traffic and security re-entry at the terminal.",
      "Europe-and-Asia day tours and long Bosphorus cruises need the longest return margins. Independent passengers should not cut it fine — Istanbul traffic is unpredictable, and the ship will not wait.",
      "Reputable shore excursions track your ship's departure and build traffic buffers into the itinerary. If you booked through the ship, the vessel waits for official tour delays.",
    ],
  },
];

export const portGuideFaqs: FAQ[] = [
  {
    question: "Which berth will my ship use at Galataport?",
    answer:
      "Most cruise ships use the main Galataport terminal berths along the Karaköy waterfront. Exact pier assignment depends on ship size and port scheduling — check your cruise documents before you sail.",
  },
  {
    question: "Can I walk to Hagia Sophia from the cruise port?",
    answer:
      "It is possible but not ideal on a port day. The walk via Galata Bridge takes 45–60 minutes. The T1 tram or a taxi is faster and leaves more time for sightseeing.",
  },
  {
    question: "How long does it take to reach the Old City from Galataport?",
    answer:
      "Roughly 15–20 minutes by T1 tram to Sultanahmet, or 15–35 minutes by taxi depending on traffic. Add queue time at major sights on top of transfer time.",
  },
  {
    question: "Is Istanbul safe for cruise passengers?",
    answer:
      "Istanbul is a major tourist city with heavy security at sights and the port. Use normal urban awareness in crowded bazaars, keep valuables secure and follow your cruise line's shore guidance.",
  },
  {
    question: "What should I wear when visiting mosques?",
    answer:
      "Modest clothing covering shoulders and knees; a headscarf for women at active mosques. Comfortable walking shoes are essential for cobbled Sultanahmet streets.",
  },
  {
    question: "Do I need Turkish lira ashore?",
    answer:
      "Cards work at most museums and restaurants, but cash is useful for bazaars, street food and taxis. ATMs are available near the port and in Sultanahmet.",
  },
  {
    question: "What are the best excursions from Galataport?",
    answer:
      "First-time visitors typically choose an Istanbul highlights tour covering Hagia Sophia, the Blue Mosque and Topkapi Palace. Longer calls add the Grand Bazaar, a Bosphorus cruise or an Europe-and-Asia crossing.",
  },
  {
    question: "How early should I return to Galataport?",
    answer:
      "Be at the terminal at least 30–60 minutes before all-aboard. Allow extra time if returning from the Asian side, a long Bosphorus cruise or afternoon rush-hour traffic.",
  },
];
