import type { Route } from "./+types/comet";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Comet | High-Velocity Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Comet is the high-velocity presence membership. Fast micro-drops, momentum systems and live impact streaks. $49/month. $10 to dog welfare. Grow the dream from true to tremendous.",
    },
  ];
}

export default function Comet() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book Full Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand new online element — 3 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Comet</h1>
          <p className="text-lg opacity-95">
            The high-velocity presence. Fast micro-drops from the pack, momentum systems that keep the field moving, and live impact streaks that compound while you rest. $10 of every Comet month funds dog welfare, land care and free places. The swift power that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Comet · $49/month</p>
              <p className="text-sm text-gray-700">High-velocity drops + momentum systems. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Comet + Equinox · $99/month</p>
              <p className="text-sm text-gray-700">Velocity locked with balance threshold.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $10 minimum to dog welfare each month. Built for those who want the field moving and the impact visible. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-comet") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-comet", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Ride the Comet</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for velocity drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Launch the Comet</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">☄️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Comet is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your first velocity drop and momentum system arrive within the hour. The field is moving.</p>
                <Link to="/equinox" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Equinox for the balance →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
