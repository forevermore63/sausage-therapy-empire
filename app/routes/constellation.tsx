import type { Route } from "./+types/constellation";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Constellation Map | See Every Engine Working Together | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Constellation Map shows how Orbit, Resonance, Horizon, Cascade, Forge, Wave and every Sausage Therapy engine lock together so the dream compounds from true to tremendous.",
    },
  ];
}

const stars = [
  { name: "Orbit Engine", path: "/orbit", role: "Perpetual loops" },
  { name: "Resonance Field", path: "/resonance", role: "Precision matching" },
  { name: "Horizon Projector", path: "/horizon", role: "10-year clarity" },
  { name: "Cascade Engine", path: "/cascade", role: "Revenue waterfall" },
  { name: "Legacy Forge", path: "/forge", role: "Permanent IP" },
  { name: "Wave Amplifier", path: "/wave", role: "Content multiplication" },
  { name: "Ignition Protocol", path: "/ignition", role: "First-fire action" },
  { name: "Harvest Calendar", path: "/harvest", role: "Compounding windows" },
];

export default function Constellation() {
  const [lit, setLit] = useState<string[]>([]);

  const toggle = (name: string) => {
    setLit((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/ignition" className="hover:text-[#c45c26]">Ignition</Link>
            <Link to="/harvest" className="hover:text-[#c45c26]">Harvest</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 14 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Constellation Map</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            One sky. Every engine is a star. Light the ones you are running this week and watch how the dream
            moves from true to tremendous when they shine together.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">Tap a star to light it</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {stars.map((star) => (
              <button
                key={star.name}
                onClick={() => toggle(star.name)}
                className={`text-left p-5 rounded-2xl border-2 transition ${
                  lit.includes(star.name)
                    ? "border-[#d4a017] bg-white shadow-md"
                    : "border-[#c45c26]/15 bg-white/70 hover:border-[#c45c26]/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#c45c26]">{star.name}</h3>
                    <p className="text-sm text-gray-600">{star.role}</p>
                  </div>
                  <span className="text-2xl">{lit.includes(star.name) ? "✦" : "✧"}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-center">
            <p className="text-3xl font-bold text-[#c45c26] mb-2">{lit.length} / {stars.length} stars lit</p>
            <p className="text-gray-700 mb-6">
              {lit.length === 0 && "Start with Ignition if you need the first fire. Start with Harvest if cashflow is the bottleneck."}
              {lit.length > 0 && lit.length < stars.length && "Good. Each lit star feeds the others. Open the next engine and keep the field bright."}
              {lit.length === stars.length && "Full constellation. This is tremendous. Book a session, seed a free place, and let the loops run."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {stars.slice(0, 4).map((s) => (
                <Link key={s.path} to={s.path} className="text-[#c45c26] font-semibold hover:underline">
                  {s.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
