import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "basilica-cistern-from-cruise-port";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
