import type { Route } from "./+types/solace";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solace | Instant Protected Calm | Therapy Sausages" },
    {
      name: "description",
      content:
        "Solace is the $37 instant protected calm from Therapy Sausages. Guided pack settle for hard days. $10 to dog welfare. Immediate digital sanctuary.",
    },
  ];
}

export default function Solace() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

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
          <p className="opacity-90 mb-3">New online element — 14 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solace</h1>
          <p className="text-lg opacity-95">
            Instant protected calm with the pack. One guided settle for the days that feel heavy. Delivered by email within hours. $10 of every Solace goes to dog care and recovery. A sanctuary that arrives when needed.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Solace · $37</p>
              <p className="text-sm text-gray-700">One immediate guided pack settle + calm resources. Email delivery.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Solace Pack · $97</p>
              <p className="text-sm text-gray-700">Three Solace credits. Use across hard weeks.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $10 minimum to dog welfare. Designed for nervous-system load and sensitive days. NDIS-friendly where appropriate.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-solace") || "[]");
              held.push({ name, note, at: new Date().toISOString() });
              localStorage.setItem("st-solace", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Request Solace</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea className="w-full border rounded-xl px-4 py-3" placeholder="What the pack should hold (optional)" value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open Solace</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌿</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Solace is on its way</h3>
                <p className="text-gray-700 mb-4">{name}, the pack is holding. Check your email.</p>
                <Link to="/radiance" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Keep the light with Radiance →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
