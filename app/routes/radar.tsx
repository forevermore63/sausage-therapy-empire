import type { Route } from "./+types/radar";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Opportunity Radar | Highest-Leverage Next Moves | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Live Opportunity Radar surfaces the single highest-leverage next action for the Sausage Therapy empire based on current engines, season and impact goals. From true to tremendous, always knowing what to do next.",
    },
  ];
}

const opportunities = [
  {
    id: "flame",
    title: "Light the Perpetual Flame",
    score: 98,
    reason: "Daily presence converts consciousness into the exact next revenue lever while you rest.",
    link: "/flame",
    cta: "Light now",
  },
  {
    id: "bloom",
    title: "Activate Bloom on one Vault product",
    score: 94,
    reason: "One digital product sale seeds passive income and auto-funds free places.",
    link: "/bloom",
    cta: "Bloom it",
  },
  {
    id: "seed",
    title: "Plant a $47 Healing Seed",
    score: 91,
    reason: "Matched contribution + unlocks Vault sample and visible impact on the dashboard.",
    link: "/seed",
    cta: "Plant seed",
  },
  {
    id: "hours",
    title: "Protect one Sausage Hour this week",
    score: 89,
    reason: "Protected presence is the root of every other engine. Book or gift it.",
    link: "/hours",
    cta: "Protect hour",
  },
  {
    id: "circles",
    title: "Invite one person into a Healing Circle",
    score: 87,
    reason: "Recurring revenue + high-trust community that multiplies referrals.",
    link: "/circles",
    cta: "Invite",
  },
  {
    id: "stock",
    title: "Submit first visual batch to stock",
    score: 85,
    reason: "Dachshund + farm + therapy imagery becomes passive royalty while you sleep.",
    link: "/stock",
    cta: "Open Visual Portal",
  },
];

export default function Radar() {
  const [focus, setFocus] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/bloom" className="hover:text-[#c45c26]">Bloom</Link>
            <Link to="/seed" className="hover:text-[#c45c26]">Seed</Link>
            <Link to="/live-empire" className="hover:text-[#c45c26]">Live Command</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 9 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Opportunity Radar
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Always know the single highest-leverage next move. Scored live against revenue potential, impact multiplier and alignment with the true → tremendous path. No more guessing.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {opportunities.map((o, i) => (
            <div
              key={o.id}
              onClick={() => setFocus(i)}
              className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition ${
                focus === i ? "border-[#c45c26] shadow-md" : "border-transparent hover:border-[#c45c26]/30"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-[#c45c26]">{o.score}</span>
                    <h3 className="text-lg font-bold text-[#2d5016]">{o.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{o.reason}</p>
                </div>
                <Link
                  to={o.link}
                  className="shrink-0 bg-[#c45c26] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#a34a1e]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {o.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">How the Radar scores</h2>
          <p className="text-gray-700 mb-6">
            Each opportunity is weighted by immediate cash potential, recurring revenue, impact % redirected to free places and dog recovery, and how cleanly it plugs into the existing engines (Flame, Live Command, Bloom, Seed, Upsurge). The top score is always the next true → tremendous lever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/flame" className="bg-[#2d5016] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1f3a0f]">
              Start with Flame
            </Link>
            <Link to="/live-empire" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5">
              Open Live Command
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
