import type { Route } from "./+types/ledger";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ledger | Live Giving & Revenue | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Public ledger of money in, money given back to dogs, free places funded and the next threshold. Trust is a conversion engine.",
    },
  ];
}

const rows = [
  { label: "Sessions invoiced (rolling 30d)", value: "$4,820" },
  { label: "Digital / membership",
    value: "$1,160" },
  { label: "Given back to dogs & free places", value: "$18,400 lifetime" },
  { label: "Wellspring seats funded", value: "11" },
  { label: "Next threshold", value: "$25k given — extra farm fence bay" },
];

export default function Ledger() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/give" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Give</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 30 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ledger</h1>
          <p className="text-lg opacity-95">
            People give and book when they can see the money move. Ledger is the public proof that Sausage Therapy is giving-first, not slogan-first.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {rows.map((r) => (
            <div key={r.label} className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm flex items-center justify-between gap-4">
              <p className="text-gray-700">{r.label}</p>
              <p className="font-bold text-[#c45c26] text-right">{r.value}</p>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link to="/give" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full text-center">Move a number →</Link>
            <Link to="/impact" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full text-center">Full impact →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
