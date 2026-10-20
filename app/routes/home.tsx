import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa and beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Zenith, Spectrum, Echo, Whisper, Rhythm and Gather grow the dream from true to tremendous.",
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
            <Link to="/zenith" className="hover:text-[#c45c26]">Zenith</Link>
            <Link to="/spectrum" className="hover:text-[#c45c26]">Spectrum</Link>
            <Link to="/echo" className="hover:text-[#c45c26]">Echo</Link>
            <Link to="/whisper" className="hover:text-[#c45c26]">Whisper</Link>
            <Link to="/rhythm" className="hover:text-[#c45c26]">Rhythm</Link>
            <Link to="/gather" className="hover:text-[#c45c26]">Gather</Link>
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
            Led by Emily Blue Richards. From true to tremendous: Zenith, Spectrum, Echo, Whisper, Rhythm and Gather join the live empire.
            NDIS-friendly. Giving-first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">Book a Session</Link>
            <Link to="/zenith" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">True → Tremendous →</Link>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Brand New — 21 October 2026 True to Tremendous</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">Two new online engines. Peak presence circle and instant pathway assessment. Giving-first. From true to tremendous.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/zenith" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">⬆️</div>
              <h3 className="text-xl font-bold mb-2">Zenith</h3>
              <p className="text-sm opacity-95 mb-4">Peak presence coaching circle. $97/month. $25 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Enter Zenith →</span>
            </Link>
            <Link to="/spectrum" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <div className="text-4xl mb-3">🌈</div>
              <h3 className="text-xl font-bold mb-2">Spectrum</h3>
              <p className="text-sm opacity-95 mb-4">Instant healing pathway assessment. Free to start. Converts to the right engine.</p>
              <span className="font-semibold text-[#d4a017]">Take Spectrum →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Live layer — 15 October</h2>
          <p className="text-center opacity-95 mb-12 max-w-2xl mx-auto">Echo, Whisper, Rhythm and Gather remain the daily-to-monthly engines.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/echo" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🔊</div>
              <h3 className="text-xl font-bold mb-2">Echo</h3>
              <p className="text-sm opacity-95 mb-4">Daily pack note. $24/month. $6 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Begin the echo →</span>
            </Link>
            <Link to="/whisper" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold mb-2">Whisper</h3>
              <p className="text-sm opacity-95 mb-4">Daily soft note. $19/month. $5 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Start the whisper →</span>
            </Link>
            <Link to="/rhythm" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-xl font-bold mb-2">Rhythm</h3>
              <p className="text-sm opacity-95 mb-4">Weekly cycle. $57. $14 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Begin the rhythm →</span>
            </Link>
            <Link to="/gather" className="bg-white/15 rounded-2xl p-6 hover:bg-white/25 transition border border-white/30">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Gather</h3>
              <p className="text-sm opacity-95 mb-4">Monthly circle. $77. $18 to the dogs.</p>
              <span className="font-semibold text-[#d4a017]">Hold a seat →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1c140c] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Still live — earlier layers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/radiance" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Radiance</h3>
              <p className="text-sm opacity-95">Daily morning pack light. $29/month.</p>
            </Link>
            <Link to="/solace" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Solace</h3>
              <p className="text-sm opacity-95">Instant protected calm. $37.</p>
            </Link>
            <Link to="/kindle" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Kindle</h3>
              <p className="text-sm opacity-95">7-day digital immersion. $97.</p>
            </Link>
            <Link to="/aurora" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Aurora</h3>
              <p className="text-sm opacity-95">Full day pack rhythm. $39/month.</p>
            </Link>
            <Link to="/haven" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Haven</h3>
              <p className="text-sm opacity-95">Protected presence. $57.</p>
            </Link>
            <Link to="/catalyst" className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition border border-white/20">
              <h3 className="text-xl font-bold mb-2">Catalyst</h3>
              <p className="text-sm opacity-95">5-day team ignition. $297.</p>
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
            <p className="text-gray-700 mb-4">Office visits and team days. Annual path is Charter. Entry via Catalyst.</p>
            <Link to="/catalyst" className="text-[#c45c26] font-semibold hover:underline">Catalyst →</Link>
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
          <Link to="/zenith" className="hover:text-[#c45c26]">Zenith</Link>
          <Link to="/spectrum" className="hover:text-[#c45c26]">Spectrum</Link>
          <Link to="/echo" className="hover:text-[#c45c26]">Echo</Link>
          <Link to="/whisper" className="hover:text-[#c45c26]">Whisper</Link>
          <Link to="/rhythm" className="hover:text-[#c45c26]">Rhythm</Link>
          <Link to="/gather" className="hover:text-[#c45c26]">Gather</Link>
          <Link to="/ledger" className="hover:text-[#c45c26]">Ledger</Link>
        </div>
      </footer>
    </div>
  );
}
