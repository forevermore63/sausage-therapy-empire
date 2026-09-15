import type { Route } from "./+types/kinship";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kinship Circle — Carers, Families, Pack | Therapy Sausages" },
    {
      name: "description",
      content:
        "A standing kinship circle for carers, families and NDIS participants. Monthly presence, pack contact and a funded spare seat.",
    },
  ];
}

export default function Kinship() {
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

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 16 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kinship Circle</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Families and carers should not have to re-explain themselves every month.
            Kinship is a standing place in the pack — and one spare seat funded for someone who cannot pay.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Join%20Kinship%20Circle" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full">
            Join the circle
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#c45c26]">Household circle</h3>
            <p className="text-2xl font-bold mt-2">$79 / month</p>
            <p className="text-gray-700 mt-2">One protected hour a month, pack notes, priority booking and a share of the spare-seat fund.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-[#c45c26]">Carer + NDIS circle</h3>
            <p className="text-2xl font-bold mt-2">Plan-friendly</p>
            <p className="text-gray-700 mt-2">Same kinship, invoiced for NDIS or sponsored. We keep the paperwork simple so the hour stays human.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Belonging is the product</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">Tremendous is not more strangers. Tremendous is the same people coming back, and new people arriving because someone already inside the circle made a seat.</p>
        <Link to="/circles" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full">See all circles →</Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Kinship · Emily Blue Richards</p>
        <p className="mt-2"><Link to="/">← Empire Home</Link></p>
      </footer>
    </div>
  );
}
