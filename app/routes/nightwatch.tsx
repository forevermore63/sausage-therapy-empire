import type { Route } from "./+types/nightwatch";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Night Watch | Overnight Pack Calm | Therapy Sausages" },
    {
      name: "description",
      content:
        "Night Watch is the overnight online lane for Therapy Sausages. A quiet screen-side pack settling ritual for people who cannot sleep. From $39, or $59 a month.",
    },
  ];
}

export default function NightWatch() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [lane, setLane] = useState("single");
  const [slot, setSlot] = useState("21:30 AEST");

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
          <p className="opacity-90 mb-3">New online element — 6 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Night Watch</h1>
          <p className="text-lg opacity-95">
            The pack settles. You settle. A 25-minute late screen visit for the hours when the mind will not drop. Not a sleep clinic. A living ritual you can book tonight.
          </p>
        </div>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#2d5016] mb-2">What happens</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Lights low. Voices low. Dogs already on their beds.</li>
                <li>A three-beat settling sequence: name the room, match the breath, watch one dog fully drop.</li>
                <li>A one-page night card you keep on the phone.</li>
                <li>10% funds a Wellspring place for someone who cannot pay.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <p className="font-bold text-[#c45c26]">Single Night Watch · $39</p>
              <p className="text-sm text-gray-700">One household. 25 minutes. Same-week window.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <p className="font-bold text-[#c45c26]">Night Watch Circle · $59 / month</p>
              <p className="text-sm text-gray-700">Four late windows a month plus the night card library.</p>
            </div>
            <p className="text-xs text-gray-500">Wellness support, not a medical sleep treatment. If sleep collapse is severe, keep your clinician in the loop.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-nightwatch") || "[]");
              held.push({ name, lane, slot, at: new Date().toISOString() });
              localStorage.setItem("st-nightwatch", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Hold a late window</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={lane} onChange={(e) => setLane(e.target.value)}>
                  <option value="single">Single · $39</option>
                  <option value="circle">Circle · $59 / month</option>
                </select>
                <select className="w-full border rounded-xl px-4 py-3" value={slot} onChange={(e) => setSlot(e.target.value)}>
                  <option>21:30 AEST</option>
                  <option>22:15 AEST</option>
                  <option>Sunday 20:45 AEST</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold Night Watch</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌙</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Window held</h3>
                <p className="text-gray-700 mb-4">{name} · {lane} · {slot}. Confirm by email.</p>
                <Link to="/aftercare" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add the 7-day Aftercare →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
