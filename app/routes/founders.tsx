import type { Route } from "./+types/founders";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Founders Circle | High-Ticket Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Twelve-seat Founders Circle for people who will fund the remaining pack, land recovery and free places at Forevermore Farm.",
    },
  ];
}

export default function Founders() {
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
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <p className="opacity-90 mb-3">Brand-New Online Element — 22 September 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Founders Circle</h1>
        <p className="max-w-2xl mx-auto text-lg">Twelve seats. Not a fan club. A pact that keeps five working dogs, the farm and free places alive.</p>
        <p className="mt-6 text-3xl font-bold">$2,400 / year or $240 / month</p>
      </section>
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
          <ul className="space-y-3 text-gray-800">
            <li>✓ Two farm immersions or equivalent mobile sessions</li>
            <li>✓ Direct line for corporate and grant introductions</li>
            <li>✓ Name on the living Impact wall</li>
            <li>✓ Pack Passport · Founder edition</li>
            <li>✓ First look at therapy-line nests when a careful home is needed</li>
            <li>✓ 30% of each seat funds free places through Wellspring</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full">Request a seat</Link>
            <Link to="/wellspring" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3 rounded-full">Or fill the well</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
