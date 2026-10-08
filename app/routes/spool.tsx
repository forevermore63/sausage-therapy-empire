import type { Route } from "./+types/spool";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Spool | This Week's Posts Ready | Therapy Sausages" },
    {
      name: "description",
      content:
        "Spool is the Sausage Therapy content engine. Copy this week's posts and send them. Distribution without starting from a blank page.",
    },
  ];
}

const POSTS = [
  {
    channel: "Instagram",
    text: "The pack does not ask you to be fixed. They ask you to stay for ninety seconds. Wick is $9 if you want the line. Link in bio — Therapy Sausages.",
  },
  {
    channel: "Email",
    text: "Subject: The smallest door. Body: If a full session is too much this week, light a Wick. $9. One line from the kennel. $2 to the dogs. Reply if you want a Meridian seat instead.",
  },
  {
    channel: "Story",
    text: "Orchard days are open. Coffee van at Mitchell, harvest hour on the farm, or a roll-out. Hold a date before the season fills.",
  },
];

export default function Spool() {
  const [copied, setCopied] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/ambassador" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Ambassadors</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 9 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spool</h1>
          <p className="text-lg opacity-95">
            This week's posts are already written. Copy them. The empire grows when the pack is seen, not when another blank page wins.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto space-y-4">
          {POSTS.map((post) => (
            <article key={post.channel} className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26] mb-2">{post.channel}</p>
              <p className="text-gray-800 mb-4">{post.text}</p>
              <button
                className="border border-[#c45c26] text-[#c45c26] font-semibold px-4 py-2 rounded-full text-sm"
                onClick={() => {
                  navigator.clipboard?.writeText(post.text);
                  setCopied(post.channel);
                }}
              >
                {copied === post.channel ? "Copied" : "Copy post"}
              </button>
            </article>
          ))}

          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const rows = JSON.parse(localStorage.getItem("st-spool") || "[]");
              rows.push({ email, at: new Date().toISOString() });
              localStorage.setItem("st-spool", JSON.stringify(rows));
              setJoined(true);
            }}
          >
            {!joined ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Get next week's spool</h2>
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Join the spool</button>
              </>
            ) : (
              <p className="text-[#2d5016] font-semibold">You are on the spool. Next set lands with the week.</p>
            )}
          </form>
          <p className="text-center">
            <Link to="/wick" className="text-[#c45c26] font-semibold">Point the posts at Wick →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
