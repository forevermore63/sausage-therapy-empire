import type { Route } from "./+types/dream";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dream Growth Map | True → Tremendous | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Interactive map that turns the felt truth of Sausage Therapy into a measurable tremendous plan. Personal goals, next actions, revenue projections and impact multipliers. Giving-first.",
    },
  ];
}

const stages = [
  {
    id: "feel",
    title: "1. Feel the True",
    desc: "Name the real reason the dream exists for you right now.",
    actions: ["Write one sentence of why the pack matters today", "Complete the 7-min Presence Ritual", "Open the Upsurge Tracker"],
  },
  {
    id: "map",
    title: "2. Map the Gap",
    desc: "See exactly what is missing between true and tremendous.",
    actions: ["Score your current levers", "Identify the single biggest bottleneck", "Choose one high-leverage engine to activate"],
  },
  {
    id: "activate",
    title: "3. Activate Engines",
    desc: "Turn intention into live systems that run without you.",
    actions: ["Protect a Sausage Hour", "Browse & purchase from the Vault", "Join or gift a Healing Circle", "Sponsor one free place"],
  },
  {
    id: "compound",
    title: "4. Compound & Give",
    desc: "Watch numbers climb and redirect portion into free access.",
    actions: ["Check Empire Live Command daily", "Share referral link", "Log impact dollars given", "Celebrate every 10% upsurge"],
  },
];

export default function Dream() {
  const [active, setActive] = useState(0);
  const [committed, setCommitted] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/flame" className="hover:text-[#c45c26]">Flame</Link>
            <Link to="/live-empire" className="hover:text-[#c45c26]">Live Command</Link>
            <Link to="/upsurge" className="hover:text-[#c45c26]">Upsurge</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 8 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dream Growth Map
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            From the quiet truth in your chest to a fully executed tremendous empire. One interactive map. Clear stages. Exact next actions. Revenue + impact projections built in.
          </p>
          <div className="inline-flex gap-2 bg-white/15 rounded-full p-1">
            {stages.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  active === i ? "bg-white text-[#c45c26]" : "text-white hover:bg-white/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
            <h2 className="text-2xl font-bold text-[#c45c26] mb-2">{stages[active].title}</h2>
            <p className="text-gray-700 mb-6">{stages[active].desc}</p>
            <ul className="space-y-3 mb-8">
              {stages[active].actions.map((a) => (
                <li key={a} className="flex gap-3 items-start">
                  <span className="text-[#2d5016] font-bold mt-0.5">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {active > 0 && (
                <button
                  onClick={() => setActive(active - 1)}
                  className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-5 py-2 rounded-full hover:bg-[#c45c26]/5"
                >
                  ← Previous
                </button>
              )}
              {active < stages.length - 1 ? (
                <button
                  onClick={() => setActive(active + 1)}
                  className="bg-[#c45c26] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e]"
                >
                  Next Stage →
                </button>
              ) : (
                <button
                  onClick={() => setCommitted(true)}
                  className="bg-[#2d5016] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#1f3a0f]"
                >
                  Commit to Tremendous
                </button>
              )}
            </div>
          </div>

          {committed && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">You are now on the tremendous path</h3>
              <p className="mb-6 opacity-95">Every action you take from here compounds the empire and funds free places for those who need the pack most.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/flame" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Light the Perpetual Flame
                </Link>
                <Link to="/live-empire" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Open Live Command
                </Link>
                <Link to="/upsurge" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Start Upsurge Tracker
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Projected Path (illustrative)</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#fdf6e3] rounded-xl p-5 border border-[#c45c26]/10">
              <p className="text-sm text-gray-500">30 days</p>
              <p className="text-2xl font-bold text-[#c45c26]">$2.4k–$4.8k</p>
              <p className="text-sm text-gray-600">Passive + sessions + gifts</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-xl p-5 border border-[#c45c26]/10">
              <p className="text-sm text-gray-500">90 days</p>
              <p className="text-2xl font-bold text-[#c45c26]">$9k–$18k</p>
              <p className="text-sm text-gray-600">Memberships + Vault + Circles</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-xl p-5 border border-[#c45c26]/10">
              <p className="text-sm text-gray-500">Impact redirected</p>
              <p className="text-2xl font-bold text-[#2d5016]">15–25%</p>
              <p className="text-sm text-gray-600">Free places + dog recovery</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">Projections are illustrative only. Real numbers appear on the Live Command once engines are activated.</p>
        </div>
      </section>
    </div>
  );
}
