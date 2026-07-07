import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "walking-from-galataport";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
