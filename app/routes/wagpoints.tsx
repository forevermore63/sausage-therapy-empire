import type { Route } from "./+types/wagpoints";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wag Points Loyalty • Therapy Sausages" },
    {
      name: "description",
      content:
        "Earn Wag Points for every booking, referral, membership month and act of giving. Redeem for free sessions, merch, priority farm spots and more. Loyalty that funds healing.",
    },
  ];
}

const EARN = [
  { action: "Book any session or event", points: 100, icon: "📅" },
  { action: "Join or renew Sausage Circle membership", points: 150, icon: "🌟" },
  { action: "Successful referral (friend books)", points: 75, icon: "🤝" },
  { action: "Complete 7-Day Calm Challenge", points: 40, icon: "🧘" },
  { action: "Donate via Give & Grow", points: 25, icon: "💛" },
  { action: "Share a story or review", points: 30, icon: "📝" },
  { action: "Corporate or group booking", points: 250, icon: "🏢" },
];

const REWARDS = [
  { points: 200, reward: "Digital Calm Pack or Wiener Coaster sticker set" },
  { points: 400, reward: "Free Virtual Pack session" },
  { points: 700, reward: "$50 credit toward any in-person session" },
  { points: 1000, reward: "Priority booking + free farm day immersion spot" },
  { points: 1500, reward: "Private mini-session or merch bundle" },
  { points: 2500, reward: "Full day at Forevermore Farm for two" },
];

export default function WagPoints() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:emily@therapysausages.com?subject=Wag%20Points%20Loyalty%20Join&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AI%20want%20to%20start%20earning%20Wag%20Points.`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/refer" className="hover:text-[#c45c26]">Refer</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/wagpoints" className="text-[#c45c26] font-semibold">Wag Points</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book & Earn</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Loyalty that multiplies healing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wag Points</h1>
          <p className="text-lg opacity-95">
            Every booking, referral, membership month and act of giving earns points. Redeem them for free sessions, merch, priority farm access and more — while the same activity funds free places for others.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#2d5016] mb-6">How you earn</h2>
            <ul className="space-y-3">
              {EARN.map((item) => (
                <li key={item.action} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#c45c26]/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.action}</p>
                  </div>
                  <span className="font-bold text-[#c45c26]">+{item.points}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2d5016] mb-6">What you can redeem</h2>
            <ul className="space-y-3">
              {REWARDS.map((r) => (
                <li key={r.points} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#d4a017]/30">
                  <span className="font-bold text-[#d4a017] whitespace-nowrap">{r.points} pts</span>
                  <p className="text-gray-800">{r.reward}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-2 text-center">Start earning Wag Points</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">We track manually at launch so every point is accurate and personal. Emily confirms your balance by email.</p>
          {submitted ? (
            <p className="text-center text-[#2d5016] font-semibold">Thank you — open your email client to finish joining. Your points journey starts now.</p>
          ) : (
            <form onSubmit={handleJoin} className="space-y-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email we already know you by (or new)"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
              <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition">
                Join Wag Points
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Already booking or referring? Mention “Wag Points” in your email or booking note and we will credit you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">Book a Session</Link>
            <Link to="/refer" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5">Refer a Friend</Link>
            <Link to="/give" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#2d5016]/5">Give & Grow</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Giving-first loyalty</p>
        <p className="opacity-60 mt-2">From true to tremendous</p>
      </footer>
    </div>
  );
}
