import type { Route } from "./+types/wave";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wave Amplifier | Content & Visual Growth Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Wave Amplifier turns dachshund therapy clips, farm moments and healing stories into multi-platform content waves that drive bookings, memberships and visual wealth royalties.",
    },
  ];
}

const waveChannels = [
  {
    name: "Visual Wealth Wave",
    detail: "Stock photo/video batches from Google Photos → Adobe Stock, Shutterstock, Pond5 with full metadata",
    action: "Open Stock Portal",
    link: "/stock",
    icon: "📸",
  },
  {
    name: "Social Healing Wave",
    detail: "Short Reels / TikToks of pack presence, calm moments and session outcomes with conversion captions",
    action: "Open Visual Hub",
    link: "/visual",
    icon: "📱",
  },
  {
    name: "Story Podcast Wave",
    detail: "Weekly healing stories + dog wisdom turned into podcast episodes and short-form clips",
    action: "Open Podcast",
    link: "/podcast",
    icon: "🎙️",
  },
  {
    name: "Email & Membership Wave",
    detail: "Automated sequences that turn free content consumers into Circle members and session bookers",
    action: "Open Membership",
    link: "/membership",
    icon: "💌",
  },
];

export default function Wave() {
  const [amplified, setAmplified] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/cascade" className="hover:text-[#c45c26]">Cascade</Link>
            <Link to="/forge" className="hover:text-[#c45c26]">Forge</Link>
            <Link to="/visual" className="hover:text-[#c45c26]">Visual</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 10 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Wave Amplifier
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            One authentic moment with the pack becomes a multi-platform content wave that attracts clients, builds trust and generates passive visual royalties. Presence becomes reach becomes revenue.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">Choose your wave</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {waveChannels.map((ch, i) => (
              <button
                key={ch.name}
                onClick={() => setSelected(i)}
                className={`text-left p-6 rounded-2xl border-2 transition ${
                  selected === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/15 bg-white/70 hover:border-[#c45c26]/40"
                }`}
              >
                <div className="text-3xl mb-2">{ch.icon}</div>
                <h3 className="font-bold text-[#c45c26] text-lg mb-1">{ch.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{ch.detail}</p>
                <Link
                  to={ch.link}
                  className="text-sm font-semibold text-[#2d5016] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {ch.action} →
                </Link>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-center">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">
              Launch the selected wave
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Amplifies into Live Command metrics, feeds Bloom multipliers and supports Cascade conversion. One consistent wave compounds faster than sporadic posts.
            </p>
            <button
              onClick={() => setAmplified(true)}
              className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition"
            >
              Amplify Wave →
            </button>
          </div>

          {amplified && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Wave is amplifying</h3>
              <p className="mb-6 opacity-95">
                Content and visual assets are now linked to conversion paths. Track reach and revenue in Live Command. Feed the next batch through Visual Wealth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/stock" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Stock Portal
                </Link>
                <Link to="/visual" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Visual Hub
                </Link>
                <Link to="/live-empire" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Live Command
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Wave works</h2>
          <p className="text-gray-700 mb-6">
            Attention is the first currency. Authentic dachshund therapy and farm presence content converts because it feels real. Wave Amplifier systematises that presence so every clip serves bookings, memberships and passive royalties at once.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cascade" className="text-[#c45c26] font-semibold hover:underline">
              Cascade the conversions →
            </Link>
            <Link to="/forge" className="text-[#c45c26] font-semibold hover:underline">
              Forge the assets →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
