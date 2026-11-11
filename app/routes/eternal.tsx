import type { Route } from "./+types/eternal";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eternal | Perpetual Presence | Therapy Sausages" },
    {
      name: "description",
      content:
        "Eternal is the $29 monthly perpetual presence from Therapy Sausages. Continuous soft drops + living pack energy. $7 to dog welfare. The layer that turns true into everlasting tremendous.",
    },
  ];
}

export default function Eternal() {
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
          <p className="opacity-90 mb-3">New online element — 12 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eternal</h1>
          <p className="text-lg opacity-95">
            Perpetual presence with the pack. Continuous soft drops + living pack energy. $7 of every month goes to dog welfare. The layer that turns true into everlasting tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Eternal · $29 / month</p>
              <p className="text-sm text-gray-700">Continuous soft drops + living pack energy. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Eternal Plus · $45 / month</p>
              <p className="text-sm text-gray-700">Full eternal + priority access to Manifest engine.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $7 minimum to dog welfare every month. NDIS-friendly digital support where plans allow.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-eternal") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-eternal", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim the Eternal</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for eternal drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start Eternal</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">♾️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Eternal is claimed</h3>
                <p className="text-gray-700 mb-4">{name}, the living pack energy is now continuous. Check your email.</p>
                <Link to="/manifest" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Manifest next →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
