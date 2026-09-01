import type { Route } from "./+types/protocol";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trauma-Informed Dachshund Protocol Library • Therapy Sausages" },
    {
      name: "description",
      content:
        "Structured, trauma-informed protocols for animal-assisted healing with miniature dachshunds. Free introductory guides + paid practitioner packs, NDIS-aligned session structures and nervous-system first approaches.",
    },
  ];
}

const protocols = [
  {
    title: "Nervous-System First Contact Protocol",
    level: "Foundational",
    description:
      "How to introduce a therapy dachshund so the human nervous system receives safety signals before any structured work begins. Includes pacing, distance, choice and exit ramps.",
    free: true,
    cta: { to: "/calm", label: "Start with 7-Day Calm Challenge" },
  },
  {
    title: "45–60 Minute Individual Session Structure",
    level: "Core Practice",
    description:
      "Complete arc for one-on-one or family sessions: arrival, co-regulation window, optional reflective or somatic layer, integration and closing. Designed for NDIS-aligned reporting.",
    free: false,
    cta: { to: "/academy", label: "Get Full Structure in Academy" },
  },
  {
    title: "High-Load / Crisis Stabilisation Sequence",
    level: "Advanced",
    description:
      "Short, high-safety sequence for people arriving in acute activation. Emphasis on choice, predictability and minimal demand. Includes when to pause or end early.",
    free: false,
    cta: { to: "/certify", label: "Access via Certification" },
  },
  {
    title: "Corporate Group Pack Protocol",
    level: "Workplace",
    description:
      "How to run an office or team visit that delivers measurable calm without performative pressure. Includes briefing, flow, debrief and follow-up ROI language.",
    free: false,
    cta: { to: "/corporate", label: "Corporate Wellness Hub" },
  },
  {
    title: "Virtual Pack Circle Facilitation",
    level: "Digital",
    description:
      "Adapting real pack presence into Zoom/online formats. Camera placement, silence, co-regulation cues and how to hold space when dogs are not physically present for every participant.",
    free: false,
    cta: { to: "/virtual", label: "Virtual Pack Portal" },
  },
  {
    title: "NDIS Session Note & Outcome Framework",
    level: "Compliance + Care",
    description:
      "Practical language and structure for session notes that satisfy funding requirements while remaining human and trauma-informed. Focus on functional capacity and participant goals.",
    free: false,
    cta: { to: "/ndis", label: "NDIS Portal" },
  },
];

export default function Protocol() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/academy" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">
            Enter Academy
          </Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Element — September 2026 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trauma-Informed Protocol Library</h1>
          <p className="text-lg opacity-95">
            Practical, nervous-system first structures for real dachshund-assisted healing. Free entry points. Paid depth for practitioners and serious carers. Everything designed to convert learning into practice and practice into revenue for the mission.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto space-y-6">
        {protocols.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide bg-[#d4a017]/20 text-[#2d5016] px-2 py-0.5 rounded">
                  {p.level}
                </span>
                {p.free && (
                  <span className="text-xs font-semibold uppercase tracking-wide bg-[#2d5016]/10 text-[#2d5016] px-2 py-0.5 rounded">
                    Free Entry
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm">{p.description}</p>
            </div>
            <Link
              to={p.cta.to}
              className="shrink-0 bg-[#c45c26] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#a34a1e] transition text-center"
            >
              {p.cta.label} →
            </Link>
          </div>
        ))}
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Want the complete practitioner system?</h2>
          <p className="text-gray-700 mb-6">
            The Digital Academy and Certification pathways contain the full library, video walkthroughs, session templates, ethics, business setup and ongoing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/academy"
              className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition"
            >
              Digital Academy
            </Link>
            <Link
              to="/certify"
              className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition"
            >
              Practitioner Certification
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <Link to="/tremendous" className="text-[#c45c26] font-semibold hover:underline">
          ← Back to True → Tremendous Tracker
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Protocols that turn knowledge into healing income</p>
      </footer>
    </div>
  );
}
