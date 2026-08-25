import type { Route } from "./+types/subscribe";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Monthly Healing Pack Subscription | Therapy Sausages" },
    {
      name: "description",
      content:
        "Recurring Monthly Healing Packs from Therapy Sausages. Fresh guided audio, journal prompts, farm wisdom and optional physical coaster kits delivered every month. Predictable revenue that funds free places and dog welfare.",
    },
  ];
}

const tiers = [
  {
    id: "digital",
    title: "Digital Healing Pack",
    price: "$29/mo",
    desc: "New guided audio track + journal prompts + sausage wisdom PDF every month. Instant delivery. Cancel anytime.",
    features: ["Monthly exclusive audio", "Printable journal pages", "Member-only farm updates", "Impact report each month"],
    badge: "Most Popular",
  },
  {
    id: "premium",
    title: "Premium Pack + Physical",
    price: "$67/mo",
    desc: "Everything in Digital plus a physical Wiener Coaster or small gift mailed monthly (Australia first). Higher perceived value and retention.",
    features: ["All Digital benefits", "Physical coaster or gift", "Priority virtual circle seats", "Early access to new products"],
    badge: "Best Value",
  },
  {
    id: "family",
    title: "Family & Support Pack",
    price: "$97/mo",
    desc: "Designed for NDIS participants, families and support workers. Multiple access links + regulation tracks + progress notes template.",
    features: ["Up to 4 access seats", "NDIS-friendly regulation series", "Support worker notes template", "Quarterly live family circle"],
    badge: "NDIS-Friendly",
  },
];

export default function Subscribe() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/audio" className="hover:text-[#c45c26]">Audio Vault</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — August 26 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Monthly Healing Pack Subscription
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Fresh calm, wisdom and sausage energy delivered every month. Predictable recurring revenue that funds free therapy places and dog recovery while keeping your nervous system supported year-round.
          </p>
          <a href="#packs" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Choose Your Pack
          </a>
        </div>
      </section>

      {/* Why Recurring */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Subscriptions create the most stable fuel for the empire. You receive ongoing value. We receive predictable cashflow that compounds into more free places, more dog care, and more land restoration at Forevermore. Everyone wins.
        </p>
      </section>

      {/* Tiers */}
      <section id="packs" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Choose Your Monthly Pack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover flex flex-col">
              {t.badge && (
                <span className="self-start text-xs font-semibold bg-[#d4a017]/20 text-[#2d5016] px-3 py-1 rounded-full mb-3">
                  {t.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{t.title}</h3>
              <p className="text-3xl font-bold mb-3">{t.price}</p>
              <p className="text-gray-700 mb-4">{t.desc}</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
                {t.features.map((f, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#c45c26]">✓</span> {f}</li>
                ))}
              </ul>
              <a
                href={`mailto:emily@therapysausages.com?subject=Monthly%20Healing%20Pack%20-%20${encodeURIComponent(t.title)}&body=I%20would%20like%20to%20subscribe%20to%20the%20${encodeURIComponent(t.title)}%20at%20${t.price}.%20Please%20send%20the%20payment%20link%20and%20onboarding.`}
                className="block text-center bg-[#c45c26] text-white font-semibold px-4 py-2.5 rounded-full hover:bg-[#a34a1e] transition"
              >
                Start My Subscription
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Upsell */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d5016] mb-4">Want Live Circles Too?</h2>
          <p className="text-gray-700 mb-6">
            Sausage Circle membership ($47/month) includes the Digital Healing Pack benefits plus live virtual circles, priority booking and full audio vault access. Highest ongoing relationship value.
          </p>
          <Link to="/membership" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
            Compare with Sausage Circle →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Calm Every Month. Impact Forever.</h2>
          <p className="opacity-90 mb-8">Every subscription is a vote for more free places and healthier dogs. Start today. Cancel anytime. The empire compounds while you stay regulated.</p>
          <a href="#packs" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Choose Your Pack Again
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Monthly Healing Pack Subscription · Recurring Impact</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
