import type { Route } from "./+types/pulse";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pulse | Weekly Pack Check-In | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "A 7-minute weekly nervous-system pulse with the pack. Low-energy days still count. $19 or inside Pact. Giving-first.",
    },
  ];
}

export default function Pulse() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [energy, setEnergy] = useState("3");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 26 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pulse</h1>
          <p className="text-lg opacity-95">Seven minutes. One honest check-in. The pack holds the beat so you do not have to invent motivation every week.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">How Pulse works</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
                <li>Join for $19 / month or free inside Pact.</li>
                <li>Every Sunday you get a 7-minute pack pulse: breath, body, load, one small next step.</li>
                <li>Low-energy days still count. Zero performance.</li>
                <li>A portion funds free places on Wellspring.</li>
              </ol>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Solo Pulse · $19/mo</p>
              <p className="text-sm text-gray-700">Weekly audio + written check-in. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Household Pulse · $29/mo</p>
              <p className="text-sm text-gray-700">NDIS-friendly family check-in. Same beat, shared language.</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Start this week’s pulse</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Energy today (1–5)</label>
                <input type="range" min="1" max="5" value={energy} onChange={(e) => setEnergy(e.target.value)} className="w-full" />
                <p className="text-center font-bold text-[#c45c26]">{energy} / 5</p>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lock my Pulse</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">❤️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Pulse held</h3>
                <p className="text-gray-700 mb-4">{name || "You"} checked in at energy {energy}. That is enough.</p>
                <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add a live session →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
