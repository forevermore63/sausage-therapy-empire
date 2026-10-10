import type { Route } from "./+types/thrive";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thrive | 30-Day Pack Challenge | Therapy Sausages" },
    {
      name: "description",
      content:
        "Thrive is the 30-day pack challenge from Therapy Sausages. Daily rituals, journal prompts and virtual access. $67. $15 to dog welfare. Build the habit that heals.",
    },
  ];
}

export default function Thrive() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("tomorrow");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/membership" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Memberships</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thrive</h1>
          <p className="text-lg opacity-95">
            Thirty days with the pack. Daily three-minute ritual, journal prompt, and one live Meridian credit. $15 of your $67 goes to dog recovery and free places. The habit that turns true into tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Thrive · $67</p>
              <p className="text-sm text-gray-700">30 days of guided pack rituals + private journal space + one Meridian screen session credit.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Thrive Household · $97</p>
              <p className="text-sm text-gray-700">Two people. Shared progress. Extra farm-day discount.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first architecture. Every Thrive funds the dogs who make the healing possible.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-thrive") || "[]");
              held.push({ name, start, at: new Date().toISOString() });
              localStorage.setItem("st-thrive", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Start your 30 days</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Begin</label>
                <select className="w-full border rounded-xl px-4 py-3" value={start} onChange={(e) => setStart(e.target.value)}>
                  <option>tomorrow</option>
                  <option>this weekend</option>
                  <option>next Monday</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Join Thrive</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌱</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Thrive is live</h3>
                <p className="text-gray-700 mb-4">{name}, your 30 days begin {start}. The pack is ready.</p>
                <Link to="/journal" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Open your Journal →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
