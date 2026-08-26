import type { Route } from "./+types/corporate";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Corporate Wellness Hub | Therapy Sausages" },
    {
      name: "description",
      content:
        "Corporate dachshund therapy packages, team events, farm days and ongoing wellness programs. Measurable ROI, NDIS-aligned options, giving-first. Book or enquire for Gold Coast, Noosa and beyond.",
    },
  ];
}

export default function Corporate() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/roi" className="hover:text-[#c45c26]">ROI Calculator</Link>
            <Link to="/events" className="hover:text-[#c45c26]">Events</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — 27 August 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Corporate Wellness Hub
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Real miniature dachshunds delivering measurable stress reduction, team connection and culture resets. Office visits, farm days, SNOUTSAIL experiences and ongoing programs. Giving-first — every booking supports free community places.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Corporate%20Wellness%20Enquiry" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
            Request Corporate Proposal
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Packages That Deliver</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Office Pack Visit</h3>
            <p className="text-3xl font-bold mb-2">From $450</p>
            <p className="text-gray-700 mb-4">45–90 min team session with the pack. Ideal for stress reset, team-building or celebration. Mobile across Gold Coast / Noosa.</p>
            <a href="mailto:emily@therapysausages.com?subject=Office%20Pack%20Visit" className="text-[#c45c26] font-semibold hover:underline">Enquire →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate Farm Day</h3>
            <p className="text-3xl font-bold mb-2">From $1,200</p>
            <p className="text-gray-700 mb-4">Full day immersion at Forevermore Farm. Nature + sausages + facilitated connection. Transformative for leadership and culture.</p>
            <a href="mailto:emily@therapysausages.com?subject=Corporate%20Farm%20Day" className="text-[#c45c26] font-semibold hover:underline">Enquire →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Ongoing Wellness Program</h3>
            <p className="text-3xl font-bold mb-2">Custom</p>
            <p className="text-gray-700 mb-4">Monthly or quarterly visits, virtual pack add-ons, gift sessions for staff, and impact reporting. Built for retention and results.</p>
            <a href="mailto:emily@therapysausages.com?subject=Ongoing%20Corporate%20Wellness" className="text-[#c45c26] font-semibold hover:underline">Design Program →</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Why Teams Choose Therapy Sausages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26] mb-2">Measurable Calm</h3>
              <p className="text-gray-700 text-sm">Animal-assisted interaction produces rapid nervous-system downshifts. Teams report better focus, lower tension and genuine connection.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26] mb-2">Giving-First Brand Alignment</h3>
              <p className="text-gray-700 text-sm">Every corporate booking funds free community and NDIS places. Your team’s wellness directly expands access for others.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26] mb-2">Ready for 2032</h3>
              <p className="text-gray-700 text-sm">Position your organisation with authentic wellness infrastructure that supports Brisbane 2032 legacy goals.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26] mb-2">Simple Logistics</h3>
              <p className="text-gray-700 text-sm">We bring the pack, the facilitation and the insurance. You provide the space and the people.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link to="/roi" className="text-[#c45c26] font-semibold hover:underline">Run the Corporate ROI Calculator →</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring the Pack?</h2>
          <p className="opacity-90 mb-8">Tell us your team size, preferred format and location. Emily will send a tailored proposal within 48 hours.</p>
          <a href="mailto:emily@therapysausages.com?subject=Corporate%20Wellness%20Proposal%20Request" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Request Proposal Now
          </a>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Corporate Wellness Hub · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
