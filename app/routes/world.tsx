import type { Route } from "./+types/world";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pawport World ID — Global Dog Registry | Therapy Sausages" },
    {
      name: "description",
      content:
        "Pawport World ID: GPS + ISO microchip + collar in one registry that works across borders. First 10,000 World IDs for the pack and the people who walk with them.",
    },
  ];
}

export default function World() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <a href="https://forevermore63.github.io/" className="text-sm font-medium hover:text-[#c45c26]">Origin story</a>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 16 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pawport World ID</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Global GPS + ISO microchip + collar. One registry that works across borders.
            First 10,000 World IDs. Built so a working dachshund is never just a number in a drawer.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Pawport%20World%20ID%20%E2%80%94%20first%2010%2C000" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full">
            Reserve a World ID
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
          <h3 className="text-xl font-bold text-[#c45c26] mb-2">Chip + collar + GPS</h3>
          <p className="text-gray-700">Three layers that already exist, bound into one human-readable World ID.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
          <h3 className="text-xl font-bold text-[#c45c26] mb-2">Works across borders</h3>
          <p className="text-gray-700">Travel, rehome, therapy visit, farm stay — same ID. No new country, new paperwork maze.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
          <h3 className="text-xl font-bold text-[#c45c26] mb-2">Funds the remaining five</h3>
          <p className="text-gray-700">A portion of every World ID keeps the working pack fed, scanned and on the field.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Identity is protection</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">Sausage died during a search that found nothing. World ID exists so the next dog is never invisible to the system that should have held them.</p>
        <a href="https://forevermore63.github.io/" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full">Read why these dogs exist →</a>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Pawport World ID · Forevermore Farm · Noosa Dachshunds</p>
        <p className="mt-2"><Link to="/">← Empire Home</Link></p>
      </footer>
    </div>
  );
}
