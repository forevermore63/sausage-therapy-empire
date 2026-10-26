import type { Route } from "./+types/nimbus";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nimbus | Cloud of Daily Pack Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Nimbus is the $19/month cloud of daily pack micro-presence from Therapy Sausages. Soft audio, short visuals and nervous-system drops on demand. $5 to dog welfare. Grow from true to tremendous.",
    },
  ];
}

export default function Nimbus() {
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
          <p className="opacity-90 mb-3">Brand new online element — 27 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimbus</h1>
          <p className="text-lg opacity-95">
            The cloud of daily pack micro-presence. Soft audio drops, short visual moments and nervous-system resets from the dachshunds, delivered every day in your pocket. No travel, no performance. $5 of every month goes to dog welfare. The gentle cloud that keeps the empire present from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nimbus · $19 / month</p>
              <p className="text-sm text-gray-700">Daily micro-presence drops. Cancel anytime. Instant first cloud on claim.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Nimbus + Lumina · $39</p>
              <p className="text-sm text-gray-700">Micro cloud plus full daily light immersion.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $5 minimum to dog welfare each month. Perfect companion for travel, work or quiet days. Complements all presence engines.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-nimbus") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-nimbus", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim Nimbus</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for daily cloud" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Enter the Nimbus</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">☁️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Nimbus is around you</h3>
                <p className="text-gray-700 mb-4">{name}, your first pack micro-presence arrives within the hour.</p>
                <Link to="/lumina" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Lumina for full light →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
