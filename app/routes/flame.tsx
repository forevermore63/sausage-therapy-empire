import type { Route } from "./+types/flame";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Perpetual Flame Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Daily consciousness-to-cash converter. Light the seven-minute flame, receive the highest-leverage next move, and let presence compound into revenue and free places while you rest.",
    },
  ];
}

const nextMoves = [
  { title: "Protect a Sausage Hour", href: "/hours", why: "Presence is the root fuel. One protected hour multiplies everything downstream." },
  { title: "Activate a Vault product", href: "/vault", why: "Instant passive income that funds free sessions while you sleep." },
  { title: "Join or gift a Circle", href: "/circles", why: "High-trust community compounds loyalty and recurring revenue." },
  { title: "Sponsor one free place", href: "/sponsor", why: "Giving opens the field. Visible impact attracts more capital and clients." },
  { title: "Share your referral link", href: "/refer", why: "One introduction can become a lifelong member of the pack." },
  { title: "Book or gift a session", href: "/book", why: "Real dogs. Real nervous-system reset. Core revenue + core mission." },
];

export default function Flame() {
  const [lit, setLit] = useState(false);
  const [moveIndex, setMoveIndex] = useState(0);

  function light() {
    setLit(true);
    setMoveIndex(Math.floor(Math.random() * nextMoves.length));
  }

  const current = nextMoves[moveIndex];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/dream" className="hover:text-[#c45c26]">Dream Map</Link>
            <Link to="/live-empire" className="hover:text-[#c45c26]">Live Command</Link>
            <Link to="/presence" className="hover:text-[#c45c26]">Presence</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 8 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Perpetual Flame Engine
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Consciousness becomes cashflow. Light the daily flame. Receive the single highest-leverage move for today. Presence compounds into revenue and free places while you rest.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-xl mx-auto text-center">
          {!lit ? (
            <div className="bg-white rounded-2xl p-10 shadow-md border border-[#c45c26]/10">
              <div className="text-6xl mb-6">🔥</div>
              <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Light the Flame</h2>
              <p className="text-gray-700 mb-8">
                Seven conscious breaths. Feel the pack. Ask: “What is the one action that most serves the dogs, the people, and the dream today?”
              </p>
              <button
                onClick={light}
                className="bg-[#c45c26] text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#a34a1e] pulse-glow"
              >
                Light the Perpetual Flame
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 shadow-md border border-[#c45c26]/10">
              <div className="text-6xl mb-6 animate-pulse">🔥</div>
              <h2 className="text-2xl font-bold text-[#c45c26] mb-2">Flame is lit</h2>
              <p className="text-gray-600 mb-6">Your highest-leverage move for today:</p>
              <div className="bg-[#2d5016] text-white rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-2">{current.title}</h3>
                <p className="text-sm opacity-95">{current.why}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={current.href}
                  className="bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#a34a1e]"
                >
                  Do This Now →
                </Link>
                <button
                  onClick={light}
                  className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3 rounded-full hover:bg-[#c45c26]/5"
                >
                  Draw Another Move
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">How the Flame works</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most people wait for motivation. The Flame removes the wait. One conscious act of presence surfaces the single highest-ROI action aligned with the empire’s giving-first physics. Repeat daily. The systems (Vault, Circles, Hours, Sponsorship, Referrals) do the compounding while you live.
          </p>
          <Link to="/dream" className="text-[#c45c26] font-semibold hover:underline">
            See the full Dream Growth Map →
          </Link>
        </div>
      </section>
    </div>
  );
}
