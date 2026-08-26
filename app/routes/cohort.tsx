import type { Route } from "./+types/cohort";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live Practitioner Cohorts | Therapy Sausages" },
    {
      name: "description",
      content:
        "Live cohort training for aspiring and practicing animal-assisted therapy professionals. Hands-on systems, NDIS pathways, business building and direct guidance from Emily Blue Richards.",
    },
  ];
}

export default function Cohort() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/certify" className="hover:text-[#c45c26]">Certification</Link>
            <Link to="/mastermind" className="hover:text-[#c45c26]">Mastermind</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — 27 August 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Live Practitioner Cohorts
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Structured, live group training that turns certification knowledge into booked sessions, NDIS readiness and sustainable practice. Small cohorts. Direct access to Emily. Clear path into the Directory, Franchise and Mastermind.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Live%20Practitioner%20Cohort%20Application" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Apply for Next Cohort
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">What the Cohort Delivers</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Not another self-paced course. Live sessions, peer practice, real case reviews and accountability so you leave ready to serve clients and grow income.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">8-Week Live Program</h3>
            <p className="text-gray-700">Weekly live sessions covering assessment, session design, NDIS documentation, marketing, pricing and nervous-system safety for both humans and dogs.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Peer Practice Pods</h3>
            <p className="text-gray-700">Small breakout groups for role-play, feedback and mutual accountability. You practice the work before you charge for it.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Business Launch Support</h3>
            <p className="text-gray-700">Offer templates, client scripts, Directory listing pathway and optional bridge into Mastermind or Franchise for those ready to scale.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-8">Investment & Next Cohort</h2>
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#d4a017]">
            <p className="text-[#d4a017] font-semibold mb-2">Live Practitioner Cohort</p>
            <h3 className="text-2xl font-bold text-[#2d5016] mb-2">8 Weeks · Small Group</h3>
            <p className="text-3xl font-bold text-[#c45c26] mb-6">From $1,497 (or 3 × $549)</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> 8 live group training sessions with Emily</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Peer practice pods and feedback</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Full systems templates and scripts</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> NDIS readiness checklist and documentation pack</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Priority pathway into Certified Directory</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Certificate of completion</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Optional bridge into Mastermind / Franchise</li>
            </ul>
            <a href="mailto:emily@therapysausages.com?subject=Live%20Practitioner%20Cohort%20Application%20-%20Ready" className="block text-center bg-[#c45c26] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Apply for the Next Cohort
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Build the Practice. Multiply the Healing.</h2>
          <p className="opacity-90 mb-8">Cohorts are intentionally small so every participant gets real attention. Apply now — seats fill from the waitlist.</p>
          <a href="mailto:emily@therapysausages.com?subject=Live%20Practitioner%20Cohort%20Application" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Send Application
          </a>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Live Practitioner Cohorts · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
