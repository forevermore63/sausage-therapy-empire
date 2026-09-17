import type { Route } from "./+types/bridge";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bridge | QLD ↔ NSW South Coast | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The dual-base door. Gold Coast / Noosa / Forevermore Farm on one side. Shoalhaven, Eurobodalla and Bega Valley on the other. Same pack energy. Same giving-first work.",
    },
  ];
}

const sides = [
  {
    name: "Queensland side",
    places: ["Gold Coast mobile", "Noosa hinterland", "Forevermore Farm days", "SNOUTSAIL when the marina is live"],
    to: "/farm",
    cta: "QLD booking path",
  },
  {
    name: "NSW South Coast side",
    places: ["Shoalhaven lifestyle & wellness", "Eurobodalla hinterland", "Bega Valley acreage days", "Kiama corridor stopovers"],
    to: "/book",
    cta: "Request a South Coast date",
  },
];

export default function Bridge() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bridge</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            The empire is not one postcode. Bridge holds QLD and the NSW South Coast as one healing line so a move, a reno or a farm day never drops the work.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {sides.map((side) => (
            <div key={side.name} className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
              <h2 className="text-2xl font-bold text-[#2d5016] mb-4">{side.name}</h2>
              <ul className="space-y-2 mb-6">
                {side.places.map((p) => (
                  <li key={p} className="flex gap-3 text-gray-700">
                    <span className="text-[#c45c26] font-bold">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to={side.to} className="text-[#c45c26] font-semibold">{side.cta} →</Link>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 text-center">
          <h3 className="text-xl font-bold text-[#2d5016] mb-3">How Bridge actually books</h3>
          <p className="text-gray-700 mb-6">
            Choose a side. We hold the date, the load (Harbor if needed), and the funding spring. Ember lights after. You do not have to explain the geography twice.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/threshold" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Start at Threshold</Link>
            <Link to="/wellspring" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Fund it first</Link>
            <Link to="/harbor" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">Low-load first</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
