import type { Route } from "./+types/chorus";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chorus | Monthly Pack Live | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Join the monthly Pack Chorus — a live 45-minute group healing with the remaining dachshunds. $47 or inside Pact. Giving-first.",
    },
  ];
}

export default function Chorus() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("live");

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
          <p className="opacity-90 mb-3">Brand-New Online Element — 28 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chorus</h1>
          <p className="text-lg opacity-95">
            One live hour a month with the pack. No performance. Shared nervous systems. The five remaining dogs hold the room so you do not have to hold it alone.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">How Chorus works</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
                <li>First Sunday of the month, 10:00 AEST.</li>
                <li>45 minutes live with the pack + 15 minutes quiet close.</li>
                <li>Replay available for 7 days if you cannot attend live.</li>
                <li>A portion funds free Wellspring and Keeper places.</li>
              </ol>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Live Seat · $47</p>
              <p className="text-sm text-gray-700">One month. Camera optional. NDIS-friendly invoice available.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Chorus + Pact · included</p>
              <p className="text-sm text-gray-700">Pact members sit in the front row every month at no extra cost.</p>
            </div>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Hold a seat</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={seat} onChange={(e) => setSeat(e.target.value)}>
                  <option value="live">Live seat · $47</option>
                  <option value="household">Household (2–4) · $79</option>
                  <option value="sponsor">Sponsor 2 free seats · $94</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Reserve Chorus</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🎶</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Seat held</h3>
                <p className="text-gray-700 mb-4">{name || "You"} is in the Chorus. Confirmation and Zoom link follow by email.</p>
                <Link to="/keeper" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Keep a pack member →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
