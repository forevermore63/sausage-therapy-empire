import type { Route } from "./+types/surge";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Surge Challenge • 30-Day Viral Growth | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Join the 30-day Sausage Surge Challenge. Daily micro-actions, share the mission, earn referral boosts and help the dream grow from true to tremendous. Free viral growth engine for the empire.",
    },
  ];
}

const days = [
  { day: 1, action: "Follow @sausage_therapy and share one post with #SausageSurge" },
  { day: 2, action: "Text or message one friend about dachshund therapy" },
  { day: 3, action: "Complete the free 7-Day Calm Challenge intro" },
  { day: 4, action: "Leave a kind comment on a Therapy Sausages post" },
  { day: 5, action: "Share your favourite sausage wisdom from the Oracle" },
  { day: 7, action: "Invite one person to the Therapy Match quiz" },
  { day: 10, action: "Post a story or reel using #HealingWithWags" },
  { day: 14, action: "Refer a friend to book a session or join membership" },
  { day: 21, action: "Share an Impact Dashboard screenshot and celebrate" },
  { day: 30, action: "Write a short healing story or testimonial and submit" },
];

export default function Surge() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
        </div>
      </header>

      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <p className="text-[#c45c26] font-semibold mb-2">🚀 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Sausage Surge Challenge</h1>
        <p className="text-lg text-gray-700 mb-10">
          30 days of micro-actions that amplify healing, grow the community and fuel the giving-first empire. From true to tremendous — one share at a time.
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#c45c26]/15 mb-10 text-left">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6 text-center">Key Challenge Days</h2>
          <ul className="space-y-4">
            {days.map((d) => (
              <li key={d.day} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c45c26] text-white font-bold flex items-center justify-center">{d.day}</span>
                <p className="pt-2 text-gray-700">{d.action}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#c45c26] text-white rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-3">Join the Surge</h2>
          <p className="opacity-95 mb-6">Get the full 30-day checklist + daily prompts by email. Track progress, earn shout-outs and referral rewards.</p>
          <form action="mailto:emily@therapysausages.com?subject=Sausage%20Surge%20Challenge%20Signup" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" name="email" required placeholder="Your best email" className="flex-1 border-0 rounded-full px-5 py-3 text-gray-900 outline-none" />
            <button type="submit" className="bg-[#d4a017] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:bg-[#e0b030] transition">Start My Surge</button>
          </form>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 border border-[#c45c26]/10">
            <p className="text-3xl font-bold text-[#c45c26]">∞</p>
            <p className="text-sm text-gray-600">Hearts reached through shares</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#c45c26]/10">
            <p className="text-3xl font-bold text-[#2d5016]">30</p>
            <p className="text-sm text-gray-600">Days of micro-momentum</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#c45c26]/10">
            <p className="text-3xl font-bold text-[#d4a017]">1</p>
            <p className="text-sm text-gray-600">Empire growing together</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/refer" className="text-[#c45c26] font-semibold hover:underline">Referral Engine →</Link>
          <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">Impact Dashboard →</Link>
          <Link to="/community" className="text-[#c45c26] font-semibold hover:underline">Community →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · From true to tremendous · Giving-first
      </footer>
    </div>
  );
}
