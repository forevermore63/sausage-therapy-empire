import type { Route } from "./+types/vanguard";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vanguard | Advanced Practitioner Mastery | Therapy Sausages" },
    {
      name: "description",
      content:
        "Vanguard is the 6-month advanced practitioner and operator mastery from Therapy Sausages. Build your own giving-first animal-assisted empire. $2497. $600 to dog welfare. Grow from true to tremendous.",
    },
  ];
}

export default function Vanguard() {
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
          <p className="opacity-90 mb-3">Brand new online element — 27 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vanguard</h1>
          <p className="text-lg opacity-95">
            Six-month advanced practitioner and operator mastery. Build, scale and compound your own giving-first animal-assisted therapy empire. Live cohorts, systems, NDIS pathways, visual wealth and presence mastery with Emily and the pack. $600 of every Vanguard goes to dog welfare and free places. The front line that expands the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Vanguard · $2,497</p>
              <p className="text-sm text-gray-700">6 months. Live cohort + systems + pathways. Payment plans available.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Vanguard + Pinnacle · $3,197</p>
              <p className="text-sm text-gray-700">Full mastery plus lifetime empire vault.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $600 minimum to dog welfare. Designed for therapists, NDIS providers, farm operators and empire builders ready to lead. Documentation and certificates included.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-vanguard") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-vanguard", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Join Vanguard</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for cohort access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lead the Vanguard</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🛡️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are in the Vanguard</h3>
                <p className="text-gray-700 mb-4">{name}, your cohort invitation and first systems pack arrive within the hour.</p>
                <Link to="/pinnacle" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Pinnacle for lifetime vault →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
