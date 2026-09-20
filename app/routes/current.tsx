import type { Route } from "./+types/current";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Current | Air & Session Safety | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Current is the live air and load check before a session. Outdoor-first, smoke and mould-aware routing so immunocompromised bodies are not surprised.",
    },
  ];
}

const checks = [
  { title: "Wind & plume", body: "If smoke, spray or visible black layers are moving toward the site, we shift outdoors, delay, or move the pack." },
  { title: "Indoor load", body: "No surprise fragrance, new paint, or sealed rooms. Harbor sessions stay outdoor-first by default." },
  { title: "Travel corridor", body: "We will not sit a sensitive body in a closed van after a mouldy site. Route notes go out the day before." },
  { title: "Stop rule", body: "Anyone can stop the session. The dogs already know how to sit still." },
];

export default function Current() {
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
          <p className="text-lg opacity-90 mb-3">New Online Engine — 21 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Current</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            The air is part of the therapy. Current is the check that happens before the pack arrives so bodies that already carry too much load are not asked to carry more.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          {checks.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#2d5016] mb-2">{c.title}</h3>
              <p className="text-gray-700">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          <Link to="/harbor" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Open Harbor →</Link>
          <Link to="/book" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Book with air notes →</Link>
        </div>
      </section>
    </div>
  );
}
