import type { Route } from "./+types/threshold";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Threshold | First-Session Readiness | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Four quiet questions that route you to Harbor, Book, Farm or Pact — so the first contact with the pack is the right load, not a guess.",
    },
  ];
}

const questions = [
  {
    id: "body",
    q: "How is your body with rooms, fragrance and enclosed cars?",
    options: [
      { id: "fragile", label: "Easily overloaded. I need outdoor-first and written notes.", route: "/harbor" },
      { id: "ok", label: "I can do a normal visit if we go gently.", route: "/book" },
      { id: "strong", label: "I am well enough for a farm day.", route: "/farm" },
    ],
  },
  {
    id: "need",
    q: "What do you actually want from the pack?",
    options: [
      { id: "regulate", label: "To come down. Anxiety, grief, startle.", route: "/book" },
      { id: "fund", label: "NDIS or a support-coordinator language path.", route: "/wellspring" },
      { id: "stand", label: "To stand with the work monthly, even if I cannot book yet.", route: "/pact" },
    ],
  },
  {
    id: "where",
    q: "Where should the first contact happen?",
    options: [
      { id: "gc", label: "Gold Coast / Noosa mobile.", route: "/book" },
      { id: "farm", label: "Forevermore Farm hinterland.", route: "/farm" },
      { id: "nsw", label: "NSW South Coast / dual-base.", route: "/bridge" },
    ],
  },
  {
    id: "after",
    q: "What should hold after the session ends?",
    options: [
      { id: "ember", label: "Twelve-night afterglow.", route: "/ember" },
      { id: "pact", label: "A monthly place so others can go too.", route: "/pact" },
      { id: "none", label: "Just the session for now.", route: "/book" },
    ],
  },
];

export default function Threshold() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<string[]>([]);
  const current = questions[step];
  const finished = step >= questions.length;
  const lastRoute = picks[picks.length - 1] || "/book";

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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Engine — 18 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Threshold</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Four quiet questions. One correct first door. No performance. No wrong answers.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-2xl mx-auto">
          {!finished && current && (
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
              <p className="text-sm text-[#c45c26] font-semibold mb-2">Question {step + 1} of {questions.length}</p>
              <h2 className="text-2xl font-bold text-[#2d5016] mb-6">{current.q}</h2>
              <div className="space-y-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setPicks((p) => [...p, opt.route]);
                      setStep((s) => s + 1);
                    }}
                    className="w-full text-left bg-[#fdf6e3] hover:bg-[#c45c26]/10 border border-[#c45c26]/20 rounded-2xl px-5 py-4"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {finished && (
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 text-center">
              <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Your first door is ready</h2>
              <p className="text-gray-700 mb-6">
                Threshold used your last answer as the cleanest next step. You can still change doors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={lastRoute} className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">
                  Walk through that door →
                </Link>
                <Link to="/harbor" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">
                  Or start in Harbor
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
