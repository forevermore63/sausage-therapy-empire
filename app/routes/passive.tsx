import type { Route } from "./+types/passive";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Passive Income Engines | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "All digital products, memberships and recurring revenue streams of the Sausage Therapy empire in one place. Academy, Healing Packs, Audio Vault, Membership, Shop and more.",
    },
  ];
}

export default function Passive() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tremendous Tracker</Link>
            <Link to="/hours" className="hover:text-[#c45c26]">Sausage Hours</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 31 August 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passive Income Engines
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Every digital product, membership and recurring stream in one command page. Sell while you sleep. Fund free therapy places while you rest. This is the perpetual wealth layer of the empire.
          </p>
          <Link to="/tremendous" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            View Growth Tracker →
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Live Revenue Engines</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Click any engine to open its dedicated page. All are conversion-ready and waiting for Stripe / payment links.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/academy" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Digital Academy</h3>
            <p className="text-2xl font-bold mt-2">$997</p>
            <p className="text-sm text-gray-600 mt-1">Lifetime access to systems, NDIS setup & content pipelines</p>
          </Link>
          <Link to="/subscribe" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Monthly Healing Packs</h3>
            <p className="text-2xl font-bold mt-2">$29 / $67 / $97</p>
            <p className="text-sm text-gray-600 mt-1">Recurring digital calm packs delivered monthly</p>
          </Link>
          <Link to="/membership" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Sausage Circle</h3>
            <p className="text-2xl font-bold mt-2">$47/mo</p>
            <p className="text-sm text-gray-600 mt-1">Practices, live Q&As, priority booking & impact reports</p>
          </Link>
          <Link to="/audio" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🎧</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Healing Audio Vault</h3>
            <p className="text-2xl font-bold mt-2">From $27</p>
            <p className="text-sm text-gray-600 mt-1">Guided audio for nervous-system reset & sleep</p>
          </Link>
          <Link to="/shop" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Wiener Coaster Shop</h3>
            <p className="text-2xl font-bold mt-2">Merch + Digitals</p>
            <p className="text-sm text-gray-600 mt-1">Guides, apparel, gifts — every sale funds free places</p>
          </Link>
          <Link to="/hours" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">⏳</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Sausage Hours</h3>
            <p className="text-2xl font-bold mt-2">Gift an Hour</p>
            <p className="text-sm text-gray-600 mt-1">Presence over extraction — protect time for healing</p>
          </Link>
          <Link to="/mastermind" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Forevermore Mastermind</h3>
            <p className="text-2xl font-bold mt-2">From $2,997</p>
            <p className="text-sm text-gray-600 mt-1">6-month high-ticket circle for serious builders</p>
          </Link>
          <Link to="/certify" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Practitioner Certification</h3>
            <p className="text-2xl font-bold mt-2">Pathway</p>
            <p className="text-sm text-gray-600 mt-1">Official training that feeds the Directory</p>
          </Link>
          <Link to="/visual" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">📸</div>
            <h3 className="text-xl font-bold text-[#c45c26]">Visual Wealth Hub</h3>
            <p className="text-2xl font-bold mt-2">Stock Pipeline</p>
            <p className="text-sm text-gray-600 mt-1">Dachshund & farm visuals → global stock platforms</p>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#c45c26] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Passive While You Heal</h2>
          <p className="opacity-95 mb-8">Every engine above is designed so revenue continues while Emily is on farm, in sessions, or resting. Giving-first always.</p>
          <Link to="/tremendous" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fdf6e3] transition">
            Track the Tremendous Path →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Passive Income Engines · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
