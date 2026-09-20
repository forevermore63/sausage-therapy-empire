import type { Route } from "./+types/wellspring";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wellspring | Sponsor a Free Place | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Wellspring matches a sponsor to a free or low-cost dachshund therapy place. Every paid session can refill the well so someone who cannot pay still meets the pack.",
    },
  ];
}

const tiers = [
  { name: "Drop", price: "$28", what: "One supported hour for a child, carer or CIRS body." },
  { name: "Stream", price: "$84", what: "Three hours. Covers travel and a Harbor-safe setup." },
  { name: "Spring", price: "$280", what: "A month of free places. Named on the public giving board if you want." },
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
          <p className="text-lg opacity-90 mb-3">New Online Engine — 21 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Wellspring</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            The giving well that never runs dry. A sponsor fills it. A person who needs the pack drinks from it. No one has to ask twice.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#2d5016]">{t.name}</h3>
              <p className="text-3xl font-bold text-[#c45c26] my-2">{t.price}</p>
              <p className="text-gray-700 mb-4">{t.what}</p>
              <Link to="/give" className="text-[#c45c26] font-semibold">Fill this tier →</Link>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          <Link to="/give" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Fill the well →</Link>
          <Link to="/harbor" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Need a place →</Link>
          <Link to="/impact" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">See who was helped →</Link>
        </div>
      </section>
    </div>
  );
}
