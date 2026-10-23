import type { Route } from "./+types/apex";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Apex | Annual Peak Mastery Circle | Therapy Sausages" },
    {
      name: "description",
      content:
        "Apex is the $497 annual peak mastery circle from Therapy Sausages. Live intensives, digital vault and deepest presence. $125 to dog welfare. The apex that grows the dream from true to tremendous.",
    },
  ];
}

export default function Apex() {
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
          <p className="opacity-90 mb-3">New online element — 24 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apex</h1>
          <p className="text-lg opacity-95">
            Annual peak mastery circle. Live intensives, private digital vault, deepest pack presence and year-long compounding guidance. $125 of every year goes to dog welfare. The apex that lifts the empire from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Apex · $497 / year</p>
              <p className="text-sm text-gray-700">Peak mastery circle. Live intensives + digital vault. Cancel before renewal.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Apex + Zenith · $547</p>
              <p className="text-sm text-gray-700">Mastery circle plus the monthly peak presence coaching.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $125 minimum to dog welfare each year. For those ready for the highest compounding presence. NDIS-friendly pathways available on request.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-apex") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-apex", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim Apex</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for mastery access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Reach the Apex</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏆</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Apex is open</h3>
                <p className="text-gray-700 mb-4">{name}, your mastery vault and first intensive invitation arrive this week.</p>
                <Link to="/zenith" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Zenith for monthly peak →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
