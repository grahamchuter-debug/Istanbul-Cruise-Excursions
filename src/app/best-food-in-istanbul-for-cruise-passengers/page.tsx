import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "best-food-in-istanbul-for-cruise-passengers";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
