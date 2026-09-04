import type { Route } from "./+types/presence";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daily Sausage Presence Ritual | Therapy Sausages" },
    {
      name: "description",
      content:
        "A free daily nervous-system ritual inspired by the pack. Seven minutes of presence that feeds memberships, sessions and Sausage Hours.",
    },
  ];
}

export default function Presence() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/calm" className="hover:text-[#c45c26]">Calm Challenge</Link>
            <Link to="/hours" className="hover:text-[#c45c26]">Hours</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 4 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Daily Sausage Presence Ritual
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Seven minutes. No performance. The same quality of attention the pack gives when they choose you. Do it daily. Let the streak become the funnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Join Sausage Circle
            </Link>
            <Link to="/hours" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Protect a Sausage Hour
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Today’s 7-minute sequence</h2>
        <ol className="space-y-4">
          <li className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Minute 1 — Arrive</p>
            <p className="text-gray-700">Feel both feet. Unclench the jaw. Name one true thing about this room.</p>
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Minutes 2–3 — Breath like a sleeping sausage</p>
            <p className="text-gray-700">Longer exhale than inhale. Four rounds. No optimisation. Just downshift.</p>
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Minutes 4–5 — Contact</p>
            <p className="text-gray-700">If a dog is with you, rest a hand on the ribs and match the rise. If not, place a hand on your own sternum and imagine the pack arriving.</p>
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Minute 6 — One sentence journal</p>
            <p className="text-gray-700">Write: “What my nervous system needed today was…” Then stop.</p>
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Minute 7 — Choose the next real action</p>
            <p className="text-gray-700">Book a session, gift an hour, send one kind message, or drink water. Presence becomes motion.</p>
          </li>
        </ol>
        <p className="text-center mt-8">
          <Link to="/journal" className="text-[#c45c26] font-semibold hover:underline">Open the Healing Journal →</Link>
        </p>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">When you want more than seven minutes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/calm" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <h3 className="font-bold text-[#c45c26]">7-Day Calm Challenge</h3>
              <p className="text-sm text-gray-600 mt-2">A structured week that builds the streak into a habit.</p>
            </Link>
            <Link to="/audio" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <h3 className="font-bold text-[#c45c26]">Healing Audio Vault</h3>
              <p className="text-sm text-gray-600 mt-2">Guided presence you can play in the car or before sleep.</p>
            </Link>
            <Link to="/virtual" className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <h3 className="font-bold text-[#c45c26]">Virtual Pack Sessions</h3>
              <p className="text-sm text-gray-600 mt-2">Live circles when you cannot reach the farm or the coast.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Presence is the product</h2>
          <p className="opacity-90 mb-8">The ritual is free on purpose. The paid layers exist so the pack, the land and the free places can keep existing.</p>
          <Link to="/book" className="bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition inline-block">
            Book a live hour
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Daily Presence Ritual · Led by Emily Blue Richards · 4 September 2026</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
