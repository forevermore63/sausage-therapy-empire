import type { Route } from "./+types/orchard";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Orchard | Farm and Coffee Van Days | Therapy Sausages" },
    {
      name: "description",
      content:
        "Orchard books Forevermore Farm harvest hours and the Mitchell coffee van with the pack. Deposits from $40. Sausage Therapy online.",
    },
  ];
}

export default function Orchard() {
  const [name, setName] = useState("");
  const [when, setWhen] = useState("");
  const [tier, setTier] = useState("cup");
  const [place, setPlace] = useState("mitchell");
  const [held, setHeld] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/dispatch" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Dispatch</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 9 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Orchard</h1>
          <p className="text-lg opacity-95">
            Pre-book the land and the van before the day exists. Coffee, pack, and a harvest hour that funds Forevermore and the dogs.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Cup and Wag · $40 deposit</p>
              <p className="text-sm text-gray-700">Coffee van stop with two dogs present. Mitchell or a booked roll-out.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Harvest Hour · $180</p>
              <p className="text-sm text-gray-700">One hour on the farm or a hosted yard. Pack visit, a short regulation, take-home note.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Orchard Day · $380</p>
              <p className="text-sm text-gray-700">Day immersion path. Same family as the farm day, booked here so the season fills early.</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const rows = JSON.parse(localStorage.getItem("st-orchard") || "[]");
              rows.push({ name, when, tier, place, at: new Date().toISOString() });
              localStorage.setItem("st-orchard", JSON.stringify(rows));
              setHeld(true);
            }}
          >
            {!held ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Hold a day</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="date" value={when} onChange={(e) => setWhen(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={place} onChange={(e) => setPlace(e.target.value)}>
                  <option value="mitchell">Mitchell coffee van</option>
                  <option value="farm">Forevermore Farm</option>
                  <option value="rollout">Dispatch roll-out</option>
                </select>
                <select className="w-full border rounded-xl px-4 py-3" value={tier} onChange={(e) => setTier(e.target.value)}>
                  <option value="cup">Cup and Wag · $40</option>
                  <option value="hour">Harvest Hour · $180</option>
                  <option value="day">Orchard Day · $380</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold the Orchard</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🍂</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Day held</h3>
                <p className="text-gray-700 mb-4">{name} · {when} · {place} · {tier}. Confirmation follows by email once payment is live.</p>
                <Link to="/farm" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">See the farm →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
