import type { Route } from "./+types/sanctuary";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Healing Sanctuary Map • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Interactive Healing Sanctuary Map — Gold Coast, Noosa hinterland, Forevermore Farm, mobile routes and virtual portals. Find your nearest real-world or digital sausage sanctuary and book instantly.",
    },
  ];
}

const locations = [
  {
    id: "farm",
    name: "Forevermore Farm",
    region: "Noosa Hinterland / Cooran area",
    type: "Primary Sanctuary",
    description:
      "Full-pack day immersions, overnight resets, private retreats and corporate farm days. Nature + sausages = nervous-system reset that lasts.",
    offerings: ["Day Immersion from $380", "Overnight from $890", "Corporate Farm Day from $1,200"],
    cta: { to: "/farm", label: "Explore Farm" },
    icon: "🌿",
  },
  {
    id: "mobile-gc",
    name: "Gold Coast Mobile Pack",
    region: "Gold Coast & northern NSW border",
    type: "Mobile Unit",
    description:
      "Home, office or community venue visits. Ideal for individuals, families, NDIS participants and small teams who cannot travel to the farm.",
    offerings: ["Individual sessions from $150", "Corporate office packs from $450"],
    cta: { to: "/book", label: "Book Mobile Session" },
    icon: "🚐",
  },
  {
    id: "noosa",
    name: "Noosa & Sunshine Coast",
    region: "Noosa Heads to hinterland",
    type: "Regional Coverage",
    description:
      "Flexible scheduling across the coast. Perfect for short stays, holiday healing or local residents wanting regular pack contact.",
    offerings: ["1:1 & family sessions", "Group events on request"],
    cta: { to: "/book", label: "Request Noosa Slot" },
    icon: "🌊",
  },
  {
    id: "virtual",
    name: "Virtual Pack Portal",
    region: "Anywhere with internet",
    type: "Digital Sanctuary",
    description:
      "Live Zoom circles, on-demand calm packs, private virtual sessions and the Healing Audio Vault. Geography is no longer a barrier.",
    offerings: ["Virtual sessions", "Monthly Healing Packs", "Audio Vault access"],
    cta: { to: "/virtual", label: "Enter Virtual Portal" },
    icon: "💻",
  },
  {
    id: "corporate",
    name: "Corporate Wellness Sites",
    region: "Gold Coast • Brisbane • Remote",
    type: "Workplace Sanctuary",
    description:
      "Office pack visits, team days and ongoing wellness programs. Measurable calm + giving-first brand alignment.",
    offerings: ["Office packs from $450", "Ongoing programs", "ROI calculator"],
    cta: { to: "/corporate", label: "Corporate Hub" },
    icon: "🏢",
  },
  {
    id: "boat",
    name: "SNOUTSAIL Experience",
    region: "Marina + hinterland combination",
    type: "Special Location",
    description:
      "Unique water + land healing when conditions and scheduling allow. High-impact for corporate standout and deeper reset.",
    offerings: ["Enquire for availability"],
    cta: { to: "/book", label: "Enquire SNOUTSAIL" },
    icon: "⛵",
  },
];

export default function Sanctuary() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">
            Book Now
          </Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Element — September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healing Sanctuary Map</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Every real-world and digital place the pack can meet you. Choose your sanctuary, see the offerings, and move straight into booking or membership.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover flex flex-col"
            >
              <div className="text-4xl mb-3">{loc.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-1">{loc.type}</p>
              <h3 className="text-xl font-bold text-[#c45c26] mb-1">{loc.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{loc.region}</p>
              <p className="text-gray-700 text-sm mb-4 flex-1">{loc.description}</p>
              <ul className="text-sm text-gray-600 mb-5 space-y-1">
                {loc.offerings.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="text-[#c45c26]">✓</span> {o}
                  </li>
                ))}
              </ul>
              <Link
                to={loc.cta.to}
                className="mt-auto inline-block text-center bg-[#c45c26] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#a34a1e] transition"
              >
                {loc.cta.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Can’t see your perfect fit?</h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          We design custom mobile routes, private venues and hybrid virtual + in-person experiences. Tell us what you need.
        </p>
        <Link
          to="/book"
          className="inline-block bg-white text-[#2d5016] font-semibold px-8 py-3 rounded-full hover:bg-[#fdf6e3] transition"
        >
          Request Custom Sanctuary
        </Link>
      </section>

      <section className="py-8 px-4 text-center">
        <Link to="/tremendous" className="text-[#c45c26] font-semibold hover:underline">
          ← Back to True → Tremendous Tracker
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Sanctuary map that converts location into healing revenue</p>
      </footer>
    </div>
  );
}
