import type { Route } from "./+types/visual";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Visual Wealth Hub · Dachshund Content Empire | Therapy Sausages" },
    {
      name: "description",
      content:
        "Turn cream dachshund, farm and therapy photography & video into passive income streams. Stock platforms, creator funds, merch, and grant visuals — the Visual Wealth engine for the Sausage Therapy empire.",
    },
  ];
}

export default function Visual() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/command" className="hover:text-[#c45c26]">Command</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Visual Wealth Upsurge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Every Wag Becomes an Asset</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-95">
            The cream dachshunds, Forevermore Farm light, therapy moments and hinterland healing scenes already captured are now structured for stock royalties, creator platforms, merch and grant storytelling. Passive income that compounds while the dogs nap.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-12">The Visual Engine Pipeline</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="font-bold text-[#c45c26] mb-2">Source & Curate</h3>
            <p className="text-sm text-gray-700">Google Photos albums (cream lines, therapy sessions, farm life). High-res only. Emotional + commercial compositions win.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">✂️</div>
            <h3 className="font-bold text-[#c45c26] mb-2">Variants & Metadata</h3>
            <p className="text-sm text-gray-700">Multiple crops (vertical, square, landscape). 40–60 keywords. Titles that sell: “Cream miniature dachshund emotional support on Noosa hinterland farm”.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-[#c45c26] mb-2">Bulk Deploy</h3>
            <p className="text-sm text-gray-700">Adobe Stock · Shutterstock · Alamy · Pond5 first. Then TikTok Creator, YouTube, Instagram Reels, Patreon exclusives.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-[#c45c26] mb-2">Track & Compound</h3>
            <p className="text-sm text-gray-700">Revenue tracker + top-performer analysis. Feed winners into merch (Wiener Coaster Shop) and grant applications.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready-to-Run Next Actions</h2>
          <ul className="text-left space-y-3 max-w-xl mx-auto mb-8">
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Export 50–100 strongest cream dachshund / therapy / farm images from Google Photos</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Run local metadata generator (titles + 50 keywords + platform CSVs)</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Upload first batch to Adobe Stock + Shutterstock + Pond5</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Create vertical 15–30s clips for TikTok / Reels with therapy captions</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Link top visuals into Shop merch and Impact stories</li>
          </ul>
          <p className="opacity-90 mb-6">Full automation scripts and keyword banks live in the empire skill library. One strong batch starts the royalty flywheel.</p>
          <Link to="/command" className="bg-[#d4a017] text-[#1a1a1a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c4920f] transition inline-block">
            Open Command Center →
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why This Matters</h2>
        <p className="text-gray-700 mb-8">
          Visuals of real therapy dachshunds in authentic Australian hinterland settings are rare and commercially powerful. They fund dog care, free NDIS places, farm recovery and the next surge — while building the brand that attracts corporate and Olympic-legacy partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">Shop Visual Products</Link>
          <Link to="/impact" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">See Impact</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Visual Wealth Engine · From true to tremendous</p>
      </footer>
    </div>
  );
}
