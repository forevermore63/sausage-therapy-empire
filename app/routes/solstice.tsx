import type { Route } from "./+types/solstice";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solstice | Seasonal Sanctuary | Therapy Sausages" },
    {
      name: "description",
      content:
        "Solstice is the seasonal sanctuary. Exclusive visuals, high-touch support and full-weight presence. $497/month or $9977 lifetime. $110/$2200 to dog welfare. From true to tremendous.",
    },
  ];
}

export default function Solstice() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("monthly");

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
          <p className="opacity-90 mb-3">Brand new online element — 2 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solstice</h1>
          <p className="text-lg opacity-95">
            The seasonal sanctuary. Exclusive visual drops from the pack and land, high-touch guidance and full-weight presence that holds the field through every turn of the year. A portion of every Solstice funds dog welfare, land care and free places. The deep container that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Solstice Monthly · $497</p>
              <p className="text-sm text-gray-700">Exclusive drops + high-touch. $110 to the dogs.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Solstice Lifetime · $9977</p>
              <p className="text-sm text-gray-700">Full sanctuary forever. $2200 to the dogs.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first. Built for those ready for the full weight of the field. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-solstice") || "[]");
              held.push({ name, email, tier, at: new Date().toISOString() });
              localStorage.setItem("st-solstice", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter Solstice</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for sanctuary drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={tier} onChange={(e) => setTier(e.target.value)}>
                  <option value="monthly">Monthly $497</option>
                  <option value="lifetime">Lifetime $9977</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Sanctuary</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌟</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Solstice is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your first exclusive drop and guidance arrive within the hour. The sanctuary is open.</p>
                <Link to="/zenith" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Zenith for the peak →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
