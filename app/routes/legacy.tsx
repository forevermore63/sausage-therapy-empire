import type { Route } from "./+types/legacy";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2032 Olympic Legacy & Grants • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Positioning Sausage Therapy / Noosa Dachshunds / Forevermore Farm for 2032 Brisbane Olympics legacy, supplier status, NDIS/ILC grants, Female Founders and conscious impact funding. Transparent vision and partnership portal.",
    },
  ];
}

export default function Legacy() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/give" className="hover:text-[#c45c26]">Give</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">New Online Empire Element</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2032 Olympic Legacy Portal</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Building measurable, animal-assisted wellness infrastructure that leaves a permanent positive footprint for Brisbane 2032 and beyond. Grants, supplier pathways, corporate partnerships and public impact tracking — all in one transparent place.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">The Vision in Action</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🏅</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Olympics Legacy</h3>
            <p className="text-gray-700">Position Therapy Sausages as a living wellness and inclusion program that athletes, volunteers, families and communities can access before, during and after the Games. Measurable mental health outcomes via dachshund-assisted sessions.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Grants & Funding</h3>
            <p className="text-gray-700">Active pursuit of Female Founders Co-Investment, NDIS/ILC, state tourism/wellness grants and Olympics-related supplier registration. This page tracks progress and partnership opportunities.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Scalable Impact Model</h3>
            <p className="text-gray-700">Replicable template: mobile packs + farm base + virtual layer + digital academy. Designed so other regions can license or adapt the model with full giving-first DNA intact.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6 text-center">Partnership & Funding Pathways</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26]">Corporate & Government Partners</h3>
              <p className="text-gray-700 text-sm mt-1">Sponsor packs for athletes, volunteers or community mental health programs. Receive full impact reporting and brand alignment with a genuine giving-first story.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26]">Grant Collaborators</h3>
              <p className="text-gray-700 text-sm mt-1">Joint applications, evidence sharing and program design support for NDIS, ILC, tourism, women’s enterprise and Olympics legacy funds.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#c45c26]/10">
              <h3 className="font-bold text-[#c45c26]">Land & Facility Allies</h3>
              <p className="text-gray-700 text-sm mt-1">Forevermore Farm and future satellite sites as living laboratories for animal-assisted wellness research and public demonstration.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="mailto:emily@therapysausages.com?subject=2032%20Legacy%20Partnership" className="inline-block bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#a34a1e] transition">
              Start a Partnership Conversation
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Transparent Progress</h2>
        <p className="text-gray-600 mb-6">This portal will update with grant outcomes, supplier status, partner logos and public impact metrics as they land. Accountability is non-negotiable.</p>
        <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">View current Impact Dashboard →</Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link>
        <p className="mt-2">© {new Date().getFullYear()} Therapy Sausages · From true to tremendous</p>
      </footer>
    </div>
  );
}
