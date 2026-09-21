import type { Route } from "./+types/kindling";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kindling | Gift a Session | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Gift a Sausage Therapy session, farm day or free-place sponsorship. One form. Instant digital certificate. Giving-first.",
    },
  ];
}

const gifts = [
  { id: "spark", name: "Spark", price: 28, desc: "Funds one sponsored hour toward a free place." },
  { id: "flame", name: "Flame", price: 150, desc: "Full individual or family healing session, gifted." },
  { id: "hearth", name: "Hearth", price: 380, desc: "Day immersion at Forevermore Farm for someone who needs land." },
  { id: "constellation", name: "Constellation", price: 450, desc: "Corporate or group pack visit gifted to a workplace or school." },
];

export default function Kindling() {
  const [picked, setPicked] = useState("flame");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);
  const gift = gifts.find((g) => g.id === picked)!;

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
          <p className="opacity-90 mb-3">Brand-New Online Element — 22 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kindling</h1>
          <p className="text-lg opacity-95">Gift the pack. Someone else gets the wag. The well stays full.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            {gifts.map((g) => (
              <button
                key={g.id}
                onClick={() => setPicked(g.id)}
                className={`w-full text-left bg-white rounded-2xl p-5 border shadow-sm ${
                  picked === g.id ? "border-[#c45c26] ring-2 ring-[#c45c26]/30" : "border-[#c45c26]/10"
                }`}
              >
                <p className="font-bold text-[#c45c26]">{g.name} · ${g.price}</p>
                <p className="text-sm text-gray-700">{g.desc}</p>
              </button>
            ))}
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
                <h2 className="text-xl font-bold text-[#2d5016]">Send {gift.name}</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="From (your name)" value={from} onChange={(e) => setFrom(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" placeholder="To (recipient)" value={to} onChange={(e) => setTo(e.target.value)} required />
                <textarea className="w-full border rounded-xl px-4 py-3" rows={3} placeholder="Note on the certificate" value={note} onChange={(e) => setNote(e.target.value)} />
                <p className="text-sm text-gray-600">Checkout wires to Stripe on the live Book flow. This Kindling form captures the gift intent and certificate copy now.</p>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Create certificate · ${gift.price}</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔥</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Kindling lit</h3>
                <p className="text-gray-700 mb-4">{from || "A friend"} gifted {gift.name} to {to || "someone who needs the pack"}.</p>
                <p className="italic text-gray-600 mb-6">“{note || "May the wags find you."}”</p>
                <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Complete payment on Book →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
