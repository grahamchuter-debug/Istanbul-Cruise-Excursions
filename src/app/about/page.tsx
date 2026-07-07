import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Istanbul Cruise Excursions",
  description: "About Istanbul Cruise Excursions — the leading independent Istanbul cruise planning hub for passengers exploring Europe and Asia from Galataport.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Istanbul Cruise Excursions", description: "About Istanbul Cruise Excursions.", path })]} />
      <PageHero title="About Istanbul Cruise Excursions" subtitle="An independent planning hub built for cruise passengers calling at Galataport." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Galataport Istanbul &mdash; one of the world&apos;s great cultural cruise ports. Two continents meet here at the Bosphorus, yet many passengers arrive unsure how to fit Hagia Sophia, the bazaars and a Bosphorus cruise into a single port day. Our goal is to make that planning straightforward.
            </p>
            <p>
              We focus on practical port-day decisions: which excursions fit your time in port, how to reach Sultanahmet from Galataport, when Europe-and-Asia crossings are genuinely feasible, and how to build a comfortable return buffer before all-aboard. Every guide is written for real cruise timings, not generic city tourism.
            </p>
            <p>
              Ship schedules and transfer times are indicative &mdash; always confirm all-aboard times with your cruise line before booking excursions or ferries.
            </p>
            <p>
              Have a question we haven&apos;t answered? <a href="/enquire">Get in touch</a> and we&apos;ll help you plan.
            </p>
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
