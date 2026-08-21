import type { Route } from "./+types/ambassador";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ambassador & Affiliate Program • Grow With Us | Therapy Sausages" },
    {
      name: "description",
      content:
        "Join the Therapy Sausages Ambassador Program. Earn commissions, Wag Points and impact credits by sharing authentic dachshund healing. Viral growth engine that multiplies reach while staying giving-first.",
    },
  ];
}

export default function Ambassador() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">Book Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Viral Growth · Passive Earnings · Real Impact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ambassador & Affiliate Program
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Share the healing. Earn commissions on sessions, memberships, certification, gifts and digital products. Every successful referral also funds free places and dog welfare. Turn your network into lasting impact.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Ambassador%20Application" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Apply to Become an Ambassador
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-4">1</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Apply & Get Approved</h3>
            <p className="text-gray-700">Simple form. We look for authentic alignment with the giving-first mission and love of the dogs.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-4">2</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Receive Your Links & Assets</h3>
            <p className="text-gray-700">Unique tracking links, beautiful share graphics, story templates and Wag Points boosters.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-4">3</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Share & Earn</h3>
            <p className="text-gray-700">Commissions paid monthly. Extra Wag Points, priority farm spots and public impact recognition.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Commission Structure</h2>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15">
            <ul className="space-y-4 text-gray-800">
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Individual / Family Sessions</span>
                <span className="font-bold text-[#c45c26]">15%</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Corporate & Group Events</span>
                <span className="font-bold text-[#c45c26]">12%</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Farm Retreats & Immersions</span>
                <span className="font-bold text-[#c45c26]">10%</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Sausage Circle Membership</span>
                <span className="font-bold text-[#c45c26]">20% first year</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Practitioner Certification</span>
                <span className="font-bold text-[#c45c26]">15%</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span>Digital Products & Shop</span>
                <span className="font-bold text-[#c45c26]">25%</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Gift Cards & Packages</span>
                <span className="font-bold text-[#c45c26]">10%</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600 text-center">All commissions calculated on net revenue after payment processing. Monthly payouts via preferred method once threshold is met.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Ambassador Perks Beyond Money</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">🏆 Wag Points Multiplier</h3>
            <p className="text-gray-700">Earn accelerated loyalty points on every successful referral for free sessions and priority access.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">🌿 Farm & Event Priority</h3>
            <p className="text-gray-700">Early access to limited farm days, retreats and special pack experiences.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">📣 Official Recognition</h3>
            <p className="text-gray-700">Featured on the Impact Dashboard and community channels when you hit milestones.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
            <h3 className="font-bold text-[#c45c26] mb-2">💚 Giving Credit</h3>
            <p className="text-gray-700">A portion of every referral is publicly attributed to the free-place and dog-welfare fund in your name.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#c45c26] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Multiply the Wags?</h2>
        <p className="max-w-xl mx-auto mb-8 opacity-95">This is not a hard-sell scheme. It is an invitation for people who already love what we do to help more hearts heal while building their own income and impact.</p>
        <a href="mailto:emily@therapysausages.com?subject=Ambassador%20Application" className="bg-white text-[#c45c26] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#fdf6e3] transition inline-block">
          Apply Now
        </a>
        <p className="mt-6 text-sm opacity-80">Emily reviews every application personally.</p>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Ambassador Program · From true to tremendous</p>
        <p className="mt-2 opacity-60">© {new Date().getFullYear()} · Led by Emily Blue Richards</p>
      </footer>
    </div>
  );
}
