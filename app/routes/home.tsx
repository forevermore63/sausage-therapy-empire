import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag | Empire Platform" },
    {
      name: "description",
      content:
        "Real dachshund therapy • Gold Coast, Noosa & Forevermore Farm. From true to tremendous: True, Surge, Tremendous and the full live empire. NDIS-friendly. Giving-first.",
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
          <p className="text-xl opacity-95 mb-6">Led by Emily Blue Richards.<br />From true to tremendous: True, Surge, Tremendous and the full live empire.<br />NDIS-friendly. Giving-first.</p>
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
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Brand New — 11 November 2026 True to Tremendous</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">💛</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">True</h3>
              <p className="text-sm text-gray-700 my-2">Core true presence. $22/month. Daily true drops + authentic pack calm. $5 to the dogs.</p>
              <Link to="/true" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Claim the True →</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">📈</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">Surge</h3>
              <p className="text-sm text-gray-700 my-2">Economic presence surge. $49/month. Daily surge drops + pack momentum. $12 to the dogs.</p>
              <Link to="/surge" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Start the Surge →</Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-[#c45c26]/10 text-center">
              <p className="text-4xl mb-3">🚀</p>
              <h3 className="text-2xl font-bold text-[#c45c26]">Tremendous</h3>
              <p className="text-sm text-gray-700 my-2">Full tremendous growth. $149/month. Daily tremendous drops + empire compounding. $40 to the dogs.</p>
              <Link to="/tremendous" className="inline-block bg-[#c45c26] text-white px-5 py-2 rounded-full text-sm font-semibold">Claim the Tremendous →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <Link to="/horizon" className="text-[#c45c26] underline mx-3">Horizon</Link>
        <Link to="/haven" className="text-[#c45c26] underline mx-3">Haven</Link>
        <Link to="/summit" className="text-[#c45c26] underline mx-3">Summit</Link>
        <Link to="/lumina" className="text-[#c45c26] underline mx-3">Lumina</Link>
        <Link to="/book" className="text-[#c45c26] underline mx-3">Book a Session</Link>
        <Link to="/farm" className="text-[#c45c26] underline mx-3">Forevermore Farm</Link>
      </section>
    </div>
  );
}
