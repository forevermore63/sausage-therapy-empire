import type { Route } from "./+types/retreat";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forevermore Farm Retreats & Immersions • Therapy Sausages" },
    {
      name: "description",
      content:
        "High-ticket private and small-group retreats at Forevermore Farm. Multi-day nervous-system resets with the full therapy dachshund pack, nature immersion, guided practices and giving-first impact. From true to tremendous.",
    },
  ];
}

export default function Retreat() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/retreat" className="text-[#c45c26] font-semibold">Retreats</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Enquire Now</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Premium · Limited · Transformative</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Forevermore Farm Retreats</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Multi-day immersions with the full therapy dachshund pack on the land. Deep nervous-system reset, guided practices, farm rhythms and measurable impact. High-ticket experiences that fund free places and grow the empire from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">Choose Your Immersion</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#c45c26]/15 card-hover">
            <div className="text-4xl mb-3">🌅</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Day Immersion</h3>
            <p className="text-3xl font-bold mb-2">From $380</p>
            <p className="text-gray-700 mb-4 text-sm">Full day on the farm with pack time, guided calm practices, nature walk, shared lunch and closing circle. Ideal for individuals or pairs seeking a powerful reset.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ 6–7 hours on land</li>
              <li>✓ Full pack interaction</li>
              <li>✓ Practices + journal</li>
              <li>✓ NDIS places available</li>
            </ul>
            <a href="mailto:emily@therapysausages.com?subject=Day%20Immersion%20Enquiry" className="block text-center bg-[#c45c26] text-white font-semibold py-3 rounded-full hover:bg-[#a34a1e]">Enquire</a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#d4a017] card-hover relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4a017] text-white text-xs font-bold px-3 py-1 rounded-full">MOST LOVED</span>
            <div className="text-4xl mb-3">🏕️</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Overnight Reset</h3>
            <p className="text-3xl font-bold mb-2">From $890</p>
            <p className="text-gray-700 mb-4 text-sm">One night on the land. Sunset pack time, evening circle, morning sunrise practices, deep rest and farm breakfast. Limited to small numbers for intimacy.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ Overnight stay</li>
              <li>✓ Evening + morning pack</li>
              <li>✓ Guided night practice</li>
              <li>✓ Farm-sourced meals</li>
            </ul>
            <a href="mailto:emily@therapysausages.com?subject=Overnight%20Reset%20Enquiry" className="block text-center bg-[#c45c26] text-white font-semibold py-3 rounded-full hover:bg-[#a34a1e]">Enquire</a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#c45c26]/15 card-hover">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Private 3-Day Retreat</h3>
            <p className="text-3xl font-bold mb-2">From $2,400</p>
            <p className="text-gray-700 mb-4 text-sm">Fully private or couples. Custom rhythm, exclusive pack access, deep trauma-informed practices, land connection and personalised integration plan. High-impact, high-ticket.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ Fully private</li>
              <li>✓ Custom schedule</li>
              <li>✓ Integration support</li>
              <li>✓ Significant free-place funding</li>
            </ul>
            <a href="mailto:emily@therapysausages.com?subject=Private%203-Day%20Retreat%20Enquiry" className="block text-center bg-[#c45c26] text-white font-semibold py-3 rounded-full hover:bg-[#a34a1e]">Enquire</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Corporate & Group Farm Days</h2>
          <p className="text-gray-700 mb-6">Bring your team for a powerful half-day or full-day immersion. Stress reduction that sticks, team bonding through the pack, and a measurable wellness investment. From $1,200.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roi" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">Calculate ROI First</Link>
            <a href="mailto:emily@therapysausages.com?subject=Corporate%20Farm%20Day%20Enquiry" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5">Request Corporate Quote</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Why These Retreats Matter</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Nervous-system first</h3>
            <p className="text-sm text-gray-600">Real time with temperament-tested miniature dachshunds plus land, rhythm and skilled facilitation creates deeper regulation than talk-only approaches.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Giving-first economics</h3>
            <p className="text-sm text-gray-600">A meaningful portion of every high-ticket booking directly funds free and low-cost places for trauma survivors, NDIS participants and dog welfare.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Limited & intentional</h3>
            <p className="text-sm text-gray-600">Small numbers only. This protects the dogs, the land and the depth of experience. When it’s full, it’s full.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Empire growth engine</h3>
            <p className="text-sm text-gray-600">High-ticket retreats accelerate the path from true to tremendous — funding infrastructure, more free access and the long-term vision.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to step onto the land?</h2>
        <p className="opacity-90 mb-6 max-w-xl mx-auto">Emily replies personally. Tell us your preferred dates, group size and intention and we’ll craft the right immersion.</p>
        <a href="mailto:emily@therapysausages.com?subject=Retreat%20Enquiry%20-%20Forevermore%20Farm" className="inline-block bg-white text-[#2d5016] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fdf6e3]">Email Emily Now</a>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Forevermore Farm Retreats · From true to tremendous</p>
      </footer>
    </div>
  );
}
