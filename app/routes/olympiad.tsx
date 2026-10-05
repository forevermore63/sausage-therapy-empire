import type { Route } from "./+types/olympiad";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Olympiad Desk | 2032 Legacy Pathway | Therapy Sausages" },
    {
      name: "description",
      content:
        "Olympiad Desk is the Therapy Sausages expression-of-interest lane for Brisbane 2032 hospitality, athlete recovery spaces, and legacy animal-assisted programs.",
    },
  ];
}

export default function Olympiad() {
  const [done, setDone] = useState(false);
  const [org, setOrg] = useState("");
  const [lane, setLane] = useState("hospitality");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
          <Link to="/legacy" className="text-sm font-semibold text-[#2d5016]">Legacy →</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 6 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympiad Desk</h1>
          <p className="text-lg opacity-95">
            The 2032 door, opened early. Hospitality lounges, athlete recovery corners, and a legacy program that keeps dachshund therapy in Queensland after the flame moves on.
          </p>
        </div>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h2 className="font-bold text-[#2d5016] mb-2">Three lanes</h2>
              <p>Hospitality pack hour — $1,800 guide for a staffed lounge window.</p>
              <p>Recovery corner — quiet dogs, low light, no crowd theatre. From $2,400 a day.</p>
              <p>Legacy seat — a 12-month post-Games program brief for councils and sponsors. From $18,000.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <p>This desk does not claim a Games contract. It captures the serious enquiry, the capability line, and the giving promise: 10% of Olympiad fees fund free places.</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-olympiad") || "[]");
              held.push({ org, lane, at: new Date().toISOString() });
              localStorage.setItem("st-olympiad", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Lodge an interest</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Organisation" value={org} onChange={(e) => setOrg(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={lane} onChange={(e) => setLane(e.target.value)}>
                  <option value="hospitality">Hospitality lounge</option>
                  <option value="recovery">Athlete recovery corner</option>
                  <option value="legacy">12-month legacy seat</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lodge Olympiad interest</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏅</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Interest lodged</h3>
                <p className="text-gray-700">{org} · {lane}. A capability note goes back by email.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
