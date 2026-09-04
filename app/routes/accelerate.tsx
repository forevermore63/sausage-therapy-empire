import type { Route } from "./+types/accelerate";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "True → Tremendous Accelerator | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "30-day True → Tremendous Accelerator. Live coaching, systems and accountability that turn the Sausage Therapy empire scoreboard into an executable sprint. Led by Emily Blue Richards.",
    },
  ];
}

const WEEKS = [
  {
    week: "Week 1",
    title: "Truth + Scoreboard",
    items: [
      "Map current cash, bookings, NDIS pipeline and visual assets",
      "Set 30-day revenue + impact numbers you can actually feel",
      "Install daily presence ritual so the sprint stays nervous-system first",
    ],
  },
  {
    week: "Week 2",
    title: "Engines On",
    items: [
      "Activate booking, NDIS claim helper and sponsorship pathways",
      "Ship first visual-wealth batch and one digital offer",
      "Open one corporate or cohort conversation",
    ],
  },
  {
    week: "Week 3",
    title: "Compound",
    items: [
      "Tighten fulfilment so every session funds a free place",
      "Launch or refill membership / hours / pack offers",
      "Publish one story that converts trust into bookings",
    ],
  },
  {
    week: "Week 4",
    title: "Tremendous Lock",
    items: [
      "Review the live scoreboard and keep what works",
      "Lock next-90-day cadence: pack care, cashflow, contribution",
      "Celebrate impact — then set the next sprint",
    ],
  },
];

const TIERS = [
  {
    name: "Ignite",
    price: "$997",
    note: "30 days · self-paced + 2 live calls",
    points: [
      "Scoreboard + 30-day sprint map",
      "Weekly check-in prompts",
      "Access to Presence Ritual + Claim helper",
      "Email support from Emily",
    ],
  },
  {
    name: "Surge",
    price: "$2,497",
    note: "30 days · 4 live coaching sessions",
    points: [
      "Everything in Ignite",
      "Offer + booking + NDIS systems install",
      "Visual wealth first-batch plan",
      "Priority session slot for you or a sponsored hour",
    ],
    featured: true,
  },
  {
    name: "Tremendous",
    price: "$4,997",
    note: "30 days · private sprint with Emily",
    points: [
      "Everything in Surge",
      "Private weekly working sessions",
      "Corporate / grant / mastermind pathway design",
      "One farm or SNOUTSAIL immersion included when available",
    ],
  },
];

export default function Accelerate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("Surge");
  const [goal, setGoal] = useState("");
  const [sent, setSent] = useState(false);

  const apply = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `True → Tremendous Accelerator application%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ATier: ${encodeURIComponent(tier)}%0A30-day goal: ${encodeURIComponent(goal)}`;
    window.location.href = `mailto:emily@therapysausages.com?subject=Accelerator%20Application%20%E2%80%94%20${encodeURIComponent(tier)}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">Tracker</Link>
            <Link to="/mastermind" className="hover:text-[#c45c26]">Mastermind</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 4 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">True → Tremendous Accelerator</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Thirty days of live coaching, systems and accountability. Presence first. Measurable revenue and impact second. The pack is cared for the whole way through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Apply for the Sprint
            </a>
            <Link to="/tremendous" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Open Scoreboard →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-4">Four Weeks. One Clear Sprint.</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Not hustle. A warm, high-leverage month that turns the empire from true to tremendous without burning the nervous system that built it.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEEKS.map((w) => (
            <div key={w.week} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
              <p className="text-sm font-semibold text-[#d4a017] mb-1">{w.week}</p>
              <h3 className="font-bold text-[#c45c26] text-lg mb-3">{w.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {w.items.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-[#c45c26]">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">Choose Your Intensity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-6 shadow-md border ${t.featured ? "bg-[#2d5016] text-white border-[#2d5016]" : "bg-white border-[#c45c26]/10"}`}
              >
                <h3 className={`text-xl font-bold ${t.featured ? "text-[#d4a017]" : "text-[#c45c26]"}`}>{t.name}</h3>
                <p className="text-3xl font-bold my-2">{t.price}</p>
                <p className={`text-sm mb-4 ${t.featured ? "opacity-80" : "text-gray-600"}`}>{t.note}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2"><span>✓</span><span>{p}</span></li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  onClick={() => setTier(t.name)}
                  className={`block text-center font-semibold px-4 py-3 rounded-full ${t.featured ? "bg-[#d4a017] text-[#1a1a1a] hover:bg-[#c4920f]" : "bg-[#c45c26] text-white hover:bg-[#a34a1e]"}`}
                >
                  Apply for {t.name}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">A portion of every accelerator seat funds free therapy places and pack recovery.</p>
        </div>
      </section>

      <section id="apply" className="py-16 px-4 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-4">Apply for the 30-Day Sprint</h2>
        <p className="text-center text-gray-600 mb-8">Emily reads every application. Tell the truth about where you are and where tremendous would land in 30 days.</p>
        {sent ? (
          <p className="text-center text-[#2d5016] font-semibold">Thank you — finish sending in your email client and Emily will reply.</p>
        ) : (
          <form onSubmit={apply} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/15 space-y-4">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#c45c26]" />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your best email" className="w-full border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#c45c26]" />
            <select value={tier} onChange={(e) => setTier(e.target.value)} className="w-full border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#c45c26]">
              {TIERS.map((t) => (
                <option key={t.name}>{t.name}</option>
              ))}
            </select>
            <textarea required value={goal} onChange={(e) => setGoal(e.target.value)} rows={4} placeholder="What does tremendous look like in 30 days?" className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#c45c26]" />
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e]">Send Application</button>
          </form>
        )}
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">From True to Tremendous</h2>
          <p className="opacity-90 mb-8">If a full sprint is too much right now, start with daily presence, a funded session pathway, or the living scoreboard.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/presence" className="bg-[#d4a017] text-[#1a1a1a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c4920f] transition">Start Presence Ritual</Link>
            <Link to="/" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">← Empire Home</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · True → Tremendous Accelerator · Led by Emily Blue Richards · 4 September 2026</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
