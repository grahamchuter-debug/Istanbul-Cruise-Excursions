import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "one-day-in-istanbul-from-a-cruise-ship";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
