import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";
import { guides } from "@/data/guides";

const path = "/things-to-do-in-istanbul-from-a-cruise-ship";
const image = subjectImages["city-highlights"];

export const metadata = buildMetadata({
  title: "Things To Do In Istanbul From A Cruise Ship",
  description:
    "What to do in Istanbul from a cruise ship — Hagia Sophia, Blue Mosque, Topkapi Palace, bazaars, Bosphorus cruises and Europe-and-Asia crossings with honest timing for every port window.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["things to do Istanbul cruise ship", "Istanbul port day activities"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Things To Do", path },
];

const activityRows = [
  ["Hagia Sophia & Blue Mosque", "Tram / taxi", "2–3 hours", "All calls", "High"],
  ["Topkapi Palace", "Tram / taxi", "2–3 hours", "5+ hours", "High"],
  ["Basilica Cistern", "Walk in Sultanahmet", "45–60 min", "4+ hours", "High"],
  ["Grand Bazaar", "Tram / walk", "1–2 hours", "4+ hours", "High"],
  ["Spice Bazaar", "Tram / walk", "45–90 min", "4+ hours", "High"],
  ["Bosphorus cruise", "Tour / ferry", "1.5–3 hours", "6+ hours", "Medium"],
  ["Europe & Asia crossing", "Tour / ferry", "3–5 hours", "8+ hours", "Medium"],
  ["Turkish food tour", "Guided walk", "2–3 hours", "5+ hours", "High"],
];

const faqs = [
  { question: "What can I do in Istanbul on a short port call?", answer: "Focus on Hagia Sophia and the Blue Mosque in Sultanahmet — the two icons of the Historic Peninsula. Add the Basilica Cistern only if your window exceeds five usable hours." },
  { question: "Is Sultanahmet walkable from Galataport?", answer: "Walking via Galata Bridge takes 45–60 minutes. Most passengers take the T1 tram from Karaköy to Sultanahmet in 15–20 minutes." },
  { question: "What's the single best activity for first-time visitors?", answer: "The Historic Peninsula trio — Hagia Sophia, Blue Mosque and Topkapi Palace — delivers maximum culture per hour. An organised highlights tour is the safest way to fit all three." },
  { question: "Can families enjoy Istanbul on a port day?", answer: "Yes. The Basilica Cistern fascinates children, bazaars are colourful and Bosphorus ferries are exciting. Mosque dress codes apply — bring scarves and modest clothing." },
  { question: "When should I book an organised tour?", answer: "When you want Old City plus Bosphorus or Asia in one day, or when Friday prayer closures and traffic make independent timing risky." },
  { question: "How do I plan around multiple interests?", answer: "Use our one-day itineraries or cruise planner — match mosques to the morning and keep afternoon options close to your return route to Galataport." },
];

const destinationGuides = guides.filter((g) =>
  ["hagia-sophia-from-cruise-port", "blue-mosque-from-cruise-port", "topkapi-palace-from-cruise-port", "grand-bazaar-from-cruise-port", "bosphorus-cruise-from-cruise-port", "best-food-in-istanbul-for-cruise-passengers", "europe-and-asia-in-one-day-from-a-cruise-ship"].includes(g.slug),
);

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), articleSchema({ title: "Things To Do In Istanbul From A Cruise Ship", description: metadata.description as string, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Port-day ideas" title="Things To Do In Istanbul From A Cruise Ship" subtitle="Byzantine masterpieces, Ottoman palaces, bazaars and Bosphorus views — honest timing for every port window." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-lg leading-relaxed text-gray-700">
            Istanbul is one of the world&apos;s great cultural cruise ports — a city where Europe and Asia meet at the water&apos;s edge. The table below ranks activities by how well they fit typical Galataport port windows, then follow our destination guides for the detail.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Activity</th>
                  <th className="px-4 py-3 text-left font-semibold">Access</th>
                  <th className="px-4 py-3 text-left font-semibold">Time needed</th>
                  <th className="px-4 py-3 text-left font-semibold">Min. port window</th>
                  <th className="px-4 py-3 text-left font-semibold">Return confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {activityRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {destinationGuides.map((g) => (
              <Link key={g.slug} href={g.path} className="nav-card">
                <h3 className="font-display text-base font-bold text-gray-900">{g.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{g.tagline}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/one-day-in-istanbul-from-a-cruise-ship" className="btn-primary">One-day itineraries</Link>
            <Link href="/best-istanbul-cruise-excursions" className="btn-secondary">Best excursions</Link>
            <Link href="/shore-excursions" className="btn-secondary">All excursions</Link>
          </div>

          <EnquiryCTA />
          <div className="mt-12"><FAQSection faqs={faqs} title="Things To Do — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
