import type { Route } from "./+types/pact";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Pact | Monthly Giving Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Pact is the recurring revenue and giving engine of Sausage Therapy. Monthly members fund free places, dog recovery and the remaining working pack.",
    },
  ];
}

const tiers = [
  {
    name: "Wag",
    price: "$19 / mo",
    points: ["Lantern night protocol", "Monthly pack letter", "1 free-place credit seeded each quarter"],
  },
  {
    name: "Hearth",
    price: "$49 / mo",
    points: ["Everything in Wag", "Priority booking window", "Name on the Mosaic", "2 free-place credits"],
  },
  {
    name: "Grove",
    price: "$149 / mo",
    points: ["Everything in Hearth", "Quarterly live virtual sit", "Corporate intro call", "Founder note"],
  },
];

export default function Pact() {
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
          <p className="text-lg opacity-90 mb-3">Brand-New Recurring Engine — 17 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Pact</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            A standing promise, not a one-off donation. Every month funds the five remaining working dogs, free therapy seats and the land that holds them.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <p className="text-sm uppercase tracking-wide text-[#d4a017]">{t.name}</p>
              <p className="text-3xl font-bold text-[#c45c26] my-2">{t.price}</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {t.points.map((pt) => (
                  <li key={pt} className="flex gap-2"><span className="text-[#2d5016]">✓</span>{pt}</li>
                ))}
              </ul>
              <Link to="/subscribe" className="block text-center bg-[#c45c26] text-white font-semibold px-5 py-3 rounded-full">
                Start {t.name}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-700">
          Corporate monthly retainers live on the <Link to="/corporate" className="text-[#c45c26] font-semibold">Corporate Hub</Link>.
          One-off gifts stay on <Link to="/give" className="text-[#c45c26] font-semibold">Give</Link>.
        </p>
      </section>
    </div>
  );
}
