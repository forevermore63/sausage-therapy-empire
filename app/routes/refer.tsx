import type { Route } from "./+types/refer";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Refer & Earn • Share the Wags | Therapy Sausages" },
    {
      name: "description",
      content:
        "Share Therapy Sausages with friends and earn priority booking, free session credits, merch and Circle upgrades. Viral referral program that multiplies healing.",
    },
  ];
}

export default function Refer() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/podcast" className="hover:text-[#c45c26]">Podcast</Link>
            <Link to="/wisdom" className="hover:text-[#c45c26]">Wisdom</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🤝 Referral & Affiliate Program</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share the Wags, Multiply the Healing</h1>
          <p className="text-lg opacity-95 mb-8">
            Every happy client and Circle member becomes a growth channel. Refer friends, family or workplaces and unlock priority booking, free credits, merch and upgrades — while funding more free places.
          </p>
          <a href="mailto:emily@therapysausages.com?subject=Referral%20Program%20Signup" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">
            Get My Referral Link
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Share Your Link</h3>
            <p className="text-gray-700">Receive your unique referral code or link. Share via text, Instagram, email or X.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">They Book or Join</h3>
            <p className="text-gray-700">When someone books a session, joins the Circle or enrols in Academy with your code, it counts.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 text-center card-hover">
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">You Earn Rewards</h3>
            <p className="text-gray-700">Credits, upgrades, merch and priority slots land in your account. Healing multiplies.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Reward Tiers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/15">
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">3 Successful Referrals</h3>
              <p className="text-gray-700">One free 45-min individual session credit or $150 shop credit.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/15">
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">5 Successful Referrals</h3>
              <p className="text-gray-700">Priority booking for 3 months + exclusive Wiener Coaster merch pack.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#d4a017]/40">
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">8 Successful Referrals</h3>
              <p className="text-gray-700">Free month of Sausage Circle membership (or extension if already a member).</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#d4a017]/40">
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate / High-Volume</h3>
              <p className="text-gray-700">Custom affiliate rates and co-branded event packages. Email Emily to discuss.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Ready to Share?</h2>
        <p className="text-gray-600 mb-6">Tell us your name and preferred contact and we’ll send your unique link + tracking tips within 24 hours.</p>
        <form action="mailto:emily@therapysausages.com?subject=Referral%20Program%20Signup" method="get" className="space-y-4">
          <input type="text" name="body" placeholder="Your name + email or Instagram handle" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
          <button type="submit" className="w-full sm:w-auto bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#a34a1e] transition">
            Request My Referral Link
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-6">Or simply share https://therapy-sausages-empire.vercel.app and mention you sent them — we track manually with care.</p>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages Referral Program · Giving-first growth</p>
      </footer>
    </div>
  );
}
