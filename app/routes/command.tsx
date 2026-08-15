import type { Route } from "./+types/command";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Command Center • Perpetual Wealth Engine | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Live command center for the Sausage Therapy perpetual wealth engine. Revenue streams, impact metrics, automated funnels, giving allocation and next surge actions. From true to tremendous.",
    },
  ];
}

const streams = [
  { name: "Individual Sessions", monthly: "$4,850", growth: "+18%", status: "Live" },
  { name: "Corporate & Groups", monthly: "$6,200", growth: "+32%", status: "Live" },
  { name: "Sausage Circle Memberships", monthly: "$1,740", growth: "+41%", status: "Live" },
  { name: "Digital Academy", monthly: "$2,970", growth: "+27%", status: "Live" },
  { name: "Wiener Coaster Shop", monthly: "$890", growth: "+12%", status: "Live" },
  { name: "Virtual Pack Sessions", monthly: "$1,150", growth: "+55%", status: "Live" },
  { name: "Farm Experiences", monthly: "$3,400", growth: "+22%", status: "Live" },
  { name: "Give & Grow Sponsors", monthly: "$620", growth: "+8%", status: "Live" },
];

const actions = [
  { title: "Activate Stripe Checkout on /shop & /academy", priority: "High", impact: "Immediate revenue capture" },
  { title: "Launch referral rewards automation", priority: "High", impact: "Viral member growth" },
  { title: "Publish 3 new podcast episodes + show notes", priority: "Medium", impact: "Authority + email list" },
  { title: "Connect Calendly / booking calendar to /book", priority: "High", impact: "Reduce friction 40%" },
  { title: "Seed 2032 Olympic supplier registration pack", priority: "Medium", impact: "Long-term legacy contracts" },
  { title: "Deploy automated welcome + nurture sequences", priority: "High", impact: "Higher conversion & LTV" },
];

export default function Command() {
  return (
    <div className="min-h-screen bg-[#0f1410] text-white">
      <header className="sticky top-0 z-50 bg-[#0f1410]/95 backdrop-blur border-b border-[#d4a017]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#d4a017]">
            <span className="text-2xl">🐾</span> Therapy Sausages Command
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-[#d4a017]">Home</Link>
            <Link to="/impact" className="hover:text-[#d4a017]">Impact</Link>
            <Link to="/give" className="hover:text-[#d4a017]">Give</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#d4a017] font-semibold mb-2 tracking-wide uppercase text-sm">Perpetual Wealth Engine</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Command Center</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Live view of every revenue stream, impact metric and next action required to grow the dream from true to tremendous. Updated for the empire.
            </p>
          </div>

          {/* Headline Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#1a2218] rounded-2xl p-6 border border-[#d4a017]/20">
              <p className="text-sm opacity-70 mb-1">Projected Monthly</p>
              <p className="text-3xl font-bold text-[#d4a017]">$21,820</p>
              <p className="text-xs text-green-400 mt-1">+24% vs prior</p>
            </div>
            <div className="bg-[#1a2218] rounded-2xl p-6 border border-[#d4a017]/20">
              <p className="text-sm opacity-70 mb-1">Hearts Healed</p>
              <p className="text-3xl font-bold text-[#c45c26]">247+</p>
              <p className="text-xs text-green-400 mt-1">Live count</p>
            </div>
            <div className="bg-[#1a2218] rounded-2xl p-6 border border-[#d4a017]/20">
              <p className="text-sm opacity-70 mb-1">Given Back to Dogs</p>
              <p className="text-3xl font-bold text-[#2d5016]">$18.4k</p>
              <p className="text-xs opacity-70 mt-1">Transparent allocation</p>
            </div>
            <div className="bg-[#1a2218] rounded-2xl p-6 border border-[#d4a017]/20">
              <p className="text-sm opacity-70 mb-1">Active Engines</p>
              <p className="text-3xl font-bold text-white">8</p>
              <p className="text-xs text-green-400 mt-1">All online</p>
            </div>
          </div>

          {/* Revenue Streams */}
          <h2 className="text-2xl font-bold mb-6 text-[#d4a017]">Revenue Streams Online</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {streams.map((s) => (
              <div key={s.name} className="bg-[#1a2218] rounded-xl p-5 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm opacity-60">{s.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#d4a017]">{s.monthly}</p>
                  <p className="text-sm text-green-400">{s.growth}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Actions */}
          <h2 className="text-2xl font-bold mb-6 text-[#d4a017]">Next Surge Actions</h2>
          <div className="space-y-3 mb-12">
            {actions.map((a, i) => (
              <div key={i} className="bg-[#1a2218] rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-sm opacity-60">{a.impact}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.priority === "High" ? "bg-[#c45c26]/20 text-[#c45c26]" : "bg-[#d4a017]/20 text-[#d4a017]"}`}>
                  {a.priority}
                </span>
              </div>
            ))}
          </div>

          {/* Giving Allocation */}
          <div className="bg-gradient-to-r from-[#2d5016] to-[#1a3a0f] rounded-2xl p-8 mb-12 border border-[#d4a017]/30">
            <h2 className="text-2xl font-bold mb-4">Giving-First Allocation</h2>
            <p className="opacity-90 mb-6">Every dollar that enters the empire is tracked. A transparent portion returns to dog welfare, free/subsidised places and land care at Forevermore Farm. This is the unfair advantage.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">18%</p>
                <p className="text-sm opacity-70">Direct dog welfare</p>
              </div>
              <div>
                <p className="text-3xl font-bold">12%</p>
                <p className="text-sm opacity-70">Free / NDIS access</p>
              </div>
              <div>
                <p className="text-3xl font-bold">7%</p>
                <p className="text-sm opacity-70">Farm & recovery</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="opacity-70 mb-6">This command center is the living heartbeat of the perpetual wealth engine. Numbers rise. Impact compounds. The dream grows tremendous.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/impact" className="bg-[#d4a017] text-[#0f1410] font-semibold px-6 py-3 rounded-full hover:bg-[#e0b020] transition">Full Impact Dashboard</Link>
              <Link to="/give" className="border border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10 transition">Give & Grow</Link>
              <Link to="/" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">← Empire Home</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4 text-center text-sm opacity-50">
        <p>Therapy Sausages Perpetual Wealth Engine · Command Center · From true to tremendous</p>
        <p className="mt-2">© {new Date().getFullYear()} Emily Blue Richards · Forevermore Farm · Noosa Dachshunds</p>
      </footer>
    </div>
  );
}
