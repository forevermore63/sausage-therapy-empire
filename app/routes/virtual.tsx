import type { Route } from "./+types/virtual";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Virtual Pack Sessions • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Live online dachshund therapy circles, recorded calming sessions and virtual pack experiences. Reach the healing wags from anywhere in the world. NDIS-friendly options.",
    },
  ];
}

export default function Virtual() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/events" className="hover:text-[#c45c26]">Events</Link>
            <Link to="/virtual" className="text-[#c45c26] font-semibold">Virtual</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Online · Worldwide</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Virtual Pack Sessions</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            The sausages come to you. Live Zoom circles, recorded calming practices and guided pack energy so the healing never stops at geography.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Live Virtual Circle</h3>
            <p className="text-3xl font-bold mb-2">$47</p>
            <p className="text-gray-700 mb-4">60-minute live Zoom with Emily + the pack energy. Nervous-system reset, gentle guidance and community. Free for Sausage Circle members.</p>
            <Link to="/events" className="text-[#c45c26] font-semibold hover:underline">See next date →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">On-Demand Calm Pack</h3>
            <p className="text-3xl font-bold mb-2">$27</p>
            <p className="text-gray-700 mb-4">Lifetime pack of guided practices + sausage presence recordings. Use anytime stress spikes. Instant access after purchase.</p>
            <Link to="/shop" className="text-[#c45c26] font-semibold hover:underline">Get the Pack →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Private Virtual Session</h3>
            <p className="text-3xl font-bold mb-2">From $120</p>
            <p className="text-gray-700 mb-4">One-on-one or family Zoom with Emily. Ideal for NDIS participants, remote clients or those preparing for an in-person visit.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Book Private →</Link>
          </div>
        </div>

        <div className="mt-14 bg-[#2d5016] text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Virtual Works</h2>
          <ul className="space-y-3 text-lg opacity-95">
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Real presence travels through the screen when the intention is clean</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Perfect bridge for NDIS clients between in-person sessions</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Members get every live circle free + early access to new recordings</li>
            <li className="flex gap-3"><span className="text-[#d4a017]">✓</span> Portion of every virtual booking still funds free places and dog care</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/membership" className="bg-[#d4a017] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:bg-[#c4920f] transition text-center">
              Join Sausage Circle (free live circles)
            </Link>
            <Link to="/book" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition text-center">
              Book Private Virtual
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-80">
        <p>🐾 Therapy Sausages · Virtual healing available worldwide · <Link to="/" className="hover:text-[#d4a017]">Home</Link></p>
      </footer>
    </div>
  );
}
