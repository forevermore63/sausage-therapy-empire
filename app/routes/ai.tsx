import type { Route } from "./+types/ai";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage AI Companion • Daily Healing Coach | Therapy Sausages" },
    {
      name: "description",
      content:
        "Your always-on digital dachshund companion. Get instant calming guidance, daily practice prompts, nervous-system resets and sausage wisdom. Free, private, and built to grow the Therapy Sausages dream from true to tremendous.",
    },
  ];
}

const wisdom = [
  "Breathe with me. In for 4... hold for 4... out for 6. Your nervous system just got a sausage hug.",
  "You are safe right now. Feel your feet on the ground. The pack is with you in spirit.",
  "Tiny paws, big calm. What is one small thing you can release in the next 60 seconds?",
  "Dachshunds know: rest is productive. Give yourself permission to pause without guilt.",
  "Your heart is healing even when it feels slow. Trust the process like a sausage trusts the sunbeam.",
  "Name three things you can see, two you can touch, one you can hear. Grounding complete.",
  "The farm waits for you. Even a 10-second visualisation of green hills and soft ears lowers cortisol.",
  "You chose giving and healing. That choice is already changing the field around you.",
  "Wags are medicine. Imagine the softest cream dachshund leaning into your chest right now.",
  "Progress is not linear. Some days are just about surviving with more grace. That counts.",
];

const practices = [
  { title: "4-7-8 Sausage Breath", body: "Inhale 4, hold 7, exhale 8. Repeat 4 rounds. Feel the pack settle with you." },
  { title: "Ear Rub Reset", body: "Gently massage your own ears for 30 seconds. Mirrors the calm dachshunds give when they lean in." },
  { title: "Sunbeam Visualisation", body: "Close eyes. Picture a warm cream sausage stretched in a perfect sunbeam. Breathe into that warmth for 60 seconds." },
  { title: "One-Sentence Journal", body: "Write or say: ‘Today I am allowing myself to...’ Finish it. No judgement." },
  { title: "Pack Walk in Place", body: "Stand and walk slowly on the spot for 1 minute while imagining the whole pack walking with you on the farm track." },
];

export default function AI() {
  const [messages, setMessages] = useState<{ role: "user" | "sausage"; text: string }[]>([
    { role: "sausage", text: "Hi love. I’m your Sausage AI Companion. Ask me anything about calming, healing, NDIS, farm days, or just say ‘I need calm’ and I’ll guide you. The pack is here." },
  ]);
  const [input, setInput] = useState("");
  const [daily, setDaily] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const day = new Date().getDate();
    setDaily(wisdom[day % wisdom.length]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const respond = (userText: string) => {
    const lower = userText.toLowerCase();
    let reply = "I’m here with you. Take one slow breath. What do you need most right now — calm, clarity, or connection?";

    if (lower.includes("calm") || lower.includes("anxious") || lower.includes("stress") || lower.includes("panic")) {
      reply = wisdom[Math.floor(Math.random() * wisdom.length)] + " Would you like a short practice right now?";
    } else if (lower.includes("practice") || lower.includes("exercise") || lower.includes("breath")) {
      const p = practices[Math.floor(Math.random() * practices.length)];
      reply = `${p.title}: ${p.body}`;
    } else if (lower.includes("book") || lower.includes("session") || lower.includes("farm")) {
      reply = "Beautiful. Real sessions and farm days are available. Tap Book Now below or tell me more about what kind of support you’re seeking and I’ll guide the next step.";
    } else if (lower.includes("ndis")) {
      reply = "NDIS-friendly sessions are a core part of the empire. Many participants use plan-managed or self-managed funding for animal-assisted support. Visit the NDIS Portal or Navigator for tailored next steps, or book and Emily will help with wording.";
    } else if (lower.includes("thank") || lower.includes("love") || lower.includes("help")) {
      reply = "You’re welcome. Your presence here already grows the dream. The sausages send wags. What else can I hold with you?";
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      reply = "Hello beautiful human. The pack is listening. How is your nervous system feeling today?";
    }

    setMessages((prev) => [...prev, { role: "user", text: userText }, { role: "sausage", text: reply }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    respond(input.trim());
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">Book Real Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-1">Always-on · Free · Private</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sausage AI Companion</h1>
          <p className="opacity-95">Daily wisdom, instant calm guidance, and a digital pack that never leaves. Built to grow the dream from true to tremendous.</p>
        </div>
      </section>

      <section className="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
        <div className="bg-[#fdf6e3] rounded-2xl p-4 mb-6 border border-[#d4a017]/40">
          <p className="text-sm font-semibold text-[#2d5016] mb-1">Today’s Sausage Wisdom</p>
          <p className="text-[#c45c26]">{daily}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-[#c45c26]/15 flex flex-col h-[420px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  m.role === "user"
                    ? "bg-[#c45c26] text-white"
                    : "bg-[#fdf6e3] text-gray-800 border border-[#c45c26]/20"
                }`}>
                  {m.role === "sausage" && <span className="mr-1">🐾</span>}
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 border-t border-[#c45c26]/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type ‘I need calm’ or ask anything..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#c45c26] outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#a34a1e]"
            >
              Send
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => respond("I need calm")}
            className="bg-white border border-[#c45c26]/30 rounded-xl py-3 text-sm font-medium hover:bg-[#fdf6e3]"
          >
            💛 I need calm
          </button>
          <button
            onClick={() => respond("Give me a practice")}
            className="bg-white border border-[#c45c26]/30 rounded-xl py-3 text-sm font-medium hover:bg-[#fdf6e3]"
          >
            🧘 Practice please
          </button>
          <button
            onClick={() => respond("Tell me about NDIS")}
            className="bg-white border border-[#c45c26]/30 rounded-xl py-3 text-sm font-medium hover:bg-[#fdf6e3]"
          >
            📋 NDIS help
          </button>
          <button
            onClick={() => respond("How do I book a session?")}
            className="bg-white border border-[#c45c26]/30 rounded-xl py-3 text-sm font-medium hover:bg-[#fdf6e3]"
          >
            📅 Book a session
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-3">Ready for real wags and live pack energy?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">Book a Real Session</Link>
            <Link to="/virtual" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5">Join Virtual Pack</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-6 px-4 text-center text-sm mt-auto">
        <p>🐾 Therapy Sausages · Sausage AI Companion · From true to tremendous</p>
      </footer>
    </div>
  );
}
