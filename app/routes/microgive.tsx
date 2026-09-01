import type { Route } from "./+types/microgive";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Micro-Impact Giving • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Instant Micro-Impact Giving. $5, $18, $47 or custom amounts that immediately fund free NDIS places, dog recovery or farm healing days. Transparent, feel-good, conversion-optimised giving engine.",
    },
  ];
}

const tiers = [
  {
    amount: 5,
    label: "One Wag",
    impact: "Funds a single guided micro-practice or snack for a recovery dog.",
    icon: "🐾",
  },
  {
    amount: 18,
    label: "Half Session Seed",
    impact: "Contributes toward a free or heavily subsidised NDIS-aligned session.",
    icon: "💛",
  },
  {
    amount: 47,
    label: "Full Circle Boost",
    impact: "Covers one month of Sausage Circle membership for someone who cannot pay.",
    icon: "🌟",
  },
  {
    amount: 180,
    label: "Full Free Session",
    impact: "Directly funds one complete free individual or family healing session.",
    icon: "🎁",
  },
];

export default function Microgive() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/sponsor" className="text-sm font-medium hover:text-[#c45c26]">
            Full Sponsorship →
          </Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Element — September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Micro-Impact Giving</h1>
          <p className="text-lg opacity-95">
            Small amounts. Instant transparent impact. Every dollar becomes a free place, a recovered dog or a protected hour of presence. Giving that feels good and compounds the empire.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((t) => (
            <div
              key={t.amount}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover flex flex-col"
            >
              <div className="text-4xl mb-3">{t.icon}</div>
              <p className="text-3xl font-bold text-[#c45c26] mb-1">${t.amount}</p>
              <p className="font-semibold text-[#2d5016] mb-3">{t.label}</p>
              <p className="text-sm text-gray-600 mb-5 flex-1">{t.impact}</p>
              <a
                href={`mailto:emily@therapysausages.com?subject=Micro-Impact%20Gift%20%24${t.amount}&body=I%20want%20to%20give%20%24${t.amount}%20toward%20free%20therapy%20places%20and%20dog%20welfare.`}
                className="inline-block bg-[#c45c26] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#a34a1e] transition"
              >
                Give ${t.amount}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#fdf6e3] rounded-2xl p-8 border border-[#c45c26]/15 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Custom Amount or Corporate Match</h2>
          <p className="text-gray-700 mb-6">
            Want to give a different amount, set up a monthly micro-gift, or match employee giving? We make it simple and send a personal impact certificate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:emily@therapysausages.com?subject=Custom%20Micro-Impact%20or%20Corporate%20Match"
              className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition"
            >
              Email Custom Gift
            </a>
            <Link
              to="/sponsor"
              className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition"
            >
              Full Sponsorship Marketplace
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-[#2d5016] text-white text-center">
        <p className="text-lg max-w-2xl mx-auto mb-2">
          Live impact is tracked on the main dashboard. Every micro-gift is recorded and celebrated.
        </p>
        <Link to="/impact" className="font-semibold text-[#d4a017] hover:underline">
          View Live Impact Dashboard →
        </Link>
      </section>

      <section className="py-8 px-4 text-center">
        <Link to="/tremendous" className="text-[#c45c26] font-semibold hover:underline">
          ← Back to True → Tremendous Tracker
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Micro-giving that scales into tremendous impact</p>
      </footer>
    </div>
  );
}
