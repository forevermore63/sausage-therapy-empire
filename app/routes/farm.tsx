import type { Route } from "./+types/farm";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forevermore Farm Experiences • Therapy Sausages" },
    {
      name: "description",
      content:
        "Retreats, day experiences and hinterland healing at Forevermore Farm with the Therapy Sausages pack. Corporate farm days, private healing immersions, NDIS-friendly nature sessions. Led by Emily Blue Richards.",
    },
  ];
}

export default function Farm() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/stories" className="hover:text-[#c45c26]">Stories</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🌿 Forevermore Farm</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nature + Sausages = Deep Healing</h1>
          <p className="text-lg opacity-95 mb-8">
            Step onto Forevermore Farm for immersive day experiences, private retreats and corporate farm days. Real dachshunds, real land, real nervous-system reset. Gold Coast hinterland energy with the full Therapy Sausages pack.
          </p>
          <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Enquire About Farm Experiences
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">Farm Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🌅</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Day Immersion</h3>
            <p className="text-2xl font-bold mb-2">From $380</p>
            <p className="text-gray-700 mb-4">Half or full-day on the land with the pack. Guided practices, quiet time, sausage cuddles, optional lunch. Perfect reset for individuals or small groups.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🏕️</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Private Retreat</h3>
            <p className="text-2xl font-bold mb-2">Enquire</p>
            <p className="text-gray-700 mb-4">1–3 night private healing stays (subject to availability & regulations). Deep restoration, custom sessions, farm rhythms. Ideal for trauma recovery or leadership reset.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate Farm Day</h3>
            <p className="text-2xl font-bold mb-2">From $1,200</p>
            <p className="text-gray-700 mb-4">Team days that actually work. Pack interaction, nature grounding, facilitated connection. Stand-out wellness for Gold Coast / Brisbane companies.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why the Farm Matters</h2>
          <p className="opacity-90 mb-6">
            Forevermore Farm is the living root of the empire. Every farm experience funds land care, dog recovery, free places and the long-term vision of a giving-first healing sanctuary. When you come to the land, you help keep it alive for the next person who needs it.
          </p>
          <Link to="/impact" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition">
            See Live Impact →
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Ready for Hinterland Healing?</h2>
        <p className="text-gray-600 mb-6">Emily will reply personally with availability, what to expect, and next steps. NDIS participants and hardship enquiries welcome.</p>
        <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition inline-block">
          Send Farm Enquiry
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Forevermore Farm</p>
      </footer>
    </div>
  );
}
