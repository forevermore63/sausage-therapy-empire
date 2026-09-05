import type { Route } from "./+types/vault";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Healing Digital Vault | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Instant-access digital products, guided presence audio, nervous-system protocols, Sausage Hours templates and pack wisdom. Buy once, own forever. Portion of every purchase funds free therapy and dog care.",
    },
  ];
}

const products = [
  {
    id: "presence-pack",
    title: "7-Minute Presence Protocol Pack",
    price: "$47",
    desc: "Printable + audio versions of the daily ritual, 30-day streak tracker and emergency downshift cards.",
    tag: "Best starter",
  },
  {
    id: "calm-week",
    title: "7-Day Dachshund Calm Challenge Kit",
    price: "$67",
    desc: "Full structured week with daily audio, journal prompts and optional live check-in.",
    tag: "High conversion",
  },
  {
    id: "hours-kit",
    title: "Sausage Hours Gift & Claim Kit",
    price: "$37",
    desc: "Beautiful certificates, email templates and presence scripts for gifting protected time.",
    tag: "Gift ready",
  },
  {
    id: "nervous-system",
    title: "Nervous-System Reset Library",
    price: "$97",
    desc: "12 guided audio sessions + written protocols for wired, exhausted and high-load states.",
    tag: "Deep work",
  },
  {
    id: "practitioner",
    title: "Practitioner Mini-Toolkit",
    price: "$147",
    desc: "Session flow templates, NDIS wording samples and client presence homework for animal-assisted practitioners.",
    tag: "Pro",
  },
  {
    id: "full-vault",
    title: "Complete Healing Vault Access",
    price: "$247",
    desc: "Everything above + lifetime updates + priority access to new digital drops.",
    tag: "Best value",
  },
];

export default function Vault() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/audio" className="hover:text-[#c45c26]">Audio</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 6 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Healing Digital Vault
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Instant-access tools that carry the pack’s calm into everyday life. Buy once. Own forever. Every purchase funds free therapy places and the dogs who make it possible.
          </p>
          <Link to="#products" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Browse the Vault
          </Link>
        </div>
      </section>

      <section id="products" className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Digital Products That Convert Presence into Revenue</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 flex flex-col">
                {p.tag && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-2">{p.tag}</span>
                )}
                <h3 className="font-bold text-[#c45c26] text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 flex-grow mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#2d5016]">{p.price}</span>
                  <Link
                    to="/shop"
                    className="bg-[#c45c26] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#a34a1e] transition"
                  >
                    Get Access
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-gray-600">
            All purchases processed securely. Instant download links delivered by email. Portion of every sale supports free therapy access and dog welfare.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why the Vault matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Sessions are powerful. Digital tools let the calm travel home with people and create passive revenue that keeps the land, the pack and the free places alive. This is one of the cleanest levers from true to tremendous.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Open Full Shop
            </Link>
            <Link to="/passive" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">
              See Passive Engines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
