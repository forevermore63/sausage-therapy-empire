import type { Route } from "./+types/forge";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forge | Sanctuary Builder | Therapy Sausages" },
    {
      name: "description",
      content:
        "Forge is the sanctuary and business builder membership. Toolkits, blueprints and step-by-step systems to create your own therapy space or empire. $129/month. $30 to dog welfare. Grow the dream from true to tremendous.",
    },
  ];
}

export default function Forge() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Forge</h1>
          <p className="text-lg opacity-95">
            The sanctuary builder. Blueprints, toolkits, step-by-step systems and dachshund-proven frameworks to create your own therapy space, home pack or full empire. Digital modules, checklists, business templates and live impact that compounds while you build. $30 of every Forge month funds dog welfare, land care and free places. The creative power that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Forge · $129/month</p>
              <p className="text-sm text-gray-700">Full builder toolkit + modules + systems. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Forge + Aurora + Eclipse · $249/month</p>
              <p className="text-sm text-gray-700">Complete field: build, rise and rest.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $30 minimum to dog welfare each month. Built for those ready to create something lasting. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-forge") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-forge", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the Forge</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for builder drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Forge</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔥</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Forge is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your first blueprint and sanctuary toolkit arrive within the hour. The building has begun.</p>
                <Link to="/academy" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">See the full Academy →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
