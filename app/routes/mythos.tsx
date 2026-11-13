import type { Route } from "./+types/mythos";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mythos | Living Story Engine | Therapy Sausages" },
    {
      name: "description",
      content:
        "Mythos is the $35 monthly living story engine from Therapy Sausages. Weekly mythos + daily pack lore. $9 to dog welfare. The stories that grow the dream from true to tremendous.",
    },
  ];
}

export default function Mythos() {
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
          <p className="opacity-90 mb-3">New online element — 14 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mythos</h1>
          <p className="text-lg opacity-95">
            Living story engine with the pack. Weekly mythos + daily pack lore. $9 of every month goes to dog welfare. The stories that grow the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Mythos · $35 / month</p>
              <p className="text-sm text-gray-700">Weekly mythos + daily pack lore. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Mythos Circle · $55 / month</p>
              <p className="text-sm text-gray-700">Full mythos + community story sharing and pack lore contributions.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $9 minimum to dog welfare every month. NDIS-friendly digital support where plans allow.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-mythos") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-mythos", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim the Mythos</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for mythos drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Enter Mythos</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">📜</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Mythos is claimed</h3>
                <p className="text-gray-700 mb-4">{name}, the living stories are now flowing. Check your email.</p>
                <Link to="/" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Return to Empire →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
