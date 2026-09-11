import type { Route } from "./+types/resonance";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resonance Field | Match Nervous Systems to Pack Energy | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Resonance Field matches human nervous-system needs to the exact pack energy and offer, then auto-funnels into the right cascade, membership, farm experience or free place. Precision healing that multiplies impact and revenue.",
    },
  ];
}

const fields = [
  {
    need: "Anxiety / Overwhelm",
    packEnergy: "Grounding cream miniature presence + slow farm rhythm",
    bestOffer: "Individual session → Calm Challenge → Circle",
  },
  {
    need: "Grief / Loss",
    packEnergy: "Soft contact, quiet holding, story space",
    bestOffer: "1:1 healing → Journal → Legacy Forge story",
  },
  {
    need: "NDIS / Regulation support",
    packEnergy: "Predictable, sensory-friendly, consistent pack",
    bestOffer: "NDIS portal → Claim Accelerator → ongoing membership",
  },
  {
    need: "Corporate stress / team burnout",
    packEnergy: "Playful high-energy pack + structured reset",
    bestOffer: "Corporate day → ROI calculator → ongoing sponsor",
  },
  {
    need: "Deep reset / trauma recovery",
    packEnergy: "Full hinterland immersion + overnight pack sleep",
    bestOffer: "Farm retreat → Protocol library → Mastermind",
  },
  {
    need: "Purpose / meaning seeking",
    packEnergy: "Working pack + Olympic legacy vision",
    bestOffer: "Ambassador → Certification → Franchise path",
  },
];

export default function Resonance() {
  const [selected, setSelected] = useState(0);
  const [matched, setMatched] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/orbit" className="hover:text-[#c45c26]">Orbit</Link>
            <Link to="/horizon" className="hover:text-[#c45c26]">Horizon</Link>
            <Link to="/match" className="hover:text-[#c45c26]">Match</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 12 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Resonance Field
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Every human nervous system has a frequency. Every pack has an energy. Resonance Field matches them with precision, then routes the person into the exact offer, cascade or free place that creates the deepest healing and the highest lifetime value.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">Select the felt need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {fields.map((field, i) => (
              <button
                key={field.need}
                onClick={() => {
                  setSelected(i);
                  setMatched(false);
                }}
                className={`text-left p-5 rounded-2xl border-2 transition ${
                  selected === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/15 bg-white/70 hover:border-[#c45c26]/40"
                }`}
              >
                <p className="font-bold text-[#c45c26] mb-1">{field.need}</p>
                <p className="text-xs text-gray-500">Tap to match</p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-4">
              Current match: {fields[selected].need}
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-[#2d5016]">Recommended pack energy</p>
                <p className="text-gray-700">{fields[selected].packEnergy}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2d5016]">Highest-leverage next path</p>
                <p className="text-gray-700">{fields[selected].bestOffer}</p>
              </div>
            </div>
            <button
              onClick={() => setMatched(true)}
              className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition w-full sm:w-auto"
            >
              Lock Resonance & Route →
            </button>
          </div>

          {matched && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Resonance locked</h3>
              <p className="mb-6 opacity-95">
                The person is now matched. Route them into the cascade, book the session, or open the free-place pathway. Orbit Engine will keep them circulating.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Book Matching Session
                </Link>
                <Link to="/cascade" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Start Cascade
                </Link>
                <Link to="/orbit" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Enter Orbit
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Precision creates both healing and wealth</h2>
          <p className="text-gray-700 mb-6">
            Generic offers convert poorly and heal less deeply. Resonance Field makes every interaction feel destined. Clients stay longer, refer more, and the free-place pipeline stays full because the right people are always finding the right dogs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/match" className="text-[#c45c26] font-semibold hover:underline">
              Classic Therapy Match →
            </Link>
            <Link to="/navigator" className="text-[#c45c26] font-semibold hover:underline">
              NDIS Navigator →
            </Link>
            <Link to="/horizon" className="text-[#c45c26] font-semibold hover:underline">
              Project the Horizon →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
