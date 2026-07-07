import Link from "next/link";

const LINKS = [
  { href: "/shore-excursions", label: "Shore Excursions" },
  { href: "/istanbul-cruise-port-guide", label: "Cruise Port Guide" },
  { href: "/best-istanbul-cruise-excursions", label: "Best Excursions" },
  { href: "/one-day-in-istanbul-from-a-cruise-ship", label: "One Day in Istanbul" },
  { href: "/istanbul-cruise-planner", label: "Cruise Planner" },
  { href: "/istanbul-cruise-ship-schedule", label: "Ship Schedule" },
  { href: "/faq", label: "FAQ" },
  { href: "/enquire", label: "Enquire" },
];

export function PlanningLinks({ heading = "Keep planning your Istanbul port day" }: { heading?: string }) {
  return (
    <section className="rounded-2xl border border-coastal-100 bg-coastal-50/60 p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-gray-900">{heading}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="pill hover:bg-coastal-100 transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
