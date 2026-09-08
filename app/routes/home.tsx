import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Book sessions, Bloom Engine, Dream Seed Fund, Opportunity Radar, Dream Growth Map, Perpetual Flame Engine, Empire Live Command and more.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden lg:flex items-center gap-3 text-sm font-medium">
            <Link to="/bloom" className="hover:text-[#c45c26]">Bloom</Link>
            <Link to="/seed" className="hover:text-[#c45c26]">Seed</Link>
            <Link to="/radar" className="hover:text-[#c45c26]">Radar</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e] pulse-glow">Book Now</Link>
          </nav>
          <Link to="/book" className="lg:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl opacity-90 mb-3">Real dachshund therapy • Gold Coast, Noosa & Forevermore Farm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Healing Hearts<br />with Every Wag
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Led by Emily Blue Richards. From true to tremendous: Bloom Engine, Dream Seed Fund, Opportunity Radar, Dream Growth Map, Perpetual Flame Engine, Empire Live Command & more.
            NDIS-friendly. Giving-first — every booking and purchase supports dog welfare and free therapy access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </Link>
            <Link to="/bloom" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              True → Tremendous →
            </Link>
          </div>
        </div>
      </section>

      {/* Live Impact Teaser */}
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
          <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">See full live Impact Dashboard →</Link>
        </p>
      </section>

      {/* Newest Online Elements - 9 September 2026 Tremendous Surge */}
      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New Online Elements — 9 September 2026 Surge</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            From true to tremendous. Three high-leverage engines just launched: Bloom Engine, Dream Seed Fund, and Opportunity Radar. One action compounds into revenue, impact and free places.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/bloom" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🌸</div>
              <h3 className="text-xl font-bold mb-2">Bloom Engine</h3>
              <p className="text-sm opacity-95 mb-4">Turn one protected action into exponential revenue + impact. Interactive multiplier that closes the intention-to-system gap.</p>
              <span className="font-semibold text-[#d4a017]">Activate Bloom →</span>
            </Link>
            <Link to="/seed" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2">Dream Seed Fund</h3>
              <p className="text-sm opacity-95 mb-4">Micro-support with matching. $17–$297 seeds unlock free places, dog recovery and Forevermore Farm care.</p>
              <span className="font-semibold text-[#d4a017]">Plant a Seed →</span>
            </Link>
            <Link to="/radar" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="text-xl font-bold mb-2">Opportunity Radar</h3>
              <p className="text-sm opacity-95 mb-4">Live scored list of the single highest-leverage next moves. Always know exactly what to do next.</p>
              <span className="font-semibold text-[#d4a017]">Open Radar →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous - 8 September 2026 Tremendous Surge */}
      <section className="py-16 px-4 bg-[#c45c26] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Still Compounding — 8 September 2026 Surge</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            Dream Growth Map, Perpetual Flame Engine and Empire Live Command remain core engines.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/dream" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold mb-2">Dream Growth Map</h3>
              <p className="text-sm opacity-95 mb-4">Interactive journey from felt truth to executed tremendous plan.</p>
              <span className="font-semibold text-[#d4a017]">Open Map →</span>
            </Link>
            <Link to="/flame" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-bold mb-2">Perpetual Flame Engine</h3>
              <p className="text-sm opacity-95 mb-4">Daily consciousness-to-cash converter. Light the flame, receive the highest-leverage move.</p>
              <span className="font-semibold text-[#d4a017]">Light the Flame →</span>
            </Link>
            <Link to="/live-empire" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">Empire Live Command</h3>
              <p className="text-sm opacity-95 mb-4">Real-time multi-stream dashboard. Proof the dream is compounding.</p>
              <span className="font-semibold text-[#d4a017]">Open Command →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous - 6 September */}
      <section className="py-12 px-4 bg-[#d4a017]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Still Live — 6 & 31 August Engines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/upsurge" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-[#c45c26]">Upsurge Tracker</h3>
              <p className="text-sm text-gray-600">Personal living scoreboard</p>
            </Link>
            <Link to="/passive" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-[#c45c26]">Passive Income Engines</h3>
              <p className="text-sm text-gray-600">Sell while you sleep</p>
            </Link>
            <Link to="/hours" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">⏳</div>
              <h3 className="font-bold text-[#c45c26]">Sausage Hours</h3>
              <p className="text-sm text-gray-600">Protect pure presence</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="sessions" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Sessions That Heal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Individual Healing</h3>
            <p className="text-3xl font-bold mb-2">From $150</p>
            <p className="text-gray-700 mb-4">45–60 min one-on-one or family with the pack. Ideal for individuals, NDIS participants & families. Mobile across Gold Coast / Noosa.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Book →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate & Groups</h3>
            <p className="text-3xl font-bold mb-2">From $450</p>
            <p className="text-gray-700 mb-4">Office visits, team days, private parties. Stress reduction that actually works. Pack of miniature dachshunds included.</p>
            <Link to="/corporate" className="text-[#c45c26] font-semibold hover:underline">Corporate Hub →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">⛵</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">SNOUTSAIL Boat</h3>
            <p className="text-3xl font-bold mb-2">Enquire</p>
            <p className="text-gray-700 mb-4">Unique marina + hinterland combination for deeper healing and corporate standout. Available when conditions allow.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
          </div>
        </div>
      </section>

      {/* Farm Highlight */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#c45c26] font-semibold mb-2">🌿 Forevermore Farm</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">Hinterland Healing on the Land</h2>
            <p className="text-gray-700 mb-6">
              Day immersions, private retreats and corporate farm days with the full pack. Nature + sausages = nervous-system reset that lasts. Every farm experience funds land care, dog recovery and free places.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/farm" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition inline-block">
                Explore Farm →
              </Link>
              <Link to="/retreat" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition inline-block">
                View Retreats →
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

      {/* Full Online Empire teaser */}
      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Online Empire Live</h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto">
            Bloom Engine · Dream Seed Fund · Opportunity Radar · Dream Growth Map · Perpetual Flame · Live Command · Upsurge Tracker · Healing Circles · Digital Vault · Sausage Hours · Passive Engines · Impact Dashboard · and 50+ more conversion-ready pages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bloom" className="bg-white text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fdf6e3] transition">
              Start with Bloom
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
          <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
          <Link to="/bloom" className="hover:text-[#c45c26]">Bloom</Link>
          <Link to="/seed" className="hover:text-[#c45c26]">Seed Fund</Link>
          <Link to="/radar" className="hover:text-[#c45c26]">Radar</Link>
          <Link to="/live-empire" className="hover:text-[#c45c26]">Live Command</Link>
        </div>
      </footer>
    </div>
  );
}
