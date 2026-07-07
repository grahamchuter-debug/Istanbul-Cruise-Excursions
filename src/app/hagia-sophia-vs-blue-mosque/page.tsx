import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "hagia-sophia-vs-blue-mosque";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
