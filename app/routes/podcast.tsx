import type { Route } from "./+types/podcast";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Podcast • Healing Hearts with Every Wag | Therapy Sausages" },
    {
      name: "description",
      content:
        "Sausage Therapy Podcast — real stories, nervous-system science, NDIS insights and farm wisdom from Emily Blue Richards and the pack. Subscribe and heal with every episode.",
    },
  ];
}

const episodes = [
  {
    num: "04",
    title: "Why Dachshunds Regulate the Nervous System",
    date: "Aug 2026",
    duration: "28 min",
    teaser: "The science of the human-animal bond, polyvagal cues, and why short-legged healers calm us faster than most modalities.",
  },
  {
    num: "03",
    title: "NDIS Stories from the Pack",
    date: "Jul 2026",
    duration: "34 min",
    teaser: "Real participant outcomes, practical access tips, and how giving-first sessions create lasting capacity.",
  },
  {
    num: "02",
    title: "Farm Day Reset: Hinterland Healing",
    date: "Jun 2026",
    duration: "31 min",
    teaser: "What happens when you combine nature, miniature dachshunds and intentional rest. Behind the scenes at Forevermore Farm.",
  },
  {
    num: "01",
    title: "Welcome to Healing Hearts with Every Wag",
    date: "May 2026",
    duration: "22 min",
    teaser: "Emily introduces the mission, the pack, and why this empire exists to multiply free and subsidised therapy places.",
  },
];

export default function Podcast() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/wisdom" className="hover:text-[#c45c26]">Wisdom</Link>
            <Link to="/refer" className="hover:text-[#c45c26]">Refer</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🎙️ Sausage Therapy Podcast</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healing Hearts with Every Wag</h1>
          <p className="text-lg opacity-95 mb-8">
            Stories, science and soul from the pack. Nervous-system resets, NDIS pathways, farm wisdom and the real work of building a giving-first healing empire.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:emily@therapysausages.com?subject=Podcast%20Subscribe%20-%20Apple" className="bg-white text-[#c45c26] font-semibold px-5 py-2.5 rounded-full shadow hover:bg-[#fdf6e3] transition">Apple Podcasts</a>
            <a href="mailto:emily@therapysausages.com?subject=Podcast%20Subscribe%20-%20Spotify" className="bg-white text-[#c45c26] font-semibold px-5 py-2.5 rounded-full shadow hover:bg-[#fdf6e3] transition">Spotify</a>
            <a href="mailto:emily@therapysausages.com?subject=Podcast%20Subscribe%20-%20YouTube" className="border-2 border-white text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition">YouTube</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Latest Episodes</h2>
        <div className="space-y-6">
          {episodes.map((ep) => (
            <div key={ep.num} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/15 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#c45c26]/10 flex items-center justify-center text-[#c45c26] font-bold text-xl">
                  {ep.num}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{ep.date} · {ep.duration}</p>
                  <h3 className="text-xl font-bold text-[#c45c26] mb-2">{ep.title}</h3>
                  <p className="text-gray-700 mb-3">{ep.teaser}</p>
                  <a href={`mailto:emily@therapysausages.com?subject=Episode%20${ep.num}%20Show%20Notes`} className="text-[#c45c26] font-semibold hover:underline">
                    Request show notes →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Go Deeper with the Academy & Circle</h2>
          <p className="text-gray-700 mb-6">
            Every episode is an invitation. Enrol in Foundations of Dachshund Therapy or join the Sausage Circle for live practice, priority booking and the full resource vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Enter Academy</Link>
            <Link to="/membership" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition">Join Membership</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages Podcast · Healing Hearts with Every Wag</p>
      </footer>
    </div>
  );
}
