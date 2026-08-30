import type { Route } from "./+types/hours";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Hours — Protect an Hour of Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Sausage Hours: gift or buy protected time for pure presence, calm and dachshund-assisted healing. Presence over extraction. Therapy Sausages empire.",
    },
  ];
}

export default function Hours() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tremendous</Link>
            <Link to="/passive" className="hover:text-[#c45c26]">Passive</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 31 August 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sausage Hours
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-4 opacity-95 font-medium">
            Protect an hour. Presence over extraction.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Gift or claim a protected hour of pure presence — with or without the pack. No agenda. No performance. Just nervous-system safety and the quiet power of dachshund calm.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Sausage%20Hours%20Enquiry" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Protect an Hour Today
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">How Sausage Hours Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">1. Claim or Gift</h3>
            <p className="text-gray-700">Buy a protected hour for yourself or gift one to a friend, carer, NDIS participant or team member.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center">
            <div className="text-4xl mb-4">🐾</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">2. Presence Mode</h3>
            <p className="text-gray-700">The hour is held. Optional pack presence, quiet space, or simple guided calm. No performance required.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">3. Time Given Back</h3>
            <p className="text-gray-700">A portion of every Sausage Hour funds free therapy places and dog care. Presence compounds into impact.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d5016] mb-4">Offerings</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#c45c26]">Solo Presence Hour</h3>
              <p className="text-2xl font-bold mt-2">$97</p>
              <p className="text-gray-700 mt-2">Protected hour for one. Optional pack visit or quiet guided calm. Ideal for nervous-system reset.</p>
              <a href="mailto:emily@therapysausages.com?subject=Solo%20Sausage%20Hour%20%2497" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Claim this hour →</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#c45c26]">Gift a Sausage Hour</h3>
              <p className="text-2xl font-bold mt-2">$97</p>
              <p className="text-gray-700 mt-2">Beautiful gift for carers, friends in burnout, or anyone who needs time given back. Certificate included.</p>
              <a href="mailto:emily@therapysausages.com?subject=Gift%20a%20Sausage%20Hour%20%2497" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Gift this hour →</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#c45c26]">Team Presence Block</h3>
              <p className="text-2xl font-bold mt-2">From $450</p>
              <p className="text-gray-700 mt-2">Corporate or group block of protected hours. Measurable calm + giving-first brand alignment.</p>
              <Link to="/corporate" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Corporate Hub →</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#c45c26]">NDIS / Sponsored Hour</h3>
              <p className="text-2xl font-bold mt-2">Funded</p>
              <p className="text-gray-700 mt-2">Sponsors can fund free Sausage Hours for those who need them most. Tracked on Impact Dashboard.</p>
              <Link to="/sponsor" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Sponsor Impact →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Time is the Real Currency</h2>
          <p className="opacity-90 mb-8">Sausage Hours return time to people who have been extracted from. That returned time becomes capacity for healing, care and creation. This is how the empire grows from true to tremendous without burning out its heart.</p>
          <a href="mailto:emily@therapysausages.com?subject=Sausage%20Hours" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Start with One Hour
          </a>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Sausage Hours · Presence over extraction · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
