import type { Route } from "./+types/nomad";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nomad | Wiener Coaster Tour | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Nomad publishes Wiener Coaster tour dates, sponsor kilometres and pop-up pack visits so the mobile clinic earns while it moves.",
    },
  ];
}

const stops = [
  { place: "Gold Coast hinterland", when: "This week", seats: "3 seats" },
  { place: "Noosa / Cooran corridor", when: "Next week", seats: "2 seats" },
  { place: "NSW South Coast scout", when: "October window", seats: "Corporate only" },
];

export default function Nomad() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [km, setKm] = useState("10");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/vessel" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Vessel</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 30 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nomad</h1>
          <p className="text-lg opacity-95">The Wiener Coaster is a clinic on wheels. Nomad turns the next kilometres into booked seats, sponsored fuel and visible movement of the pack.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {stops.map((s) => (
              <div key={s.place} className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
                <p className="font-bold text-[#2d5016]">{s.place}</p>
                <p className="text-sm text-gray-700">{s.when} · {s.seats}</p>
              </div>
            ))}
            <Link to="/vessel" className="block text-[#c45c26] font-semibold">Sponsor kilometres on Vessel →</Link>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Hold a seat or a kilometre</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Kilometres to sponsor</label>
                <input type="range" min="5" max="100" step="5" value={km} onChange={(e) => setKm(e.target.value)} className="w-full" />
                <p className="text-center font-bold text-[#c45c26]">{km} km · ${Number(km) * 3}</p>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lock Nomad</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🚗</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Route marked</h3>
                <p className="text-gray-700 mb-4">{name} — {km} km held. The pack moves because you paid the road.</p>
                <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Book a stop →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
