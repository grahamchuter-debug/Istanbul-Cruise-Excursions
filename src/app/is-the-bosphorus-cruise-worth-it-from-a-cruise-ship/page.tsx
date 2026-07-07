import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "is-the-bosphorus-cruise-worth-it-from-a-cruise-ship";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
