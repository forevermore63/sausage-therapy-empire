import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Aegis, Nomad, Summit and Ledger grow the dream from true to tremendous.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden lg:flex items-center gap-3 text-sm font-medium">
            <Link to="/aegis" className="hover:text-[#c45c26]">Aegis</Link>
            <Link to="/nomad" className="hover:text-[#c45c26]">Nomad</Link>
            <Link to="/summit" className="hover:text-[#c45c26]">Summit</Link>
            <Link to="/ledger" className="hover:text-[#c45c26]">Ledger</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e] pulse-glow">Book Now</Link>
          </nav>
          <Link to="/book" className="lg:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl opacity-90 mb-3">Real dachshund therapy • Gold Coast, Noosa & Forevermore Farm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Healing Hearts<br />with Every Wag
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Led by Emily Blue Richards. From true to tremendous: Aegis, Nomad, Summit and Ledger join Pulse, Vessel, Crown and Root.
            NDIS-friendly. Giving-first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </Link>
            <Link to="/aegis" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              True → Tremendous →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-b border-[#c45c26]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#c45c26] impact-counter">247+</p>
            <p className="text-sm text-gray-600 mt-1">Hearts Healed</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#2d5016] impact-counter">$18.4k</p>
            <p className="text-sm text-gray-600 mt-1">Given Back to Dogs</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#d4a017] impact-counter">62</p>
            <p className="text-sm text-gray-600 mt-1">NDIS Sessions</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#c45c26] impact-counter">∞</p>
            <p className="text-sm text-gray-600 mt-1">Wags Delivered</p>
          </div>
        </div>
        <p className="text-center mt-6">
          <Link to="/ledger" className="text-[#c45c26] font-semibold hover:underline">Open the live Ledger →</Link>
        </p>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New — 30 September 2026 Tremendous Surge</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            Four new online engines so the dream grows without you repeating yourself.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            <Link to="/aegis" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Aegis</h3>
              <p className="text-sm opacity-95 mb-4">Air-and-load shield for sensitive bodies. $39 membership.</p>
              <span className="font-semibold text-[#d4a017]">Raise the shield →</span>
            </Link>
            <Link to="/nomad" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-xl font-bold mb-2">Nomad</h3>
              <p className="text-sm opacity-95 mb-4">Wiener Coaster tour dates, seats and sponsored kilometres.</p>
              <span className="font-semibold text-[#d4a017]">Move the clinic →</span>
            </Link>
            <Link to="/summit" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">Summit</h3>
              <p className="text-sm opacity-95 mb-4">2027 industry gathering. Practitioner, org and stream tickets.</p>
              <span className="font-semibold text-[#d4a017]">Hold a seat →</span>
            </Link>
            <Link to="/ledger" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📒</div>
              <h3 className="text-xl font-bold mb-2">Ledger</h3>
              <p className="text-sm opacity-95 mb-4">Public money-in and given-back proof. Trust that converts.</p>
              <span className="font-semibold text-[#d4a017]">See the numbers →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#c45c26] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Still Compounding</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            Pulse · Vessel · Crown · Root · Kindling remain live.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/pulse" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <h3 className="text-xl font-bold mb-2">Pulse</h3>
              <p className="text-sm opacity-95">Weekly check-in.</p>
            </Link>
            <Link to="/vessel" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <h3 className="text-xl font-bold mb-2">Vessel</h3>
              <p className="text-sm opacity-95">Sponsor a kilometre.</p>
            </Link>
            <Link to="/crown" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <h3 className="text-xl font-bold mb-2">Crown</h3>
              <p className="text-sm opacity-95">2032 Olympic lane.</p>
            </Link>
            <Link to="/root" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <h3 className="text-xl font-bold mb-2">Root</h3>
              <p className="text-sm opacity-95">Land that holds the pack.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="sessions" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Sessions That Heal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Individual Healing</h3>
            <p className="text-3xl font-bold mb-2">From $150</p>
            <p className="text-gray-700 mb-4">45–60 min one-on-one or family with the pack. NDIS-friendly. Mobile Gold Coast / Noosa.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Book →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate & Groups</h3>
            <p className="text-3xl font-bold mb-2">From $450</p>
            <p className="text-gray-700 mb-4">Office visits, team days, private parties. Pack of miniature dachshunds included.</p>
            <Link to="/corporate" className="text-[#c45c26] font-semibold hover:underline">Corporate Hub →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">⛵</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">SNOUTSAIL Boat</h3>
            <p className="text-3xl font-bold mb-2">Enquire</p>
            <p className="text-gray-700 mb-4">Marina + hinterland combination for deeper healing and corporate standout.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#c45c26] font-semibold mb-2">🌿 Forevermore Farm</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">Hinterland Healing on the Land</h2>
            <p className="text-gray-700 mb-6">
              Day immersions, private retreats and corporate farm days with the full pack. Every farm experience funds land care, dog recovery and free places.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/farm" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition inline-block">
                Explore Farm →
              </Link>
              <Link to="/root" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition inline-block">
                Root the land →
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Day Immersion from $380</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Overnight Reset from $890</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Private 3-Day from $2,400</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Corporate Farm Day from $1,200</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Online Empire Live</h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto">
            Aegis · Nomad · Summit · Ledger plus Pulse, Vessel and 50+ conversion-ready pages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/aegis" className="bg-white text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fdf6e3] transition">
              Start with Aegis
            </Link>
            <Link to="/book" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-[#fdf6e3] border-t border-[#c45c26]/20 text-center text-sm text-gray-600">
        <p>Therapy Sausages · Forevermore Farm · Noosa Dachshunds · Emily Blue Richards</p>
        <p className="mt-2">Giving-first · NDIS-friendly · From true to tremendous</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link to="/aegis" className="hover:text-[#c45c26]">Aegis</Link>
          <Link to="/nomad" className="hover:text-[#c45c26]">Nomad</Link>
          <Link to="/summit" className="hover:text-[#c45c26]">Summit</Link>
          <Link to="/ledger" className="hover:text-[#c45c26]">Ledger</Link>
          <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
        </div>
      </footer>
    </div>
  );
}
