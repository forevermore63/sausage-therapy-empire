import type { Route } from "./+types/tide";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Tide — Weekly Demand Pulse | Therapy Sausages" },
    {
      name: "description",
      content:
        "Ride the weekly tide of bookings, gifts, NDIS enquiries and Dream Seed Fund pledges. One pulse that turns true into tremendous.",
    },
  ];
}

export default function Tide() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tremendous</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 16 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sausage Tide</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">
            One weekly pulse. Bookings, gifts, NDIS, corporate hours and Dream Seed pledges in a single current.
            You do not chase demand. You ride it.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Join%20Sausage%20Tide" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3]">
            Ride this week’s tide
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">What moves in the tide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Session swell</h3>
            <p className="text-gray-700">Open 1:1, family and NDIS hours for Gold Coast, Noosa and farm days. First-in holds the slot.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Gift current</h3>
            <p className="text-gray-700">Sausage Hours and Kinship circles bought as gifts. Presence given instead of stuff.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Seed undertow</h3>
            <p className="text-gray-700">Micro-pledges that fund free places. Every paid tide pulls a free one behind it.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">True becomes tremendous when demand is rhythmic</h2>
          <p className="opacity-90 mb-8">Email the week you want. We send one tide note. No noise. Just the next right booking.</p>
          <Link to="/hours" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full">Protect an hour first →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Sausage Tide · Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Empire Home</Link></p>
      </footer>
    </div>
  );
}
