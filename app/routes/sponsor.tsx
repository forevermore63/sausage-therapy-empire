import type { Route } from "./+types/sponsor";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Impact Sponsorship Marketplace | Therapy Sausages" },
    {
      name: "description",
      content:
        "Sponsor free NDIS sessions, dog recoveries or farm healing days. Transparent impact, certificates of giving, and real change. Therapy Sausages giving-first marketplace.",
    },
  ];
}

export default function Sponsor() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/give" className="hover:text-[#c45c26]">Give & Grow</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — 27 August 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Impact Sponsorship Marketplace
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Directly fund free therapy places, dog recoveries and farm healing days. See exactly where every dollar goes. Receive a personal impact certificate. Giving that compounds into tremendous change.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Impact%20Sponsorship%20Enquiry" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Sponsor a Place Today
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Choose Your Impact</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Every sponsorship is tracked on the live Impact Dashboard. Sponsors receive a certificate, optional public recognition, and a short update when the place is delivered.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Free NDIS / Community Session</h3>
            <p className="text-3xl font-bold mb-2">$180</p>
            <p className="text-gray-700 mb-4">Fully fund one 45–60 min healing session for someone who cannot pay. Direct delivery, real dogs, real results.</p>
            <a href="mailto:emily@therapysausages.com?subject=Sponsor%20Free%20Session%20%24180" className="text-[#c45c26] font-semibold hover:underline">Sponsor this →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🐕</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Dog Recovery & Care</h3>
            <p className="text-3xl font-bold mb-2">$350</p>
            <p className="text-gray-700 mb-4">Contribute to veterinary, nutrition or recovery care for a therapy pack member. Transparent allocation.</p>
            <a href="mailto:emily@therapysausages.com?subject=Sponsor%20Dog%20Recovery%20%24350" className="text-[#c45c26] font-semibold hover:underline">Sponsor this →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Farm Healing Day Place</h3>
            <p className="text-3xl font-bold mb-2">$480</p>
            <p className="text-gray-700 mb-4">Fund a full day immersion place for a trauma survivor, carer or NDIS participant at Forevermore Farm.</p>
            <a href="mailto:emily@therapysausages.com?subject=Sponsor%20Farm%20Day%20%24480" className="text-[#c45c26] font-semibold hover:underline">Sponsor this →</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d5016] mb-4">Corporate & Group Sponsorships</h2>
          <p className="text-gray-700 mb-8">Teams and companies can sponsor multiple places, a full farm day, or ongoing monthly free-session funds. Custom impact reports and team recognition available.</p>
          <a href="mailto:emily@therapysausages.com?subject=Corporate%20Impact%20Sponsorship" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
            Discuss Corporate Sponsorship
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">From True to Tremendous Through Giving</h2>
          <p className="opacity-90 mb-8">Every sponsored place is a real human + real dog + real nervous-system shift. Track the results on the live Impact Dashboard.</p>
          <Link to="/impact" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            View Live Impact →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Impact Sponsorship Marketplace · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
