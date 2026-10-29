import type { Route } from "./+types/spire";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spire | 90-Day True to Tremendous Sprint | Therapy Sausages" },
    {
      name: "description",
      content:
        "Spire is the 90-day true-to-tremendous launch sprint. Live systems install, coaching and perpetual engines. $7997. $2000 to dog welfare. From true to tremendous.",
    },
  ];
}

export default function Spire() {
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
          <p className="opacity-90 mb-3">Brand new online element — 30 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spire</h1>
          <p className="text-lg opacity-95">
            Ninety-day true-to-tremendous launch sprint. Private systems install, live coaching, visual and presence engines activated, NDIS and grant pathways mapped, and a perpetual layer that keeps compounding after the sprint ends. Optional farm or virtual immersion. $2000 of every Spire goes to dog welfare and free places. The peak that lifts the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Spire · $7,997</p>
              <p className="text-sm text-gray-700">90 days. Private sprint + systems + perpetual engines. Payment plans available.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Spire + Helix · $11,497</p>
              <p className="text-sm text-gray-700">Full sprint plus 12-month compounding operator path.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $2000 minimum to dog welfare. Designed for those ready to install the full empire layer in one focused window. Documentation, certificates and ongoing dashboard access included.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-spire") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-spire", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim the Spire</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for sprint access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Begin the Ascent</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏔️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are on the Spire</h3>
                <p className="text-gray-700 mb-4">{name}, your first systems map and private onboarding arrive within the hour. The ascent has begun.</p>
                <Link to="/helix" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Helix for long-term compounding →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
