import type { Route } from "./+types/trail";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tremendous Trail | 21-Day Challenge | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "21 days of dachshund-paced regulation, farm micro-rituals and giving-first actions. Digital product that compounds the dream from true to tremendous.",
    },
  ];
}

const weeks = [
  {
    title: "Days 1–7 · Ground",
    items: ["Name the load in the room", "Two-minute pack breath", "One outdoor sit", "Write one true sentence", "Gift a Spark if you can"],
  },
  {
    title: "Days 8–14 · Current",
    items: ["Check air before long indoor hours", "Walk like a sausage — slow, nose first", "Send one honest ask", "Watch one farm clip without scrolling past", "Log a Harbor-safe day"],
  },
  {
    title: "Days 15–21 · Tremendous",
    items: ["Book or gift a session", "Share one Beacon line", "Invite one workplace", "Leave a Nest note", "Close the trail with a Pact"],
  },
];

export default function Trail() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/academy" className="text-sm font-medium hover:text-[#c45c26]">Academy</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <p className="opacity-90 mb-3">Brand-New Online Element — 22 September 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tremendous Trail</h1>
        <p className="max-w-2xl mx-auto text-lg">A 21-day paid challenge. Short. Doable. Built so the dream grows even on low-energy days.</p>
        <p className="mt-6 text-3xl font-bold">$47 · or included in Pact</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/pact" className="bg-white text-[#c45c26] font-semibold px-8 py-3 rounded-full">Join via Pact</Link>
          <Link to="/book" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full">Pay once →</Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {weeks.map((w) => (
            <div key={w.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h2 className="font-bold text-[#2d5016] mb-4">{w.title}</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                {w.items.map((i) => (
                  <li key={i}>✓ {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
