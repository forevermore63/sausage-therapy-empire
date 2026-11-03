import type { Route } from "./+types/keystone";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Keystone | Foundational Operator | Therapy Sausages" },
    {
      name: "description",
      content:
        "Keystone is the foundational operator system. The lock that holds every other engine in place. High-level blueprints, integration frameworks and dachshund-proven permanence. $199/month or $3997 lifetime. $50/$1000 to dog welfare. Grow the dream from true to tremendous.",
    },
  ];
}

export default function Keystone() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("month");

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
          <p className="opacity-90 mb-3">Brand new online element — 3 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Keystone</h1>
          <p className="text-lg opacity-95">
            The foundational operator. The single system that locks Aurora, Forge, Nova, Vesper and every other engine into one unbreakable structure. Integration blueprints, permanence frameworks, high-level decision maps and the dachshund-proven architecture that makes the whole empire hold. $50 of every monthly Keystone (or $1000 of the lifetime) funds dog welfare, land care and free places. The lock that takes the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Keystone Monthly · $199/month</p>
              <p className="text-sm text-gray-700">Full operator lock + integration systems. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Keystone Lifetime · $3997</p>
              <p className="text-sm text-gray-700">Permanent access. One payment. The structure holds forever.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $50/month or $1000 lifetime minimum to dog welfare. Built for those who want the whole field locked in. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-keystone") || "[]");
              held.push({ name, email, tier, at: new Date().toISOString() });
              localStorage.setItem("st-keystone", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the Keystone</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for operator drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={tier} onChange={(e) => setTier(e.target.value)}>
                  <option value="month">Monthly · $199</option>
                  <option value="lifetime">Lifetime · $3997</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Lock the Keystone</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔒</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Keystone is holding you</h3>
                <p className="text-gray-700 mb-4">{name}, your foundational lock and integration blueprint arrive within the hour. The structure is now permanent.</p>
                <Link to="/forge" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Forge to build on it →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
