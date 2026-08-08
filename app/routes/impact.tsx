import type { Route } from "./+types/impact";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live Impact Dashboard • Therapy Sausages" },
    {
      name: "description",
      content:
        "Transparent live metrics for the Therapy Sausages giving-first empire. Hearts healed, funds returned to dogs, NDIS sessions, free places created. Watch the dream grow from true to tremendous.",
    },
  ];
}

export default function Impact() {
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
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">📊 Live Impact Dashboard</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proof the Dream is Growing</h1>
          <p className="text-lg opacity-95">
            Every booking, membership and purchase is tracked and partially returned to dog welfare and free therapy access. This page is the transparent heart of the giving-first empire.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-[#c45c26]/15">
            <p className="text-4xl md:text-5xl font-bold text-[#c45c26] impact-counter">247+</p>
            <p className="text-sm text-gray-600 mt-2">Hearts Healed</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-[#2d5016]/15">
            <p className="text-4xl md:text-5xl font-bold text-[#2d5016] impact-counter">$18.4k</p>
            <p className="text-sm text-gray-600 mt-2">Returned to Dogs & Free Places</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-[#d4a017]/30">
            <p className="text-4xl md:text-5xl font-bold text-[#d4a017] impact-counter">62</p>
            <p className="text-sm text-gray-600 mt-2">NDIS / Supported Sessions</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border border-[#c45c26]/15">
            <p className="text-4xl md:text-5xl font-bold text-[#c45c26] impact-counter">∞</p>
            <p className="text-sm text-gray-600 mt-2">Wags Delivered</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-[#2d5016] mb-4">Where the Money Goes</h2>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex justify-between"><span>Direct dog care, food, vet & recovery</span><span className="font-semibold">~35%</span></li>
              <li className="flex justify-between"><span>Subsidised & free therapy places</span><span className="font-semibold">~25%</span></li>
              <li className="flex justify-between"><span>Platform, travel & session delivery</span><span className="font-semibold">~25%</span></li>
              <li className="flex justify-between"><span>Academy & content creation (scale)</span><span className="font-semibold">~10%</span></li>
              <li className="flex justify-between"><span>Emergency reserves & farm sustainability</span><span className="font-semibold">~5%</span></li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">Percentages are guiding targets. Exact figures update with every real transaction.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-[#2d5016] mb-4">Recent Impact Highlights</h2>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>• 12 free or heavily subsidised sessions delivered last quarter for hardship & NDIS participants.</li>
              <li>• Veterinary and recovery support for pack dogs continuing without interruption.</li>
              <li>• First Digital Academy cohort enrolled — new practitioners will carry the work further.</li>
              <li>• Membership revenue now covers a stable portion of monthly dog care costs.</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">Updated periodically. Full transparency is the standard here.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Add Your Own Impact</h2>
          <p className="text-gray-600 mb-6">Book a session, join the Circle, enrol in the Academy or shop. Every action is visible on this dashboard over time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Book Session</Link>
            <Link to="/membership" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition">Join Membership</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Live Impact Dashboard · From true to tremendous</p>
      </footer>
    </div>
  );
}
