import type { Route } from "./+types/stock";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Visual Wealth Stock Portal | Therapy Sausages" },
    {
      name: "description",
      content:
        "Turn dachshund, farm and therapy visuals into ongoing licensing revenue. Stock photography, video and creator pipelines that fund free Sausage Therapy hours.",
    },
  ];
}

export default function Stock() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/visual" className="hover:text-[#c45c26]">Visual Hub</Link>
            <Link to="/passive" className="hover:text-[#c45c26]">Passive</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 4 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Visual Wealth Stock Portal
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            The pack already creates the pictures the world wants. This portal is the pipeline: keyworded, licensed, uploaded and compounding so farm care and free hours do not depend on one booking day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/visual" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Open Visual Wealth Hub
            </Link>
            <a href="mailto:emily@therapysausages.com?subject=Visual%20Wealth%20Stock%20Batch" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Request batch upload help
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">Four streams that pay while you sleep</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">📷</div>
            <h3 className="font-bold text-[#c45c26]">Editorial + commercial stills</h3>
            <p className="text-sm text-gray-600 mt-2">Dachshund portraits, farm light, therapy contact, hinterland weather. Keyworded for Adobe Stock, Shutterstock and Alamy.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="font-bold text-[#c45c26]">Stock video + B-roll</h3>
            <p className="text-sm text-gray-600 mt-2">Wags, walks, pack movement, farm mornings. Pond5 / Storyblocks style clips for wellness brands.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">🖨️</div>
            <h3 className="font-bold text-[#c45c26]">Print + merch masters</h3>
            <p className="text-sm text-gray-600 mt-2">High-res files that feed Wiener Coaster, gift cards and limited prints without reshooting.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-bold text-[#c45c26]">Creator platforms</h3>
            <p className="text-sm text-gray-600 mt-2">YouTube, short-form and licensed story packages that point back to bookings and membership.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">First batch protocol</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>1.</strong> Pull the strongest 50 stills and 10 clips from Google Photos dachshund / farm albums.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>2.</strong> Strip identifiable clients. Keep pack, land, light and honest work.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>3.</strong> Write 15–25 keywords per asset: miniature dachshund, animal assisted therapy, Queensland hinterland, nervous system, farm morning.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>4.</strong> Upload to at least two agencies. Track accept / reject. Repeat weekly.</li>
            <li className="bg-white rounded-xl p-4 shadow-sm"><strong>5.</strong> Route a visible % of licensing income to free therapy hours on the Impact Dashboard.</li>
          </ol>
          <div className="mt-10 text-center">
            <Link to="/passive" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition inline-block">
              See all Passive Engines
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pictures that already exist can fund the next hour</h2>
          <p className="opacity-90 mb-8">This is not a new identity. It is the same pack, licensed so the work can keep happening.</p>
          <Link to="/visual" className="bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition inline-block">
            Go to Visual Hub
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Visual Wealth Stock Portal · Led by Emily Blue Richards · 4 September 2026</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
