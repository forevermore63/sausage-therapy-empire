import type { Route } from "./+types/navigator";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NDIS & Funding Navigator • Therapy Sausages" },
    {
      name: "description",
      content:
        "Clear, practical navigator for accessing animal-assisted therapy under NDIS and related funding. Quiz + sample wording + next steps so you can book with confidence.",
    },
  ];
}

type Path = "ndis-plan" | "ndis-self" | "private" | "grant" | "unsure";

export default function Navigator() {
  const [step, setStep] = useState(0);
  const [path, setPath] = useState<Path | null>(null);

  const start = () => setStep(1);

  const choose = (p: Path) => {
    setPath(p);
    setStep(2);
  };

  const content: Record<Path, { title: string; body: string[]; cta: string; link: string }> = {
    "ndis-plan": {
      title: "You have an NDIS plan managed by a plan manager or agency",
      body: [
        "Animal-assisted therapy and support with therapy animals can sit under Capacity Building – Improved Daily Living or Improved Relationships, or under Core – Assistance with Social & Community Participation, depending on your goals.",
        "Ask your Support Coordinator or plan manager to confirm the line item that best matches ‘animal-assisted therapy’ or ‘therapy support with animals’.",
        "Sample request wording you can copy: “I would like to use funds from [relevant category] for animal-assisted therapy sessions with Therapy Sausages (miniature dachshunds). These sessions support my goals around regulation, social participation and emotional wellbeing.”",
        "Once approved, Emily can invoice your plan manager directly. Bookings are NDIS-friendly and mobile across Gold Coast / Noosa.",
      ],
      cta: "Go to NDIS Portal & Book",
      link: "/ndis",
    },
    "ndis-self": {
      title: "You are self-managed or plan-managed and ready to direct funds",
      body: [
        "You can usually book animal-assisted therapy sessions and claim against the relevant capacity-building or core supports category that aligns with your goals.",
        "Keep a simple record: date, duration, provider (Therapy Sausages / Emily Blue Richards), and how the session supported your plan goals.",
        "Sample invoice description Emily can use: “Animal-assisted therapy session – regulation & social participation support – 60 min – NDIS.”",
        "If you are unsure which category, a quick chat with your Support Coordinator or a 15-min call with Emily can clarify before the first session.",
      ],
      cta: "Book NDIS Session",
      link: "/book",
    },
    private: {
      title: "Private / self-funded / family-funded",
      body: [
        "You can book any session type directly — individual, family, virtual or farm. No extra paperwork required.",
        "Many people start with a single session or the 7-Day Calm Challenge and then decide on membership or ongoing support.",
        "If cost is a barrier, mention it when you enquire — hardship and giving-funded places exist.",
      ],
      cta: "Book a Session",
      link: "/book",
    },
    grant: {
      title: "You are exploring grants, ILC, or organisational funding",
      body: [
        "Therapy Sausages actively supports grant and ILC pathways, Female Founders-style applications, and organisational wellness funding.",
        "Use the Grant Surge Portal for frameworks, sample language and Olympic-legacy angles.",
        "Corporate or community organisations can also use the ROI Calculator to justify internal budget allocation.",
      ],
      cta: "Open Grant Surge Portal",
      link: "/grants",
    },
    unsure: {
      title: "You’re not sure yet — that’s completely okay",
      body: [
        "Start with a free 7-Day Calm Challenge or a short Virtual Pack experience to feel the work.",
        "Email Emily with a brief description of your situation (NDIS status, goals, location). She will reply with the clearest next step — no pressure.",
        "You can also take the Therapy Match quiz for a personalised recommendation.",
      ],
      cta: "Take Therapy Match or Email Emily",
      link: "/match",
    },
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/ndis" className="hover:text-[#c45c26]">NDIS Portal</Link>
            <Link to="/grants" className="hover:text-[#c45c26]">Grants</Link>
            <Link to="/navigator" className="text-[#c45c26] font-semibold">Navigator</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Clarity instead of confusion</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NDIS & Funding Navigator</h1>
          <p className="text-lg opacity-95">
            Three quick choices → tailored next steps and sample wording so you can move from “maybe” to booked session with confidence.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-2xl mx-auto">
        {step === 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8 text-center">
            <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Ready for clear direction?</h2>
            <p className="text-gray-600 mb-6">This takes under a minute. No account required.</p>
            <button onClick={start} className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Start Navigator
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8">
            <h2 className="text-xl font-bold text-[#2d5016] mb-6">Which best describes your situation?</h2>
            <div className="space-y-3">
              {[
                { id: "ndis-plan" as Path, label: "I have an NDIS plan (agency or plan-managed)" },
                { id: "ndis-self" as Path, label: "I am self-managed / can direct my own NDIS funds" },
                { id: "private" as Path, label: "Private / family / self-funded" },
                { id: "grant" as Path, label: "Exploring grants, ILC or organisational funding" },
                { id: "unsure" as Path, label: "Not sure yet / still figuring it out" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => choose(opt.id)}
                  className="w-full text-left border border-gray-200 rounded-xl px-5 py-4 hover:border-[#c45c26] hover:bg-[#fdf6e3] transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && path && (
          <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8">
            <h2 className="text-xl font-bold text-[#2d5016] mb-4">{content[path].title}</h2>
            <ul className="space-y-4 mb-8">
              {content[path].body.map((para, i) => (
                <li key={i} className="text-gray-700 leading-relaxed flex gap-3">
                  <span className="text-[#c45c26] font-bold">•</span>
                  <span>{para}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={content[path].link}
                className="flex-1 bg-[#c45c26] text-white text-center font-semibold py-3 rounded-full hover:bg-[#a34a1e] transition"
              >
                {content[path].cta}
              </Link>
              <button
                onClick={() => { setStep(1); setPath(null); }}
                className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-50"
              >
                Choose different path
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              This is general guidance only. Always confirm with your Support Coordinator, plan manager or funding body. Emily is happy to help clarify.
            </p>
          </div>
        )}
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · NDIS-friendly · Giving-first</p>
        <p className="opacity-60 mt-2">From true to tremendous</p>
      </footer>
    </div>
  );
}
