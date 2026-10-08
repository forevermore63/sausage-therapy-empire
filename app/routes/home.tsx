import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa and beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Wick, Orchard, Spool and Vale grow the dream from true to tremendous.",
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
            <Link to="/wick" className="hover:text-[#c45c26]">Wick</Link>
            <Link to="/orchard" className="hover:text-[#c45c26]">Orchard</Link>
            <Link to="/spool" className="hover:text-[#c45c26]">Spool</Link>
            <Link to="/vale" className="hover:text-[#c45c26]">Vale</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e] pulse-glow">Book Now</Link>
          </nav>
          <Link to="/book" className="lg:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl opacity-90 mb-3">Real dachshund therapy • Gold Coast, Noosa & Forevermore Farm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Healing Hearts<br />with Every Wag</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Led by Emily Blue Richards. From true to tremendous: Wick, Orchard, Spool and Vale join the live empire.
            NDIS-friendly. Giving-first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">Book a Session</Link>
            <Link to="/wick" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">True → Tremendous →</Link>
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

      <section className="py-16 px-4 bg-[#1a120c] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New — 9 October 2026 True to Tremendous</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">Four new online engines. A $9 spark, seasonal days, posts already written, and a fortnight for loss.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/wick" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">🕯️</div>
              <h3 className="text-xl font-bold mb-2">Wick</h3>
              <p className="text-sm opacity-95 mb-4">90-second spark. $9. $2 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Light it →</span>
            </Link>
            <Link to="/orchard" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">🍂</div>
              <h3 className="text-xl font-bold mb-2">Orchard</h3>
              <p className="text-sm opacity-95 mb-4">Farm and coffee van days. From $40.</p>
              <span className="font-semibold text-[#d4a017]">Hold a day →</span>
            </Link>
            <Link to="/spool" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">🧵</div>
              <h3 className="text-xl font-bold mb-2">Spool</h3>
              <p className="text-sm opacity-95 mb-4">This week's posts, ready to copy.</p>
              <span className="font-semibold text-[#d4a017]">Unspool →</span>
            </Link>
            <Link to="/vale" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold mb-2">Vale</h3>
              <p className="text-sm opacity-95 mb-4">14 days after loss. $47.</p>
              <span className="font-semibold text-[#d4a017]">Open the fortnight →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Still live — 5 October</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">Screen sessions, workplace retainers, morning rituals, and gifts that keep giving.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/meridian" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="text-xl font-bold mb-2">Meridian</h3>
              <p className="text-sm opacity-95 mb-4">Screen-side pack visit. From $89.</p>
              <span className="font-semibold text-[#d4a017]">Hold a seat →</span>
            </Link>
            <Link to="/charter" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-xl font-bold mb-2">Charter</h3>
              <p className="text-sm opacity-95 mb-4">Annual workplace retainer. From $4,800.</p>
              <span className="font-semibold text-[#d4a017]">Open a Charter →</span>
            </Link>
            <Link to="/dawn" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🌅</div>
              <h3 className="text-xl font-bold mb-2">Dawn</h3>
              <p className="text-sm opacity-95 mb-4">Three-minute morning ritual. $19 a month.</p>
              <span className="font-semibold text-[#d4a017]">Start tomorrow →</span>
            </Link>
            <Link to="/ribbon" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🎀</div>
              <h3 className="text-xl font-bold mb-2">Ribbon</h3>
              <p className="text-sm opacity-95 mb-4">Monthly gift of the pack. From $29.</p>
              <span className="font-semibold text-[#d4a017]">Tie a Ribbon →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1c140c] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">6 October layer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/nightwatch" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Night Watch</h3>
              <p className="text-sm opacity-95">Late screen settling. $39, or $59 a month.</p>
            </Link>
            <Link to="/dispatch" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Dispatch</h3>
              <p className="text-sm opacity-95">Wiener Coaster and coffee van, one request.</p>
            </Link>
            <Link to="/olympiad" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Olympiad Desk</h3>
              <p className="text-sm opacity-95">2032 hospitality and legacy interest.</p>
            </Link>
            <Link to="/aftercare" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Aftercare</h3>
              <p className="text-sm opacity-95">7-day protocol. $37.</p>
            </Link>
            <Link to="/patron" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Patron Circle</h3>
              <p className="text-sm opacity-95">$11, $33 or $88 a month.</p>
            </Link>
            <Link to="/relay" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Relay</h3>
              <p className="text-sm opacity-95">Three questions. The right door.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="sessions" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Sessions That Heal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Individual Healing</h3>
            <p className="text-3xl font-bold mb-2">From $150</p>
            <p className="text-gray-700 mb-4">45–60 min with the pack. NDIS-friendly where a qualified practitioner and plan allow. Mobile Gold Coast / Noosa.</p>
            <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Book →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate & Groups</h3>
            <p className="text-3xl font-bold mb-2">From $450</p>
            <p className="text-gray-700 mb-4">Office visits and team days. Annual path is Charter.</p>
            <Link to="/charter" className="text-[#c45c26] font-semibold hover:underline">Charter →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Meridian Screen</h3>
            <p className="text-3xl font-bold mb-2">From $89</p>
            <p className="text-gray-700 mb-4">Live pack on screen when travel is not possible this week.</p>
            <Link to="/meridian" className="text-[#c45c26] font-semibold hover:underline">Hold a seat →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#c45c26] font-semibold mb-2">Forevermore Farm</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-4">Hinterland Healing on the Land</h2>
            <p className="text-gray-700 mb-6">Day immersions, private retreats and Orchard bookings. Every farm day funds land care, dog recovery and free places.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/farm" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition inline-block">Explore Farm →</Link>
              <Link to="/orchard" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full inline-block">Hold an Orchard day →</Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
            <ul className="space-y-3 text-gray-700">
              <li>Cup and Wag deposit $40</li>
              <li>Harvest Hour $180</li>
              <li>Orchard Day $380</li>
              <li>Corporate Farm Day from $1,200</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-[#fdf6e3] border-t border-[#c45c26]/20 text-center text-sm text-gray-600">
        <p>Therapy Sausages · Forevermore Farm · Noosa Dachshunds · Emily Blue Richards</p>
        <p className="mt-2">Giving-first · NDIS-friendly where the plan and practitioner allow · From true to tremendous</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link to="/wick" className="hover:text-[#c45c26]">Wick</Link>
          <Link to="/orchard" className="hover:text-[#c45c26]">Orchard</Link>
          <Link to="/spool" className="hover:text-[#c45c26]">Spool</Link>
          <Link to="/vale" className="hover:text-[#c45c26]">Vale</Link>
          <Link to="/meridian" className="hover:text-[#c45c26]">Meridian</Link>
          <Link to="/ledger" className="hover:text-[#c45c26]">Ledger</Link>
        </div>
      </footer>
    </div>
  );
}
