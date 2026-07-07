import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "topkapi-palace-vs-basilica-cistern";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
