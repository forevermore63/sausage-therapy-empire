import type { Route } from "./+types/aftercare";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aftercare | 7-Day Pack Protocol | Therapy Sausages" },
    {
      name: "description",
      content:
        "Aftercare is the Therapy Sausages 7-day digital protocol. Instant pages you can use the night a session ends. $37 once.",
    },
  ];
}

const days = [
  ["Day 1 — Land", "Name three things the room is doing. Sit on the floor for four minutes. Watch one memory of a dog fully settling. Do not journal more than six lines."],
  ["Day 2 — Match", "Breathe out longer than you breathe in, five rounds, beside a photo or the session note. Drink water before the phone."],
  ["Day 3 — Name", "Write the one sentence the pack seemed to answer. Say it out loud once. That sentence is the handle for the week."],
  ["Day 4 — Walk", "Ten minutes outside with no podcast. If a real dog is with you, let them set the pace. If not, walk as if one is."],
  ["Day 5 — Offer", "Text one person the six-line note, or keep it. Giving the note is optional. Keeping the ritual is not."],
  ["Day 6 — Repair", "One small room reset: bed made, bowl washed, window open. The nervous system reads finished tasks as safety."],
  ["Day 7 — Choose", "Book the next true contact — Meridian, Night Watch, farm, or a quiet no. Tremendous is a repeat, not a spike."],
];

export default function Aftercare() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 6 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aftercare</h1>
          <p className="text-lg opacity-95">The session is not the product. The week after is. Seven short days, written so the feeling does not evaporate in the car park.</p>
        </div>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {!open ? (
            <form
              className="bg-white rounded-2xl p-6 shadow-md space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const held = JSON.parse(localStorage.getItem("st-aftercare") || "[]");
                held.push({ name, at: new Date().toISOString() });
                localStorage.setItem("st-aftercare", JSON.stringify(held));
                setOpen(true);
              }}
            >
              <p className="text-3xl font-bold text-[#c45c26]">$37 once</p>
              <p className="text-sm text-gray-700">Unlocks the full 7-day protocol on this page. 10% funds a free place.</p>
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open Aftercare</button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="font-semibold text-[#2d5016]">Opened for {name}. Keep this tab. The protocol is the delivery.</p>
              {days.map(([title, body]) => (
                <article key={title} className="bg-white rounded-2xl p-5 border border-[#c45c26]/10">
                  <h2 className="font-bold text-[#c45c26]">{title}</h2>
                  <p className="text-sm text-gray-700 mt-2">{body}</p>
                </article>
              ))}
              <Link to="/nightwatch" className="inline-block bg-[#2d5016] text-white px-6 py-3 rounded-full">Add Night Watch →</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
