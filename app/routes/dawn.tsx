import type { Route } from "./+types/dawn";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dawn | Morning Pack Ritual | Therapy Sausages" },
    {
      name: "description",
      content:
        "Dawn is the $19 a month morning ritual from Therapy Sausages. Three minutes with the pack before the day takes you. Cancel any time.",
    },
  ];
}

export default function Dawn() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [hour, setHour] = useState("6:30");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/membership" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Membership</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 5 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dawn</h1>
          <p className="text-lg opacity-95">
            A three-minute pack check-in before the world starts asking. Recurring revenue that also keeps the dogs fed, trained and ready for the people who need them most.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Dawn · $19 / month</p>
              <p className="text-sm text-gray-700">Weekday audio plus a still of the pack. Pause any month.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Dawn Household · $29 / month</p>
              <p className="text-sm text-gray-700">Two listeners. Shared streak. One free Meridian credit every quarter.</p>
            </div>
            <p className="text-sm text-gray-700">Ten percent of Dawn goes straight to dog care and Wellspring places. The rest keeps the online lane alive while you sleep.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-dawn") || "[]");
              held.push({ name, hour, at: new Date().toISOString() });
              localStorage.setItem("st-dawn", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Start tomorrow morning</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Send the ritual at</label>
                <select className="w-full border rounded-xl px-4 py-3" value={hour} onChange={(e) => setHour(e.target.value)}>
                  <option>5:30</option>
                  <option>6:30</option>
                  <option>7:30</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Join Dawn</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌅</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Dawn is set</h3>
                <p className="text-gray-700 mb-4">{name}, first ritual at {hour}. The pack will be there.</p>
                <Link to="/meridian" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Book a live Meridian →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
