import type { Route } from "./+types/kindling";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kindling — $27 Spark That Starts the Fire | Therapy Sausages" },
    {
      name: "description",
      content:
        "The smallest paid door into Sausage Therapy. A 7-day nervous-system spark with dachshund wisdom, aftercare audio and a funded free place attached. True to tremendous starts here.",
    },
  ];
}

export default function Kindling() {
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
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">New Online Element — 20 September 2026</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kindling</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-95">Seven days. Twenty-seven dollars. One spark that funds a free place.</p>
          <a href="mailto:emily@therapysausages.com?subject=Kindling%20%2427" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg">Light Kindling — $27</a>
        </div>
      </section>
    </div>
  );
}
