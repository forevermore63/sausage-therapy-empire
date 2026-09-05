import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Book sessions, True→Tremendous Tracker, Passive Engines, Sausage Hours, Impact Sponsorship, Corporate Wellness, Live Practitioner Cohorts and track impact.",
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
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tremendous</Link>
            <Link to="/passive" className="hover:text-[#c45c26]">Passive</Link>
            <Link to="/hours" className="hover:text-[#c45c26]">Hours</Link>
            <Link to="/sponsor" className="hover:text-[#c45c26]">Sponsor</Link>
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
            Led by Emily Blue Richards. From true to tremendous: True→Tremendous Tracker, Passive Income Engines, Sausage Hours, Impact Sponsorship, Corporate Wellness, Practitioner Cohorts, Mastermind, Memberships & more.
            NDIS-friendly. Giving-first — every booking and purchase supports dog welfare and free therapy access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </Link>
            <Link to="/tremendous" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
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

      {/* Newest Online Elements - 6 September 2026 Tremendous Surge */}
      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New Online Elements — 6 September 2026 Surge</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            From true to tremendous. Three high-leverage engines just launched: personal Upsurge Tracker, Sausage Healing Circles, and the Healing Digital Vault. Revenue + presence + scale in one move.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/upsurge" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">True → Tremendous Upsurge Tracker</h3>
              <p className="text-sm opacity-95 mb-4">Personal living scoreboard. Track presence streaks, sessions, hours, giving and referrals. Turn intention into measurable momentum.</p>
              <span className="font-semibold text-[#d4a017]">Open Tracker →</span>
            </Link>
            <Link to="/circles" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="text-xl font-bold mb-2">Sausage Healing Circles</h3>
              <p className="text-sm opacity-95 mb-4">Small high-trust monthly circles + optional farm days. Open $97/mo · Founders $297/mo. Presence compounds when we gather.</p>
              <span className="font-semibold text-[#d4a017]">Join a Circle →</span>
            </Link>
            <Link to="/vault" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🗄️</div>
              <h3 className="text-xl font-bold mb-2">Healing Digital Vault</h3>
              <p className="text-sm opacity-95 mb-4">Instant digital products, protocols, audio & kits from $37–$247. Passive revenue that funds free places while you rest.</p>
              <span className="font-semibold text-[#d4a017]">Browse Vault →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous Newest - 31 August 2026 Tremendous Surge */}
      <section className="py-16 px-4 bg-[#c45c26] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Previous Surge — 31 August 2026</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            From true to tremendous. Three powerful engines: the living growth scoreboard, the complete passive income command centre, and Sausage Hours — protected time for pure presence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tremendous" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2">True → Tremendous Tracker</h3>
              <p className="text-sm opacity-95 mb-4">Live empire scoreboard, growth levers and exact next-action checklist that turns the dream measurable and executable.</p>
              <span className="font-semibold text-[#d4a017]">Open Tracker →</span>
            </Link>
            <Link to="/passive" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Passive Income Engines</h3>
              <p className="text-sm opacity-95 mb-4">One-page command centre for every digital product, membership and recurring stream. Sell while you sleep. Fund free places while you rest.</p>
              <span className="font-semibold text-[#d4a017]">View Engines →</span>
            </Link>
            <Link to="/hours" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">⏳</div>
              <h3 className="text-xl font-bold mb-2">Sausage Hours</h3>
              <p className="text-sm opacity-95 mb-4">Protect an hour of pure presence. Gift or claim protected time. Presence over extraction. Corporate blocks and sponsored hours available.</p>
              <span className="font-semibold text-[#d4a017]">Protect an Hour →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous Tremendous - August 27 */}
      <section className="py-12 px-4 bg-[#d4a017]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Still Live — 27 August Tremendous Engines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/sponsor" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">💛</div>
              <h3 className="font-bold text-[#c45c26]">Impact Sponsorship</h3>
              <p className="text-sm text-gray-600">Fund free NDIS sessions, dog recoveries & farm days</p>
            </Link>
            <Link to="/corporate" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-bold text-[#c45c26]">Corporate Wellness Hub</h3>
              <p className="text-sm text-gray-600">Office packs from $450 · Farm days from $1,200</p>
            </Link>
            <Link to="/cohort" className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-bold text-[#c45c26]">Live Practitioner Cohorts</h3>
              <p className="text-sm text-gray-600">8-week training from $1,497 → Directory pathway</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous Surge - August 26 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Also Live — August 26 Surge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/mastermind" className="bg-[#fdf6e3] rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-bold text-[#c45c26]">Forevermore Mastermind</h3>
              <p className="text-sm text-gray-600">High-ticket 6-month circle from $2,997</p>
            </Link>
            <Link to="/subscribe" className="bg-[#fdf6e3] rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-[#c45c26]">Monthly Healing Packs</h3>
              <p className="text-sm text-gray-600">Recurring $29 / $67 / $97 tiers</p>
            </Link>
            <Link to="/directory" className="bg-[#fdf6e3] rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🗺️</div>
              <h3 className="font-bold text-[#c45c26]">Certified Directory</h3>
              <p className="text-sm text-gray-600">Verified practitioners & partners</p>
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
            Upsurge Tracker · Healing Circles · Digital Vault · Sausage Hours · Passive Engines · Impact Dashboard · NDIS Navigator · Farm · Memberships · Academy · and 50+ more conversion-ready pages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upsurge" className="bg-white text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fdf6e3] transition">
              Start Your Upsurge
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
          <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
          <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
          <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
          <Link to="/command" className="hover:text-[#c45c26]">Command Center</Link>
        </div>
      </footer>
    </div>
  );
}
