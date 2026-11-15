import type { Route } from "./+types/serenity";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Serenity | Daily Calm Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Serenity is the $29 monthly daily calm presence from Therapy Sausages. Soft pack drops + serenity fields. $7 to dog welfare. The layer that turns true into quiet tremendous.",
    },
  ];
}

export default function Serenity() {
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
          <p className="opacity-90 mb-3">New online element — 16 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Serenity</h1>
          <p className="text-lg opacity-95">
            Daily calm presence with the pack. Soft serenity drops + quiet fields. $7 of every month goes to dog welfare. The layer that turns true into quiet tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Serenity · $29 / month</p>
              <p className="text-sm text-gray-700">Daily soft pack drops + serenity fields. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Serenity Plus · $45 / month</p>
              <p className="text-sm text-gray-700">Full serenity + priority access to Momentum engine.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $7 minimum to dog welfare every month. NDIS-friendly digital support where plans allow.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-serenity") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-serenity", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter Serenity</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for serenity drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start Serenity</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌿</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Serenity is here</h3>
                <p className="text-gray-700 mb-4">{name}, the quiet pack presence is now with you. Check your email.</p>
                <Link to="/momentum" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Build Momentum next →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
