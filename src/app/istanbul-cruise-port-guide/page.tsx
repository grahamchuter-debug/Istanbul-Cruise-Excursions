import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { terminals, portGuideSections, portGuideFaqs } from "@/data/port-guide";
import { getTier1Guides } from "@/data/guides";

const path = "/istanbul-cruise-port-guide";
const image = siteImages.port;

export const metadata = buildMetadata({
  title: "Istanbul Cruise Port Guide",
  description:
    "The complete Istanbul cruise port guide — Galataport terminals, trams and taxis to Sultanahmet, mosque dress codes, currency, security queues and return-to-ship timing for cruise passengers.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Istanbul cruise port", "Galataport cruise terminal", "Istanbul cruise port guide"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Istanbul Cruise Port Guide", path },
];

export default function IstanbulCruisePortGuidePage() {
  const tier1 = getTier1Guides().filter((g) => g.slug !== "best-time-to-visit-istanbul");

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(portGuideFaqs), articleSchema({ title: "Istanbul Cruise Port Guide", description: metadata.description as string, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Terminal guidance" title="Istanbul Cruise Port Guide" subtitle="Galataport logistics — trams, taxis, traffic, Old City transfer times and return-to-ship advice across two continents." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-4">Galataport cruise berths at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Berth / area</th>
                  <th className="px-4 py-3 text-left font-semibold">Location</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical use</th>
                  <th className="px-4 py-3 text-left font-semibold">Old City access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">Check your cruise documents for your exact berth — all main quays use Galataport facilities on the Karaköy waterfront.</p>

          <div className="prose-body mt-8">
            {portGuideSections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/walking-from-galataport" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Walking from Galataport</h3><p className="mt-1 text-sm text-gray-600">Step-by-step routes to Karaköy and Sultanahmet.</p></Link>
            <Link href="/one-day-in-istanbul-from-a-cruise-ship" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">One day in Istanbul</h3><p className="mt-1 text-sm text-gray-600">4, 6, 8 and 10+ hour itineraries by port window.</p></Link>
            <Link href="/istanbul-cruise-ship-schedule" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Ship schedule</h3><p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p></Link>
          </div>

          <div className="mt-12">
            <h2 className="section-title text-2xl mb-6">Essential Istanbul cruise planning</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tier1.map((g) => (
                <Link key={g.slug} href={g.path} className="nav-card">
                  <h3 className="font-display text-base font-bold text-gray-900">{g.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{g.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          <EnquiryCTA />

          <div className="mt-12"><FAQSection faqs={portGuideFaqs} title="Istanbul Cruise Port — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
