import type { Route } from "./+types/ndis";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NDIS Dachshund Therapy Portal | Therapy Sausages" },
    {
      name: "description",
      content:
        "NDIS-friendly animal-assisted therapy with miniature dachshunds. Clear pathways, session options, reporting support and giving-first access for participants across Gold Coast, Noosa and mobile QLD.",
    },
  ];
}

export default function NDIS() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/book" className="hover:text-[#c45c26]">Book</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/command" className="hover:text-[#c45c26]">Command</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book NDIS Session</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">NDIS Participant Portal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Animal-Assisted Therapy That Fits Your Plan</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-95">
            Real miniature dachshund sessions designed for capacity building, improved wellbeing, community participation and emotional regulation. Mobile across Gold Coast, Noosa and hinterland. Clear invoices and outcome notes available.
          </p>
          <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Start NDIS Enquiry
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-12">How It Works for NDIS Participants</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl text-3xl mb-3">1</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Check Your Goals</h3>
            <p className="text-gray-700">Ideal for capacity building, social & community participation, improved daily living, and mental health / emotional regulation supports. Confirm with your Support Coordinator or Plan Manager.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">2</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Book a Session</h3>
            <p className="text-gray-700">Use the simple enquiry form. Tell us your goals, preferred location (home, community or farm), and any sensory or mobility needs. We reply with availability and pricing options.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">3</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Receive Support Notes</h3>
            <p className="text-gray-700">After each session you receive a clear summary of activities, observed engagement and progress notes suitable for plan reviews and reporting.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2d5016] text-center mb-8">Session Options & Pricing Guidance</h2>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-[#c45c26]">Individual or Family Session (45–60 min)</h3>
                <p className="text-gray-600 text-sm">At home, community location or Forevermore Farm. Pack of miniature dachshunds.</p>
              </div>
              <p className="text-2xl font-bold text-[#2d5016]">From $150</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-[#c45c26]">Extended Immersion / Farm Day</h3>
                <p className="text-gray-600 text-sm">Deeper nature + dog connection for stronger regulation and confidence building.</p>
              </div>
              <p className="text-2xl font-bold text-[#2d5016]">From $380</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-[#c45c26]">Group or Sibling Sessions</h3>
                <p className="text-gray-600 text-sm">Shared sessions where appropriate — contact for tailored quotes.</p>
              </div>
              <p className="text-2xl font-bold text-[#2d5016]">Enquire</p>
            </div>
            <p className="text-sm text-gray-500 pt-4">All prices are indicative. Final quotes consider travel, number of dogs, location and specific support needs. Invoices provided for Plan Managers / Self-managed participants.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Giving-First Access</h2>
        <p className="text-gray-700 mb-6">A portion of every paid session funds free or heavily subsidised places for participants facing gaps in funding. If cost is a barrier, tell us — we will always look for a pathway.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">Book NDIS Session</Link>
          <Link to="/give" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">Support Free Places</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · NDIS-friendly animal-assisted therapy · Emily Blue Richards · Gold Coast, Noosa & Forevermore Farm</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">Home</Link> · <Link to="/impact" className="hover:text-[#d4a017]">Impact</Link> · <Link to="/command" className="hover:text-[#d4a017]">Command Center</Link></p>
      </footer>
    </div>
  );
}
