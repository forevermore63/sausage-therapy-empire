import type { Route } from "./+types/harbor";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Harbor | Low-Load First Contact | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Harbor is the safe first door for immunocompromised, CIRS and chemically sensitive people who want dachshund therapy without surprise load.",
    },
  ];
}

const pledges = [
  "Outdoor-first or well-ventilated indoor only — you choose before arrival.",
  "No surprise fragrance, cleaning products or enclosed vans.",
  "Session can stop at any moment. The pack already knows how to sit still.",
  "Written environment notes sent the day before.",
  "NDIS-friendly invoices and support-coordinator language ready.",
];

export default function Harbor() {
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
          <p className="text-lg opacity-90 mb-3">Brand-New Access Door — 17 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Harbor</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            For bodies that have already been through too much air. A quieter way into the pack — low-load, outdoor-first, no performance required.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6">The Harbor pledge</h2>
          <ul className="space-y-3 mb-10">
            {pledges.map((p) => (
              <li key={p} className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 flex gap-3">
                <span className="text-[#2d5016] font-bold">✓</span>
                <span className="text-gray-800">{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Request a Harbor session →</Link>
            <Link to="/ndis" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">NDIS path →</Link>
            <Link to="/farm" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">Land option →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
