import type { Route } from "./+types/harvest";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Harvest Calendar | Compounding Windows | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Harvest Calendar marks the next 90 days of cash, giving and placement windows so Sausage Therapy compounds from true to tremendous without guesswork.",
    },
  ];
}

const windows = [
  { when: "This week", title: "Session harvest", action: "Fill 2–4 individual or NDIS slots. Visible giving on every paid booking.", path: "/book" },
  { when: "Next 14 days", title: "Corporate harvest", action: "Pitch one office / team day. Attach SNOUTSAIL or farm add-on.", path: "/corporate" },
  { when: "This month", title: "Membership harvest", action: "Convert two session clients into Sausage Circle. Turn LTV into orbit.", path: "/membership" },
  { when: "This quarter", title: "Grant + farm harvest", action: "Submit one grant packet. Book one retreat deposit. Fund land + free places.", path: "/grants" },
];

export default function Harvest() {
  const [claimed, setClaimed] = useState<string[]>([]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/ignition" className="hover:text-[#c45c26]">Ignition</Link>
            <Link to="/constellation" className="hover:text-[#c45c26]">Constellation</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 14 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Harvest Calendar</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Money, giving and placements ripen on a clock. Claim each window. Missed windows cost more than extra pages.
            This is how the dream funds itself from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto space-y-5">
          {windows.map((w) => (
            <div key={w.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-1">{w.when}</p>
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{w.title}</h3>
              <p className="text-gray-700 mb-4">{w.action}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={w.path} className="bg-[#c45c26] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e]">
                  Open path →
                </Link>
                <button
                  onClick={() => setClaimed((p) => (p.includes(w.title) ? p : [...p, w.title]))}
                  className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-5 py-2 rounded-full hover:bg-[#2d5016]/5"
                >
                  {claimed.includes(w.title) ? "Claimed ✓" : "Claim this window"}
                </button>
              </div>
            </div>
          ))}

          <div className="text-center pt-6">
            <p className="font-bold text-[#2d5016] mb-4">{claimed.length} / {windows.length} harvest windows claimed</p>
            <Link to="/constellation" className="text-[#c45c26] font-semibold hover:underline">
              See the full constellation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
