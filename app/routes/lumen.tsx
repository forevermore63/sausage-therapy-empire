import type { Route } from "./+types/lumen";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lumen | Environment-Aware Reset | Therapy Sausages" },
    {
      name: "description",
      content:
        "Lumen is the 21-day environment-aware nervous-system protocol for sensitive and immunocompromised people. Pack-guided. Giving-first.",
    },
  ];
}

export default function Lumen() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [load, setLoad] = useState("medium");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 28 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lumen</h1>
          <p className="text-lg opacity-95">
            A 21-day protocol for people whose bodies already know the air is wrong. The pack taught this. Lumen just names it so you can move without arguing with yourself.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">What Lumen covers</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Daily 6-minute pack audio (low stimulation)</li>
                <li>• Room-load check: air, light, smell, rest</li>
                <li>• Exit maps for high-load days (drive / stay / leave)</li>
                <li>• No mould-scare theatrics. Practical navigation only.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Lumen 21 · $97</p>
              <p className="text-sm text-gray-700">One cycle. Replay forever. NDIS-friendly invoice on request.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Lumen + live session</p>
              <p className="text-sm text-gray-700">Add a mobile or farm session after day 14 if the body can hold it.</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Begin Lumen</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Current load</label>
                <select className="w-full border rounded-xl px-4 py-3" value={load} onChange={(e) => setLoad(e.target.value)}>
                  <option value="low">Low — I can think</option>
                  <option value="medium">Medium — I am managing</option>
                  <option value="high">High — keep it tiny</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start the 21 days · $97</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🕯️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Lumen opened</h3>
                <p className="text-gray-700 mb-4">{name || "You"} begins at {load} load. Day 1 audio lands in the inbox.</p>
                <Link to="/chorus" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Sit in Chorus →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
