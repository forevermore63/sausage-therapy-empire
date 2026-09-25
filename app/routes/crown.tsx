import type { Route } from "./+types/crown";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crown | 2032 Olympic Legacy Hub | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "2032 Brisbane Olympic supplier and legacy hub for animal-assisted wellbeing, accessible therapy and hinterland healing.",
    },
  ];
}

export default function Crown() {
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/legacy" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Legacy</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 26 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crown</h1>
          <p className="text-lg opacity-95">The 2032 lane. Supplier registration, wellbeing programs for athletes and workforce, and a public-facing healing legacy that outlasts the Games.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">ICN / supplier</h3>
            <p className="text-sm text-gray-700">Capability statement ready for animal-assisted wellbeing, accessible events and farm venues.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Workforce calm</h3>
            <p className="text-sm text-gray-700">Pack visits and Pulse programs for build crews, venues and hospitality.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">Community legacy</h3>
            <p className="text-sm text-gray-700">Free places and hinterland access that remain after 2032.</p>
          </div>
        </div>
        <form
          className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          {!done ? (
            <>
              <h2 className="text-xl font-bold text-[#2d5016]">Register interest</h2>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Organisation" required />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Contact email" type="email" required />
              <select className="w-full border rounded-xl px-4 py-3">
                <option>Supplier / ICN</option>
                <option>Venue wellbeing</option>
                <option>Sponsor legacy places</option>
              </select>
              <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Join the Crown list</button>
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-5xl mb-3">👑</p>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">On the Crown list</h3>
              <p className="text-gray-700 mb-4">We will send the capability pack and next ICN steps.</p>
              <Link to="/legacy" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Open Legacy →</Link>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
