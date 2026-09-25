import type { Route } from "./+types/trail";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tremendous Trail | 21-Day Challenge | Therapy Sausages Empire" },
    {
      name: "description",
      content: "21-day paid challenge. $47 or inside Pact. Low-energy days still count.",
    },
  ];
}

export default function Trail() {
  const [done, setDone] = useState(false);
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Tremendous Trail</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">21 days. No performance.</h1>
          <p className="text-lg opacity-95">$47 standalone or included in Pact. Low-energy days still count.</p>
        </div>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <form
          className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          {!done ? (
            <>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" required />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Email" type="email" required />
              <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Start Trail · $47</button>
            </>
          ) : (
            <div className="text-center py-6">
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Trail opened</h3>
              <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Complete on Book →</Link>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
