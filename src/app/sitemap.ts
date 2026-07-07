import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs, guides } from "@/data/guides";
import { getVerifiedMonthKeys } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath, SCHEDULE_BASE, SCHEDULE_PORT_SLUG } from "@/lib/schedule-utils";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);

const TIER1_PRIORITY = new Set([
  "/",
  "/istanbul-cruise-port-guide",
  "/one-day-in-istanbul-from-a-cruise-ship",
  "/best-istanbul-cruise-excursions",
  "/hagia-sophia-vs-blue-mosque",
  "/is-the-bosphorus-cruise-worth-it-from-a-cruise-ship",
  "/europe-and-asia-in-one-day-from-a-cruise-ship",
  "/grand-bazaar-vs-spice-bazaar",
  "/best-food-in-istanbul-for-cruise-passengers",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/istanbul-cruise-port-guide",
    "/best-istanbul-cruise-excursions",
    "/things-to-do-in-istanbul-from-a-cruise-ship",
    "/one-day-in-istanbul-from-a-cruise-ship",
    "/walking-from-galataport",
    "/best-time-to-visit-istanbul",
    SCHEDULE_BASE,
    "/istanbul-cruise-planner",
    "/faq",
    "/enquire",
    "/about",
  ];

  const guidePages = getAllGuideSlugs()
    .map((slug) => guides.find((g) => g.slug === slug)?.path)
    .filter((p): p is string => Boolean(p));

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...SCHEDULE_YEARS.map((y) => portYearPath(SCHEDULE_PORT_SLUG, y)),
    ...getVerifiedMonthKeys(SCHEDULE_PORT_SLUG).map((mk) => portMonthPath(SCHEDULE_PORT_SLUG, mk)),
  ];

  const all = [...new Set([...staticPages, ...guidePages, ...dynamicPages])].filter(
    (path) => !NOINDEX_PATHS.has(path),
  );

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : TIER1_PRIORITY.has(path) ? 0.9 : 0.7,
    };
  });
}
