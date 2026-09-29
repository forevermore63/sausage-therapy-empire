import type { Route } from "./+types/aegis";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aegis | Air & Load Shield | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Aegis is the online shield for immunocompromised and CIRS-sensitive people. Pack-informed air, load and room guidance plus paid protection membership.",
    },
  ];
}

export default function Aegis() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [layer, setLayer] = useState("blackening");

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
          <p className="opacity-90 mb-3">Brand-New Online Element — 30 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aegis</h1>
          <p className="text-lg opacity-95">
            The shield for people whose air already cost them years. The pack pointed at the load. Aegis turns that pointing into daily protection, paid memberships and funded free places.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">What Aegis sells</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Daily air-and-load briefing for sensitive bodies.</li>
                <li>Room protocol cards the pack already proved in real houses.</li>
                <li>Priority booking when driving through storms or black layers.</li>
                <li>A portion of every membership funds Wellspring free sessions.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Aegis Shield · $39/mo</p>
              <p className="text-sm text-gray-700">Daily brief + protocol library. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Aegis Household · $59/mo</p>
              <p className="text-sm text-gray-700">NDIS-friendly family shield. Shared language for carers.</p>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Raise the shield today</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">What is attaching most today?</label>
                <select className="w-full border rounded-xl px-4 py-3" value={layer} onChange={(e) => setLayer(e.target.value)}>
                  <option value="blackening">Blackening / visible layer</option>
                  <option value="plume">Moving plume or storm</option>
                  <option value="room">A room that still feels loaded</option>
                  <option value="drive">Driving and need a route</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lock Aegis</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🛡️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Shield raised</h3>
                <p className="text-gray-700 mb-4">{name || "You"} — {layer} is logged. The pack holds the line.</p>
                <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add a live session →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
