import type { Route } from "./+types/ignition";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ignition Protocol | First Fire for Tremendous Growth | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Ignition Protocol turns the next 72 hours into booked sessions, visible giving, and content that sells. First fire for Sausage Therapy — from true to tremendous.",
    },
  ];
}

const steps = [
  {
    title: "Hour 0–6 · Signal",
    detail: "Post one authentic pack moment + link to /book. Message three warm leads (NDIS planner, corporate contact, past client).",
  },
  {
    title: "Hour 6–24 · Offer",
    detail: "Open two session slots this week. Add one gift voucher and one Dream Seed Fund match so giving is visible.",
  },
  {
    title: "Hour 24–48 · Capture",
    detail: "Send the Resonance Field match to anyone who replies. Route corporates to /corporate and farm enquiries to /retreat.",
  },
  {
    title: "Hour 48–72 · Lock",
    detail: "Confirm bookings. Drop one Wave Amplifier clip. Log the orbit inside Live Command. Seed the next harvest window.",
  },
];

export default function Ignition() {
  const [done, setDone] = useState<number[]>([]);

  const toggle = (i: number) => {
    setDone((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/constellation" className="hover:text-[#c45c26]">Constellation</Link>
            <Link to="/harvest" className="hover:text-[#c45c26]">Harvest</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 14 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ignition Protocol</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Tremendous does not start with more pages. It starts with fire in the next 72 hours:
            signals, offers, captures, locks. Tick each step. Then let Orbit keep it spinning.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => toggle(i)}
              className={`w-full text-left p-6 rounded-2xl border-2 transition ${
                done.includes(i)
                  ? "border-[#2d5016] bg-white shadow-md"
                  : "border-[#c45c26]/15 bg-white/80 hover:border-[#c45c26]/40"
              }`}
            >
              <div className="flex gap-4 items-start">
                <span className="text-2xl">{done.includes(i) ? "✅" : "🔥"}</span>
                <div>
                  <h3 className="font-bold text-[#c45c26] mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.detail}</p>
                </div>
              </div>
            </button>
          ))}

          <div className="bg-[#2d5016] text-white rounded-2xl p-8 text-center mt-8">
            <p className="text-xl font-bold mb-3">
              {done.length === steps.length ? "Ignition complete. Feed Orbit and Harvest." : `${done.length} / ${steps.length} fires lit`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                Open Booking
              </Link>
              <Link to="/orbit" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                Activate Orbit
              </Link>
              <Link to="/harvest" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                Open Harvest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
