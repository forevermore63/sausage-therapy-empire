import type { Route } from "./+types/partners";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Partners & Affiliates Portal | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Partner with Therapy Sausages. NDIS providers, Support Coordinators, corporates, therapists, influencers and affiliates — grow together while funding free therapy places and dog welfare.",
    },
  ];
}

export default function Partners() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
        </div>
      </header>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c45c26] font-semibold mb-2">🤝 New Online Element</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Partners Portal</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Amplify healing. Earn while giving. Join the network of Support Coordinators, Plan Managers, corporates, therapists, creators and affiliates who grow the empire with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">NDIS & Support Partners</h3>
            <p className="text-gray-700 mb-4">Refer participants, co-deliver sessions, receive impact reports. Priority booking slots and clear referral pathways.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>✓ Dedicated NDIS portal</li>
              <li>✓ Easy documentation support</li>
              <li>✓ Shared impact metrics</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">Corporate & Wellness</h3>
            <p className="text-gray-700 mb-4">Bring the pack to your workplace or book farm days. White-label options and measurable wellness outcomes.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>✓ Team packages from $450</li>
              <li>✓ Farm & boat experiences</li>
              <li>✓ Post-event impact summary</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">Affiliates & Creators</h3>
            <p className="text-gray-700 mb-4">Share the mission. Earn commission on memberships, academy, shop and bookings via unique referral links.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>✓ Transparent tracking</li>
              <li>✓ Marketing assets provided</li>
              <li>✓ Monthly payouts</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">Fellow Therapists & Trainers</h3>
            <p className="text-gray-700 mb-4">Collaborate, guest on sessions, co-create content or refer overflow. Grow the animal-assisted therapy field together.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>✓ Cross-promotion</li>
              <li>✓ Shared learning</li>
              <li>✓ Academy collaboration</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#c45c26]/15 text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Apply to Partner</h2>
          <p className="text-gray-600 mb-6">Tell us who you are and how you’d like to grow together. Emily reviews every application personally.</p>
          <form action="mailto:emily@therapysausages.com?subject=Partner%20Application" method="get" className="max-w-md mx-auto space-y-4 text-left">
            <input type="text" name="name" placeholder="Your name / organisation" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <select name="type" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none">
              <option value="">Partner type…</option>
              <option value="ndis">NDIS / Support Coordinator</option>
              <option value="corporate">Corporate / Wellness</option>
              <option value="affiliate">Affiliate / Creator</option>
              <option value="therapist">Therapist / Trainer</option>
              <option value="other">Other</option>
            </select>
            <textarea name="body" rows={4} placeholder="How would you like to partner?" required className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"></textarea>
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Submit Application
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/refer" className="text-[#c45c26] font-semibold hover:underline">Referral Engine →</Link>
          <Link to="/ndis" className="text-[#c45c26] font-semibold hover:underline">NDIS Portal →</Link>
          <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">Impact →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · From true to tremendous · Giving-first
      </footer>
    </div>
  );
}
