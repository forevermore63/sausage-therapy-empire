import type { Route } from "./+types/summit";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Summit 2027 | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The first Therapy Sausages Summit — therapists, NDIS providers, founders and pack people in one room so the method becomes an industry lane.",
    },
  ];
}

export default function Summit() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("practitioner");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/certify" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Certify</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 30 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Summit 2027</h1>
          <p className="text-lg opacity-95">
            One gathering so Sausage Therapy stops being a private miracle and becomes a teachable, billable, Olympic-ready lane. Hybrid farm + live stream. Founding tickets now.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Practitioner seat · $1,200</p>
              <p className="text-sm text-gray-700">Two days on land + replay vault + certificate hours.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">NDIS / org table · $3,800</p>
              <p className="text-sm text-gray-700">Four seats, brand placement, pack meet, follow-up clinic.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Stream pass · $197</p>
              <p className="text-sm text-gray-700">Live + 90-day replay. Feeds Academy upsell.</p>
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
                <h2 className="text-xl font-bold text-[#2d5016]">Reserve founding interest</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={seat} onChange={(e) => setSeat(e.target.value)}>
                  <option value="practitioner">Practitioner seat</option>
                  <option value="org">NDIS / org table</option>
                  <option value="stream">Stream pass</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold my Summit place</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🏆</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Place held</h3>
                <p className="text-gray-700 mb-4">{name} — {seat} is on the founding list.</p>
                <Link to="/academy" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Start Academy now →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
