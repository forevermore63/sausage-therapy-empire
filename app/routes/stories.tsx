import type { Route } from "./+types/stories";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Healing Stories • Therapy Sausages" },
    {
      name: "description",
      content:
        "Real stories of hearts healed by Therapy Sausages and the dachshund pack. Testimonials, transformations and the quiet magic of animal-assisted healing led by Emily Blue Richards.",
    },
  ];
}

const stories = [
  {
    id: 1,
    name: "Sarah, Gold Coast",
    role: "NDIS Participant",
    quote: "I hadn't felt calm in my body for years. One hour with the sausages and something shifted. I still carry that feeling. Emily creates a space where it's safe to just be.",
    impact: "First NDIS session → ongoing monthly support",
  },
  {
    id: 2,
    name: "James, Corporate Team Lead",
    role: "Brisbane Tech Company",
    quote: "We booked a team day thinking it would be cute. It was transformative. People opened up. Stress dropped for weeks after. We are already planning the next one.",
    impact: "Corporate event → repeat booking + membership referrals",
  },
  {
    id: 3,
    name: "Mia & Family",
    role: "Noosa Hinterland",
    quote: "Our daughter had shut down after a hard year. The dogs did what no words could. She laughed for the first time in months. Forever grateful.",
    impact: "Family session → free place funded by Circle members",
  },
  {
    id: 4,
    name: "Anonymous",
    role: "Trauma Survivor",
    quote: "I was terrified of dogs after what happened. Emily and the pack met me exactly where I was. No pressure. Just presence. Something cracked open that day.",
    impact: "Private session → Academy enquiry",
  },
  {
    id: 5,
    name: "David",
    role: "First-Time Member",
    quote: "The weekly practices and live circles keep me steady between sessions. Knowing my membership funds free places for people who need it more than I do makes it feel even better.",
    impact: "Sausage Circle member since launch",
  },
  {
    id: 6,
    name: "Priya",
    role: "Academy Graduate",
    quote: "I came for the dachshund knowledge. I left with a whole new business model and the confidence to start offering animal-assisted sessions in my own community.",
    impact: "Foundations course → now running local sessions",
  },
];

export default function Stories() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">💛 Real Stories</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hearts That Found Their Way Home</h1>
          <p className="text-lg opacity-95">
            These are not marketing quotes. They are the quiet, powerful moments that happen when miniature dachshunds, presence, and a safe human meet. Every story fuels the next free place and the next pack of wags.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
              <p className="text-gray-700 italic mb-4 leading-relaxed">“{s.quote}”</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#c45c26]">{s.name}</p>
                  <p className="text-sm text-gray-500">{s.role}</p>
                </div>
                <p className="text-xs text-[#2d5016] font-medium text-right max-w-[140px]">{s.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Your Story Could Be Next</h2>
          <p className="text-gray-600 mb-6">Whether you book a session, join the Circle, come to the Farm, or simply receive a free place funded by someone else — the healing continues to ripple.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Book a Session</Link>
            <Link to="/membership" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition">Join the Circle</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Healing Stories</p>
      </footer>
    </div>
  );
}
