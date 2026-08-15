import type { Route } from "./+types/wisdom";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dachshund Wisdom Generator • Therapy Sausages" },
    {
      name: "description",
      content:
        "Interactive dachshund wisdom generator. Choose your mood or intention and receive a personalised healing message, practice or affirmation from the pack.",
    },
  ];
}

const wisdomBank: Record<string, string[]> = {
  Calm: [
    "Breathe in for four counts, out for six — the same rhythm a sausage uses when settling into your lap. You are safe to soften.",
    "Place one hand on your chest and one on your belly. Feel the rise. The pack is already here with you.",
    "Short legs, long rest. Give yourself permission to do less for the next ten minutes. Healing loves stillness.",
  ],
  Anxiety: [
    "Name five things you can see, four you can touch, three you can hear. Then imagine a warm dachshund weight across your thighs. The nervous system listens to the body first.",
    "Anxiety is energy looking for an exit. Shake your hands gently, then stretch like a sausage waking from a sunbeam. Move it through.",
    "You do not have to fix everything today. One wag at a time is enough. The pack holds the rest.",
  ],
  Grief: [
    "Grief is love with nowhere to go. Let the tears come. A dachshund would simply stay close and breathe with you. That is enough.",
    "There is no timeline. Sit with the ache the way the pack sits with you — no fixing, only presence.",
    "Your heart is still open. That is courage. Honour what was, and know the land and the dogs remember with you.",
  ],
  Joy: [
    "Let the joy be loud and ridiculous. Wiggle. Smile at strangers. The sausages approve of unrestrained delight.",
    "Joy multiplies when shared. Send this feeling to someone who needs a wag today.",
    "Celebrate the small wins: the deep breath that landed, the message you answered, the sunlight on your face. The pack celebrates with you.",
  ],
  Focus: [
    "One task. One breath. One sausage-length of attention. Clear the rest from the mat and begin.",
    "Your attention is a gift. Place it gently on the next right action. The hinterland teaches us: slow is smooth, smooth is fast.",
    "When the mind scatters, return to the body. Feel your feet. The dogs always know where the ground is.",
  ],
  Connection: [
    "Reach out to one human or one animal today. A short message, a shared silence, a walk. Belonging is medicine.",
    "You are already part of the Circle. Even if you have never met the pack in person, the intention links us.",
    "Ask for what you need. The right people (and dogs) lean in when you make space for them.",
  ],
};

const moods = Object.keys(wisdomBank);

export default function Wisdom() {
  const [mood, setMood] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function generate(selected: string) {
    setMood(selected);
    const options = wisdomBank[selected];
    const pick = options[Math.floor(Math.random() * options.length)];
    setMessage(pick);
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/podcast" className="hover:text-[#c45c26]">Podcast</Link>
            <Link to="/refer" className="hover:text-[#c45c26]">Refer</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">✨ Interactive Dachshund Wisdom</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Does Your Heart Need Right Now?</h1>
          <p className="text-lg opacity-95 mb-6">
            Choose a mood or intention. Receive a short practice, affirmation or reminder from the pack — then carry it into the rest of your day.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => generate(m)}
              className={`px-5 py-2.5 rounded-full font-semibold transition ${
                mood === m
                  ? "bg-[#c45c26] text-white"
                  : "bg-white border border-[#c45c26]/30 text-[#c45c26] hover:bg-[#c45c26]/10"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {message && (
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 text-center mb-10 card-hover">
            <p className="text-sm font-semibold text-[#d4a017] mb-2 uppercase tracking-wide">{mood} Wisdom</p>
            <p className="text-xl md:text-2xl text-[#2d5016] leading-relaxed mb-6">{message}</p>
            <button
              onClick={() => mood && generate(mood)}
              className="text-[#c45c26] font-semibold hover:underline"
            >
              Another message for {mood} →
            </button>
          </div>
        )}

        <div className="bg-[#fdf6e3] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Want Seven Days of This?</h2>
          <p className="text-gray-700 mb-6">
            Free 7-Day Dachshund Calm Challenge — short daily practices + audio intro. Join 1,200+ already on the list.
          </p>
          <form action="mailto:emily@therapysausages.com?subject=Free%207-Day%20Calm%20Challenge" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Your best email"
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
            />
            <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">
              Send Me the Challenge
            </button>
          </form>
        </div>
      </section>

      <section className="py-10 px-4 text-center">
        <Link to="/membership" className="text-[#c45c26] font-semibold hover:underline">
          Prefer live support? Join the Sausage Circle →
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Dachshund Wisdom for every nervous system</p>
      </footer>
    </div>
  );
}
