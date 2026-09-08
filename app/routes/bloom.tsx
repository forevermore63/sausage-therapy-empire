import type { Route } from "./+types/bloom";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bloom Engine | Exponential Growth from One Action | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Bloom Engine turns a single protected Sausage Hour or micro-action into compounding revenue, impact and free places. Interactive multiplier map for true → tremendous growth.",
    },
  ];
}

const multipliers = [
  { action: "Protect 1 Sausage Hour", revenue: "$180–$450", impact: "1 free place seed", next: "Log in Upsurge Tracker" },
  { action: "Sell 1 Vault product", revenue: "$37–$247", impact: "15% auto-given", next: "Share referral link" },
  { action: "Invite 1 Circle member", revenue: "$97–$297/mo", impact: "Ongoing free access pool", next: "Open Live Command" },
  { action: "Sponsor 1 free session", revenue: "Trust + referrals", impact: "Direct heart healed", next: "Activate Flame daily" },
];

export default function Bloom() {
  const [selected, setSelected] = useState(0);
  const [bloomed, setBloomed] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/dream" className="hover:text-[#c45c26]">Dream</Link>
            <Link to="/flame" className="hover:text-[#c45c26]">Flame</Link>
            <Link to="/seed" className="hover:text-[#c45c26]">Seed Fund</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 9 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bloom Engine
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            One small protected action → exponential revenue + impact. Watch a single Sausage Hour, Vault sale or Circle invite bloom into the full tremendous dream while funding free places automatically.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-8">Choose one action. Watch it bloom.</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {multipliers.map((m, i) => (
              <button
                key={m.action}
                onClick={() => setSelected(i)}
                className={`text-left p-5 rounded-2xl border-2 transition ${
                  selected === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/20 bg-white/70 hover:border-[#c45c26]/50"
                }`}
              >
                <p className="font-bold text-[#c45c26]">{m.action}</p>
                <p className="text-sm text-gray-600 mt-1">Revenue potential: {m.revenue}</p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-4">{multipliers[selected].action}</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#fdf6e3] rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase">Revenue</p>
                <p className="text-xl font-bold text-[#c45c26]">{multipliers[selected].revenue}</p>
              </div>
              <div className="bg-[#fdf6e3] rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase">Impact</p>
                <p className="text-xl font-bold text-[#2d5016]">{multipliers[selected].impact}</p>
              </div>
              <div className="bg-[#fdf6e3] rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase">Next lever</p>
                <p className="text-xl font-bold text-[#d4a017]">{multipliers[selected].next}</p>
              </div>
            </div>
            <button
              onClick={() => setBloomed(true)}
              className="w-full bg-[#2d5016] text-white font-semibold py-3 rounded-full hover:bg-[#1f3a0f] transition"
            >
              Activate Bloom →
            </button>
          </div>

          {bloomed && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Bloom activated</h3>
              <p className="mb-6 opacity-95">Your chosen action is now linked into the Live Command and Flame. Compound daily.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/flame" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Light the Flame
                </Link>
                <Link to="/live-empire" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Open Live Command
                </Link>
                <Link to="/hours" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Protect a Sausage Hour
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Bloom works</h2>
          <p className="text-gray-700 mb-6">
            Most growth dies in the gap between intention and the next concrete lever. The Bloom Engine closes that gap with one-click activation into the rest of the empire (Flame, Live Command, Upsurge, Vault, Circles). Presence becomes cashflow becomes free places — automatically.
          </p>
          <Link to="/seed" className="text-[#c45c26] font-semibold hover:underline">
            Plant a Dream Seed next →
          </Link>
        </div>
      </section>
    </div>
  );
}
