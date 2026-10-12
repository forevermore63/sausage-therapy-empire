import type { Route } from "./+types/catalyst";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Catalyst | Team Ignition | Therapy Sausages" },
    {
      name: "description",
      content:
        "Catalyst is the $297 five-day team ignition from Therapy Sausages. Micro pack presence for workplaces. $50 to dog welfare. Door into Charter and lasting wellness.",
    },
  ];
}

export default function Catalyst() {
  const [done, setDone] = useState(false);
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");

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
          <p className="opacity-90 mb-3">New online element — 13 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalyst</h1>
          <p className="text-lg opacity-95">
            Five-day team ignition. Micro pack presence delivered to the workplace. $50 of every Catalyst goes to dog care. The spark that opens Charter and lasting calm.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Catalyst · $297</p>
              <p className="text-sm text-gray-700">Five daily pack moments for a team. Email delivery + simple reporting.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Catalyst to Charter</p>
              <p className="text-sm text-gray-700">Credit toward annual Charter retainer. Seamless path to deeper impact.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $50 minimum to dog welfare. Ideal entry for offices exploring animal-assisted wellness.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-catalyst") || "[]");
              held.push({ org, contact, at: new Date().toISOString() });
              localStorage.setItem("st-catalyst", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Ignite Catalyst</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Organisation name" value={org} onChange={(e) => setOrg(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Contact name & email" value={contact} onChange={(e) => setContact(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start the Ignition</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">⚡</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Catalyst is lit</h3>
                <p className="text-gray-700 mb-4">{org}, the team ignition begins. We will confirm by email.</p>
                <Link to="/charter" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Explore full Charter →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
