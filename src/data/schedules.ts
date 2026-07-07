import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import istanbulSchedule from "./imported-schedules/istanbul.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are the Istanbul cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, berths and dates can change, so always confirm your arrival and departure with your cruise line before booking shore excursions or transfers.",
  },
  {
    question: "Where do cruise ships dock in Istanbul?",
    answer:
      "Most cruise ships berth at Galataport Istanbul on the Karaköy waterfront. The terminal sits between the Bosphorus and the Historic Peninsula — see our Istanbul Cruise Port Guide for transfer times to Hagia Sophia and the Old City.",
  },
  {
    question: "When is Istanbul cruise season?",
    answer:
      "Most calls run from April through November, with peak traffic in June, July and August. Shoulder-season days in spring and autumn often mean shorter queues at major sights.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships are in port before booking Bosphorus cruises and palace tickets",
  "Confirm your berth at Galataport so taxis and tours meet you at the correct gate",
  "Visit Hagia Sophia and the Blue Mosque early on busy summer ship days",
  "Compare your time in port before choosing Europe-and-Asia day tours",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    seoTitle: "Istanbul Cruise Ship Schedule 2026",
    metaDescription:
      "Istanbul cruise ship schedule hub. See which ships are in port at Galataport and plan Hagia Sophia, Bosphorus and Old City shore excursions around published arrival and departure times.",
    intro:
      "Istanbul is one of the Mediterranean's great cultural cruise ports, with ships docking at Galataport on the Bosphorus. Check which vessels are scheduled before you book excursions or plan your day across Europe and Asia.",
    description:
      "Bosphorus cruise port at Galataport — Historic Peninsula, mosques, palaces and bazaars from the quay.",
    scheduleOverview:
      "Istanbul sees cruise traffic from April through November, concentrated at Galataport with occasional scheduling variations by ship size.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  istanbul: istanbulSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
