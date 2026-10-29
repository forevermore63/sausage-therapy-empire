import type { Route } from "./+types/1000days";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "1000 Days for Sausage | Return the Assistance Dog" },
    {
      name: "description",
      content:
        "1000 Days for Sausage. Peaceful daily presence outside Noosa Council with a different photo of the assistance dog every day until she is home. Floral field of love. Protect people with disability and their assistance animals.",
    },
  ];
}

export default function ThousandDays() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#c45c26] mb-4">1000 Days for Sausage</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-6">
          Return the assistance dog. Protect every person with disability. Every day she is kept away is another photo shown to the world.
        </p>
        <p className="text-5xl font-bold text-[#2d5016]">Day 1 of 1000</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c45c26]/10">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Sausage is not replaceable</h2>
          <p className="text-gray-700">
            Sausage (Tabitha, microchip 997003000613620) is the registered therapy and service dog who kept Emily Blue Richards alive. International therapy registration. NSW service dog. Sunshine Coast Council registration. Cancer-detection line. Kindred spirit. Seized by Noosa Council. Still not home.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c45c26]/10">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">The peaceful stand</h2>
          <p className="text-gray-700 mb-4">
            Daily sitting presence outside Noosa Council chambers with one unique printed photo of Sausage each day — 1000 photos ready. Quiet. Visible. Unstoppable. Plus a giant walkable floral sausage-dog field at Forevermore Farm, Cooran.
          </p>
          <a href="mailto:emilybluerichards@gmail.com?subject=I%20stand%20with%20Sausage" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Stand with Sausage</a>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c45c26]/10">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">What needs to change</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Immediate return of Sausage and recognition of her assistance-animal status.</li>
            <li>Accountability for the Local Laws decision process.</li>
            <li>Legislative review so animal-number rules cannot separate a person with disability from their lawful assistance animal or force people into homelessness.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
