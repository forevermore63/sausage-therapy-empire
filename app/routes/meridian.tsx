import type { Route } from "./+types/meridian";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meridian | Screen-Side Pack Sessions | Therapy Sausages" },
    {
      name: "description",
      content:
        "Meridian is the online session lane for Therapy Sausages. Book a screen-side pack visit from anywhere in Australia. Wellness support, NDIS-friendly only where a qualified practitioner and plan allow.",
    },
  ];
}

const slots = ["Tue 10:00 AEST", "Wed 16:30 AEST", "Thu 11:00 AEST", "Sat 09:30 AEST"];

export default function Meridian() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [slot, setSlot] = useState(slots[0]);
  const [lane, setLane] = useState("private");

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
          <p className="opacity-90 mb-3">New online element — 5 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meridian</h1>
          <p className="text-lg opacity-95">
            The pack on the other side of the screen. A 40-minute screen-side visit for people who cannot get to the Gold Coast, Noosa or Forevermore Farm this week. True presence. Tremendous reach.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">What you get</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Live miniature dachshunds, not a recording.</li>
                <li>A simple regulation sequence you can repeat alone.</li>
                <li>A written after-note emailed the same day.</li>
                <li>10% of every paid visit funds a Wellspring place.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Private Meridian · $89</p>
              <p className="text-sm text-gray-700">One person or household. 40 minutes.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Care-team Meridian · $149</p>
              <p className="text-sm text-gray-700">Participant plus support worker or family. Shared language after.</p>
            </div>
            <p className="text-xs text-gray-500">
              NDIS funding for animal-assisted therapy is only available when a qualified health professional delivers it, it is in the plan, and it is reasonable and necessary. Meridian is booked as wellness support unless that standard is met.
            </p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-meridian") || "[]");
              held.push({ name, slot, lane, at: new Date().toISOString() });
              localStorage.setItem("st-meridian", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Hold a screen-side seat</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Lane</label>
                <select className="w-full border rounded-xl px-4 py-3" value={lane} onChange={(e) => setLane(e.target.value)}>
                  <option value="private">Private · $89</option>
                  <option value="care">Care-team · $149</option>
                </select>
                <label className="block text-sm text-gray-600">First open window</label>
                <select className="w-full border rounded-xl px-4 py-3" value={slot} onChange={(e) => setSlot(e.target.value)}>
                  {slots.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold Meridian</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">📡</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Seat held</h3>
                <p className="text-gray-700 mb-4">{name} · {lane} · {slot}. We confirm by email.</p>
                <Link to="/dawn" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Dawn mornings →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
