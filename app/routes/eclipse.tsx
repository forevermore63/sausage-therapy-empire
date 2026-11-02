import type { Route } from "./+types/eclipse";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eclipse | Shadow Sanctuary | Therapy Sausages" },
    {
      name: "description",
      content:
        "Eclipse is the shadow sanctuary membership. Deep rest, quiet pack presence and nervous-system safety. $99/month. $22 to dog welfare. Grow the dream from true to tremendous.",
    },
  ];
}

export default function Eclipse() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eclipse</h1>
          <p className="text-lg opacity-95">
            The shadow sanctuary. Deep rest, quiet pack presence and the safety of being held when the world is too loud. Soft visual drops, guided calm protocols and live impact that compounds while you rest. $22 of every Eclipse month funds dog welfare, land care and free places. The quiet power that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Eclipse · $99/month</p>
              <p className="text-sm text-gray-700">Shadow sanctuary + soft drops + rest systems. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Eclipse + Zenith · $199/month</p>
              <p className="text-sm text-gray-700">Shadow locked with peak presence.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $22 minimum to dog welfare each month. Built for those who need the field quieted and the impact visible. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-eclipse") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-eclipse", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the Eclipse</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for shadow drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Shadow</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌑</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Eclipse is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your first shadow drop and rest protocol arrive within the hour. The field is quieted.</p>
                <Link to="/zenith" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Zenith for the peak →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
