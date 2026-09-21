import type { Route } from "./+types/passport";
import { Link } from "react-router";
import { useMemo, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pack Passport | Digital Membership | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Digital Pack Passport for Sausage Circle members, NDIS families and therapy-line homes. Pairs with Pawport World ID.",
    },
  ];
}

export default function Passport() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Circle member");
  const id = useMemo(() => {
    const seed = (name || "pack").replace(/[^a-z0-9]/gi, "").slice(0, 8).toUpperCase() || "PACK";
    return `ST-${seed}-22`;
  }, [name]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/circles" className="text-sm font-medium">Circle</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <p className="opacity-90 mb-3">Brand-New Online Element — 22 September 2026</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pack Passport</h1>
        <p className="max-w-2xl mx-auto">A living digital card for humans in the pack. Not a chip. A belonging document that prints, screenshots and travels.</p>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <form className="bg-white rounded-2xl p-6 shadow-md space-y-4 border border-[#c45c26]/10" onSubmit={(e) => e.preventDefault()}>
            <label className="block text-sm font-semibold text-[#2d5016]">Name on passport</label>
            <input className="w-full border rounded-xl px-4 py-3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            <label className="block text-sm font-semibold text-[#2d5016]">Role</label>
            <select className="w-full border rounded-xl px-4 py-3" value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Circle member</option>
              <option>NDIS family</option>
              <option>Therapy-line home</option>
              <option>Corporate ally</option>
              <option>Founder Circle</option>
            </select>
            <Link to="/circles" className="block text-center bg-[#c45c26] text-white font-semibold py-3 rounded-full">Activate with Circle</Link>
          </form>
          <div className="bg-gradient-to-br from-[#c45c26] to-[#2d5016] text-white rounded-3xl p-8 shadow-xl min-h-[260px]">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">Therapy Sausages</p>
            <p className="text-3xl font-bold mt-4">{name || "Your name"}</p>
            <p className="opacity-90 mt-1">{role}</p>
            <p className="mt-8 font-mono text-lg">{id}</p>
            <p className="mt-6 text-sm opacity-90">Forevermore Farm · Noosa Dachshunds · Giving-first</p>
          </div>
        </div>
      </section>
    </div>
  );
}
