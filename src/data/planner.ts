import { excursions } from "./excursions";

export type VisitorTypeId = "port-day" | "embarking" | "disembarking" | "staying";

export interface PlannerInput {
  visitorType: VisitorTypeId;
  timeframe: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "historic-peninsula", label: "Historic Peninsula & mosques" },
  { id: "palaces", label: "Palaces & Ottoman history" },
  { id: "bazaars", label: "Grand Bazaar & Spice Bazaar" },
  { id: "bosphorus", label: "Bosphorus cruise" },
  { id: "food", label: "Turkish food & street eats" },
  { id: "europe-asia", label: "Europe & Asia crossing" },
  { id: "walking", label: "Walking & neighbourhoods" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  "historic-peninsula": ["hagia-sophia-and-blue-mosque-tour", "istanbul-highlights-tour", "istanbul-walking-tour"],
  palaces: ["topkapi-palace-tour", "istanbul-highlights-tour", "private-istanbul-shore-excursion"],
  bazaars: ["grand-bazaar-and-spice-bazaar-tour", "istanbul-highlights-tour", "istanbul-walking-tour"],
  bosphorus: ["bosphorus-cruise", "istanbul-highlights-tour", "europe-and-asia-tour"],
  food: ["istanbul-food-tour", "istanbul-walking-tour", "grand-bazaar-and-spice-bazaar-tour"],
  "europe-asia": ["europe-and-asia-tour", "bosphorus-cruise", "private-istanbul-shore-excursion"],
  walking: ["istanbul-walking-tour", "hagia-sophia-and-blue-mosque-tour", "basilica-cistern-tour"],
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

export function generateIstanbulPlan(input: PlannerInput): PlannerResult {
  const { visitorType, timeframe, adults, children, interests, mobility, style } = input;
  const party = adults + children;
  const hasKids = children > 0;

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  const activeInterests = interests.length ? interests : ["historic-peninsula", "bosphorus"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("istanbul-highlights-tour");
  if (mobility === "limited") pushSlug("private-istanbul-shore-excursion");
  if (style === "diy") pushSlug("istanbul-walking-tour");

  const shortDay = visitorType === "port-day" && timeframe === "short";
  if (visitorType === "port-day") {
    if (shortDay) pushSlug("hagia-sophia-and-blue-mosque-tour");
    else if (timeframe === "long") pushSlug("istanbul-highlights-tour");
    else pushSlug("istanbul-highlights-tour");
  }

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => {
      const e = excursions.find((x) => x.slug === s);
      return excursionLink(s, e?.tagline ?? "A strong match for your interests.");
    })
    .filter((x): x is PlannerLink => x !== null);

  const transfers: PlannerLink[] = [];
  if (visitorType === "port-day") {
    transfers.push({
      label: "Istanbul Cruise Port Guide",
      href: "/istanbul-cruise-port-guide",
      why: "Tram, taxi and transfer times from Galataport to Sultanahmet.",
    });
    transfers.push({
      label: "Walking from Galataport",
      href: "/walking-from-galataport",
      why: "Step-by-step routes from the terminal to Karaköy and beyond.",
    });
  } else {
    transfers.push({
      label: "Istanbul Cruise Port Guide",
      href: "/istanbul-cruise-port-guide",
      why: "Terminal layout and embarkation-day logistics at Galataport.",
    });
  }

  const stay: PlannerLink[] = [];
  if (visitorType === "embarking" || visitorType === "staying") {
    stay.push({
      label: "Best Time to Visit Istanbul",
      href: "/best-time-to-visit-istanbul",
      why: "Seasons, weather and crowd patterns for your cruise dates.",
    });
  }

  const logistics: PlannerLink[] = [];
  if (visitorType === "port-day") {
    logistics.push({
      label: "Istanbul Cruise Ship Schedule",
      href: "/istanbul-cruise-ship-schedule",
      why: "Check how many ships share your port day before booking.",
    });
    logistics.push({
      label: "One Day in Istanbul from a Cruise Ship",
      href: "/one-day-in-istanbul-from-a-cruise-ship",
      why: "A realistic plan built around your hours ashore.",
    });
    logistics.push({
      label: "Best Istanbul Cruise Excursions",
      href: "/best-istanbul-cruise-excursions",
      why: "Compare guided options with honest return-to-ship notes.",
    });
  }

  const dayPlan: { time: string; text: string }[] = [];
  if (visitorType === "port-day") {
    const topExc = excursionLinks[0]?.label ?? "Historic Peninsula sights";
    dayPlan.push({
      time: "On arrival",
      text: "Disembark at Galataport and head to the T1 tram or meet your tour — allow 15 minutes to clear the terminal.",
    });
    dayPlan.push({
      time: "Morning",
      text: `Do your top, most time-sensitive sight first: ${topExc}. Book timed entries for Hagia Sophia when required.`,
    });
    dayPlan.push({
      time: "Midday",
      text: interests.includes("food")
        ? "Lunch near Sultanahmet or a meze stop in the Spice Bazaar quarter."
        : "Lunch in the Old City, then Topkapi Palace or the Basilica Cistern.",
    });
    if (timeframe !== "short")
      dayPlan.push({
        time: "Afternoon",
        text: interests.includes("bosphorus")
          ? "A short Bosphorus cruise or Grand Bazaar browse before heading back."
          : "A second sight, bazaar time or a harbour stroll in Karaköy before you return.",
      });
    dayPlan.push({
      time: "Return buffer",
      text: "Be back at Galataport at least 30–60 minutes before all-aboard; allow more if returning from the Asian side.",
    });
  } else if (visitorType === "embarking") {
    dayPlan.push({
      time: "On landing",
      text: "Transfer from IST airport to Galataport (45–60 min) or your hotel in Sultanahmet or Karaköy.",
    });
    dayPlan.push({
      time: "Check-in window",
      text: "Arrive at Galataport at the start of your check-in window. Confirm your berth assignment.",
    });
    dayPlan.push({
      time: "Spare time",
      text: "If you have hours before boarding, walk Galata Bridge or visit Hagia Sophia — both are feasible from the port area.",
    });
  } else if (visitorType === "disembarking") {
    dayPlan.push({ time: "07:00–09:30", text: "Disembark. Have your onward transfer to IST arranged in advance." });
    dayPlan.push({
      time: "Spare hours",
      text: "Enjoy a final Turkish breakfast, bazaar browse or Bosphorus walk before your flight.",
    });
    dayPlan.push({
      time: "To the airport",
      text: "Head to IST with a comfortable buffer; pre-book an afternoon transfer.",
    });
  } else {
    dayPlan.push({
      time: "Choose a base",
      text: "Sultanahmet for sights; Karaköy or Galata for port proximity and Bosphorus views.",
    });
    dayPlan.push({
      time: "Day 1",
      text: "Historic Peninsula — Hagia Sophia, Blue Mosque and Topkapi Palace.",
    });
    dayPlan.push({
      time: "Day 2",
      text: "Grand Bazaar, Spice Bazaar and a Bosphorus ferry or Europe-and-Asia crossing.",
    });
  }

  const typeLabels: Record<VisitorTypeId, string> = {
    "port-day": "Istanbul Port-Day Plan",
    embarking: "Istanbul Embarkation Plan",
    disembarking: "Istanbul Disembarkation Plan",
    staying: "Istanbul Pre/Post-Cruise Plan",
  };

  const summaries: Record<VisitorTypeId, string> = {
    "port-day": `A ${timeframe === "short" ? "short" : timeframe === "long" ? "long" : "standard"} port day for ${party} guest${party === 1 ? "" : "s"} focused on ${activeInterests.map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i).join(", ").toLowerCase()}.`,
    embarking: `An embarkation plan for ${party} guest${party === 1 ? "" : "s"} — Galataport timing and what to see before you board.`,
    disembarking: `A disembarkation plan for ${party} guest${party === 1 ? "" : "s"} — getting to the airport smoothly.`,
    staying: `A pre/post-cruise stay for ${party} guest${party === 1 ? "" : "s"} — where to base yourself across two continents.`,
  };

  return {
    headline: typeLabels[visitorType],
    summary: summaries[visitorType],
    excursions: excursionLinks,
    transfers,
    stay,
    logistics,
    dayPlan,
  };
}
