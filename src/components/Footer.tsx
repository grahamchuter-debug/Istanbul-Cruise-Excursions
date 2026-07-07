import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Istanbul Cruise Excursions</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">Two continents. One unforgettable cruise port. The leading independent Istanbul cruise planning resource — Hagia Sophia, bazaars, Bosphorus and Galataport shore excursions for cruise passengers.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/istanbul-cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/one-day-in-istanbul-from-a-cruise-ship" className="hover:text-white">One Day in Istanbul</Link></li>
              <li><Link href="/istanbul-cruise-ship-schedule" className="hover:text-white">Ship Schedule</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Istanbul guides</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/hagia-sophia-from-cruise-port" className="hover:text-white">Hagia Sophia Guide</Link></li>
              <li><Link href="/blue-mosque-from-cruise-port" className="hover:text-white">Blue Mosque Guide</Link></li>
              <li><Link href="/topkapi-palace-from-cruise-port" className="hover:text-white">Topkapi Palace Guide</Link></li>
              <li><Link href="/europe-and-asia-in-one-day-from-a-cruise-ship" className="hover:text-white">Europe &amp; Asia in One Day</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Essential planning</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/istanbul-cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
              <li><Link href="/best-istanbul-cruise-excursions" className="hover:text-white">Best Shore Excursions</Link></li>
              <li><Link href="/best-time-to-visit-istanbul" className="hover:text-white">Best Time to Visit</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Istanbul cruise planning resource — not affiliated with any cruise line or Galataport.
      </div>
    </footer>
  );
}
