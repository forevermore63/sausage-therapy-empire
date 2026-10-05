import type { Route } from "./+types/patron";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Patron Circle | Monthly Giving | Therapy Sausages" },
    {
      name: "description",
      content:
        "Patron Circle is the monthly giving lane for Therapy Sausages. $11, $33 or $88. Funds dog recovery, free places, and the farm.",
    },
  ];
}

const tiers = [
  { id: "11", name: "Wag", price: 11, line: "Keeps one water bowl and one free postcard in motion." },
  { id: "33", name: "Hearth", price: 33, line: "Funds a slice of a Wellspring place each month." },
  { id: "88", name: "Forever", price: 88, line: "Names you on the Ledger and holds a farm-day seat each quarter." },
];

export default function Patron() {
  const [tier, setTier] = useState("33");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
          <Link to="/ledger" className="text-sm font-semibold text-[#2d5016]">Ledger →</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <p className="opacity-90 mb-3">New online element — 6 October 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Patron Circle</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-95">Giving that is the product. A monthly seat beside the pack, visible on the Ledger, aimed at dogs and free places first.</p>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {tiers.map((t) => (
            <button key={t.id} type="button" onClick={() => setTier(t.id)} className={`w-full text-left bg-white rounded-2xl p-5 border ${tier === t.id ? "border-[#c45c26]" : "border-transparent"}`}>
              <p className="font-bold text-[#2d5016]">{t.name} · ${t.price}/month</p>
              <p className="text-sm text-gray-700">{t.line}</p>
            </button>
          ))}
          {!done ? (
            <form
              className="bg-white rounded-2xl p-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const held = JSON.parse(localStorage.getItem("st-patron") || "[]");
                held.push({ name, tier, at: new Date().toISOString() });
                localStorage.setItem("st-patron", JSON.stringify(held));
                setDone(true);
              }}
            >
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Name for the Ledger" value={name} onChange={(e) => setName(e.target.value)} required />
              <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Join as {tier === "11" ? "Wag" : tier === "88" ? "Forever" : "Hearth"}</button>
            </form>
          ) : (
            <p className="bg-white rounded-2xl p-6 text-[#2d5016] font-semibold">{name} is pledged at ${tier}/month. Receipt line is ready for the Ledger.</p>
          )}
        </div>
      </section>
    </div>
  );
}
