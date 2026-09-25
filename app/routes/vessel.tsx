import type { Route } from "./+types/vessel";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vessel | Wiener Coaster Routes | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Sponsor a kilometre or book the mobile Toyota Coaster therapy vessel across Gold Coast, Noosa and hinterland routes.",
    },
  ];
}

const routes = [
  { id: "gc", name: "Gold Coast corridor", km: 42, price: 180 },
  { id: "noosa", name: "Noosa to hinterland", km: 38, price: 160 },
  { id: "farm", name: "Forevermore farm run", km: 64, price: 240 },
];

export default function Vessel() {
  const [picked, setPicked] = useState("gc");
  const [done, setDone] = useState(false);
  const routeItem = routes.find((r) => r.id === picked)!;

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vessel</h1>
          <p className="text-lg opacity-95">The Wiener Coaster is the moving clinic. Sponsor a kilometre or book the pack on the road.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {routes.map((r) => (
              <button
                key={r.id}
                onClick={() => setPicked(r.id)}
                className={`w-full text-left bg-white rounded-2xl p-5 border shadow-sm ${
                  picked === r.id ? "border-[#c45c26] ring-2 ring-[#c45c26]/30" : "border-[#c45c26]/10"
                }`}
              >
                <p className="font-bold text-[#c45c26]">{r.name}</p>
                <p className="text-sm text-gray-700">{r.km} km · sponsor from ${r.price}</p>
              </button>
            ))}
            <p className="text-sm text-gray-600">Fuel, insurance, pack care and one free roadside place travel with every sponsored run.</p>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Sponsor {routeItem.name}</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Name or workplace" required />
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Email" type="email" required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">
                  Sponsor ${routeItem.price}
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🚗</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Vessel moving</h3>
                <p className="text-gray-700 mb-4">{routeItem.name} is marked sponsored. Complete payment on Book.</p>
                <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Pay & lock route →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
