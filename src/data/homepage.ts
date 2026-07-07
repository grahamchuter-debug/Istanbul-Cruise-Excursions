import type { FAQ, VisitorType } from "./types";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Istanbul for the day on a cruise",
    shortLabel: "Port day",
    description:
      "You're calling at Galataport for the day. Find shore excursions, Hagia Sophia, bazaars and a realistic plan across Europe and Asia.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "embarking",
    label: "I'm starting my cruise in Istanbul",
    shortLabel: "Starting a cruise",
    description:
      "You're embarking here. Sort your airport transfer, a pre-cruise hotel and a smooth route to Galataport.",
    href: "/istanbul-cruise-port-guide",
    cta: "Plan my embarkation",
  },
  {
    id: "disembarking",
    label: "I'm finishing my cruise in Istanbul",
    shortLabel: "Finishing a cruise",
    description:
      "You're disembarking here. Handle luggage, a late flight and getting to IST — and enjoy any spare hours in the Old City.",
    href: "/istanbul-cruise-port-guide",
    cta: "Plan my disembarkation",
  },
  {
    id: "staying",
    label: "I'm staying before or after my cruise",
    shortLabel: "Staying over",
    description:
      "You've got extra nights in the city. Pick the right base and plan Sultanahmet, the Bosphorus and Asian-side neighbourhoods.",
    href: "/one-day-in-istanbul-from-a-cruise-ship",
    cta: "Plan my stay",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "istanbul-cruise-port-guide",
    number: "01",
    title: "Istanbul Cruise Port Guide",
    description:
      "Galataport logistics — trams, taxis, traffic, Old City transfer times and return-to-ship advice.",
    href: "/istanbul-cruise-port-guide",
    cta: "Read the guide",
  },
  {
    slug: "best-istanbul-cruise-excursions",
    number: "02",
    title: "Best Istanbul Cruise Excursions",
    description:
      "Curated tours of Hagia Sophia, Topkapi Palace, bazaars, Bosphorus cruises and Europe-and-Asia crossings.",
    href: "/best-istanbul-cruise-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "one-day-in-istanbul",
    number: "03",
    title: "One Day in Istanbul from a Cruise Ship",
    description:
      "Realistic day plans for 4, 6, 8 and 10+ hour port windows across two continents.",
    href: "/one-day-in-istanbul-from-a-cruise-ship",
    cta: "See day plans",
  },
  {
    slug: "shore-excursions",
    number: "04",
    title: "Shore Excursions",
    description:
      "Guided and private excursions timed to your ship — mosques, palaces, bazaars and Bosphorus cruises.",
    href: "/shore-excursions",
    cta: "View all excursions",
  },
  {
    slug: "istanbul-cruise-planner",
    number: "05",
    title: "Istanbul Cruise Planner",
    description:
      "Answer a few questions and get a tailored plan for your exact Istanbul port day.",
    href: "/istanbul-cruise-planner",
    cta: "Start planning",
  },
  {
    slug: "istanbul-cruise-ship-schedule",
    number: "06",
    title: "Istanbul Cruise Ship Schedule",
    description:
      "See which ships are in port at Galataport before you book excursions or plan your day ashore.",
    href: "/istanbul-cruise-ship-schedule",
    cta: "Check schedules",
  },
  {
    slug: "hagia-sophia-from-cruise-port",
    number: "07",
    title: "Hagia Sophia from the Cruise Port",
    description:
      "Byzantine masterpiece turned mosque — tickets, queues, dress code and timing from Galataport.",
    href: "/hagia-sophia-from-cruise-port",
    cta: "Plan your visit",
  },
  {
    slug: "europe-and-asia-in-one-day",
    number: "08",
    title: "Europe and Asia in One Day",
    description:
      "How cruise passengers can stand on two continents in a single port call — ferries, bridges and Bosphorus options.",
    href: "/europe-and-asia-in-one-day-from-a-cruise-ship",
    cta: "Read the guide",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "How do I get from Galataport to Hagia Sophia?",
      answer:
        "Take the T1 tram from Karaköy to Sultanahmet (15–20 minutes) or a taxi (15–35 minutes depending on traffic). Hagia Sophia sits in the Historic Peninsula a short walk from the tram stop.",
    },
    {
      question: "What's the best thing to do in Istanbul on a cruise port day?",
      answer:
        "For most first-timers, the Historic Peninsula essentials — Hagia Sophia, Blue Mosque and Topkapi Palace — deliver maximum culture per hour. Longer calls add the Grand Bazaar, a Bosphorus cruise or an Asia-side crossing.",
    },
    {
      question: "Can I visit both Europe and Asia in one port day?",
      answer:
        "Yes, on calls with 8+ usable hours. Ferry crossings, Marmaray and organised Europe-and-Asia tours make it possible — but it is rushed on shorter windows. See our dedicated guide for honest timing.",
    },
    {
      question: "Do I need to cover up for mosque visits?",
      answer:
        "Yes. Shoulders and knees covered; women need a headscarf at active mosques like the Blue Mosque. Bring a scarf from the ship to avoid queue delays.",
    },
    {
      question: "How much time do I need to get back to my ship?",
      answer:
        "Confirm your all-aboard time and build in 30–60 minutes before it. Add transfer time from Sultanahmet or the Asian side — Istanbul traffic can be unpredictable.",
    },
    {
      question: "Is Istanbul an embarkation port or a port of call?",
      answer:
        "Mostly a port of call on Eastern Mediterranean and repositioning itineraries, though some ships use Galataport for embarkation. Our guides cover port-day visitors, turnaround sailings and pre/post-cruise stays.",
    },
  ];
}
