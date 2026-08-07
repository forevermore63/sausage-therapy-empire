import type { Route } from "./+types/academy";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digital Academy • Therapy Sausages" },
    { name: "description", content: "Online courses in animal-assisted therapy, therapy dog business building, trauma-informed dachshund work and resilient wellness empires. Certificates, community and impact." },
  ];
}

export default function Academy() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🎓 Therapy Sausages Digital Academy</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn the Art & Business of Healing with Dachshunds</h1>
          <p className="text-lg opacity-95 mb-8">Practical, trauma-informed training so you can bring sausage-dog medicine into your practice, business or community — while building a giving-first empire of your own.</p>
          <a href="#courses" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition inline-block">View Courses</a>
        </div>
      </section>

      <section id="courses" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-12">Flagship Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/15 card-hover">
            <div className="text-3xl mb-3">🐕‍🦺</div>
            <h3 className="text-2xl font-bold text-[#c45c26] mb-2">Foundations of Dachshund Therapy</h3>
            <p className="text-gray-600 mb-4">6 modules · Self-paced · Certificate</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Science of human-animal bond & nervous system regulation</li>
              <li>• Selecting, socialising & working with miniature dachshunds</li>
              <li>• Session design for individuals, families & groups</li>
              <li>• NDIS, ethics, risk & trauma-informed practice</li>
              <li>• Building your first local or mobile offering</li>
            </ul>
            <p className="text-2xl font-bold text-[#2d5016] mb-4">$297 <span className="text-sm font-normal text-gray-500">or 3 × $109</span></p>
            <a href="mailto:emily@therapysausages.com?subject=Academy%20-%20Foundations%20Enrolment" className="inline-block bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Enrol Now</a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#d4a017]/40 card-hover">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-2xl font-bold text-[#c45c26] mb-2">Therapy Empire Builder</h3>
            <p className="text-gray-600 mb-4">8 modules + live calls · Certificate + community</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Everything in Foundations + advanced business systems</li>
              <li>• Pricing, packages, corporate & retreat offers</li>
              <li>• Digital products, memberships & passive income layers</li>
              <li>• Grant writing, NDIS provider pathways & impact measurement</li>
              <li>• Brand, storytelling & giving-first funnel design</li>
              <li>• Live group coaching with Emily + private community</li>
            </ul>
            <p className="text-2xl font-bold text-[#2d5016] mb-4">$997 <span className="text-sm font-normal text-gray-500">or 6 × $179</span></p>
            <a href="mailto:emily@therapysausages.com?subject=Academy%20-%20Empire%20Builder%20Enrolment" className="inline-block bg-[#d4a017] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b8860b] transition">Join the Cohort</a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why This Academy Exists</h2>
          <p className="text-gray-700 mb-6">Because real sausage-dog healing should not stay locked in one postcode. The Academy trains more practitioners, multiplies impact, creates passive revenue for Forevermore Farm and Noosa Dachshunds, and funds free/subsidised places for those who need them most.</p>
          <Link to="/impact" className="text-[#c45c26] font-semibold hover:underline">See how your enrolment creates impact →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages Digital Academy</p>
      </footer>
    </div>
  );
}
