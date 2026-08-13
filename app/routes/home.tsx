import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Book sessions, Virtual Pack, Events, Digital Academy, memberships, Forevermore Farm, Journal, Give & Grow, Community Circle, 2032 Olympic Legacy and track impact.",
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
            <Link to="/virtual" className="hover:text-[#c45c26]">Virtual</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/community" className="hover:text-[#c45c26]">Community</Link>
            <Link to="/legacy" className="hover:text-[#c45c26]">Legacy</Link>
            <Link to="/give" className="hover:text-[#c45c26]">Give</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
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
            Led by Emily Blue Richards. Individual sessions, corporate events, SNOUTSAIL boat experiences, Forevermore Farm immersions, Virtual Pack Sessions, Digital Academy, Sausage Circle Community & 2032 Olympic Legacy. 
            NDIS-friendly. Giving-first — every booking and purchase supports dog welfare and free therapy access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </Link>
            <Link to="/community" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Enter Community
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
            <Link to="/farm" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition inline-block">
              Explore Farm Experiences →
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Day Immersion from $380</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Private Retreat (enquire)</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> Corporate Farm Day from $1,200</li>
              <li className="flex gap-3"><span className="text-[#c45c26] font-bold">✓</span> NDIS & hardship places available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Online Empire Elements */}
      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">New Online Empire Elements</h2>
          <p className="text-center opacity-90 mb-12 max-w-2xl mx-auto">
            The dream grows from true to tremendous. Fresh Community Circle and 2032 Olympic Legacy portals now live alongside Events, Virtual, Journal, Give, Academy, Memberships, Shop and Stories.
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
          <p className="text-gray-600 mb-8">Book a real session, come to the Farm, join Virtual, or start online today. Emily replies personally.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">Book Session</Link>
            <Link to="/membership" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5 transition">Join Membership</Link>
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
            <Link to="/events" className="hover:text-[#d4a017]">Events</Link>
            <Link to="/farm" className="hover:text-[#d4a017]">Farm</Link>
            <Link to="/virtual" className="hover:text-[#d4a017]">Virtual</Link>
            <Link to="/academy" className="hover:text-[#d4a017]">Academy</Link>
            <Link to="/membership" className="hover:text-[#d4a017]">Membership</Link>
            <Link to="/community" className="hover:text-[#d4a017]">Community</Link>
            <Link to="/legacy" className="hover:text-[#d4a017]">Legacy</Link>
            <Link to="/journal" className="hover:text-[#d4a017]">Journal</Link>
            <Link to="/give" className="hover:text-[#d4a017]">Give</Link>
            <Link to="/stories" className="hover:text-[#d4a017]">Stories</Link>
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
