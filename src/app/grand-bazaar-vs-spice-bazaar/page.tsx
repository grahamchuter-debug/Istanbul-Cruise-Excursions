import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "grand-bazaar-vs-spice-bazaar";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
