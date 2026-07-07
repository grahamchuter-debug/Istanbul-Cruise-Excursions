import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { IstanbulCruisePlanner } from "@/components/IstanbulCruisePlanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";

const path = "/istanbul-cruise-planner";
const image = subjectImages.planner;

export const metadata = buildMetadata({
  title: "Istanbul Cruise Planner",
  description:
    "Build a personalised Istanbul cruise plan — shore excursions, port-day timing and return-to-ship advice tailored to your ship, interests and mobility.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Istanbul cruise planner", "plan Istanbul port day"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Istanbul Cruise Planner", path },
];

export default function IstanbulCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Istanbul Cruise Planner", description: metadata.description as string, path })]} />
      <PhotoHeroBand image={image} eyebrow="Personalised planning" title="Istanbul Cruise Planner" subtitle="Answer a few questions and get tailored excursions, port guides and a realistic day plan for your Istanbul cruise visit." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <IstanbulCruisePlanner />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
