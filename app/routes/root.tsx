import type { Route } from "./+types/root";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Root | Land Restoration | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Sponsor a tree, a metre of fence or an acre of Forevermore restoration. Land that holds dogs, people and clean air.",
    },
  ];
}

const gifts = [
  { id: "sapling", name: "Sapling", price: 35, desc: "One native tree planted and watered through first summer." },
  { id: "fence", name: "Safe line", price: 120, desc: "A metre of dog-safe fencing and shade." },
  { id: "acre", name: "Acre care", price: 480, desc: "One acre of weed, water and soil work this season." },
];

export default function Root() {
  const [picked, setPicked] = useState("sapling");
  const [done, setDone] = useState(false);
  const gift = gifts.find((g) => g.id === picked)!;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/farm" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Farm</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 26 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Root</h1>
          <p className="text-lg opacity-95">The land has to hold the pack. Sponsor restoration so Forevermore stays a clean, shaded, working sanctuary.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {gifts.map((g) => (
              <button
                key={g.id}
                onClick={() => setPicked(g.id)}
                className={`w-full text-left bg-white rounded-2xl p-5 border shadow-sm ${
                  picked === g.id ? "border-[#c45c26] ring-2 ring-[#c45c26]/30" : "border-[#c45c26]/10"
                }`}
              >
                <p className="font-bold text-[#c45c26]">{g.name} · ${g.price}</p>
                <p className="text-sm text-gray-700">{g.desc}</p>
              </button>
            ))}
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
                <h2 className="text-xl font-bold text-[#2d5016]">Plant {gift.name}</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Name on the root certificate" required />
                <textarea className="w-full border rounded-xl px-4 py-3" rows={3} placeholder="Dedication (optional)" />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Root ${gift.price}</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌱</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Rooted</h3>
                <p className="text-gray-700 mb-4">{gift.name} is reserved on Forevermore. Complete payment on Book or Give.</p>
                <Link to="/give" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Complete on Give →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
