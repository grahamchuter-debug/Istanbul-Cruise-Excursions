import Link from "next/link";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, subjectImages } from "@/lib/images";
import { getTier1Guides } from "@/data/guides";

const path = "/best-istanbul-cruise-excursions";
const image = subjectImages.highlights;

export const metadata = buildMetadata({
  title: "Best Istanbul Cruise Excursions for Cruise Passengers",
  description:
    "Compare the best Istanbul cruise excursions for cruise passengers — Hagia Sophia, Topkapi Palace, bazaars, Bosphorus cruises and Europe-and-Asia tours with honest return-to-ship timing.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["best Istanbul cruise excursions", "Istanbul shore excursions", "Galataport tours"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Best Istanbul Cruise Excursions", path },
];

const comparison = {
  title: "Excursion comparison for cruise passengers",
  headers: ["Excursion", "Duration", "Return confidence", "Best for"],
  rows: excursions.map((e) => [e.title, e.duration, e.snapshot.returnConfidence, e.bestFor]),
};

const faqs = [
  { question: "What is the best Istanbul shore excursion for first-time visitors?", answer: "An Istanbul highlights tour or Hagia Sophia and Blue Mosque tour is the strongest first choice — the Historic Peninsula essentials with cruise-timed returns from Galataport." },
  { question: "Can I do Europe and Asia on a standard port day?", answer: "Yes, on calls with 8+ usable hours. Europe-and-Asia tours use ferries or Marmaray with built-in return margins. Shorter calls should stay on the European side." },
  { question: "Is a Bosphorus cruise worth it from a cruise ship?", answer: "Often yes on 6+ hour calls — you see palaces and skylines from the water. See our dedicated worth-it guide for short vs long cruise options." },
  { question: "Are Istanbul shore excursions better than going independent?", answer: "Independent tram travel works for confident passengers with timed Hagia Sophia tickets. Organised tours reduce traffic stress and mosque routing on tight schedules." },
  { question: "What should I avoid booking on a short port call?", answer: "Europe-and-Asia full-day tours, long Bosphorus lunches and late-afternoon Asian-side returns. Stick to Hagia Sophia, Blue Mosque and perhaps the Basilica Cistern." },
  { question: "How do I choose between food tours and sightseeing?", answer: "Food tours pair well with a short bazaar visit on standard-length calls. On shorter calls, prioritise mosques and palace, then grab simit or kebab independently." },
];

export default function BestIstanbulCruiseExcursionsPage() {
  const featured = excursions.filter((e) => e.featured);
  const tier1 = getTier1Guides();

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), articleSchema({ title: "Best Istanbul Cruise Excursions", description: metadata.description as string, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Excursion guide" title="Best Istanbul Cruise Excursions" subtitle="Honest comparisons for cruise passengers — two continents, Ottoman history and return-to-ship confidence on every option." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-lg leading-relaxed text-gray-700">
            Istanbul rewards cruise passengers who plan around culture, bazaars and the Bosphorus — not rushed checklist tourism. The best shore excursions combine Hagia Sophia, Topkapi Palace, both bazaars and, on longer calls, a carefully timed Europe-and-Asia crossing. Use the comparison table below, then open each excursion for full cruise-passenger details.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  {comparison.headers.map((h) => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {comparison.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-6">Top picks for cruise passengers</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((e) => {
              const img = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                    image={img}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-2 text-xs font-medium text-coastal-700">Return confidence: {e.snapshot.returnConfidence}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="section-title text-2xl mb-6">Plan before you book</h2>
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

          <div className="mt-12"><FAQSection faqs={faqs} title="Best Istanbul Cruise Excursions — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
