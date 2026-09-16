import type { Route } from "./+types/lantern";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lantern | Night Aftercare | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Lantern is the after-dark digital product of Sausage Therapy: audio, journal prompts and a 12-minute night protocol so the healing holds when the pack is not in the room.",
    },
  ];
}

const nights = [
  { n: "01", title: "The first sit", note: "Three breaths with a dachshund weight imagined on the thighs." },
  { n: "02", title: "Room scan", note: "Name three safe surfaces. Leave the rest for daylight." },
  { n: "03", title: "Wag count", note: "Count ten imaginary wags. Stop when the jaw drops." },
  { n: "07", title: "Pack circle", note: "Picture the five remaining working dogs facing the door." },
  { n: "12", title: "Keep the lamp", note: "One sentence to the morning: I am still here." },
];

export default function Lantern() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/pact" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Pact</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Digital Product — 17 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Lantern</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Aftercare that works when the pack has gone home. A 12-night protocol, audio sits and a journal that keeps the nervous system from snapping back.
          </p>
          <p className="text-3xl font-bold mb-2">$47 once · or included in Pact</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {nights.map((item) => (
            <div key={item.n} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 flex gap-4">
              <div className="text-2xl font-bold text-[#d4a017]">N{item.n}</div>
              <div>
                <h3 className="font-bold text-[#2d5016]">{item.title}</h3>
                <p className="text-gray-700">{item.note}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-6">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Pair with a session →</Link>
            <Link to="/pact" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Unlock via Pact →</Link>
            <Link to="/journal" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">Open Journal →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
