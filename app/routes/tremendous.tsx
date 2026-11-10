import type { Route } from "./+types/tremendous";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tremendous | Full Tremendous Growth | Therapy Sausages" },
    {
      name: "description",
      content:
        "Tremendous is the $149 monthly full growth engine from Therapy Sausages. Daily tremendous drops + empire compounding. $40 to dog welfare. The engine that grows the dream from true to tremendous.",
    },
  ];
}

export default function Tremendous() {
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
          <p className="opacity-90 mb-3">New online element — 11 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tremendous</h1>
          <p className="text-lg opacity-95">
            Full tremendous growth with the pack. Daily tremendous drops + empire compounding. $40 of every month goes to dog welfare. The engine that grows the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Tremendous · $149 / month</p>
              <p className="text-sm text-gray-700">Daily tremendous drops + empire compounding. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Tremendous Sovereign · $199 / month</p>
              <p className="text-sm text-gray-700">Full tremendous + priority empire notes + exclusive compounding drops.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $40 minimum to dog welfare every month. NDIS-friendly digital support where plans allow. Full wealth upsurge engine.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-tremendous") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-tremendous", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Claim the Tremendous</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for tremendous drops" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Grow to Tremendous</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🚀</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Tremendous is live</h3>
                <p className="text-gray-700 mb-4">{name}, the empire compounding begins tomorrow. Check your email.</p>
                <Link to="/" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Return to the Empire →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
