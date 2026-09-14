import type { Route } from "./+types/mosaic";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Living Mosaic | Social Proof Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Living Mosaic collects healed moments, pack photos and giving receipts so social proof compounds automatically from true to tremendous.",
    },
  ];
}

const tiles = [
  { who: "NDIS family", line: "First full night of sleep in months. The little one stopped scanning the room." },
  { who: "Corporate team day", line: "We booked a second office visit before the pack left the foyer." },
  { who: "Farm immersion", line: "Hinterland + five sausages reset a nervous system that meetings could not." },
  { who: "Gifted place", line: "Someone paid so I could sit. I will pay the next one forward." },
  { who: "Grant officer", line: "Measurable giving + live dashboard made the application readable in one pass." },
  { who: "Pack note", line: "Five remain. They still point. They still sit. The work is not finished." },
];

export default function Mosaic() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/beacon" className="hover:text-[#c45c26]">Beacon</Link>
            <Link to="/stories" className="hover:text-[#c45c26]">Stories</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 15 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Living Mosaic</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Social proof that grows itself. Every session, gift and farm day adds a tile. Visitors see the field, not a brochure.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {tiles.map((t) => (
            <div key={t.who} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-2">{t.who}</p>
              <p className="text-gray-800">{t.line}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 space-y-4">
          <Link to="/stories" className="text-[#c45c26] font-semibold hover:underline block">Full healing stories →</Link>
          <Link to="/book" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#a34a1e]">Add your tile — book a session</Link>
        </div>
      </section>
    </div>
  );
}
