import type { Route } from "./+types/prism";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prism | Visual Wealth Upsurge Engine | Therapy Sausages" },
    {
      name: "description",
      content:
        "Prism is the visual wealth upsurge engine. Automated photo and video pipelines from the pack and Forevermore Farm. $47/month. Stock, content drops and impact dashboard. $12 to dog welfare. From true to tremendous.",
    },
  ];
}

export default function Prism() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
          <p className="opacity-90 mb-3">Brand new online element — 30 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prism</h1>
          <p className="text-lg opacity-95">
            The visual wealth upsurge engine. Automated pipelines that turn pack moments, farm light and therapy presence into stock photography, video assets and content that compounds. Soft daily visual drops, live monetization dashboard and automatic giving. $12 of every Prism month goes to dog welfare and free places. The light that multiplies the dream from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Prism · $47/month</p>
              <p className="text-sm text-gray-700">Daily visual drops + stock pipeline dashboard + auto-giving visibility. Cancel anytime.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Prism + Aether · $79/month</p>
              <p className="text-sm text-gray-700">Full presence + visual wealth stack.</p>
            </div>
            <p className="text-sm text-gray-700">Giving-first: $12 minimum to dog welfare each month. Designed for content creators, practitioners and empire builders ready to turn the pack into perpetual visual revenue. Access opens immediately on hold.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-prism") || "[]");
              held.push({ name, email, at: new Date().toISOString() });
              localStorage.setItem("st-prism", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Enter the Prism</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-full border rounded-xl px-4 py-3" type="email" placeholder="Email for visual access" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Open the Light</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🔮</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">You are in the Prism</h3>
                <p className="text-gray-700 mb-4">{name}, your first visual drop and pipeline link arrive within the hour. The light is already multiplying.</p>
                <Link to="/aether" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Layer Aether for perpetual presence →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
