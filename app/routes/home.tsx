import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Book sessions, Virtual Pack, Events, Digital Academy, memberships, Forevermore Farm, Therapy Match, Pack Live, Sausage Surge Challenge, Partners Portal, Sausage AI Companion, Farm Retreats, Gift Sessions, Practitioner Certification, Ambassador Program, Custom Pack Builder, Franchise & Licensing, Healing Audio Vault, Live Pack Cam and track impact.",
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
            <a href="#sessions" className="hover:text-[#c45c26]">Sessions</a>
            <Link to="/events" className="hover:text-[#c45c26]">Events</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/franchise" className="hover:text-[#c45c26]">Franchise</Link>
            <Link to="/audio" className="hover:text-[#c45c26]">Audio Vault</Link>
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
            Led by Emily Blue Richards. Individual sessions, corporate events, Forevermore Farm immersions, Virtual Pack, AI Companion, high-ticket Retreats, Certification, Franchise & Licensing, Healing Audio Vault & Live Pack Cam.
            NDIS-friendly. Giving-first — every booking and purchase supports dog welfare and free therapy access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </Link>
            <Link to="/franchise" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Explore Franchise
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
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</Link>
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

      {/* Newest Online Elements - August 23 Tremendous Surge */}
      <section className="py-16 px-4 bg-[#c45c26] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New Online Elements — August 23 Surge</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">
            From true to tremendous. Three powerful new engines just launched: Franchise & Licensing to scale the method, Healing Audio Vault for pure digital leverage, and Live Pack Cam for daily presence and conversion.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/franchise" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-xl font-bold mb-2">Franchise & Licensing</h3>
              <p className="text-sm opacity-95 mb-4">Licensed Practitioner from $4,997 and Farm Partner from $12,997. Complete systems, branding rights and royalties that fund free places.</p>
              <span className="font-semibold text-[#d4a017]">Explore Licences →</span>
            </Link>
            <Link to="/audio" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🎧</div>
              <h3 className="text-xl font-bold mb-2">Healing Audio Vault</h3>
              <p className="text-sm opacity-95 mb-4">Guided calm tracks, farm immersions, NDIS series and lifetime vault. Instant digital delivery. Pure leverage that compounds.</p>
              <span className="font-semibold text-[#d4a017]">Enter the Vault →</span>
            </Link>
            <Link to="/cam" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🎥</div>
              <h3 className="text-xl font-bold mb-2">Live Pack Cam</h3>
              <p className="text-sm opacity-95 mb-4">Real-time windows into the pack. Free public moments + exclusive member streams that convert into bookings and memberships.</p>
              <span className="font-semibold text-[#d4a017]">View Cam Status →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous New Elements */}
      <section className="py-12 px-4 bg-[#d4a017]/15">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Also Live & Growing</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/certify" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🎓</div>
              <h3 className="font-bold text-[#c45c26] text-sm">Certification</h3>
            </Link>
            <Link to="/ambassador" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🚀</div>
              <h3 className="font-bold text-[#c45c26] text-sm">Ambassador</h3>
            </Link>
            <Link to="/packbuilder" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🧩</div>
              <h3 className="font-bold text-[#c45c26] text-sm">Pack Builder</h3>
            </Link>
            <Link to="/ai" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🤖</div>
              <h3 className="font-bold text-[#c45c26] text-sm">AI Companion</h3>
            </Link>
            <Link to="/retreat" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🏕️</div>
              <h3 className="font-bold text-[#c45c26] text-sm">Farm Retreats</h3>
            </Link>
            <Link to="/gift" className="bg-white rounded-2xl p-4 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition text-center">
              <div className="text-2xl mb-1">🎁</div>
              <h3 className="font-bold text-[#c45c26] text-sm">Gift a Session</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* New Online Empire Elements */}
      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Full Online Empire</h2>
          <p className="text-center opacity-90 mb-12 max-w-2xl mx-auto">
            Community, Legacy, Events, Virtual, Academy, Membership, Journal, Shop and more — all live and conversion-ready.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/community" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Sausage Circle Community</h3>
              <p className="text-sm opacity-90 mb-4">Private digital hearth: live circles, resource vault, accountability partners & monthly giving challenges.</p>
              <span className="font-semibold text-[#d4a017]">Enter Community →</span>
            </Link>
            <Link to="/legacy" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">🏅</div>
              <h3 className="text-xl font-bold mb-2">2032 Olympic Legacy</h3>
              <p className="text-sm opacity-90 mb-4">Grants, supplier pathways, corporate partnerships and measurable wellness infrastructure for Brisbane 2032.</p>
              <span className="font-semibold text-[#d4a017]">Explore Legacy →</span>
            </Link>
            <Link to="/events" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-xl font-bold mb-2">Events Calendar</h3>
              <p className="text-sm opacity-90 mb-4">Live dates for farm days, corporate packs, virtual circles and SNOUTSAIL. Book or enquire directly.</p>
              <span className="font-semibold text-[#d4a017]">See Events →</span>
            </Link>
            <Link to="/virtual" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Virtual Pack</h3>
              <p className="text-sm opacity-90 mb-4">Live Zoom circles, on-demand calm packs and private virtual sessions. Healing without geography.</p>
              <span className="font-semibold text-[#d4a017]">Enter Virtual →</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Link to="/academy" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-2">Digital Academy</h3>
              <p className="text-sm opacity-90 mb-4">Courses on animal-assisted therapy & building therapy dog businesses. Certificates + community.</p>
              <span className="font-semibold text-[#d4a017]">Enter Academy →</span>
            </Link>
            <Link to="/membership" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold mb-2">Sausage Circle</h3>
              <p className="text-sm opacity-90 mb-4">$47/month practices, live Q&As, priority booking & impact reports. Recurring fuel for the mission.</p>
              <span className="font-semibold text-[#d4a017]">Join the Circle →</span>
            </Link>
            <Link to="/journal" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold mb-2">Healing Journal</h3>
              <p className="text-sm opacity-90 mb-4">Practices, science & soul notes, NDIS access insights and empire updates that convert.</p>
              <span className="font-semibold text-[#d4a017]">Read Journal →</span>
            </Link>
            <Link to="/shop" className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition border border-white/20">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold mb-2">Wiener Coaster Shop</h3>
              <p className="text-sm opacity-90 mb-4">Digital guides, audio packs, apparel & gifts. Every purchase funds free places.</p>
              <span className="font-semibold text-[#d4a017]">Shop Now →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d5016] mb-4">Free Gift: 7-Day Dachshund Calm Challenge</h2>
        <p className="text-gray-600 mb-6">Daily short practices + sausage wisdom to settle your nervous system. Instant PDF + audio intro. Join 1,200+ on the waitlist.</p>
        <form action="mailto:emily@therapysausages.com?subject=Free%207-Day%20Calm%20Challenge" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" name="email" required placeholder="Your best email" className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
          <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Send Me the Free Challenge</button>
        </form>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d5016] mb-2">Ready to Feel the Wags?</h2>
          <p className="text-gray-600 mb-8">Book a real session, explore Franchise, enter the Audio Vault, or join the Live Pack Cam waitlist today. Emily replies personally.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">Book Session</Link>
            <Link to="/franchise" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">Explore Franchise</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-lg">🐾 Therapy Sausages</p>
            <p className="text-sm opacity-70">Led by Emily Blue Richards · Gold Coast & Noosa · Forevermore Farm</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm justify-center">
            <Link to="/franchise" className="hover:text-[#d4a017]">Franchise</Link>
            <Link to="/audio" className="hover:text-[#d4a017]">Audio Vault</Link>
            <Link to="/cam" className="hover:text-[#d4a017]">Live Cam</Link>
            <Link to="/certify" className="hover:text-[#d4a017]">Certification</Link>
            <Link to="/ambassador" className="hover:text-[#d4a017]">Ambassador</Link>
            <Link to="/packbuilder" className="hover:text-[#d4a017]">Pack Builder</Link>
            <Link to="/ai" className="hover:text-[#d4a017]">AI Companion</Link>
            <Link to="/retreat" className="hover:text-[#d4a017]">Retreats</Link>
            <Link to="/farm" className="hover:text-[#d4a017]">Farm</Link>
            <Link to="/membership" className="hover:text-[#d4a017]">Membership</Link>
            <Link to="/impact" className="hover:text-[#d4a017]">Impact</Link>
            <Link to="/shop" className="hover:text-[#d4a017]">Shop</Link>
            <a href="https://www.instagram.com/sausage_therapy/" target="_blank" rel="noreferrer" className="hover:text-[#d4a017]">Instagram</a>
            <a href="https://x.com/TherapySausages" target="_blank" rel="noreferrer" className="hover:text-[#d4a017]">X</a>
            <a href="mailto:emily@therapysausages.com" className="hover:text-[#d4a017]">Email</a>
          </div>
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Therapy Sausages · Giving-first healing empire · From true to tremendous</p>
        </div>
      </footer>
    </div>
  );
}
