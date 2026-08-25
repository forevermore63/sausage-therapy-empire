import type { Route } from "./+types/mastermind";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forevermore Mastermind | Therapy Sausages High-Ticket Circle" },
    {
      name: "description",
      content:
        "Exclusive Forevermore Mastermind for Therapy Sausages practitioners, farm partners and empire builders. High-ticket group coaching, systems, accountability and direct access to Emily Blue Richards. Scale healing and revenue together.",
    },
  ];
}

export default function Mastermind() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/franchise" className="hover:text-[#c45c26]">Franchise</Link>
            <Link to="/certify" className="hover:text-[#c45c26]">Certification</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — August 26 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Forevermore Mastermind
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            The exclusive high-ticket circle for Licensed Practitioners, Farm Partners, and serious empire builders. Direct access to Emily, live systems sessions, peer accountability, and the exact playbooks that turn true into tremendous. Limited seats. Giving-first by design.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Forevermore%20Mastermind%20Application" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Apply for the Mastermind
          </a>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Why the Mastermind Exists</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Certification and licensing give you the tools. The Mastermind gives you the room, the peers, and the live guidance to actually implement at scale while protecting your nervous system and the dogs. This is where the empire multiplies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Live Systems & Strategy</h3>
            <p className="text-gray-700">Twice-monthly live sessions with Emily covering NDIS scaling, corporate contracts, farm operations, digital product leverage, and giving mechanics that actually attract capital.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Peer Accountability Circle</h3>
            <p className="text-gray-700">Small, curated group of practitioners and farm partners. Hot-seat problem solving, shared wins, and real-time feedback so no one builds alone.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Direct Path to Revenue</h3>
            <p className="text-gray-700">Templates, scripts, pricing frameworks and deal reviews that turn knowledge into booked sessions, memberships and licences. Impact numbers tracked and celebrated.</p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-8">What You Receive</h2>
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#d4a017]">
            <p className="text-[#d4a017] font-semibold mb-2">Forevermore Mastermind — 6-Month Intensive</p>
            <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Limited Cohort</h3>
            <p className="text-3xl font-bold text-[#c45c26] mb-6">From $2,997 (or 6 × $549)</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> 12 live group strategy sessions with Emily</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Private Mastermind community channel</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Hot-seat reviews of your offers, pricing and funnels</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Full access to updated systems and templates</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Priority listing in the Certified Directory</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> One private 1:1 strategy call with Emily</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Impact tracking and giving allocation support</li>
              <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Option to renew or ascend into Farm Partner pathways</li>
            </ul>
            <a href="mailto:emily@therapysausages.com?subject=Forevermore%20Mastermind%20Application%20-%20Ready%20to%20Join" className="block text-center bg-[#c45c26] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Apply Now — Limited Seats
            </a>
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Perfect Fit</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Licensed Practitioners ready to scale beyond solo sessions</li>
              <li>• Farm / retreat owners wanting proven systems</li>
              <li>• Therapists or dog professionals expanding into animal-assisted work</li>
              <li>• Empire builders who choose giving over pure extraction</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Not For</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Anyone seeking passive certificates only</li>
              <li>• People unwilling to implement and report impact</li>
              <li>• Those who treat dogs as props rather than partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">From True to Tremendous — Together</h2>
          <p className="opacity-90 mb-8">The Mastermind is the acceleration chamber. Apply now. Emily reviews every application personally. Seats are intentionally limited so the circle stays powerful.</p>
          <a href="mailto:emily@therapysausages.com?subject=Forevermore%20Mastermind%20Application" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Send Your Application
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Forevermore Mastermind · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
