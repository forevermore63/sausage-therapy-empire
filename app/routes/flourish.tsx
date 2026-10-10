import type { Route } from "./+types/flourish";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flourish | Therapy Visual Packs | Therapy Sausages" },
    {
      name: "description",
      content:
        "Flourish is the visual content hub from Therapy Sausages. Licensed image packs of the therapy dachshunds for clinics, creators and wellness brands. From $49. Royalties support the dogs.",
    },
  ];
}

export default function Flourish() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [use, setUse] = useState("clinic");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/visual" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Visual Hub</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flourish</h1>
          <p className="text-lg opacity-95">
            Authentic therapy dachshund visuals for the people who heal with animals. High-resolution packs ready for websites, social, presentations and print. From $49. A share of every sale supports the pack and free places.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Starter Pack · $49</p>
              <p className="text-sm text-gray-700">12 images. Commercial use for one brand or clinic. Instant download.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Flourish Library · $197</p>
              <p className="text-sm text-gray-700">60+ images + short clips. Unlimited use for your practice or content. Priority on new drops.</p>
            </div>
            <p className="text-sm text-gray-700">Visual wealth that compounds. Every pack sold keeps the dogs working and the farm healing.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-flourish") || "[]");
              held.push({ name, use, at: new Date().toISOString() });
              localStorage.setItem("st-flourish", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Get the visuals</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name or practice" value={name} onChange={(e) => setName(e.target.value)} required />
                <label className="block text-sm text-gray-600">Primary use</label>
                <select className="w-full border rounded-xl px-4 py-3" value={use} onChange={(e) => setUse(e.target.value)}>
                  <option>clinic</option>
                  <option>content creator</option>
                  <option>corporate wellness</option>
                  <option>personal</option>
                </select>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Claim your pack</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🌸</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Flourish is ready</h3>
                <p className="text-gray-700 mb-4">{name}, your visual pack is queued. Check email for the link.</p>
                <Link to="/visual" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Explore more visuals →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
