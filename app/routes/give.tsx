import type { Route } from "./+types/give";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Give & Grow • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Sponsor free sessions, support dog welfare and hardship places, or become a monthly giver. Transparent impact and giving-first growth of the Therapy Sausages mission.",
    },
  ];
}

export default function Give() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/give" className="text-[#c45c26] font-semibold">Give</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Giving-First Empire</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give & Grow</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Every dollar here funds free and low-cost therapy places, dog welfare, recovery and land care. Transparent. Direct. Measurable.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover text-center">
            <div className="text-4xl mb-3">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Sponsor One Session</h3>
            <p className="text-3xl font-bold mb-2">$150</p>
            <p className="text-gray-700 mb-4">Funds one individual or family healing session for someone who could not otherwise access it.</p>
            <a
              href="mailto:emily@therapysausages.com?subject=Sponsor%20One%20Session%20-%20$150"
              className="inline-block bg-[#c45c26] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e] transition"
            >
              Sponsor Now
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover text-center">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Monthly Giver</h3>
            <p className="text-3xl font-bold mb-2">$47+</p>
            <p className="text-gray-700 mb-4">Recurring support that keeps hardship places open every month. Same amount as membership — pure giving option.</p>
            <a
              href="mailto:emily@therapysausages.com?subject=Monthly%20Giver%20-%20$47"
              className="inline-block bg-[#c45c26] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e] transition"
            >
              Become Monthly Giver
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover text-center">
            <div className="text-4xl mb-3">🏛️</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Farm & Dog Fund</h3>
            <p className="text-3xl font-bold mb-2">Any amount</p>
            <p className="text-gray-700 mb-4">Direct support for Forevermore Farm land care, dog recovery, medical needs and long-term sustainability.</p>
            <a
              href="mailto:emily@therapysausages.com?subject=Farm%20%26%20Dog%20Fund%20Gift"
              className="inline-block bg-[#c45c26] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e] transition"
            >
              Give to the Fund
            </a>
          </div>
        </div>

        <div className="bg-[#fdf6e3] rounded-2xl p-8 border border-[#c45c26]/15 mb-10">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Where the money goes</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex gap-3"><span className="text-[#c45c26] font-bold">40%</span> Free & subsidised therapy places</div>
            <div className="flex gap-3"><span className="text-[#c45c26] font-bold">30%</span> Dog welfare, recovery & medical</div>
            <div className="flex gap-3"><span className="text-[#c45c26] font-bold">20%</span> Forevermore Farm land & operations</div>
            <div className="flex gap-3"><span className="text-[#c45c26] font-bold">10%</span> Platform, tools & outreach so more people find us</div>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Full live numbers live on the <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">Impact Dashboard</Link>.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Prefer to receive while giving?</h2>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            Join the Sausage Circle membership. You get the practices, priority booking and live circles while a portion still funds free places.
          </p>
          <Link to="/membership" className="bg-[#2d5016] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1e3a0f] transition inline-block">
            Explore Membership
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-80">
        <p>🐾 Therapy Sausages · Giving-first always · <Link to="/" className="hover:text-[#d4a017]">Home</Link></p>
      </footer>
    </div>
  );
}
