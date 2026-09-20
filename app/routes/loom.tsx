import type { Route } from "./+types/loom";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Loom | Content & Product Factory | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Loom turns farm, pack and healing days into ready-to-post stories, product pages and digital goods so the empire keeps speaking when Emily is on the road.",
    },
  ];
}

const threads = [
  { name: "Story thread", body: "One true moment from the pack becomes a caption, a short, and a Healing Story page." },
  { name: "Product thread", body: "Wiener Coaster, Academy modules, Lantern nights and Pact tiers get fresh copy without starting from zero." },
  { name: "Grant thread", body: "The same facts feed Female Founders, NDIS language and 2032 legacy pages so you stop rewriting the origin." },
  { name: "Visual thread", body: "Dachshund and farm stills queue for stock, merch mockups and the Visual Wealth Hub." },
];

export default function Loom() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/shop" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Shop</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Engine — 21 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loom</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            The factory that weaves one real day into many doors: story, shop, grant, visual. The dream keeps speaking while you live it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
          {threads.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
              <h3 className="text-xl font-bold text-[#2d5016] mb-2">{t.name}</h3>
              <p className="text-gray-700">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          <Link to="/shop" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full">Open the shop →</Link>
          <Link to="/academy" className="border-2 border-[#2d5016] text-[#2d5016] font-semibold px-6 py-3 rounded-full">Academy →</Link>
          <Link to="/grants" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full">Grant thread →</Link>
        </div>
      </section>
    </div>
  );
}
