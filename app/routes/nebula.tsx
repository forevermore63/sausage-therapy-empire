import type { Route } from "./+types/nebula";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nebula | Expanding Impact Cloud | Therapy Sausages" },
    {
      name: "description",
      content:
        "Nebula is the expanding impact cloud. Visual drops from the pack, compounding systems and live field growth. $159/month. $35 to dog welfare. Grow the dream from true to tremendous.",
    },
  ];
}

export default function Nebula() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nebula</h1>
          <p className="text-lg opacity-95">
            The expanding impact cloud. High-frequency visual drops from the pack and Forevermore Farm, compounding systems that keep the field growing, and live impact that multiplies while you rest. $35 of every Nebula month funds dog welfare, land care and free places. The expansive power that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nebula · $159/month</p>
              <p className="text-sm text-gray-700">Expanding cloud + systems + impact pulse. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nebula + Solstice · $497/month</p>
              <p className="text-sm text-gray-700">Cloud locked with seasonal sanctuary.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $35 minimum to dog welfare each month. Built for those who want the field expanded and the impact visible. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-nebula") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-nebula", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Expand into Nebula</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for expanding drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Cloud</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌌</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Nebula is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your first expanding drop and system arrive within the hour. The field is growing.</p>
                <Link to="/solstice" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Solstice for the sanctuary →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
