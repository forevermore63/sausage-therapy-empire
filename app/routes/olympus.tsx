import type { Route } from "./+types/olympus";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Olympus | Peak Sanctuary | Therapy Sausages" },
    {
      name: "description",
      content:
        "Olympus is the ultimate peak sanctuary. Exclusive high-touch support, full empire weight, private circles and perpetual impact. $397/month or $9977 lifetime. $80/$2000 to dog welfare. The highest layer from true to tremendous.",
    },
  ];
}

export default function Olympus() {
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
          <p className="opacity-90 mb-3">Brand new online element — 1 November 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympus</h1>
          <p className="text-lg opacity-95">
            The peak sanctuary. Exclusive high-touch operator support, private giving circles, full empire weight behind your moves, and perpetual impact that compounds at the highest level. $80 of every Olympus month (or $2000 on lifetime) funds dog welfare, land care and free places. The summit from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Olympus · $397/month</p>
              <p className="text-sm text-gray-700">Peak sanctuary + private support + full weight. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Olympus Lifetime · $9977</p>
              <p className="text-sm text-gray-700">One-time entry. Permanent peak access. $2000 to the dogs.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $80 minimum to dog welfare each month (or $2000 on lifetime). Built for those ready for the absolute highest layer. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-olympus") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-olympus", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Ascend to Olympus</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for peak access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Claim the Summit</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏔️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are on Olympus</h3>
                <p className="text-gray-700 mb-4">{name}, your first private support link and exclusive drop arrive within the hour. The summit holds you.</p>
                <Link to="/spire" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Claim the Spire for full systems install →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
