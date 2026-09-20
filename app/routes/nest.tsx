import type { Route } from "./+types/nest";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nest | Therapy Dachshund Homes | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Nest is the careful home and foster path for therapy-line dachshunds. Placement that protects the remaining pack and the people who need them.",
    },
  ];
}

const steps = [
  "Tell us the household, the health load, and whether this is companion, working support, or foster.",
  "We match temperament, not just colour. The remaining line is small. Placement is slow on purpose.",
  "Written care pact, microchip / Pawport path, and a first Harbor-safe meet if bodies need it.",
  "Aftercare through Lantern so the dog and the human are not dropped the week after arrival.",
];

export default function Nest() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/puppies" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Waitlist</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Engine — 21 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nest</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            The working pack was 23. Five remain. Nest is how the next homes are chosen so the line, the land and the people all hold.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto">
          <ol className="space-y-3 mb-10">
            {steps.map((s, i) => (
              <li key={s} className="bg-white rounded-2xl p-5 shadow-md border border-[#c45c26]/10 flex gap-4">
                <span className="font-bold text-[#c45c26]">{i + 1}</span>
                <span className="text-gray-800">{s}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <Link to="/puppies" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Join the waitlist →</Link>
            <Link to="/farm" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">See the land →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
