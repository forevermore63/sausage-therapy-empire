import type { Route } from "./+types/match";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Match • Find Your Perfect Sausage Path | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Interactive quiz that matches you to the ideal session, virtual pack, farm day, membership or product. Instant recommendations + lead capture for the giving-first Therapy Sausages empire.",
    },
  ];
}

const questions = [
  {
    id: "need",
    q: "What do you most need right now?",
    options: [
      { label: "Calm & nervous-system reset", value: "calm" },
      { label: "Connection & joy with dogs", value: "connection" },
      { label: "NDIS / disability support", value: "ndis" },
      { label: "Team / corporate wellness", value: "corporate" },
      { label: "Learn & build my own practice", value: "academy" },
    ],
  },
  {
    id: "format",
    q: "Preferred format?",
    options: [
      { label: "In-person (Gold Coast / Noosa / Farm)", value: "inperson" },
      { label: "Virtual / Zoom", value: "virtual" },
      { label: "Self-paced digital", value: "digital" },
      { label: "Mix of everything", value: "mix" },
    ],
  },
  {
    id: "commitment",
    q: "How deep do you want to go?",
    options: [
      { label: "One session or try-out", value: "one" },
      { label: "Ongoing membership / circle", value: "ongoing" },
      { label: "Full immersion / retreat", value: "immersion" },
      { label: "Explore first, decide later", value: "explore" },
    ],
  },
];

const recommendations: Record<string, { title: string; desc: string; link: string; cta: string }> = {
  calm_inperson: { title: "Individual Healing Session", desc: "45–60 min with the pack for deep nervous-system reset.", link: "/book", cta: "Book Session" },
  calm_virtual: { title: "Virtual Pack Session", desc: "Live Zoom calm with sausages from anywhere.", link: "/virtual", cta: "Enter Virtual" },
  calm_digital: { title: "7-Day Dachshund Calm Challenge", desc: "Free daily practices + audio to settle your system.", link: "/calm", cta: "Start Free Challenge" },
  connection_inperson: { title: "Forevermore Farm Day", desc: "Nature + pack immersion that fills the heart.", link: "/farm", cta: "Explore Farm" },
  connection_virtual: { title: "Sausage Circle Membership", desc: "$47/mo community, live circles & priority access.", link: "/membership", cta: "Join Circle" },
  ndis_inperson: { title: "NDIS Pathway Session", desc: "Participant, Support Coordinator & Plan Manager ready.", link: "/ndis", cta: "NDIS Portal" },
  ndis_virtual: { title: "Virtual Pack + NDIS", desc: "Accessible remote sessions with impact reporting.", link: "/virtual", cta: "Book Virtual" },
  corporate_inperson: { title: "Corporate Pack Visit", desc: "Office or farm team day that actually reduces stress.", link: "/book", cta: "Enquire Corporate" },
  academy_digital: { title: "Digital Academy", desc: "Learn animal-assisted therapy & build your own empire.", link: "/academy", cta: "Enter Academy" },
  default: { title: "Sausage Oracle + Book", desc: "Start with free wisdom then book the session that feels right.", link: "/oracle", cta: "Consult Oracle" },
};

export default function Match() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = questions[step];

  function select(value: string) {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function getRec() {
    const key = `${answers.need}_${answers.format}`;
    return recommendations[key] || recommendations.default;
  }

  const rec = done ? getRec() : null;

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
        </div>
      </header>

      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <p className="text-[#c45c26] font-semibold mb-2">🎯 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Therapy Match</h1>
        <p className="text-lg text-gray-700 mb-10">
          Answer three quick questions. Receive your perfect sausage path + next step. Free, personal, conversion-ready.
        </p>

        {!done ? (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#c45c26]/15">
            <p className="text-sm text-[#c45c26] mb-2">Question {step + 1} of {questions.length}</p>
            <h2 className="text-2xl font-bold text-[#2d5016] mb-8">{current.q}</h2>
            <div className="space-y-3">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => select(opt.value)}
                  className="w-full text-left px-6 py-4 rounded-2xl border border-gray-200 hover:border-[#c45c26] hover:bg-[#fdf6e3] transition font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#c45c26]/15">
            <p className="text-sm uppercase tracking-widest text-[#c45c26] mb-4">Your Match</p>
            <h2 className="text-3xl font-bold text-[#2d5016] mb-4">{rec!.title}</h2>
            <p className="text-gray-700 mb-8">{rec!.desc}</p>
            <Link
              to={rec!.link}
              className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition"
            >
              {rec!.cta} →
            </Link>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Want Emily to personalise further?</p>
              <form action="mailto:emily@therapysausages.com?subject=Therapy%20Match%20Follow-up" method="get" className="space-y-3">
                <input type="email" name="email" placeholder="Your email" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
                <button type="submit" className="w-full border-2 border-[#c45c26] text-[#c45c26] font-semibold py-3 rounded-full hover:bg-[#c45c26]/5 transition">
                  Send me deeper guidance
                </button>
              </form>
            </div>
            <button onClick={() => { setStep(0); setAnswers({}); setDone(false); }} className="mt-6 text-sm text-gray-500 hover:text-[#c45c26]">
              Retake quiz
            </button>
          </div>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/oracle" className="text-[#c45c26] font-semibold hover:underline">Sausage Oracle →</Link>
          <Link to="/calm" className="text-[#c45c26] font-semibold hover:underline">Calm Challenge →</Link>
          <Link to="/membership" className="text-[#c45c26] font-semibold hover:underline">Sausage Circle →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · From true to tremendous · Giving-first
      </footer>
    </div>
  );
}
