import type { Route } from "./+types/seedbed";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seedbed — Funded Places Marketplace | Therapy Sausages" },
    { name: "description", content: "The public bed where paid sessions grow free ones. Sponsor a place, claim a funded hour." },
  ];
}

export default function Seedbed() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/impact" className="text-sm font-medium hover:text-[#c45c26]">Impact</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 20 September 2026</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Seedbed</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">Every Kindling, Pact and paid session drops seed here. Sponsors plant. People who cannot pay harvest a real hour with the pack.</p>
          <a href="mailto:emily@therapysausages.com?subject=Plant%20in%20Seedbed" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg">Plant a place</a>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-4xl font-bold text-[#c45c26]">$27</p><h3 className="text-xl font-bold mt-2 mb-2">Spark seed</h3><p className="text-gray-700">Funds digital Kindling for someone who cannot pay the first door.</p></div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-4xl font-bold text-[#c45c26]">$97</p><h3 className="text-xl font-bold mt-2 mb-2">Hour seed</h3><p className="text-gray-700">One protected Sausage Hour gifted to a carer, NDIS participant or CIRS body.</p></div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10"><p className="text-4xl font-bold text-[#c45c26]">$380</p><h3 className="text-xl font-bold mt-2 mb-2">Farm seed</h3><p className="text-gray-700">A day immersion at Forevermore for someone the system usually leaves outside.</p></div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#fdf6e3] text-center">
        <h2 className="text-3xl font-bold text-[#2d5016] mb-4">Need a funded place?</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">Write one sentence about load and location. Harbor-first if the body needs low stimulus.</p>
        <a href="mailto:emily@therapysausages.com?subject=Claim%20Seedbed%20place" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full">Claim a place</a>
      </section>
      <footer className="py-8 px-4 bg-white text-center text-sm text-gray-600"><p>Therapy Sausages · Seedbed · Giving-first</p><Link to="/" className="hover:text-[#c45c26]">← Empire Home</Link></footer>
    </div>
  );
}
