import type { Route } from "./+types/haven";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Haven | Protected Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Haven is the $57 protected presence offering from Therapy Sausages. Guided pack calm for sensitive systems, stress, and environmental load. $12 to dog welfare. Safe digital sanctuary.",
    },
  ];
}

export default function Haven() {
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
          <p className="opacity-90 mb-3">New online element — 13 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Haven</h1>
          <p className="text-lg opacity-95">
            Protected presence for sensitive systems. Guided pack calm when the air, the stress, or the load is high. $12 of every Haven goes to dog care and recovery. A digital sanctuary that holds.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Haven Session · $57</p>
              <p className="text-sm text-gray-700">One guided pack presence with calm resources. Delivered by email.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Haven Month · $147</p>
              <p className="text-sm text-gray-700">Four protected sessions. Steady support for ongoing load.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $12 minimum to dog welfare. Designed for those navigating environmental or nervous-system sensitivity. NDIS-friendly where appropriate.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-haven") || "[]");
              held.push({ name, note, at: new Date().toISOString() });
              localStorage.setItem("st-haven", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Open Haven</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea className="w-full border rounded-xl px-4 py-3" placeholder="What the pack should hold with you (optional)" value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Enter Haven</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌿</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Haven is open</h3>
                <p className="text-gray-700 mb-4">{name}, the pack is holding space. Check your email.</p>
                <Link to="/catalyst" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">See Catalyst for teams →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
