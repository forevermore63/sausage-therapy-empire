import type { Route } from "./+types/coach";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daily Sausage Coach • Therapy Sausages" },
    {
      name: "description",
      content:
        "Your free daily interactive dachshund wisdom, nervous-system practice and journal prompt. Return every day for a new micro-healing session. Part of the Therapy Sausages empire.",
    },
  ];
}

const WISDOM = [
  { title: "Long-body grounding", practice: "Sit or stand. Feel your feet. Imagine your spine lengthening like a dachshund stretching in the sun. Breathe in for 4, hold 2, out for 6. Do three rounds.", prompt: "Where in your body are you holding tightness right now? What would a long, slow stretch feel like?" },
  { title: "Snout-to-heart", practice: "Place one hand on your chest. Soften your jaw. Imagine a warm sausage nose pressing gently against your heart. Breathe into that contact for 90 seconds.", prompt: "What emotion is asking for gentle attention today?" },
  { title: "Pack presence", practice: "Close your eyes. Picture three miniature dachshunds settling around you. Feel the quiet safety of the pack. Stay for two full minutes.", prompt: "Who or what is your safe pack right now?" },
  { title: "Wiggle release", practice: "Stand up. Wiggle your shoulders, then hips, then feet — like a sausage shaking off the day. 30 seconds of free movement. Then stillness.", prompt: "What can you shake off and leave behind today?" },
  { title: "Farm horizon", practice: "Look out a window or imagine the hinterland. Soften your gaze to the distance. Breathe as if the air is clean and the land is holding you.", prompt: "What would ‘enough space’ feel like in your life this week?" },
  { title: "Sausage stillness", practice: "Lie or sit. Let your body be heavy. Count ten slow breaths while imagining a sleeping dachshund curled against you. No effort required.", prompt: "Where can you allow yourself to simply rest today?" },
  { title: "Loyal return", practice: "Think of one small promise you can keep to yourself today. Whisper it. Then take one action that proves the loyalty.", prompt: "What tiny loyal act toward yourself will you complete before bed?" },
];

export default function Coach() {
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const day = Math.floor(Date.now() / 86400000);
    setIndex(day % WISDOM.length);
  }, []);

  const today = WISDOM[index];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:emily@therapysausages.com?subject=Daily%20Sausage%20Coach%20Signup&body=Please%20add%20me%20to%20the%20daily%20coach%20list.%20Email:%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/calm" className="hover:text-[#c45c26]">7-Day Calm</Link>
            <Link to="/journal" className="hover:text-[#c45c26]">Journal</Link>
            <Link to="/coach" className="text-[#c45c26] font-semibold">Daily Coach</Link>
            <Link to="/membership" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Join Circle</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Free · Daily · Always here</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Daily Sausage Coach</h1>
          <p className="text-lg opacity-95">
            One short nervous-system practice + one honest journal prompt, rooted in real dachshund wisdom. Come back every day.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 overflow-hidden">
          <div className="bg-[#2d5016] text-white px-6 py-4">
            <p className="text-sm opacity-80">Today’s practice</p>
            <h2 className="text-2xl font-bold">{today.title}</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-bold text-[#c45c26] mb-2">Practice (2–3 minutes)</h3>
              <p className="text-gray-700 leading-relaxed">{today.practice}</p>
            </div>
            <div className="bg-[#fdf6e3] rounded-xl p-5">
              <h3 className="font-bold text-[#2d5016] mb-2">Journal prompt</h3>
              <p className="text-gray-800 italic">{today.prompt}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIndex((i) => (i + 1) % WISDOM.length)}
                className="text-sm border border-[#c45c26] text-[#c45c26] px-4 py-2 rounded-full hover:bg-[#c45c26]/5"
              >
                Another practice
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Today’s Sausage Coach: ${today.title} — ${today.prompt} 🐾 therapysausages.com/coach`)}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]"
              >
                Share today’s wisdom
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl shadow border border-[#c45c26]/10 p-6">
          <h3 className="text-xl font-bold text-[#2d5016] mb-2">Get tomorrow’s practice by email</h3>
          <p className="text-gray-600 text-sm mb-4">One short note each morning. No spam. Unsubscribe anytime. Supports the free-place fund.</p>
          {submitted ? (
            <p className="text-[#2d5016] font-semibold">Thank you — check your email client to complete the signup.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
              <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">
                Send me daily coach
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/membership" className="text-[#c45c26] font-semibold hover:underline">
            Want live monthly circles + priority booking? Join Sausage Circle →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Led by Emily Blue Richards</p>
        <p className="opacity-60 mt-2">From true to tremendous</p>
      </footer>
    </div>
  );
}
