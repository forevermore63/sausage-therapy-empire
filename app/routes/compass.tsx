import type { Route } from "./+types/compass";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Compass | Next Right Step | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Compass routes every visitor to the one next action that grows Sausage Therapy from true to tremendous — book, give, train, sponsor or sit with the pack.",
    },
  ];
}

const paths = [
  {
    id: "heal",
    title: "I need healing now",
    next: "Book a 45–60 minute session or an NDIS-supported visit.",
    href: "/book",
    cta: "Book the pack",
  },
  {
    id: "team",
    title: "I run a team or venue",
    next: "Corporate pack day, farm day or SNOUTSAIL. Invoice-ready.",
    href: "/corporate",
    cta: "Open corporate hub",
  },
  {
    id: "give",
    title: "I want the dream to keep growing",
    next: "Join the monthly Pact so free places and dog recovery never stop.",
    href: "/pact",
    cta: "Make the Pact",
  },
  {
    id: "learn",
    title: "I want the method",
    next: "Academy, certification and facilitator Grove waitlist.",
    href: "/academy",
    cta: "Enter Academy",
  },
  {
    id: "safe",
    title: "My body is sensitive / CIRS / immunocompromised",
    next: "Harbor first. Low-load, outdoor-first, no surprises.",
    href: "/harbor",
    cta: "Enter Harbor",
  },
  {
    id: "night",
    title: "I need calm after dark",
    next: "Lantern aftercare audio, journal and night protocol.",
    href: "/lantern",
    cta: "Light the Lantern",
  },
];

export default function Compass() {
  const [picked, setPicked] = useState<(typeof paths)[0] | null>(null);

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
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 17 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Compass</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            One question. One next step. No more repeating the same wish. The Compass points the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6 text-center">What is true for you right now?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => setPicked(p)}
                className={`text-left bg-white rounded-2xl p-5 shadow-md border transition ${
                  picked?.id === p.id ? "border-[#c45c26] ring-2 ring-[#c45c26]/30" : "border-[#c45c26]/10"
                }`}
              >
                <p className="font-bold text-[#c45c26] mb-1">{p.title}</p>
                <p className="text-sm text-gray-700">{p.next}</p>
              </button>
            ))}
          </div>
          {picked && (
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-md border border-[#2d5016]/20 text-center">
              <p className="text-sm uppercase tracking-wide text-[#d4a017] mb-2">Your next right step</p>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">{picked.title}</h3>
              <p className="text-gray-700 mb-6">{picked.next}</p>
              <Link to={picked.href} className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full">
                {picked.cta} →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
