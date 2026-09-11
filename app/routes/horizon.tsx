import type { Route } from "./+types/horizon";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horizon Projector | 10-Year Empire Vision → This Week's Actions | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Horizon Projector shows the 10-year tremendous future of Sausage Therapy, Forevermore Farm and the Olympic legacy, then back-casts the exact highest-leverage online actions required this week and this month. Clarity that compounds.",
    },
  ];
}

const horizons = [
  {
    year: "2026–2027",
    title: "Foundation Lock",
    milestones: [
      "Orbit + Resonance + Cascade fully automated",
      "First 100 paying Circle members",
      "Visual wealth royalties covering one dog recovery",
      "NDIS claim volume doubled via Claim Accelerator",
    ],
  },
  {
    year: "2028–2029",
    title: "Scale & Sanctuary",
    milestones: [
      "Forevermore Farm retreats at capacity most weekends",
      "Certified Practitioner Directory live with 50+ names",
      "Corporate wellness contracts in three states",
      "Passive engines covering core living costs",
    ],
  },
  {
    year: "2030–2032",
    title: "Olympic Legacy & Global Reach",
    milestones: [
      "2032 Brisbane Olympics supplier / legacy program status",
      "Sausage Therapy model replicated via franchise & certification",
      "Dream Seed Fund has funded 500+ free places",
      "Working pack restored and thriving on the land",
    ],
  },
];

const thisWeek = [
  { action: "Activate Orbit Engine on all new bookings", link: "/orbit", impact: "Perpetual loops start" },
  { action: "Run 10 people through Resonance Field", link: "/resonance", impact: "Precision matching live" },
  { action: "Drop one Wave Amplifier content batch", link: "/wave", impact: "New leads + stock assets" },
  { action: "Check Live Command & seed the next free place", link: "/live-empire", impact: "Visible impact gravity" },
];

export default function Horizon() {
  const [view, setView] = useState<"future" | "week">("future");
  const [projected, setProjected] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/orbit" className="hover:text-[#c45c26]">Orbit</Link>
            <Link to="/resonance" className="hover:text-[#c45c26]">Resonance</Link>
            <Link to="/radar" className="hover:text-[#c45c26]">Radar</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 12 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Horizon Projector
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            See the 10-year tremendous future clearly, then receive the exact online actions required this week so the future becomes inevitable. Clarity that removes hesitation and compounds the dream.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto flex justify-center gap-4">
          <button
            onClick={() => setView("future")}
            className={`px-6 py-2.5 rounded-full font-semibold transition ${
              view === "future" ? "bg-[#c45c26] text-white" : "bg-white text-[#c45c26] border border-[#c45c26]/30"
            }`}
          >
            10-Year Horizon
          </button>
          <button
            onClick={() => setView("week")}
            className={`px-6 py-2.5 rounded-full font-semibold transition ${
              view === "week" ? "bg-[#c45c26] text-white" : "bg-white text-[#c45c26] border border-[#c45c26]/30"
            }`}
          >
            This Week's Actions
          </button>
        </div>
      </section>

      {view === "future" && (
        <section className="py-12 px-4 bg-[#fdf6e3]">
          <div className="max-w-5xl mx-auto space-y-8">
            {horizons.map((h) => (
              <div key={h.year} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <span className="text-sm font-bold text-[#d4a017] bg-[#d4a017]/10 px-3 py-1 rounded-full w-fit">{h.year}</span>
                  <h3 className="text-xl font-bold text-[#2d5016]">{h.title}</h3>
                </div>
                <ul className="space-y-2">
                  {h.milestones.map((m) => (
                    <li key={m} className="flex gap-3 text-gray-700">
                      <span className="text-[#c45c26] font-bold">→</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-center pt-4">
              <button
                onClick={() => {
                  setView("week");
                  setProjected(true);
                }}
                className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition"
              >
                Back-cast This Week’s Actions →
              </button>
            </div>
          </div>
        </section>
      )}

      {view === "week" && (
        <section className="py-12 px-4 bg-[#fdf6e3]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-8">Highest-leverage moves for this week</h2>
            <div className="space-y-4 mb-10">
              {thisWeek.map((item, i) => (
                <Link
                  key={item.action}
                  to={item.link}
                  className="flex flex-col md:flex-row md:items-center gap-4 p-5 bg-white rounded-2xl border border-[#c45c26]/15 hover:border-[#c45c26]/40 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c45c26] text-white flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#c45c26]">{item.action}</p>
                    <p className="text-sm text-gray-600">{item.impact}</p>
                  </div>
                  <span className="text-[#2d5016] font-semibold">Open →</span>
                </Link>
              ))}
            </div>

            {projected && (
              <div className="bg-[#2d5016] text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Horizon is projected</h3>
                <p className="mb-6 opacity-95">
                  The future is no longer vague. Execute the four actions above and the 10-year path becomes the natural result. Orbit and Resonance will keep the motion alive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/orbit" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                    Activate Orbit
                  </Link>
                  <Link to="/resonance" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                    Open Resonance
                  </Link>
                  <Link to="/live-empire" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                    Live Command
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Vision without this-week actions is just a dream</h2>
          <p className="text-gray-700 mb-6">
            Horizon Projector closes the gap. You always know what the tremendous future looks like and exactly which online levers to pull right now so the empire arrives on schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/radar" className="text-[#c45c26] font-semibold hover:underline">
              Opportunity Radar →
            </Link>
            <Link to="/dream" className="text-[#c45c26] font-semibold hover:underline">
              Dream Growth Map →
            </Link>
            <Link to="/flame" className="text-[#c45c26] font-semibold hover:underline">
              Perpetual Flame →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
