import type { Route } from "./+types/wick";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wick | $9 Spark with the Pack | Therapy Sausages" },
    {
      name: "description",
      content:
        "Wick is the $9 online spark for Sausage Therapy. A 90-second regulation with the pack, a shareable line, and a path into Dawn. From true to tremendous.",
    },
  ];
}

const LINES = [
  "Feet on the floor. One long out-breath. The pack is already here.",
  "Name three things you can hear. The smallest wag counts.",
  "Shoulders down. Jaw soft. You do not have to finish the day to begin it.",
  "Hand on the chest. Four counts in, six counts out. That is the whole job.",
];

export default function Wick() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lit, setLit] = useState(false);
  const [line, setLine] = useState(LINES[0]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/dawn" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Dawn $19</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 9 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wick</h1>
          <p className="text-lg opacity-95">
            The smallest paid door in the empire. Nine dollars. Ninety seconds. A line from the kennel you can use tonight and send to one person who needs it.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">What you get</p>
              <ul className="text-sm text-gray-700 mt-3 space-y-2">
                <li>A 90-second regulation script with the pack.</li>
                <li>One shareable line, saved on this device.</li>
                <li>A direct step into Dawn at $19 a month if the spark holds.</li>
                <li>$2 of every Wick goes to dog welfare on the Ledger.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="text-sm text-gray-700">Support, not treatment. Not a clinical service and not an NDIS claim on its own. If you are in crisis, contact local emergency services or Lifeline 13 11 14.</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const pick = LINES[Math.floor(Math.random() * LINES.length)];
              setLine(pick);
              const held = JSON.parse(localStorage.getItem("st-wick") || "[]");
              held.push({ name, email, line: pick, at: new Date().toISOString(), amount: 9 });
              localStorage.setItem("st-wick", JSON.stringify(held));
              setLit(true);
            }}
          >
            {!lit ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Light the Wick · $9</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for the receipt" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Light it</button>
                <p className="text-xs text-gray-500">Hold is saved on this device until Stripe is wired. Price is $9 AUD.</p>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-5xl mb-3">🕯️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Wick is lit</h3>
                <p className="text-gray-700 mb-4">{line}</p>
                <button
                  type="button"
                  className="border border-[#c45c26] text-[#c45c26] font-semibold px-5 py-2 rounded-full mb-4"
                  onClick={() => navigator.clipboard?.writeText(line)}
                >
                  Copy the line
                </button>
                <div>
                  <Link to="/dawn" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Keep it with Dawn →</Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
