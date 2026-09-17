import type { Route } from "./+types/wellspring";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wellspring | Funding Map | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "One map of every way a session, farm day or free place can be funded — NDIS, grants, Pact, gifts, corporate and Dream Seed — so money is never the only door.",
    },
  ];
}

const springs = [
  { name: "NDIS path", price: "Plan-led", blurb: "Capacity building and core support language, invoices and coordinator notes.", to: "/ndis" },
  { name: "Claim helper", price: "Guided", blurb: "Step-by-step claim wording so a session is not lost in paperwork.", to: "/claim" },
  { name: "The Pact", price: "$19 · $49 · $149", blurb: "Monthly recurring that funds free places before anyone asks twice.", to: "/pact" },
  { name: "Dream Seed", price: "$17–$297", blurb: "Micro-support with matching. Visible on the Impact Dashboard.", to: "/seed" },
  { name: "Gift a session", price: "From $150", blurb: "Someone who loves you pays the threshold so you only have to arrive.", to: "/gift" },
  { name: "Grant Surge", price: "Pipeline", blurb: "Female Founders, ILC-style and Olympics-legacy language already drafted.", to: "/grants" },
  { name: "Corporate wellness", price: "From $450", blurb: "Team days that fund community places as a line item, not an afterthought.", to: "/corporate" },
  { name: "Drinks & Support", price: "Any amount", blurb: "The smallest well that still counts. No performance required.", to: "/drinks" },
];

export default function Wellspring() {
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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Engine — 18 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Wellspring</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Money should not be the only door. Eight springs into the same pack — pick the one that actually fits this month.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {springs.map((s) => (
            <Link key={s.name} to={s.to} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:border-[#c45c26]/40 card-hover">
              <p className="text-[#c45c26] font-semibold text-sm mb-1">{s.price}</p>
              <h3 className="text-xl font-bold text-[#2d5016] mb-2">{s.name}</h3>
              <p className="text-gray-700 text-sm">{s.blurb}</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link to="/threshold" className="text-[#c45c26] font-semibold">Not sure which spring? Take Threshold →</Link>
        </p>
      </section>
    </div>
  );
}
