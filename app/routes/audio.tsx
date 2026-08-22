import type { Route } from "./+types/audio";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Healing Audio Vault | Therapy Sausages Digital Products" },
    {
      name: "description",
      content:
        "Premium guided audio, calm packs, nervous-system resets and sausage wisdom tracks. Instant digital delivery. Every purchase funds free therapy places and dog welfare.",
    },
  ];
}

const products = [
  {
    id: "calm-7day",
    title: "7-Day Dachshund Calm Challenge Audio",
    price: "$27",
    desc: "Daily 8–12 minute guided tracks + soft sausage wisdom. Settle your nervous system in one week. Instant download + email sequence.",
    badge: "Best Starter",
  },
  {
    id: "deep-reset",
    title: "Deep Reset Pack (Farm Immersion)",
    price: "$67",
    desc: "Four long-form guided immersions inspired by Forevermore Farm days. Breath, body, pack presence and land connection. High-fidelity audio.",
    badge: "Most Loved",
  },
  {
    id: "ndis-support",
    title: "NDIS Regulation Support Series",
    price: "$47",
    desc: "Short regulation tracks designed for participants and support workers. Simple language, clear cues, repeatable. Ideal for plan-funded wellbeing.",
    badge: "NDIS-Friendly",
  },
  {
    id: "corporate-focus",
    title: "Corporate Focus & Team Calm",
    price: "$97",
    desc: "Five tracks for offices and teams. 5–15 minute resets that actually work in real workplaces. Licence for team use included.",
    badge: "Team Licence",
  },
  {
    id: "lifetime-vault",
    title: "Lifetime Healing Audio Vault",
    price: "$197",
    desc: "Everything current + all future audio releases for life. Priority access to new farm and pack recordings. Highest lifetime value.",
    badge: "Best Value",
  },
];

export default function Audio() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Healing Audio Vault
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Guided tracks, calm packs and nervous-system resets powered by real dachshund therapy energy. Instant digital delivery. Zero marginal cost. Every purchase directly funds free places and dog welfare.
          </p>
          <a href="#vault" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Enter the Vault
          </a>
        </div>
      </section>

      {/* Why Audio */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Audio is pure leverage. Create once, sell forever, deliver instantly, scale globally. Perfect for NDIS participants, busy professionals, parents and anyone who needs calm on demand. The vault compounds while you focus on live sessions and the farm.
        </p>
      </section>

      {/* Products */}
      <section id="vault" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Choose Your Healing Track</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover flex flex-col">
              {p.badge && (
                <span className="self-start text-xs font-semibold bg-[#d4a017]/20 text-[#2d5016] px-3 py-1 rounded-full mb-3">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{p.title}</h3>
              <p className="text-3xl font-bold mb-3">{p.price}</p>
              <p className="text-gray-700 mb-6 flex-1">{p.desc}</p>
              <a
                href={`mailto:emily@therapysausages.com?subject=Audio%20Purchase%20-%20${encodeURIComponent(p.title)}&body=I%20would%20like%20to%20purchase%20the%20${encodeURIComponent(p.title)}%20for%20${p.price}.%20Please%20send%20payment%20link%20and%20access.`}
                className="block text-center bg-[#c45c26] text-white font-semibold px-4 py-2.5 rounded-full hover:bg-[#a34a1e] transition"
              >
                Get Instant Access
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Upsell */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d5016] mb-4">Want Everything + Live Circles?</h2>
          <p className="text-gray-700 mb-6">
            Sausage Circle membership ($47/month) includes the full audio vault, monthly live virtual circles, priority booking and impact reports. Highest ongoing value.
          </p>
          <Link to="/membership" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
            Join Sausage Circle →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Calm on Demand. Impact Forever.</h2>
          <p className="opacity-90 mb-8">Every track you purchase puts real money into free therapy places and dog recovery. The vault grows while the empire compounds.</p>
          <a href="#vault" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Browse the Vault Again
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Healing Audio Vault · Instant Digital Delivery</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
