import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "europe-and-asia-in-one-day-from-a-cruise-ship";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
