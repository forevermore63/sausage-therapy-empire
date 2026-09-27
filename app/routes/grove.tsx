import type { Route } from "./+types/grove";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grove | Living Trees at Forevermore | Therapy Sausages" },
    {
      name: "description",
      content:
        "Plant a named tree at Forevermore Farm. Living Grove funds fence, water and shade for the remaining pack. From true to tremendous.",
    },
  ];
}

export default function Grove() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [dedication, setDedication] = useState("");
  const [tier, setTier] = useState("sapling");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/root" className="bg-[#2d5016] text-white px-4 py-2 rounded-full text-sm">Root</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 28 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grove</h1>
          <p className="text-lg opacity-95">
            A living map of named trees on the hinterland. Each tree is shade for a dog, water for the land, and a record that someone chose to stay.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#2d5016]">Sapling · $48</p>
              <p className="text-sm text-gray-700">Name on the digital grove + photo when planted.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#2d5016]">Shade tree · $180</p>
              <p className="text-sm text-gray-700">Larger tree + dedication plaque in the digital map + farm visit credit.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#2d5016]">Grove circle · $720</p>
              <p className="text-sm text-gray-700">Five trees. Names a small grove. Funds a season of water and fence.</p>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Plant in the Grove</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Dedication (optional)" value={dedication} onChange={(e) => setDedication(e.target.value)} />
                <select className="w-full border rounded-xl px-4 py-3" value={tier} onChange={(e) => setTier(e.target.value)}>
                  <option value="sapling">Sapling · $48</option>
                  <option value="shade">Shade tree · $180</option>
                  <option value="circle">Grove circle · $720</option>
                </select>
                <button className="w-full bg-[#2d5016] text-white font-semibold py-3 rounded-full">Plant this tree</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌳</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Rooted</h3>
                <p className="text-gray-700 mb-4">
                  {name || "You"} planted a {tier}
                  {dedication ? ` for ${dedication}` : ""}. The land holds the name.
                </p>
                <Link to="/lumen" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Open Lumen →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
