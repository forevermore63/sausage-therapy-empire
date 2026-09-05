import type { Route } from "./+types/upsurge";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "True → Tremendous Upsurge Tracker | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Personal interactive scoreboard that turns your healing journey and contribution into measurable true-to-tremendous progress. Track presence, sessions, giving and impact. Giving-first.",
    },
  ];
}

const levers = [
  { id: "presence", label: "Daily Presence Streak", unit: "days", max: 30, tip: "Complete the 7-minute ritual" },
  { id: "sessions", label: "Healing Sessions Booked", unit: "sessions", max: 12, tip: "Book or gift a session" },
  { id: "hours", label: "Sausage Hours Protected", unit: "hours", max: 10, tip: "Claim or gift protected time" },
  { id: "giving", label: "Impact Dollars Given", unit: "$", max: 500, tip: "Sponsor free places or micro-give" },
  { id: "referrals", label: "Hearts Introduced", unit: "people", max: 20, tip: "Share the pack with someone who needs it" },
];

export default function Upsurge() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(levers.map((l) => [l.id, 0]))
  );

  const totalProgress = Math.round(
    (Object.values(scores).reduce((a, b) => a + b, 0) /
      levers.reduce((a, l) => a + l.max, 0)) *
      100
  );

  function bump(id: string, amount = 1) {
    setScores((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] || 0) + amount, levers.find((l) => l.id === id)!.max),
    }));
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tremendous</Link>
            <Link to="/presence" className="hover:text-[#c45c26]">Presence</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 6 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            True → Tremendous<br />Upsurge Tracker
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Your personal living scoreboard. Turn presence, healing and giving into measurable momentum. The dream grows when every action is counted and celebrated.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur rounded-2xl px-8 py-4">
            <p className="text-sm uppercase tracking-wide opacity-90">Your Current Upsurge</p>
            <p className="text-5xl font-bold">{totalProgress}%</p>
            <p className="text-sm opacity-90">toward tremendous</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Move the Levers</h2>
          <div className="space-y-6">
            {levers.map((lever) => {
              const value = scores[lever.id] || 0;
              const pct = Math.round((value / lever.max) * 100);
              return (
                <div key={lever.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#c45c26] text-lg">{lever.label}</h3>
                      <p className="text-sm text-gray-600">{lever.tip}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-[#2d5016]">
                        {value}
                        <span className="text-sm font-normal text-gray-500">/{lever.max} {lever.unit}</span>
                      </span>
                      <button
                        onClick={() => bump(lever.id)}
                        className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#a34a1e] transition"
                      >
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c45c26] to-[#d4a017] transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-lg text-[#2d5016] font-medium">
              Every lever you move compounds the empire and funds free places.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/presence" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
                Start Today’s Ritual
              </Link>
              <Link to="/hours" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">
                Protect a Sausage Hour
              </Link>
              <Link to="/sponsor" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#2d5016]/5 transition">
                Sponsor Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why this tracker exists</h2>
          <p className="text-gray-700 leading-relaxed">
            The dream stays “true” when it is only a feeling. It becomes tremendous when every presence minute, every session, every gifted hour and every dollar given is visible, celebrated and compounded. This scoreboard turns intention into momentum — for you and for the pack.
          </p>
        </div>
      </section>
    </div>
  );
}
