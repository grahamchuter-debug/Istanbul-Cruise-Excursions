import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { VisitorTypeSelector } from "@/components/VisitorTypeSelector";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Istanbul Cruise Excursions & Cruise Planning",
  description: SITE.description,
  path: "/",
  keywords: ["Istanbul cruise port", "Istanbul shore excursions", "Galataport cruise", "Istanbul in one day from cruise"],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Istanbul Cruise Excursions & Cruise Planning",
            description: SITE.tagline,
            path: "/",
          }),
        ]}
      />

      <section className="home-hero">
        <img src={siteImages.hero.src} alt={siteImages.hero.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100">Istanbul cruise planning authority</p>
          <h1 className="home-hero-heading">Istanbul Cruise Excursions &amp; Two-Continent Cruise Planning</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Explore Europe and Asia in a single day ashore. Plan your Galataport port day around Hagia Sophia, the Blue Mosque, Topkapi Palace, Grand Bazaar, Bosphorus cruises and Ottoman history — with shore excursions built for cruise passengers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/istanbul-cruise-port-guide" className="btn-accent">Cruise Port Guide</Link>
            <Link href="/best-istanbul-cruise-excursions" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">Best Shore Excursions</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Two continents from Galataport</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Return-to-ship confidence built in</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Independent &amp; passenger-first</span>
          </div>
        </div>
      </section>

      <VisitorTypeSelector />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Istanbul for cruise passengers</p>
          <h2 className="section-title mt-2">A complete Istanbul cruise planning hub</h2>
          <p className="section-subtitle">Not a generic city guide — Historic Peninsula logistics, Bosphorus timing, bazaar strategy and honest port-day planning from Galataport to Sultanahmet and back.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Featured Shore Excursions</h2>
              <p className="section-subtitle">Cruise-timed tours of mosques, palaces, bazaars, Bosphorus cruises and Europe-and-Asia crossings.</p>
            </div>
            <Link href="/shore-excursions" className="btn-secondary shrink-0">All Excursions</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Short on time?</h3>
            <p className="mt-3 text-gray-700">Focus on the Historic Peninsula essentials — Hagia Sophia, Blue Mosque and Basilica Cistern. Our one-day itineraries show what fits a 4-hour window versus a full day ashore.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/hagia-sophia-from-cruise-port" className="btn-secondary text-sm">Hagia Sophia Guide</Link>
              <Link href="/walking-from-galataport" className="btn-secondary text-sm">Walking from Galataport</Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Longer port day?</h3>
            <p className="mt-3 text-gray-700">Add Topkapi Palace, both bazaars, a Bosphorus cruise or — on the longest calls — an honest Europe-and-Asia crossing with realistic return timing.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/one-day-in-istanbul-from-a-cruise-ship" className="btn-secondary text-sm">One Day Itineraries</Link>
              <Link href="/europe-and-asia-in-one-day-from-a-cruise-ship" className="btn-secondary text-sm">Europe &amp; Asia Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Build your personalised Istanbul cruise plan</h2>
          <p className="mt-4 text-white/85">Answer a few questions about your ship and interests — get tailored excursions, port-day timing and return-to-ship advice across two continents.</p>
          <Link href="/istanbul-cruise-planner" className="btn-accent mt-8 inline-flex">Start the Cruise Planner</Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Istanbul Cruise Planning FAQs" />
        </div>
      </section>
    </>
  );
}
