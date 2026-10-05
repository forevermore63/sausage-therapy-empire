import type { Route } from "./+types/relay";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Relay | Offer Router | Therapy Sausages" },
    {
      name: "description",
      content:
        "Relay asks three questions and routes a person to the Therapy Sausages offer that fits: Night Watch, Dispatch, Olympiad, Aftercare, Patron or a live session.",
    },
  ];
}

export default function Relay() {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState("");
  const [where, setWhere] = useState("");
  const [money, setMoney] = useState("");

  const path = (() => {
    if (need === "sleep") return { to: "/nightwatch", label: "Night Watch", why: "The late window is the fit." };
    if (need === "arrive") return { to: "/dispatch", label: "Dispatch", why: "The pack needs to come to you." };
    if (need === "games") return { to: "/olympiad", label: "Olympiad Desk", why: "This is a 2032 pathway, not a single booking." };
    if (money === "small") return { to: "/patron", label: "Patron Circle", why: "Start with a monthly give that still moves the Ledger." };
    if (where === "after") return { to: "/aftercare", label: "Aftercare", why: "You already had the moment. Keep it for seven days." };
    return { to: "/meridian", label: "Meridian", why: "A screen-side visit is the fastest true contact." };
  })();

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
          <Link to="/book" className="text-sm font-semibold">Book</Link>
        </div>
      </header>
      <section className="max-w-xl mx-auto px-4 py-16">
        <p className="text-[#c45c26] font-semibold mb-2">New online element — 6 October 2026</p>
        <h1 className="text-4xl font-bold text-[#2d5016] mb-4">Relay</h1>
        <p className="text-gray-700 mb-8">Three questions. One door. No browsing the whole empire to find the next true step.</p>
        {step === 0 && (
          <div className="space-y-3">
            <p className="font-semibold">What do you need this week?</p>
            {[["sleep", "Help dropping at night"], ["arrive", "The pack to come to us"], ["games", "A 2032 or sponsor path"], ["calm", "A person or family session"]].map(([id, label]) => (
              <button key={id} className="w-full bg-white rounded-xl px-4 py-3 text-left" onClick={() => { setNeed(id); setStep(1); }}>{label}</button>
            ))}
          </div>
        )}
        {step === 1 && (
          <div className="space-y-3">
            <p className="font-semibold">Where are you in the story?</p>
            {[["new", "Never met the pack"], ["after", "Already had a session"], ["org", "Booking for a workplace"]].map(([id, label]) => (
              <button key={id} className="w-full bg-white rounded-xl px-4 py-3 text-left" onClick={() => { setWhere(id); setStep(2); }}>{label}</button>
            ))}
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <p className="font-semibold">What can move this month?</p>
            {[["small", "Under $40"], ["mid", "$40 to $200"], ["large", "A day rate or retainer"]].map(([id, label]) => (
              <button key={id} className="w-full bg-white rounded-xl px-4 py-3 text-left" onClick={() => { setMoney(id); setStep(3); }}>{label}</button>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-6">
            <p className="text-sm text-gray-500 mb-2">Relay says</p>
            <h2 className="text-2xl font-bold text-[#c45c26] mb-2">{path.label}</h2>
            <p className="text-gray-700 mb-4">{path.why}</p>
            <Link to={path.to} className="bg-[#c45c26] text-white px-6 py-3 rounded-full inline-block">Open {path.label} →</Link>
          </div>
        )}
      </section>
    </div>
  );
}
