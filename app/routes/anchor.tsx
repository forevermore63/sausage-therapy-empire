import type { Route } from "./+types/anchor";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anchor | Corporate Wellness Retainer | Therapy Sausages" },
    {
      name: "description",
      content:
        "Anchor is the corporate wellness retainer from Therapy Sausages. Multi-session pack visits and reporting for teams. From $2,400. Giving-first workplace healing.",
    },
  ];
}

export default function Anchor() {
  const [done, setDone] = useState(false);
  const [org, setOrg] = useState("");
  const [size, setSize] = useState("10-25");
  const [contact, setContact] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/charter" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Full Charter</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Anchor</h1>
          <p className="text-lg opacity-95">
            Steady workplace healing. A 6-month or annual pack retainer with scheduled visits, virtual options, and simple impact reporting for HR. From $2,400. Portion flows to dog welfare and community access.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Anchor Starter · $2,400</p>
              <p className="text-sm text-gray-700">Four in-person or hybrid sessions over 6 months + one Meridian for the team.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 shadow-sm">
              <p className="font-bold text-[#c45c26]">Anchor Full · $4,800</p>
              <p className="text-sm text-gray-700">Eight sessions, monthly virtual check-ins, impact one-pager for leadership.</p>
            </div>
            <p className="text-sm text-gray-700">NDIS-friendly where participants are involved. Giving-first: visible allocation to dog care on every Anchor.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-anchor") || "[]");
              held.push({ org, size, contact, at: new Date().toISOString() });
              localStorage.setItem("st-anchor", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Request an Anchor</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Organisation name" value={org} onChange={(e) => setOrg(e.target.value)} required />
                <label className="block text-sm text-gray-600">Team size</label>
                <select className="w-full border rounded-xl px-4 py-3" value={size} onChange={(e) => setSize(e.target.value)}>
                  <option>10-25</option>
                  <option>25-50</option>
                  <option>50+</option>
                </select>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your email or phone" value={contact} onChange={(e) => setContact(e.target.value)} required />
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold an Anchor conversation</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">⚓</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Anchor request received</h3>
                <p className="text-gray-700 mb-4">{org}, we will be in touch at {contact}.</p>
                <Link to="/corporate" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">See all corporate options →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
