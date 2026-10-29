import type { Route } from "./+types/nexus";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nexus | Empire Integration Layer | Therapy Sausages" },
    {
      name: "description",
      content:
        "Nexus is the empire integration layer. One live dashboard connecting bookings, NDIS, grants, visual wealth, giving and perpetual engines. $197/month. $40 to dog welfare. From true to tremendous.",
    },
  ];
}

export default function Nexus() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book Full Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand new online element — 30 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexus</h1>
          <p className="text-lg opacity-95">
            The empire integration layer. One living dashboard that connects bookings, NDIS pipelines, grant tracking, visual wealth, giving funnels and perpetual engines into a single field of visibility and automation. Soft system drops, live scoreboard and automatic giving. $40 of every Nexus month goes to dog welfare and free places. The connection point that expands the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nexus · $197/month</p>
              <p className="text-sm text-gray-700">Live integration dashboard + automation drops + impact tracking. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nexus Annual · $1,997</p>
              <p className="text-sm text-gray-700">Full year of systems integration + priority support.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $40 minimum to dog welfare each month. Designed for operators, NDIS providers and empire builders who want every stream visible and compounding. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-nexus") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-nexus", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the Nexus</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for integration access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Connect the Field</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔗</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are in the Nexus</h3>
                <p className="text-gray-700 mb-4">{name}, your first integration map and dashboard link arrive within the hour. Everything is now visible.</p>
                <Link to="/helix" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Helix for compounding systems →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
