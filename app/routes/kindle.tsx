import type { Route } from "./+types/kindle";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kindle | 7-Day Digital Pack Immersion | Therapy Sausages" },
    {
      name: "description",
      content:
        "Kindle is the $97 7-day digital pack immersion from Therapy Sausages. Daily presence, notes and practices. $25 to dog welfare. A week that compounds into tremendous.",
    },
  ];
}

export default function Kindle() {
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
          <p className="opacity-90 mb-3">New online element — 14 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kindle</h1>
          <p className="text-lg opacity-95">
            Seven days of digital pack immersion. Daily photos, short practices and presence notes. A structured week that builds rhythm. $25 of every Kindle goes to dog welfare. From true to tremendous in one week.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Kindle · $97</p>
              <p className="text-sm text-gray-700">7 daily pack immersions. Photos, practices, notes. Full week access.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Kindle + Radiance · $147</p>
              <p className="text-sm text-gray-700">The week plus first month of daily Radiance.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $25 to dog welfare. Designed as an entry into ongoing rhythm. NDIS-friendly digital support where plans allow.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-kindle") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-kindle", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Start Kindle</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for daily delivery" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Kindle the Week</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔥</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Kindle is lit</h3>
                <p className="text-gray-700 mb-4">{name}, day one arrives tomorrow. Check your email.</p>
                <Link to="/radiance" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Continue with Radiance →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
