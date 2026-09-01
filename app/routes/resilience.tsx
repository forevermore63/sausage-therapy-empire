import type { Route } from "./+types/resilience";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resilience Score Assessment • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Free interactive Resilience Score Assessment. Discover your current nervous-system load, receive a personalised Sausage Therapy pathway, and convert insight into real healing sessions, packs or memberships. Giving-first.",
    },
  ];
}

const questions = [
  {
    id: 1,
    text: "How often do you feel wired or exhausted for no clear reason?",
    options: [
      { label: "Almost never", score: 4 },
      { label: "A few times a week", score: 3 },
      { label: "Most days", score: 2 },
      { label: "Nearly every day", score: 1 },
    ],
  },
  {
    id: 2,
    text: "How easy is it for you to settle after stress or conflict?",
    options: [
      { label: "I settle quickly", score: 4 },
      { label: "It takes a while but I get there", score: 3 },
      { label: "I stay activated for hours", score: 2 },
      { label: "I rarely feel settled", score: 1 },
    ],
  },
  {
    id: 3,
    text: "Do animals or nature reliably shift your state?",
    options: [
      { label: "Yes — almost always", score: 4 },
      { label: "Often", score: 3 },
      { label: "Sometimes", score: 2 },
      { label: "Rarely or never", score: 1 },
    ],
  },
  {
    id: 4,
    text: "How connected do you feel to a sense of purpose or belonging right now?",
    options: [
      { label: "Strongly connected", score: 4 },
      { label: "Moderately", score: 3 },
      { label: "Weakly", score: 2 },
      { label: "Disconnected", score: 1 },
    ],
  },
  {
    id: 5,
    text: "How often do you get genuine, uninterrupted presence with another being (human or animal)?",
    options: [
      { label: "Daily", score: 4 },
      { label: "A few times a week", score: 3 },
      { label: "Weekly or less", score: 2 },
      { label: "Almost never", score: 1 },
    ],
  },
];

function getPathway(score: number) {
  if (score >= 18) {
    return {
      level: "Strong Foundation",
      color: "text-[#2d5016]",
      message:
        "Your system already has good recovery capacity. The next leap is deeper presence, purpose amplification and optional contribution through sponsorship or ambassador pathways.",
      cta: [
        { to: "/membership", label: "Join Sausage Circle" },
        { to: "/hours", label: "Protect a Sausage Hour" },
        { to: "/sponsor", label: "Sponsor Impact" },
      ],
    };
  }
  if (score >= 13) {
    return {
      level: "Moderate Load",
      color: "text-[#d4a017]",
      message:
        "You are functioning but carrying noticeable load. Structured animal-assisted contact, guided packs and consistent micro-practices will restore capacity quickly.",
      cta: [
        { to: "/book", label: "Book a Healing Session" },
        { to: "/subscribe", label: "Monthly Healing Packs" },
        { to: "/calm", label: "7-Day Calm Challenge" },
      ],
    };
  }
  return {
    level: "High Load — Priority Support",
    color: "text-[#c45c26]",
    message:
      "Your nervous system is under significant sustained pressure. Direct pack contact, NDIS-aligned pathways and protected presence hours are the highest-leverage next steps.",
    cta: [
      { to: "/book", label: "Book Priority Session" },
      { to: "/ndis", label: "NDIS & Funding Portal" },
      { to: "/navigator", label: "Funding Navigator" },
      { to: "/hours", label: "Claim a Sponsored Hour" },
    ],
  };
}

export default function Resilience() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const allAnswered = Object.keys(answers).length === questions.length;
  const pathway = submitted ? getPathway(totalScore) : null;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/tremendous" className="hover:text-[#c45c26]">
              Tremendous
            </Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">
              Book Now
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Element — September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resilience Score Assessment</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Five honest questions. Instant personalised pathway. Convert insight into real healing, membership or sponsored presence. Giving-first — every conversion funds free places.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-2xl mx-auto">
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-md border border-[#c45c26]/15 p-6 md:p-8 space-y-8">
            {questions.map((q) => (
              <div key={q.id}>
                <p className="font-semibold text-[#2d5016] mb-3">
                  {q.id}. {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt.label}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                        answers[q.id] === opt.score
                          ? "border-[#c45c26] bg-[#c45c26]/10"
                          : "border-gray-200 hover:border-[#c45c26]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        checked={answers[q.id] === opt.score}
                        onChange={() => setAnswers({ ...answers, [q.id]: opt.score })}
                        className="accent-[#c45c26]"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className={`w-full py-3.5 rounded-full font-semibold text-white transition ${
                allAnswered ? "bg-[#c45c26] hover:bg-[#a34a1e]" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Reveal My Resilience Pathway
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md border border-[#c45c26]/15 p-6 md:p-8 text-center">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Your Score</p>
            <p className="text-5xl font-bold text-[#c45c26] mb-2">{totalScore} / 20</p>
            <p className={`text-2xl font-bold mb-4 ${pathway?.color}`}>{pathway?.level}</p>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">{pathway?.message}</p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-8">
              {pathway?.cta.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition"
                >
                  {c.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setAnswers({});
              }}
              className="text-sm text-[#c45c26] hover:underline"
            >
              Retake assessment
            </button>
          </div>
        )}
      </section>

      <section className="py-10 px-4 bg-[#fdf6e3] text-center">
        <p className="text-gray-600 mb-4">
          This assessment is a conversion engine and a genuine service. Results guide people into the exact next right action while funding free therapy places.
        </p>
        <Link to="/tremendous" className="text-[#c45c26] font-semibold hover:underline">
          ← Back to True → Tremendous Tracker
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · From true to tremendous · Resilience pathways that convert</p>
      </footer>
    </div>
  );
}
