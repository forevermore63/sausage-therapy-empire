import type { Route } from "./+types/charter";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Charter | Workplace Pack Retainer | Therapy Sausages" },
    {
      name: "description",
      content:
        "Charter is the annual online workplace lane for Therapy Sausages. Quarterly pack visits, a named host, and a giving receipt. From $4,800 a year.",
    },
  ];
}

export default function Charter() {
  const [done, setDone] = useState(false);
  const [org, setOrg] = useState("");
  const [seats, setSeats] = useState("40");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/corporate" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Corporate</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 5 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Charter</h1>
          <p className="text-lg opacity-95">
            One signature. Four pack days a year. A workplace that stops treating wellbeing as a poster. Built for Gold Coast, Noosa, Brisbane and teams who will meet the Wiener Coaster.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">House Charter · $4,800 / year</p>
              <p className="text-sm text-gray-700">Up to 40 people. Four on-site or hybrid visits. Named host. Impact note each quarter.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Campus Charter · $9,600 / year</p>
              <p className="text-sm text-gray-700">Two sites or one site plus a farm day. Priority Nomad kilometre. 10% given to dog welfare.</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <li>Invoice-ready for workplace wellbeing budgets.</li>
              <li>Not a clinical service. Clear boundaries in the agreement.</li>
              <li>Olympic-lane ready language for 2032 supplier conversations.</li>
            </ul>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-charter") || "[]");
              held.push({ org, seats, at: new Date().toISOString() });
              localStorage.setItem("st-charter", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Open a Charter</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Organisation" value={org} onChange={(e) => setOrg(e.target.value)} required />
                <label className="block text-sm text-gray-600">People on site</label>
                <select className="w-full border rounded-xl px-4 py-3" value={seats} onChange={(e) => setSeats(e.target.value)}>
                  <option value="40">Up to 40 · House</option>
                  <option value="120">Up to 120 · Campus</option>
                  <option value="custom">More than 120 · custom</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Request the Charter</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">📜</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Charter requested</h3>
                <p className="text-gray-700 mb-4">{org} · {seats} people. We send the one-page agreement.</p>
                <Link to="/ribbon" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Ribbon gifts →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
