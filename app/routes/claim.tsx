import type { Route } from "./+types/claim";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NDIS Claim & Funding Accelerator | Therapy Sausages" },
    {
      name: "description",
      content:
        "Turn NDIS plans into real dachshund therapy hours. Estimate session capacity, map line items, and book or sponsor sessions with Therapy Sausages.",
    },
  ];
}

export default function Claim() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/ndis" className="hover:text-[#c45c26]">NDIS Portal</Link>
            <Link to="/navigator" className="hover:text-[#c45c26]">Navigator</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 4 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            NDIS Claim & Funding Accelerator
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Animal-assisted therapy is support, not a novelty. This page helps participants, families and coordinators turn plan dollars into real hours with the pack — ethically, clearly, and fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book an NDIS-friendly session
            </Link>
            <a href="mailto:emily@therapysausages.com?subject=NDIS%20Claim%20Help" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Email your plan questions
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-4">Quick session estimator</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Use these published starting prices as a planning guide. Final invoices follow the agreed quote and your plan rules. This is not financial or NDIS legal advice. Confirm with your Support Coordinator or plan manager.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <p className="text-sm text-[#c45c26] font-semibold">Individual / family</p>
            <p className="text-3xl font-bold my-2">$150–$180</p>
            <p className="text-gray-700 text-sm">45–60 minutes with the pack. Mobile Gold Coast / Noosa. Typical planning: 8–12 sessions per quarter.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <p className="text-sm text-[#c45c26] font-semibold">Group / community</p>
            <p className="text-3xl font-bold my-2">From $450</p>
            <p className="text-gray-700 text-sm">Office, school-adjacent or community groups. Quote required. Strong fit for capacity-building goals.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <p className="text-sm text-[#c45c26] font-semibold">Farm day / intensive</p>
            <p className="text-3xl font-bold my-2">From $380</p>
            <p className="text-gray-700 text-sm">Forevermore Farm immersions. Longer reset. Combine with sponsored hours if the plan cannot cover the full day.</p>
          </div>
        </div>
        <div className="mt-8 bg-[#fdf6e3] rounded-2xl p-6 border border-[#c45c26]/15">
          <h3 className="font-bold text-[#2d5016] mb-3">Simple planning math</h3>
          <p className="text-gray-700">
            If a participant has $1,800 allocated toward animal-assisted or community participation support at $180 per session, that is roughly <strong>10 protected hours</strong> with the pack. If the plan is short, use <Link to="/sponsor" className="text-[#c45c26] font-semibold underline">Impact Sponsorship</Link> or <Link to="/microgive" className="text-[#c45c26] font-semibold underline">Micro-Impact Giving</Link> to fill the gap without delaying care.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Claim-ready checklist</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>1. Goal language.</strong> Regulation, community participation, social and emotional wellbeing, daily living capacity — write the goal in the participant’s words.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>2. Service agreement.</strong> We issue a clear agreement, session notes pathway and invoice format before the first hour.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>3. Evidence of support.</strong> Session notes stay trauma-informed and practical. No theatre. Real presence.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>4. Funding source.</strong> Plan-managed, self-managed or mixed. We do not guess — we confirm the payer before the visit.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>5. Backup path.</strong> If a line item is declined, sponsored hours and gift sessions keep the relationship alive.</li>
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/navigator" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition text-center">
              Open NDIS Navigator
            </Link>
            <Link to="/ndis" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition text-center">
              Full NDIS Portal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Funding should not be the reason someone waits</h2>
          <p className="opacity-90 mb-8">Book the hour. We will help map the claim. If the plan is not ready, the giving engines cover the first step.</p>
          <Link to="/book" className="bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition inline-block">
            Book now
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · NDIS Claim Accelerator · Led by Emily Blue Richards · 4 September 2026</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
