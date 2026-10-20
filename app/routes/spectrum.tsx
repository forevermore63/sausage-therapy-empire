import type { Route } from "./+types/spectrum";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spectrum | Healing Pathway Assessment | Therapy Sausages" },
    {
      name: "description",
      content:
        "Spectrum is the free-to-start healing pathway assessment from Therapy Sausages. Discover your load and the exact next online element. Giving-first.",
    },
  ];
}

export default function Spectrum() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { q: "How heavy does your nervous system feel most days?", opts: [1,2,3,4,5] },
    { q: "How easily do you settle after a hard moment?", opts: [5,4,3,2,1] },
    { q: "How much pure presence (no agenda) do you get each week?", opts: [1,2,3,4,5] },
  ];

  const result = score >= 12 ? { level: "Light Load", rec: "/echo", label: "Begin Echo" } :
                 score >= 8 ? { level: "Moderate Load", rec: "/pulse", label: "Start Pulse" } :
                 { level: "High Load", rec: "/hours", label: "Protect a Sausage Hour" };

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
          <p className="opacity-90 mb-3">New online element — 21 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spectrum</h1>
          <p className="text-lg opacity-95">Three honest questions. Instant pathway. Convert the insight into the exact engine that serves you now.</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10">
          {step < questions.length ? (
            <>
              <h2 className="text-xl font-bold text-[#2d5016] mb-4">{questions[step].q}</h2>
              <div className="space-y-3">
                {questions[step].opts.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => { setScore(score + v); setStep(step + 1); }}
                    className="w-full text-left border border-gray-200 rounded-xl px-5 py-4 hover:border-[#c45c26] hover:bg-[#fdf6e3]"
                  >
                    {i + 1} — {v === 5 ? "Almost never / easily" : v === 1 ? "Nearly always / hard" : "In between"}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-5xl mb-3">🌈</p>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">{result.level}</h3>
              <p className="text-gray-700 mb-6">Your pathway is ready.</p>
              <Link to={result.rec} className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">{result.label} →</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
