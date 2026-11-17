import type { Route } from "./+types/trueforge";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TrueForge | Daily True Forge Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "TrueForge is the $45 monthly daily true forge presence from Therapy Sausages. Forging true steps + pack affirmation. $11 to dog welfare. The forge that turns true into directed tremendous.",
    },
  ];
}

export default function TrueForge() {
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
          <p className="opacity-90 mb-3">New online element — 18 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TrueForge</h1>
          <p className="text-lg opacity-95">
            Daily true forge presence with the pack. Forging true steps + pack affirmation. $11 of every month goes to dog welfare. The forge that turns true into directed tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">TrueForge · $45 / month</p>
              <p className="text-sm text-gray-700">Daily forging of true steps + pack affirmation. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">TrueForge Plus · $69 / month</p>
              <p className="text-sm text-gray-700">Full true forge + priority access to TremendousNexus.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $11 minimum to dog welfare every month. NDIS-friendly digital support where plans allow.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-trueforge") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-trueforge", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the TrueForge</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for forge drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start TrueForge</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔥</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">TrueForge is active</h3>
                <p className="text-gray-700 mb-4">{name}, the pack is forging the true path with you. Check your email.</p>
                <Link to="/tremendousnexus" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Enter TremendousNexus next →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
