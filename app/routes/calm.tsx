import type { Route } from "./+types/calm";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "7-Day Dachshund Calm Challenge | Therapy Sausages Free Gift" },
    {
      name: "description",
      content: "Free 7-day nervous system reset with sausage wisdom. Daily micro-practices + audio intro. Join the waitlist and feel the wags.",
    },
  ];
}

export default function Calm() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book a Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Free Gift</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">7-Day Dachshund Calm Challenge</h1>
          <p className="text-lg opacity-95 mb-8">
            Daily short practices + sausage wisdom designed to settle your nervous system. Instant PDF guide + audio intro. No cost. Just wags and regulation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
          <h2 className="text-xl font-bold text-[#2d5016] mb-4 text-center">Get Instant Access</h2>
          <form action="mailto:emily@therapysausages.com?subject=7-Day%20Calm%20Challenge%20Access" method="get" className="space-y-4">
            <input type="email" name="email" required placeholder="Your best email" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <input type="text" name="name" placeholder="First name (optional)" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Send Me the Free Challenge
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">We reply personally with the PDF + audio link. No spam. Unsubscribe anytime.</p>
        </div>

        <div className="mt-12 space-y-4">
          <h3 className="font-bold text-[#2d5016]">What you’ll receive</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><span className="text-[#c45c26]">✓</span> Day-by-day micro practices (2–7 minutes)</li>
            <li className="flex gap-2"><span className="text-[#c45c26]">✓</span> Sausage wisdom notes rooted in real therapy work</li>
            <li className="flex gap-2"><span className="text-[#c45c26]">✓</span> Simple breath + body + dog-connection cues</li>
            <li className="flex gap-2"><span className="text-[#c45c26]">✓</span> Invitation into the wider Sausage Circle community</li>
          </ul>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Free Calm Challenge · Emily Blue Richards</p>
      </footer>
    </div>
  );
}
