import type { Route } from "./+types/lumina";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lumina | Daily Pack Light Immersion | Therapy Sausages" },
    {
      name: "description",
      content:
        "Lumina is the $29/month daily pack light immersion from Therapy Sausages. Visual + audio dachshund presence drops, high-quality farm and therapy moments on demand. $7 to dog welfare. Grow from true to tremendous.",
    },
  ];
}

export default function Lumina() {
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
          <p className="opacity-90 mb-3">Brand new online element — 26 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lumina</h1>
          <p className="text-lg opacity-95">
            Daily pack light immersion. High-quality visual and audio drops of the dachshunds in therapy, farm presence and healing moments, delivered every day. No travel required. $7 of every month goes to dog welfare. The light that keeps the empire glowing from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Lumina · $29 / month</p>
              <p className="text-sm text-gray-700">Daily visual + audio pack drops. Cancel anytime. Instant first drop on claim.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Lumina + Nova · $67</p>
              <p className="text-sm text-gray-700">Monthly light plus the 7-session instant immersion.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $7 minimum to dog welfare each month. Perfect daily presence when full sessions are not possible. Complements stock and visual monetization pathways.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-lumina") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-lumina", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim Lumina</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for daily drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Ignite Lumina</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">✨</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Lumina is glowing</h3>
                <p className="text-gray-700 mb-4">{name}, your first pack light drop arrives within the hour.</p>
                <Link to="/nova" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Nova for instant immersion →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
