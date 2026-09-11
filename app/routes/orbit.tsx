import type { Route } from "./+types/orbit";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Orbit Engine | Perpetual Self-Reinforcing Revenue Loops | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Orbit Engine places every booking, content piece, referral and dollar into self-reinforcing perpetual orbits that keep generating revenue, free places and dog recovery while you sleep. True → tremendous passive compounding for Sausage Therapy.",
    },
  ];
}

const orbits = [
  {
    name: "Client Orbit",
    emoji: "🔄",
    description: "One session → membership → referral → new session. The circle never ends.",
    multiplier: "3–7× LTV",
  },
  {
    name: "Content Orbit",
    emoji: "📡",
    description: "One farm or pack moment → stock + social + podcast + email → new bookings.",
    multiplier: "Passive royalties + leads",
  },
  {
    name: "Giving Orbit",
    emoji: "💛",
    description: "Every paid action auto-seeds free places and Dream Seed Fund matches.",
    multiplier: "Visible impact gravity",
  },
  {
    name: "Wealth Orbit",
    emoji: "♾️",
    description: "Revenue streams feed each other: sessions → digital → memberships → corporate → grants.",
    multiplier: "Compounding while offline",
  },
];

export default function Orbit() {
  const [activated, setActivated] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/resonance" className="hover:text-[#c45c26]">Resonance</Link>
            <Link to="/horizon" className="hover:text-[#c45c26]">Horizon</Link>
            <Link to="/cascade" className="hover:text-[#c45c26]">Cascade</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 12 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Orbit Engine
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Every booking, clip, referral and dollar is placed into self-reinforcing perpetual orbits. The system keeps generating revenue, free therapy places and dog recovery while you rest. True passive compounding for the empire.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">The Four Perpetual Orbits</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {orbits.map((orbit, i) => (
              <div
                key={orbit.name}
                className={`p-6 rounded-2xl border-2 transition cursor-pointer ${
                  activeOrbit === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/15 bg-white/70 hover:border-[#c45c26]/40"
                }`}
                onClick={() => setActiveOrbit(i)}
              >
                <div className="text-4xl mb-3">{orbit.emoji}</div>
                <h3 className="text-xl font-bold text-[#c45c26] mb-2">{orbit.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{orbit.description}</p>
                <p className="font-bold text-[#2d5016]">{orbit.multiplier}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-center">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">
              Activate Orbit Engine across the entire platform
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Wires into Cascade, Wave, Live Command, Circles, Wag Points, Dream Seed Fund and the Perpetual Wealth Command Center. Once live, every new action enters the orbits automatically.
            </p>
            <button
              onClick={() => setActivated(true)}
              className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition"
            >
              Activate Orbit Engine →
            </button>
          </div>

          {activated && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Orbits are live and spinning</h3>
              <p className="mb-6 opacity-95">
                Every future booking, content drop and referral now enters perpetual motion. Track the loops inside Live Command. Feed more energy through Resonance and Horizon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/live-empire" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Open Live Command
                </Link>
                <Link to="/resonance" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Open Resonance Field
                </Link>
                <Link to="/horizon" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Project Horizon
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Orbit is the missing perpetual layer</h2>
          <p className="text-gray-700 mb-6">
            Linear funnels eventually stall. Orbits keep value circulating. Clients stay longer, content keeps working, giving compounds, and wealth feeds itself. This is how the dream moves from true to tremendous while you focus on presence and the dogs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cascade" className="text-[#c45c26] font-semibold hover:underline">
              Feed Cascade →
            </Link>
            <Link to="/wave" className="text-[#c45c26] font-semibold hover:underline">
              Amplify Wave →
            </Link>
            <Link to="/command" className="text-[#c45c26] font-semibold hover:underline">
              Perpetual Wealth Command →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
