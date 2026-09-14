import type { Route } from "./+types/beacon";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beacon | Press + Discovery Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Beacon makes Sausage Therapy findable by media, 2032 partners, grant officers and soul clients. One living press kit that compounds visibility from true to tremendous.",
    },
  ];
}

const kit = [
  { label: "One-line",
    copy: "Miniature dachshunds that detect cancer and mould, then sit in the nervous system until it remembers safety." },
  { label: "Founder",
    copy: "Emily Blue Richards — Forevermore Farm, Noosa Dachshunds, Therapy Sausages. Five remaining working dogs. Giving-first." },
  { label: "Proof",
    copy: "NDIS-friendly sessions, corporate pack days, hinterland retreats, live impact dashboard, 2032 Olympic legacy track." },
  { label: "Ask",
    copy: "Feature, sponsor, grant, or book the pack. Every yes funds free places and dog recovery." },
];

export default function Beacon() {
  const [copied, setCopied] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/signal" className="hover:text-[#c45c26]">Signal</Link>
            <Link to="/mosaic" className="hover:text-[#c45c26]">Mosaic</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 15 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Beacon</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Visibility that works while you sleep. A living press kit, 2032 partner packet and discovery page so the right people find the pack without you chasing them.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto space-y-5">
          {kit.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-1">{item.label}</p>
              <p className="text-gray-800 mb-4">{item.copy}</p>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(item.copy);
                  setCopied(item.label);
                }}
                className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-5 py-2 rounded-full hover:bg-[#2d5016]/5"
              >
                {copied === item.label ? "Copied ✓" : "Copy for media"}
              </button>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-4">
            <Link to="/grants" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">Grant packet →</Link>
            <Link to="/legacy" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">2032 Legacy →</Link>
            <Link to="/hearth" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Open the Hearth →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
