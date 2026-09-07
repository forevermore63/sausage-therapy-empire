import type { Route } from "./+types/live-empire";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Empire Live Command | Therapy Sausages" },
    {
      name: "description",
      content:
        "Real-time multi-stream dashboard of every passive and active revenue engine, projected monthly, impact given, and one-tap activation. Proof the dream is already compounding.",
    },
  ];
}

const streams = [
  { name: "Healing Sessions", status: "Live", monthly: "$4,200", impact: "$630", href: "/book", color: "#c45c26" },
  { name: "Digital Vault", status: "Passive", monthly: "$1,870", impact: "$280", href: "/vault", color: "#2d5016" },
  { name: "Healing Circles", status: "Recurring", monthly: "$2,910", impact: "$435", href: "/circles", color: "#d4a017" },
  { name: "Sausage Hours", status: "Protected", monthly: "$980", impact: "$147", href: "/hours", color: "#c45c26" },
  { name: "Impact Sponsorship", status: "Growing", monthly: "$1,540", impact: "$1,540", href: "/sponsor", color: "#2d5016" },
  { name: "Memberships & Packs", status: "Recurring", monthly: "$3,150", impact: "$472", href: "/membership", color: "#d4a017" },
  { name: "Corporate & Farm", status: "Booked", monthly: "$2,400", impact: "$360", href: "/corporate", color: "#c45c26" },
  { name: "Stock & Visual", status: "Passive", monthly: "$420", impact: "$63", href: "/stock", color: "#2d5016" },
];

export default function LiveEmpire() {
  const totalMonthly = streams.reduce((sum, s) => sum + parseInt(s.monthly.replace(/[$,]/g, "")), 0);
  const totalImpact = streams.reduce((sum, s) => sum + parseInt(s.impact.replace(/[$,]/g, "")), 0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/dream" className="hover:text-[#c45c26]">Dream Map</Link>
            <Link to="/flame" className="hover:text-[#c45c26]">Flame</Link>
            <Link to="/command" className="hover:text-[#c45c26]">Command</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 8 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Empire Live Command
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-95">
            Every stream visible. Projected monthly. Impact redirected. One-tap activation. The dream is no longer theoretical — it is already compounding.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/15 rounded-xl p-4">
              <p className="text-sm opacity-80">Projected Monthly</p>
              <p className="text-2xl md:text-3xl font-bold">${totalMonthly.toLocaleString()}</p>
            </div>
            <div className="bg-white/15 rounded-xl p-4">
              <p className="text-sm opacity-80">Impact Redirected</p>
              <p className="text-2xl md:text-3xl font-bold">${totalImpact.toLocaleString()}</p>
            </div>
            <div className="bg-white/15 rounded-xl p-4">
              <p className="text-sm opacity-80">Active Streams</p>
              <p className="text-2xl md:text-3xl font-bold">{streams.length}</p>
            </div>
            <div className="bg-white/15 rounded-xl p-4">
              <p className="text-sm opacity-80">Status</p>
              <p className="text-2xl md:text-3xl font-bold text-[#d4a017]">Live</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">All Engines</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {streams.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                    <h3 className="font-bold text-[#2d5016]">{s.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{s.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#c45c26]">{s.monthly}<span className="text-xs font-normal text-gray-500">/mo</span></p>
                  <p className="text-xs text-[#2d5016]">{s.impact} impact</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-4">Numbers are illustrative projections based on current live engines. Real Stripe + booking data will replace these once payment links and calendar are fully wired.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flame" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e]">
                Light Today’s Flame
              </Link>
              <Link to="/dream" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#2d5016]/5">
                Open Dream Growth Map
              </Link>
              <Link to="/passive" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c45c26]/5">
                Passive Engines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
