import Link from "next/link";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage, getExcursionImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Istanbul Shore Excursions",
  description:
    "Premium Istanbul shore excursions for cruise passengers — Hagia Sophia, Topkapi Palace, bazaars, Bosphorus cruises and Europe-and-Asia tours, all timed around your ship.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Istanbul cruise excursions", "Istanbul shore excursions from Galataport"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Istanbul Shore Excursions", description: "Premium Istanbul shore excursions for cruise passengers.", path: "/shore-excursions" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="Cruise-timed tours"
        title="Istanbul Shore Excursions"
        subtitle="Passenger-first tours built around your Galataport port day — mosques, palaces, bazaars and Bosphorus cruises with reliable return-to-ship timing."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mb-8 max-w-3xl text-gray-700 leading-relaxed">
            Every excursion below is designed for cruise passengers calling at Galataport. Compare duration, walking levels and return-to-ship confidence on each page, or use our{" "}
            <Link href="/best-istanbul-cruise-excursions" className="font-medium text-coastal-700 hover:underline">best excursions guide</Link>{" "}
            to narrow your choice.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace} · Return confidence: {e.snapshot.returnConfidence}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <EnquiryCTA />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
