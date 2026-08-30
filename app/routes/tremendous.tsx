import type { Route } from "./+types/tremendous";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "True → Tremendous Tracker | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Live growth scoreboard for the Sausage Therapy empire. Track impact, revenue engines, next actions and the path from true to tremendous. Led by Emily Blue Richards.",
    },
  ];
}

export default function Tremendous() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/passive" className="hover:text-[#c45c26]">Passive Engines</Link>
            <Link to="/hours" className="hover:text-[#c45c26]">Sausage Hours</Link>
            <Link to="/command" className="hover:text-[#c45c26]">Command Center</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 31 August 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            True → Tremendous Tracker
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            The living scoreboard of the Sausage Therapy empire. Every booking, sponsorship, membership and digital sale moves the needle from true to tremendous. Transparent. Actionable. Giving-first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/impact" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Live Impact Dashboard
            </Link>
            <Link to="/passive" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Passive Engines →
            </Link>
          </div>
        </div>
      </section>

      {/* Current Scoreboard */}
      <section className="py-12 px-4 bg-white border-b border-[#c45c26]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Empire Scoreboard (Live Snapshot)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#fdf6e3] rounded-2xl p-5">
              <p className="text-3xl md:text-4xl font-bold text-[#c45c26] impact-counter">247+</p>
              <p className="text-sm text-gray-600 mt-1">Hearts Healed</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-2xl p-5">
              <p className="text-3xl md:text-4xl font-bold text-[#2d5016] impact-counter">$18.4k</p>
              <p className="text-sm text-gray-600 mt-1">Given Back to Dogs</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-2xl p-5">
              <p className="text-3xl md:text-4xl font-bold text-[#d4a017] impact-counter">62</p>
              <p className="text-sm text-gray-600 mt-1">NDIS Sessions</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-2xl p-5">
              <p className="text-3xl md:text-4xl font-bold text-[#c45c26] impact-counter">∞</p>
              <p className="text-sm text-gray-600 mt-1">Wags Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Levers */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Tremendous Growth Levers</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Activate or scale any lever below. Each one compounds revenue, impact and reach simultaneously.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/sponsor" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">💛</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Impact Sponsorship</h3>
            <p className="text-sm text-gray-600 mt-1">Fund free places → certificates + live tracking</p>
          </Link>
          <Link to="/corporate" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Corporate Wellness</h3>
            <p className="text-sm text-gray-600 mt-1">Office packs + farm days + ongoing programs</p>
          </Link>
          <Link to="/cohort" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Practitioner Cohorts</h3>
            <p className="text-sm text-gray-600 mt-1">8-week live training → Directory pathway</p>
          </Link>
          <Link to="/mastermind" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Forevermore Mastermind</h3>
            <p className="text-sm text-gray-600 mt-1">High-ticket 6-month circle from $2,997</p>
          </Link>
          <Link to="/subscribe" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Monthly Healing Packs</h3>
            <p className="text-sm text-gray-600 mt-1">Recurring $29 / $67 / $97 digital packs</p>
          </Link>
          <Link to="/hours" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">⏳</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Sausage Hours</h3>
            <p className="text-sm text-gray-600 mt-1">Protect an hour of pure presence</p>
          </Link>
          <Link to="/passive" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Passive Engines</h3>
            <p className="text-sm text-gray-600 mt-1">All digital + membership revenue streams</p>
          </Link>
          <Link to="/franchise" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Franchise & Licensing</h3>
            <p className="text-sm text-gray-600 mt-1">Scale the model beyond Gold Coast / Noosa</p>
          </Link>
          <Link to="/ambassador" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-bold text-[#c45c26] text-lg">Ambassador Program</h3>
            <p className="text-sm text-gray-600 mt-1">Affiliate + referral engine with commissions</p>
          </Link>
        </div>
      </section>

      {/* Next Actions */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Next Actions to Hit Tremendous</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c45c26] font-bold text-xl">1</span>
              <div>
                <p className="font-semibold">Unpause & redeploy the main Vercel project</p>
                <p className="text-sm text-gray-600">All new pages go live the moment the deployment is active.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c45c26] font-bold text-xl">2</span>
              <div>
                <p className="font-semibold">Connect Stripe Payment Links</p>
                <p className="text-sm text-gray-600">Shop, Academy, Membership, Gift, Certification, Audio, Franchise, Mastermind, Subscribe, Sponsor, Corporate, Cohort, Hours.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c45c26] font-bold text-xl">3</span>
              <div>
                <p className="font-semibold">Drop Calendly / Cal.com into /book</p>
                <p className="text-sm text-gray-600">Instant session booking replaces mailto friction.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c45c26] font-bold text-xl">4</span>
              <div>
                <p className="font-semibold">Push first visual content batch to stock platforms</p>
                <p className="text-sm text-gray-600">Google Photos → Adobe Stock / Shutterstock / Pond5 via Visual Wealth Hub.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
              <span className="text-[#c45c26] font-bold text-xl">5</span>
              <div>
                <p className="font-semibold">Launch next Practitioner Cohort waitlist</p>
                <p className="text-sm text-gray-600">Fill the pipeline that feeds Directory → Mastermind → Franchise.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">From True to Tremendous</h2>
          <p className="opacity-90 mb-8">Every action above is already coded and ready. The only missing piece is activation. The empire is waiting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/command" className="bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
              Open Command Center
            </Link>
            <Link to="/" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              ← Empire Home
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · True → Tremendous Tracker · Led by Emily Blue Richards · 31 August 2026</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
