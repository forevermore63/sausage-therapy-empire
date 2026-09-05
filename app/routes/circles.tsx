import type { Route } from "./+types/circles";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Healing Circles | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Small, high-trust healing circles led by the pack energy. Monthly live virtual + optional farm days. Giving-first membership for deeper nervous-system restoration and mutual support.",
    },
  ];
}

export default function Circles() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/virtual" className="hover:text-[#c45c26]">Virtual</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 6 September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sausage Healing Circles
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Small groups. High trust. The same quiet power the pack creates when they choose you — now held monthly in live virtual circles and occasional farm days. Presence compounds when we gather.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Join a Circle
            </Link>
            <Link to="/sponsor" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Sponsor a Seat
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">How Circles Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <div className="text-3xl mb-3">1</div>
              <h3 className="font-bold text-[#c45c26] text-lg mb-2">Small & Safe</h3>
              <p className="text-gray-700 text-sm">Max 8–12 people per circle. No performance. No fixing. Just shared presence with the pack energy as the container.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <div className="text-3xl mb-3">2</div>
              <h3 className="font-bold text-[#c45c26] text-lg mb-2">Live Rhythm</h3>
              <p className="text-gray-700 text-sm">Monthly 90-minute virtual circle + optional quarterly farm immersion day. Recordings never replace the live field.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <div className="text-3xl mb-3">3</div>
              <h3 className="font-bold text-[#c45c26] text-lg mb-2">Giving Built-In</h3>
              <p className="text-gray-700 text-sm">A portion of every circle seat funds free therapy places and dog care. Sponsors can underwrite seats for those who need them most.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Circle Offerings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fdf6e3] rounded-2xl p-6 border border-[#c45c26]/15">
              <h3 className="font-bold text-[#c45c26] text-xl mb-2">Open Healing Circle</h3>
              <p className="text-3xl font-bold text-[#2d5016] mb-2">$97<span className="text-base font-normal">/month</span></p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Monthly live virtual circle</li>
                <li>• Access to private community thread</li>
                <li>• Priority booking for farm days</li>
                <li>• Giving-first impact tracked</li>
              </ul>
              <Link to="/membership" className="inline-block bg-[#c45c26] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#a34a1e] transition">
                Join Open Circle →
              </Link>
            </div>
            <div className="bg-[#fdf6e3] rounded-2xl p-6 border border-[#c45c26]/15">
              <h3 className="font-bold text-[#c45c26] text-xl mb-2">Founders Circle</h3>
              <p className="text-3xl font-bold text-[#2d5016] mb-2">$297<span className="text-base font-normal">/month</span></p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Everything in Open + smaller group</li>
                <li>• Direct access with Emily</li>
                <li>• Quarterly private farm day</li>
                <li>• Co-create next empire elements</li>
              </ul>
              <Link to="/membership" className="inline-block bg-[#2d5016] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#1f3a0f] transition">
                Apply for Founders →
              </Link>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-gray-600">
            NDIS participants and sponsored seats available. <Link to="/navigator" className="text-[#c45c26] font-semibold hover:underline">Use the NDIS Navigator →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Circles now</h2>
          <p className="text-gray-700 leading-relaxed">
            One-to-one sessions heal. Circles multiply the field. When people who understand the load gather with the pack energy, the nervous system remembers safety faster and the giving compounds. This is how the dream scales without dilution.
          </p>
        </div>
      </section>
    </div>
  );
}
