import type { Route } from "./+types/quorum";
import { Link } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Quorum — Professional Referral Circle | Therapy Sausages" }];
}
export default function Quorum() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-20 px-4 text-center">
        <p>New Online Element — 20 September 2026</p>
        <h1 className="text-5xl font-bold mb-6">Quorum</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">Referral circle for NDIS planners, GPs, OTs and corporate wellbeing.</p>
        <a href="mailto:emily@therapysausages.com?subject=Join%20Quorum" className="inline-block bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full">Join Quorum</a>
      </section>
    </div>
  );
}
