import type { Route } from "./+types/seed";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dream Seed Fund | Micro-Support that Compounds | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Plant a Dream Seed — micro contributions that unlock matching impact, free therapy places and land care at Forevermore Farm. From true to tremendous, one seed at a time.",
    },
  ];
}

const seeds = [
  { amount: 17, label: "Sausage Spark", unlocks: "1 digital calm protocol + name on living wall", match: "1:1 match this week" },
  { amount: 47, label: "Healing Seed", unlocks: "1 free place seed + Vault sample", match: "1.5× match" },
  { amount: 97, label: "Circle Seed", unlocks: "1 month Circle access credit + impact badge", match: "2× match" },
  { amount: 297, label: "Farm Guardian", unlocks: "Named day immersion credit + perpetual impact log", match: "3× match + priority" },
];

export default function Seed() {
  const [chosen, setChosen] = useState(1);
  const [planted, setPlanted] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/bloom" className="hover:text-[#c45c26]">Bloom</Link>
            <Link to="/radar" className="hover:text-[#c45c26]">Radar</Link>
            <Link to="/give" className="hover:text-[#c45c26]">Give</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 9 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dream Seed Fund
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Micro-support that compounds. Every seed is matched, tracked on the Live Impact Dashboard, and directed to free therapy places, dog recovery and Forevermore Farm land care. Plant once. Watch the dream grow tremendous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-8">Choose your seed</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {seeds.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setChosen(i)}
                className={`p-5 rounded-2xl border-2 text-left transition ${
                  chosen === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/20 bg-white/70 hover:border-[#c45c26]/50"
                }`}
              >
                <p className="text-2xl font-bold text-[#c45c26]">${s.amount}</p>
                <p className="font-semibold text-[#2d5016]">{s.label}</p>
                <p className="text-xs text-gray-600 mt-2">{s.match}</p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">{seeds[chosen].label} — ${seeds[chosen].amount}</h3>
            <p className="text-gray-700 mb-4">{seeds[chosen].unlocks}</p>
            <p className="text-sm text-[#2d5016] font-medium mb-6">Match active: {seeds[chosen].match}</p>
            <button
              onClick={() => setPlanted(true)}
              className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full hover:bg-[#a34a1e] transition"
            >
              Plant this Seed →
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">Secure payment links activate on full deployment. Placeholder for Stripe / PayPal.</p>
          </div>

          {planted && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Seed planted</h3>
              <p className="mb-6 opacity-95">Thank you. Your contribution is now visible on the Impact Dashboard and matched according to the current campaign. The dream just grew.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/impact" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  View Impact Dashboard
                </Link>
                <Link to="/bloom" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Activate Bloom Engine
                </Link>
                <Link to="/microgive" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  More Micro-Impact
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Where seeds go</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#fdf6e3] rounded-xl p-5">
              <p className="font-bold text-[#c45c26]">Free places</p>
              <p className="text-sm text-gray-600">NDIS participants and hardship cases receive real pack time.</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-xl p-5">
              <p className="font-bold text-[#c45c26]">Dog recovery</p>
              <p className="text-sm text-gray-600">Care, training and sanctuary for the remaining working pack.</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-xl p-5">
              <p className="font-bold text-[#c45c26]">Land & legacy</p>
              <p className="text-sm text-gray-600">Forevermore Farm care and 2032 Olympic legacy preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
