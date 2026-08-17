import type { Route } from "./+types/grants";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Grant Surge Portal • Fund the Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Tools, templates and pathways for Female Founders, NDIS/ILC, 2032 Olympics legacy and other grants that accelerate Sausage Therapy, Forevermore Farm and the giving-first mission.",
    },
  ];
}

export default function Grants() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/legacy" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Olympic Legacy</Link>
        </div>
      </header>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <p className="text-[#c45c26] font-semibold mb-2 text-center">💰 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4 text-center">Grant Surge Portal</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          The funding engine that turns the dream into tremendous scale. Track opportunities, access ready-to-adapt templates, and align every application with measurable impact for dogs, NDIS participants and community wellness.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">👩‍💼</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Female Founders</h3>
            <p className="text-gray-700 text-sm mb-4">Co-investment and accelerator pathways for women-led wellness and animal-assisted ventures.</p>
            <a href="https://www.industry.gov.au/funding-and-incentives" target="_blank" rel="noreferrer" className="text-[#c45c26] font-semibold text-sm hover:underline">Explore →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">♿</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">NDIS / ILC</h3>
            <p className="text-gray-700 text-sm mb-4">Information Linkages & Capacity Building and provider readiness for animal-assisted supports.</p>
            <Link to="/ndis" className="text-[#c45c26] font-semibold text-sm hover:underline">NDIS Portal →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <div className="text-3xl mb-3">🏅</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">2032 Olympics</h3>
            <p className="text-gray-700 text-sm mb-4">Legacy supplier, wellness infrastructure and community impact programs for Brisbane 2032.</p>
            <Link to="/legacy" className="text-[#c45c26] font-semibold text-sm hover:underline">Legacy Hub →</Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c45c26]/15 mb-12">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6">Ready-to-Adapt Application Framework</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-bold text-[#c45c26]">1. Impact Statement Core</h4>
              <p className="text-sm">"Every dollar multiplies: therapy sessions delivered, free places created for hardship/NDIS, dog welfare supported, and measurable nervous-system outcomes tracked via our Impact Dashboard."</p>
            </div>
            <div>
              <h4 className="font-bold text-[#c45c26]">2. Evidence Anchors</h4>
              <p className="text-sm">Live Impact Dashboard metrics, Healing Stories, NDIS session notes capability, farm capacity, Virtual Pack reach, and giving-first model transparency.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#c45c26]">3. Scalability Narrative</h4>
              <p className="text-sm">From mobile sessions → Forevermore Farm immersions → Digital Academy & memberships → 2032 legacy infrastructure. Systems already built and live.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#c45c26]">4. Budget Logic</h4>
              <p className="text-sm">Personnel (Emily + pack support), land/vehicle readiness, digital platform maintenance, free-access places subsidy, monitoring & evaluation.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d5016] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Tailored Grant Pack?</h2>
          <p className="mb-6 opacity-90">Email Emily with the specific grant name and deadline. We will assemble the strongest possible evidence pack from the live empire assets.</p>
          <a href="mailto:emily@therapysausages.com?subject=Grant%20Surge%20Support%20Request" className="inline-block bg-white text-[#2d5016] font-semibold px-8 py-3 rounded-full hover:bg-[#fdf6e3] transition">
            Request Grant Support
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/command" className="text-[#c45c26] font-semibold hover:underline">Command Center →</Link>
          <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">Impact Dashboard →</Link>
          <Link to="/legacy" className="text-[#c45c26] font-semibold hover:underline">2032 Legacy →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · Grant-ready · From true to tremendous
      </footer>
    </div>
  );
}
