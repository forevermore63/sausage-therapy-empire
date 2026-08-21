import type { Route } from "./+types/certify";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausage Practitioner Certification • Scale the Healing | Therapy Sausages" },
    {
      name: "description",
      content:
        "Become a certified Therapy Sausage Practitioner. High-ticket digital certification program teaching ethical dachshund-assisted therapy, NDIS pathways, session design, business systems and giving-first impact. Scale the dream from true to tremendous.",
    },
  ];
}

export default function Certify() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">Book Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">High-Ticket Digital Product · Lifetime Access · Giving-First</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Therapy Sausage Practitioner Certification
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Learn the complete ethical system for dachshund-assisted healing, NDIS-aligned sessions, corporate delivery and impact tracking. Carry the method forward and multiply the healing while generating real revenue for your own practice and the empire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:emily@therapysausages.com?subject=Certification%20Enrolment" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Enrol Now — $1,997
            </a>
            <Link to="/academy" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Explore Academy First
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">What You Master</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🐕</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Ethical Therapy Dog Practice</h3>
            <p className="text-gray-700">Temperament assessment, session design, welfare-first protocols, handling anxiety/trauma responses, and keeping the pack thriving.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">NDIS & Funding Mastery</h3>
            <p className="text-gray-700">Plan manager language, self-managed pathways, evidence frameworks, reporting templates and compliant delivery that actually gets paid.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate & Group Delivery</h3>
            <p className="text-gray-700">ROI positioning, office visit systems, team-day scripts, pricing ladders and how to turn one booking into recurring contracts.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">💚</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Giving-First Business Systems</h3>
            <p className="text-gray-700">Impact tracking, free-place funding models, membership funnels, digital product layering and the exact structures that keep the mission solvent and growing.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Certification Includes</h2>
          <ul className="space-y-4 text-gray-800 max-w-2xl mx-auto">
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Full video curriculum + downloadable workbooks</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Live group Q&A sessions with Emily</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Private practitioner community access</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Certificate of Completion + digital badge</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Ready-to-use session templates, consent forms & risk frameworks</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Marketing & booking funnel assets (giving-first angle)</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> Lifetime updates as the method evolves</li>
            <li className="flex gap-3"><span className="text-[#c45c26] font-bold text-xl">✓</span> 10% of every enrolment funds free therapy places and dog welfare</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2d5016] mb-4">Investment</h2>
        <p className="text-5xl font-bold text-[#c45c26] mb-2">$1,997</p>
        <p className="text-gray-600 mb-6">One-time · Lifetime access · Payment plans available on request</p>
        <p className="text-sm text-gray-500 mb-8">This is a high-ticket digital product designed to create real practitioners who can deliver ethical, impactful sessions and build sustainable practices. Every enrolment accelerates free access for those who need it most.</p>
        <a href="mailto:emily@therapysausages.com?subject=Certification%20Enrolment%20-%20$1997" className="bg-[#c45c26] text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#a34a1e] transition inline-block pulse-glow">
          Enrol & Receive Instant Access
        </a>
        <p className="mt-6 text-sm text-gray-500">Questions? Email emily@therapysausages.com — Emily replies personally.</p>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Already part of the Academy or Circle?</h2>
        <p className="mb-6 opacity-90">Mention your membership for priority support and possible upgrade credit.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/academy" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">Digital Academy</Link>
          <Link to="/membership" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">Sausage Circle</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Practitioner Certification · From true to tremendous</p>
        <p className="mt-2 opacity-60">© {new Date().getFullYear()} · Led by Emily Blue Richards</p>
      </footer>
    </div>
  );
}
