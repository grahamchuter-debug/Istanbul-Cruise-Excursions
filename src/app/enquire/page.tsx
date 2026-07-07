import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Enquire / Contact",
  description: "Get in touch about Istanbul cruise planning — shore excursions, port-day timing, Hagia Sophia, Bosphorus and Europe-and-Asia questions. We're happy to help you plan your day.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquire", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Enquire / Contact", description: "Get in touch about Istanbul cruise planning.", path })]} />
      <PageHero title="Enquire / Contact" subtitle="Questions about your Istanbul port day, shore excursions or return-to-ship timing? Tell us your ship and interests and we'll point you in the right direction." compact />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input id="name" type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="cruise" className="block text-sm font-medium text-gray-700 mb-1">Cruise date &amp; ship (optional)</label>
              <input id="cruise" type="text" placeholder="e.g. MSC Splendida, 18 April 2026" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
              <textarea id="message" rows={5} placeholder="Tell us your port window, interests (Hagia Sophia, bazaars, Bosphorus, food…) and any mobility needs." className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Send enquiry</button>
          </form>
          <p className="mt-6 text-sm text-gray-600">Or email us directly at <a href={`mailto:${SITE.email}`} className="font-medium text-coastal-700 hover:underline">{SITE.email}</a></p>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
