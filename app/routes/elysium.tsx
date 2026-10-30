import type { Route } from "./+types/elysium";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elysium | Premium Sanctuary Membership | Therapy Sausages" },
    {
      name: "description",
      content:
        "Elysium is the premium digital sanctuary. Exclusive farm visuals, high-touch operator support, giving circles and perpetual impact. $297/month. $60 to dog welfare. The highest layer from true to tremendous.",
    },
  ];
}

export default function Elysium() {
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
          <p className="opacity-90 mb-3">Brand new online element — 31 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elysium</h1>
          <p className="text-lg opacity-95">
            The premium sanctuary. Exclusive hinterland visuals, private operator support, high-touch giving circles and the full weight of the empire behind your growth. $60 of every Elysium month funds dog welfare, land care and free places for those who need them most. The highest field from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Elysium · $297/month</p>
              <p className="text-sm text-gray-700">Premium sanctuary + exclusive drops + private support. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Elysium Lifetime · $7997</p>
              <p className="text-sm text-gray-700">One-time entry. Permanent sanctuary access. $1600 to the dogs.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $60 minimum to dog welfare each month (or $1600 on lifetime). Built for those ready for the highest layer. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-elysium") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-elysium", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter Elysium</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for sanctuary access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Sanctuary</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏛️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are in Elysium</h3>
                <p className="text-gray-700 mb-4">{name}, your first exclusive drop and support link arrive within the hour. The sanctuary holds you.</p>
                <Link to="/spire" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Claim the Spire for full systems install →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
