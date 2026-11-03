import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy • Gold Coast, Noosa & Forevermore Farm. From true to tremendous: Nova, Vesper, Keystone and the full live empire. NDIS-friendly. Giving-first.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Healing Hearts<br />with Every Wag</h1>
          <p className="text-xl opacity-95 mb-6">Led by Emily Blue Richards.<br />From true to tremendous: Nova, Vesper, Keystone and the full live empire.<br />NDIS-friendly. Giving-first.</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <div>247+ Hearts Healed</div>
            <div>$18.4k Given Back to Dogs</div>
            <div>62 NDIS Sessions</div>
            <div>∞ Wags Delivered</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Brand New — 3 November 2026 True to Tremendous</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">🌟</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">Nova</h3>
              <p className="text-sm text-gray-700 my-2">Ignition engine. $79/month. Daily sparks + momentum. $18 to the dogs.</p>
              <Link to="/nova" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Enter the Nova →</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">🌙</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">Vesper</h3>
              <p className="text-sm text-gray-700 my-2">Evening sanctuary. $45/month. Wind-down sequences. $10 to the dogs.</p>
              <Link to="/vesper" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Enter the Vesper →</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">🔒</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">Keystone</h3>
              <p className="text-sm text-gray-700 my-2">Foundational operator. $199/mo or $3997 lifetime. $50/$1000 to the dogs.</p>
              <Link to="/keystone" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Lock the Keystone →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <Link to="/aurora" className="text-[#c45c26] underline mx-3">Aurora</Link>
        <Link to="/forge" className="text-[#c45c26] underline mx-3">Forge</Link>
        <Link to="/pack" className="text-[#c45c26] underline mx-3">Pack Circle</Link>
        <Link to="/book" className="text-[#c45c26] underline mx-3">Book a Session</Link>
        <Link to="/farm" className="text-[#c45c26] underline mx-3">Forevermore Farm</Link>
      </section>
    </div>
  );
}
