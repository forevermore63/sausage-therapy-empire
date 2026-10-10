import type { Route } from "./+types/spark";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spark | Instant Pack Greeting | Therapy Sausages" },
    {
      name: "description",
      content:
        "Spark is the $19 instant pack greeting from Therapy Sausages. A 60-second voice note and photo from the dachshunds. $5 goes straight to dog welfare. Door into everything bigger.",
    },
  ];
}

export default function Spark() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book Full Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spark</h1>
          <p className="text-lg opacity-95">
            Instant warmth from the pack. A 60-second voice note and a photo, delivered the same day. $5 of every Spark goes to dog care and recovery. The rest keeps the empire growing while you sleep.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Spark · $19</p>
              <p className="text-sm text-gray-700">One voice note + one photo from the current pack. Delivered by email within hours.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Spark Pack · $47</p>
              <p className="text-sm text-gray-700">Three notes over a week. Perfect for someone who needs consistent calm.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $5 minimum to dog welfare on every Spark. NDIS-friendly entry point where plans allow a digital support element.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-spark") || "[]");
              held.push({ name, note, at: new Date().toISOString() });
              localStorage.setItem("st-spark", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Light a Spark</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea className="w-full border rounded-xl px-4 py-3" placeholder="Anything the pack should know (optional)" value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Send the Spark</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">✨</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Spark is lit</h3>
                <p className="text-gray-700 mb-4">{name}, the pack will send warmth today. Check your email.</p>
                <Link to="/dawn" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Add Dawn for every morning →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
