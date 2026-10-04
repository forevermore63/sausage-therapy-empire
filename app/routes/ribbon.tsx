import type { Route } from "./+types/ribbon";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ribbon | Gift the Pack Monthly | Therapy Sausages" },
    {
      name: "description",
      content:
        "Ribbon is the gift subscription for Therapy Sausages. Send a monthly pack note and a funded session credit to someone in care. From $29.",
    },
  ];
}

export default function Ribbon() {
  const [done, setDone] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tier, setTier] = useState("note");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/gift" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Gifts</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 5 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ribbon</h1>
          <p className="text-lg opacity-95">
            A monthly gift that does not die after one birthday. A note from the pack, a photo, and — on the care tier — a session credit they can use on Meridian or in person.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Note Ribbon · $29 / month</p>
              <p className="text-sm text-gray-700">Photo, three lines from the kennel, and a calming prompt.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Care Ribbon · $79 / month</p>
              <p className="text-sm text-gray-700">Everything in Note, plus one Meridian credit each month. Unused credits roll 60 days.</p>
            </div>
            <p className="text-sm text-gray-700">Companies can buy Ribbons in tens for staff care packages. Ask via Charter if you need an invoice.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-ribbon") || "[]");
              held.push({ from, to, tier, at: new Date().toISOString() });
              localStorage.setItem("st-ribbon", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Tie a Ribbon</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={from} onChange={(e) => setFrom(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Who it is for" value={to} onChange={(e) => setTo(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={tier} onChange={(e) => setTier(e.target.value)}>
                  <option value="note">Note · $29</option>
                  <option value="care">Care · $79</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start the Ribbon</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🎀</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Ribbon tied</h3>
                <p className="text-gray-700 mb-4">{from} → {to} · {tier}. First note goes out this week.</p>
                <Link to="/charter" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Charter a workplace →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
