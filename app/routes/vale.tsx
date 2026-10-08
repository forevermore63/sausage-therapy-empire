import type { Route } from "./+types/vale";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vale | 14-Day Companion After Loss | Therapy Sausages" },
    {
      name: "description",
      content:
        "Vale is a 14-day online companion from Sausage Therapy after the loss of a dog or a person. $47. A portion supports dog welfare.",
    },
  ];
}

const DAYS = [
  "Day 1 — Name who is gone. One sentence is enough.",
  "Day 2 — Drink water. Step outside for two minutes.",
  "Day 3 — A photo, or the decision not to look yet.",
  "Day 4 — Tell one safe person you are in the vale.",
  "Day 5 — A short walk. No performance.",
  "Day 6 — Write what they taught your hands.",
  "Day 7 — Rest day. The pack keeps the watch.",
  "Day 8 — One ordinary meal, eaten sitting down.",
  "Day 9 — A song, a collar, or silence.",
  "Day 10 — Notice one thing that is still alive.",
  "Day 11 — Ask for a Meridian seat if you want company.",
  "Day 12 — Give $2 onward, or keep it. Both are allowed.",
  "Day 13 — Say their name out loud once.",
  "Day 14 — Close the fortnight. The door stays open.",
];

export default function Vale() {
  const [name, setName] = useState("");
  const [forWhom, setForWhom] = useState("");
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/meridian" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Meridian</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 9 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vale</h1>
          <p className="text-lg opacity-95">
            Fourteen quiet days after a dog or a person is gone. Written from a pack that already knows this road. $47. Ten dollars to dog welfare.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto">
          {!open ? (
            <form
              className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const rows = JSON.parse(localStorage.getItem("st-vale") || "[]");
                rows.push({ name, forWhom, at: new Date().toISOString(), amount: 47 });
                localStorage.setItem("st-vale", JSON.stringify(rows));
                setOpen(true);
              }}
            >
              <h2 className="text-xl font-bold text-[#2d5016]">Open the fortnight · $47</h2>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Who this is for, if you want to say" value={forWhom} onChange={(e) => setForWhom(e.target.value)} />
              <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Begin Vale</button>
              <p className="text-xs text-gray-500">Companion notes, not counselling and not a crisis service. Lifeline 13 11 14. Hold saved on this device until payment is wired.</p>
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <p className="text-sm text-[#c45c26] font-semibold mb-2">Day {day + 1} of 14 {forWhom ? `· for ${forWhom}` : ""}</p>
              <h2 className="text-2xl font-bold text-[#2d5016] mb-4">{DAYS[day]}</h2>
              <div className="flex gap-3">
                <button className="border border-[#c45c26] text-[#c45c26] font-semibold px-4 py-2 rounded-full" disabled={day === 0} onClick={() => setDay((d) => Math.max(0, d - 1))}>Back</button>
                <button className="bg-[#c45c26] text-white font-semibold px-4 py-2 rounded-full" disabled={day === 13} onClick={() => setDay((d) => Math.min(13, d + 1))}>Next day</button>
              </div>
              <p className="mt-6">
                <Link to="/meridian" className="text-[#c45c26] font-semibold">Sit with the pack on screen →</Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
