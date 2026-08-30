import type { Route } from "./+types/campus";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Working-Dog Campus • Therapy Sausages" },
    {
      name: "description",
      content:
        "12-month plan for a compliant Therapy Sausages working-dog campus: animal-assisted sessions, training, and a capped ethical reserve. Target site under review: Rockley Valley Park, Fosters Valley NSW — or a reachable DA-ready alternative.",
    },
  ];
}

export default function Campus() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/ndis" className="hover:text-[#c45c26]">NDIS</Link>
            <Link to="/partners" className="hover:text-[#c45c26]">Partners</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Next stage · 12-month campus plan</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A working-dog campus, not a vacant holding</h1>
          <p className="text-lg opacity-95 mb-8">
            Therapy Sausages is ready to stand up a compliant campus for dachshund-led sessions, training, and a tightly capped ethical reserve. The preferred site under review is Rockley Valley Park. If that guide is not reachable, we search inside a funded band — not outside it.
          </p>
          <a href="mailto:emilybluerichards@gmail.com" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Partner or inspect with us
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-4">Target site under review</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Rockley Valley Park, 1557 Rockley Road, Fosters Valley NSW 2795. Purpose-built kennel campus on 101.9 ha. Not yet contracted. Listed private treaty after the February 2026 auction.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">The plant</h3>
            <p className="text-gray-700">DA-approved commercial kennel and boarding facility, 20 heated whelping bays, on-site veterinary hospital, generator and licensed bore, two homes.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">The law we will keep</h3>
            <p className="text-gray-700">NSW cap of 20 entire adult females. BIN. Staff 1:20. Lifetime litter limits. The 60-dog DA is planning consent, not a licence to exceed the breeding cap.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">How it gets bought</h3>
            <p className="text-gray-700">Cooran equity as the exit or security leg, delayed settlement, operator JV, or a smaller DA-ready campus inside a written buying-power band.</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">
          <a className="text-[#c45c26] font-semibold hover:underline" href="https://sydneysothebysrealty.com/15565/1557-rockley-road-fosters-valley">Sotheby’s listing →</a>
        </p>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">12-month operating plan</h2>
          <ol className="space-y-3 text-white/95">
            <li><b>Months 0–3.</b> Stabilise Forevermore Farm, Cooran. Issue a written buying-power range so agents will open doors.</li>
            <li><b>Months 3–9.</b> Inspect Rockley on terms, or contract a reachable DA-ready kennel / rural campus inside the approved band.</li>
            <li><b>Months 6–12.</b> Stand up sessions, training partnerships and a capped reserve so the asset is an operating business.</li>
          </ol>
        </div>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Reachable margins welcome</h2>
        <p className="text-gray-600 mb-6">
          If Rockley is not negotiable at the current guide, we will search inside whatever price, LVR and location band a lending partner can actually support. A settled campus beats a brochure.
        </p>
        <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#a34a1e] transition inline-block">
          Talk to Emily
        </Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Sausage Therapy Pty Ltd</p>
      </footer>
    </div>
  );
}
