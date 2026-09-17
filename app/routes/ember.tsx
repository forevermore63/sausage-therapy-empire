import type { Route } from "./+types/ember";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ember | Afterglow Aftercare | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Ember keeps the healing warm after the pack goes home. Twelve nights of afterglow audio, body notes and one tap back into Harbor, Pact or a follow-up booking.",
    },
  ];
}

const nights = [
  { n: 1, title: "The first quiet", note: "The nervous system is still listening. No big processing. One sentence only." },
  { n: 3, title: "The body reports", note: "Sleep, appetite, startle. Write three words. That is enough evidence." },
  { n: 7, title: "The mid-glow check", note: "If the glow faded, Ember routes you to Harbor, not to shame." },
  { n: 12, title: "The keep-or-return", note: "Stay with Pact, book again, or rest. All three are completion." },
];

export default function Ember() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ember</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Healing that holds when the pack has gone home. Twelve nights of afterglow so one session becomes a lasting change, not a nice afternoon.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-8 text-center">The twelve-night afterglow</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {nights.map((item) => (
              <div key={item.n} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
                <p className="text-[#c45c26] font-bold mb-1">Night {item.n}</p>
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[#2d5016] mb-3">Light Ember after your next session</h3>
            <p className="text-gray-700 mb-4">We send Night 1 the evening of the booking. No apps. Email only. Stop any time.</p>
            {done ? (
              <p className="text-[#2d5016] font-semibold">Ember is lit. Night 1 will meet you after the session.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email"
                  className="flex-1 border border-[#c45c26]/30 rounded-full px-4 py-3"
                />
                <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">
                  Light Ember
                </button>
              </form>
            )}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/book" className="text-[#c45c26] font-semibold">Book first →</Link>
              <Link to="/harbor" className="text-[#2d5016] font-semibold">Harbor path →</Link>
              <Link to="/pact" className="text-[#c45c26] font-semibold">Keep the glow with Pact →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
