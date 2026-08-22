import type { Route } from "./+types/franchise";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages Franchise & Licensing | Scale the Method" },
    {
      name: "description",
      content:
        "License the Therapy Sausages method — ethical dachshund-assisted therapy systems, NDIS pathways, corporate delivery and giving-first business models. Become a Licensed Practitioner or Farm Partner and scale healing while generating premium revenue.",
    },
  ];
}

export default function Franchise() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/certify" className="hover:text-[#c45c26]">Certification</Link>
            <Link to="/ambassador" className="hover:text-[#c45c26]">Ambassador</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Franchise & Licensing<br />Scale the Method
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            License the proven Therapy Sausages system — ethical dachshund-assisted therapy, NDIS mastery, corporate wellness delivery and giving-first business models. Become a Licensed Practitioner or Forevermore-style Farm Partner. Every licence funds free places and dog recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:emily@therapysausages.com?subject=Franchise%20%26%20Licensing%20Enquiry" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Apply for Licence
            </a>
            <Link to="/certify" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Start with Certification
            </Link>
          </div>
        </div>
      </section>

      {/* Why Licence */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Why Licence Therapy Sausages?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The method is proven, NDIS-aligned, emotionally magnetic and designed for both impact and profitable scale. You receive the systems, branding rights, training pathways and ongoing support so you can deliver real healing without reinventing the wheel.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Complete Systems</h3>
            <p className="text-gray-700">Session protocols, NDIS documentation templates, corporate pitch decks, risk frameworks, giving-first pricing models and marketing playbooks ready to deploy.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Brand & Legal Protection</h3>
            <p className="text-gray-700">Authorised use of Therapy Sausages branding, ethical guidelines, quality standards and ongoing IP protection so the method stays pure and powerful.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Revenue + Impact</h3>
            <p className="text-gray-700">High-ticket sessions, memberships, corporate contracts and digital products. A clear percentage of every licence and royalty funds free therapy places and dog welfare.</p>
          </div>
        </div>
      </section>

      {/* Licence Tiers */}
      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Licence Pathways</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#c45c26]/20">
              <p className="text-[#c45c26] font-semibold mb-2">Licensed Practitioner</p>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Solo or Small Team</h3>
              <p className="text-3xl font-bold text-[#c45c26] mb-4">From $4,997</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Full Practitioner Certification included</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Branding rights for your region</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Session & NDIS templates</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Corporate delivery playbook</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Quarterly group mentoring</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Listing on Therapy Sausages directory</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Ongoing royalty structure that funds impact</li>
              </ul>
              <a href="mailto:emily@therapysausages.com?subject=Licensed%20Practitioner%20Enquiry" className="block text-center bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">
                Apply for Practitioner Licence
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#d4a017]">
              <p className="text-[#d4a017] font-semibold mb-2">Farm / Retreat Partner</p>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Land-Based Experiences</h3>
              <p className="text-3xl font-bold text-[#c45c26] mb-4">From $12,997</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Everything in Practitioner +</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Forevermore Farm experience systems</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Day immersion & overnight retreat frameworks</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Corporate farm-day packages</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Land-care & dog-welfare integration model</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Priority support & co-marketing</li>
                <li className="flex gap-2"><span className="text-[#c45c26] font-bold">✓</span> Higher revenue share & impact credit</li>
              </ul>
              <a href="mailto:emily@therapysausages.com?subject=Farm%20Partner%20Licence%20Enquiry" className="block text-center bg-[#d4a017] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b8860b] transition">
                Apply for Farm Partner Licence
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Simple Path to Licence</h2>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c45c26] text-white font-bold flex items-center justify-center">1</span>
            <div>
              <h3 className="font-bold text-lg text-[#2d5016]">Enquire & Discovery Call</h3>
              <p className="text-gray-700">Tell us about your location, experience with dogs or therapy, and vision. Emily personally reviews fit.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c45c26] text-white font-bold flex items-center justify-center">2</span>
            <div>
              <h3 className="font-bold text-lg text-[#2d5016]">Certification & Systems Training</h3>
              <p className="text-gray-700">Complete the Practitioner Certification (included in licence) and receive the full operational toolkit.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c45c26] text-white font-bold flex items-center justify-center">3</span>
            <div>
              <h3 className="font-bold text-lg text-[#2d5016]">Agreement & Launch</h3>
              <p className="text-gray-700">Sign the licence agreement, receive branding assets and go live with ongoing mentoring and impact tracking.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Healing?</h2>
          <p className="opacity-90 mb-8">Every licence multiplies the number of hearts that can be healed while generating real revenue that funds free places and dog recovery. From true to tremendous — together.</p>
          <a href="mailto:emily@therapysausages.com?subject=Franchise%20%26%20Licensing%20Application" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Send Licence Application
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Franchise & Licensing · Led by Emily Blue Richards</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
