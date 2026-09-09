import type { Route } from "./+types/forge";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Legacy Forge | Build Assets That Outlast You | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Legacy Forge turns your healing stories, farm wisdom, dachshund lineage and Olympic vision into permanent digital assets, books, courses and IP that compound for generations.",
    },
  ];
}

const forgeAssets = [
  {
    name: "Healing Story Vault",
    description: "Curated collection of real session outcomes, trauma-to-triumph arcs and dog-led breakthroughs. Ready for book, podcast or course modules.",
    status: "Ready to mint",
    cta: "Open Stories",
    link: "/stories",
  },
  {
    name: "Therapy Protocol Library",
    description: "Trauma-informed, NDIS-aligned session structures, presence rituals and environmental protocols. Core IP for certification and franchise.",
    status: "Live in Protocol",
    cta: "View Protocols",
    link: "/protocol",
  },
  {
    name: "Olympic Legacy Blueprint",
    description: "2032 Brisbane supplier pathway, measurable impact metrics and legacy programs that position Therapy Sausages as the official animal-assisted wellness partner.",
    status: "Active path",
    cta: "Open Legacy",
    link: "/legacy",
  },
  {
    name: "Digital Product Suite",
    description: "Academy modules, Vault packs, Calm Challenge, audio journeys and membership content that sell while you sleep.",
    status: "Revenue live",
    cta: "Enter Vault",
    link: "/vault",
  },
];

export default function Forge() {
  const [forged, setForged] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/cascade" className="hover:text-[#c45c26]">Cascade</Link>
            <Link to="/wave" className="hover:text-[#c45c26]">Wave</Link>
            <Link to="/legacy" className="hover:text-[#c45c26]">Legacy</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 10 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Legacy Forge
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Turn lived experience, dog wisdom and the Forevermore vision into permanent assets that outlast any single session. Stories, protocols, courses and Olympic pathways forged into compounding IP.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">Assets Ready to Forge</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {forgeAssets.map((asset) => (
              <div
                key={asset.name}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#c45c26]">{asset.name}</h3>
                  <span className="text-xs font-semibold bg-[#2d5016]/10 text-[#2d5016] px-2 py-1 rounded-full">
                    {asset.status}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{asset.description}</p>
                <Link
                  to={asset.link}
                  className="text-[#c45c26] font-semibold hover:underline text-sm"
                >
                  {asset.cta} →
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-center">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">
              Forge the next layer today
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Choose one asset stream. The Forge links it into Academy, Certification, Franchise and the 2032 Legacy pathway so it compounds without extra daily effort.
            </p>
            <button
              onClick={() => setForged(true)}
              className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition"
            >
              Activate Legacy Forge →
            </button>
          </div>

          {forged && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Forge is active</h3>
              <p className="mb-6 opacity-95">
                Your chosen streams are now tracked in Live Command and available for Academy / Certification packaging. Legacy compounds while presence continues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/academy" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Open Academy
                </Link>
                <Link to="/certify" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Certification Path
                </Link>
                <Link to="/legacy" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Olympic Legacy
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Forge matters</h2>
          <p className="text-gray-700 mb-6">
            Sessions heal in the moment. Forged assets heal across years and generations. Every story, protocol and blueprint becomes a revenue stream, a teaching tool and proof for grants and Olympic partnerships.
          </p>
          <Link to="/wave" className="text-[#c45c26] font-semibold hover:underline">
            Amplify with Wave Engine →
          </Link>
        </div>
      </section>
    </div>
  );
}
