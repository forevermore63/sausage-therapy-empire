import type { Route } from "./+types/wellspring";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wellspring — Recurring Patron Engine | Therapy Sausages" },
    { name: "description", content: "Monthly patrons keep dog care, free places and land recovery flowing." },
  ];
}

export default function Wellspring() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]"><span className="text-2xl">🐾</span> Therapy Sausages</Link>
          <Link to="/pact" className="text-sm font-medium hover:text-[#c45c26]">Pact</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 20 September 2026</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wellspring</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">Pact is membership for people inside the work. Wellspring is patronage so the well never runs dry — dog food, vet, land, free places.</p>
          <a href="mailto:emily@therapysausages.com?subject=Open%20Wellspring" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg">Open the well</a>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-sm uppercase tracking-wide text-[#c45c26] font-semibold">Spring</p><p className="text-4xl font-bold my-2">$11 / mo</p><p className="text-gray-700">Keeps one working dog in food and basic care. Named on the quiet roll.</p></div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-sm uppercase tracking-wide text-[#c45c26] font-semibold">Aquifer</p><p className="text-4xl font-bold my-2">$33 / mo</p><p className="text-gray-700">Funds one Seedbed spark every month plus pack care. Quarterly farm note.</p></div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-sm uppercase tracking-wide text-[#c45c26] font-semibold">Source</p><p className="text-4xl font-bold my-2">$111 / mo</p><p className="text-gray-700">Underwrites a funded hour each month. Direct line for land and dog decisions.</p></div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Tremendous is a well, not a sprint</h2>
        <a href="mailto:emily@therapysausages.com?subject=Open%20Wellspring" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full">Become a source</a>
      </section>
      <footer className="py-8 px-4 bg-[#fdf6e3] text-center text-sm text-gray-600"><p>Therapy Sausages · Wellspring · Forevermore Farm</p><Link to="/">← Empire Home</Link></footer>
    </div>
  );
}
