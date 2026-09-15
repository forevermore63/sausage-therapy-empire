import type { Route } from "./+types/field";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Field Card — What the Pack Points At | Therapy Sausages" },
    {
      name: "description",
      content:
        "Public field card for Sausage Therapy: cancer-detection and mould-pointing dachshunds, five remaining, and how to book a field visit without losing years.",
    },
  ];
}

export default function Field() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book a field visit</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 16 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Field Card</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            They were meant to be emotional-support dachshunds. They became cancer-detection dogs who also find mould and microbial mass in the rooms people actually live in. They point. They reduce the load that stays invisible until it is too late.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Field%20visit%20enquiry" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full">
            Request a field visit
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 space-y-4 text-gray-800">
          <p><strong>Working pack was 23. Five remain.</strong> Tom is named after a late brother. Pepper’s son — Sausage’s grandson — is still here.</p>
          <p>Sausage Therapy exists so other people can learn that before they lose the years it took to see it.</p>
          <p>A field visit is not a performance. It is a walk through the rooms you live in, with dogs who have already proven they notice what instruments miss until the bill arrives.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="https://forevermore63.github.io/" className="text-[#c45c26] font-semibold">Full origin + evidence log →</a>
          <Link to="/world" className="text-[#c45c26] font-semibold">Pawport World ID →</Link>
          <Link to="/hours" className="text-[#c45c26] font-semibold">Sausage Hours →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Field Card · Forevermore Farm · Noosa Dachshunds · Emily Blue Richards</p>
        <p className="mt-2"><Link to="/">← Empire Home</Link></p>
      </footer>
    </div>
  );
}
