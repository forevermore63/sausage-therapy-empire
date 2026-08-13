import type { Route } from "./+types/community";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Circle Community • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Private online community for Sausage Circle members and friends of the pack. Live circles, resource library, member stories, accountability partners and giving challenges. Grow the dream together.",
    },
  ];
}

export default function Community() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/virtual" className="hover:text-[#c45c26]">Virtual</Link>
            <Link to="/journal" className="hover:text-[#c45c26]">Journal</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Empire Element</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sausage Circle Community</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            The private digital home for members and pack friends. Live weekly circles, resource vault, accountability buddies, monthly giving challenges and real-time impact updates. Belonging that compounds the mission.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
            <h2 className="text-2xl font-bold text-[#2d5016] mb-4">What You Get Inside</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Weekly live Zoom circles with Emily + the pack energy</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Private member forum & resource library (practices, scripts, NDIS templates)</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Accountability partners & “calm buddy” matching</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Monthly giving challenges with transparent impact reports</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Early access to farm days, boat sessions & new courses</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Member-only stories & celebration threads</li>
            </ul>
          </div>
          <div className="bg-[#fdf6e3] rounded-2xl p-8 border border-[#c45c26]/15">
            <h2 className="text-2xl font-bold text-[#c45c26] mb-4">How to Enter</h2>
            <p className="text-gray-700 mb-6">
              Active Sausage Circle members ($47/mo) receive instant access link after joining. Non-members can request guest access for one live circle or join the free waitlist for the next open house.
            </p>
            <div className="space-y-3">
              <Link to="/membership" className="block w-full text-center bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">
                Join Sausage Circle → Full Access
              </Link>
              <a href="mailto:emily@therapysausages.com?subject=Community%20Guest%20Access" className="block w-full text-center border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition">
                Request Guest Circle Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Community Makes the Dream Tremendous</h2>
          <p className="opacity-90 mb-6">
            Solo healing is powerful. Collective healing multiplies. When members share wins, support each other through hard days, and co-fund free sessions, the empire becomes self-reinforcing. This is the online hearth of Forevermore.
          </p>
          <Link to="/membership" className="inline-block bg-[#d4a017] text-[#1a1a1a] font-semibold px-8 py-3 rounded-full hover:bg-[#e0b030] transition">
            Become a Founding Circle Member
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link>
        <p className="mt-2">© {new Date().getFullYear()} Therapy Sausages · From true to tremendous</p>
      </footer>
    </div>
  );
}
