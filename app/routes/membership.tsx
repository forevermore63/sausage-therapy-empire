import type { Route } from "./+types/membership";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Circle Membership • Therapy Sausages" },
    {
      name: "description",
      content:
        "Join the Sausage Circle — monthly membership with guided practices, live Q&As with Emily, priority booking, digital downloads and transparent impact. Recurring support that funds free therapy places and dog welfare.",
    },
  ];
}

export default function Membership() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link to="/" className="hover:text-[#c45c26]">Home</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🌟 Sausage Circle</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Belong. Heal. Multiply Impact.</h1>
          <p className="text-lg opacity-95 mb-8">
            Monthly membership that keeps the healing flowing — for you, for the dogs, and for people who could never otherwise afford a session. Recurring revenue that builds the Forevermore empire while you receive real support every month.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">What You Receive</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Weekly guided audio practices (nervous-system regulation with sausage wisdom)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Monthly live Zoom Q&A / circle with Emily Blue Richards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Priority booking window for in-person & mobile sessions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Exclusive digital downloads (meditations, worksheets, breed wisdom packs)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Transparent monthly impact report — exactly where your contribution went</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c45c26] font-bold">✓</span>
                <span>Community space + early access to Academy modules and new products</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#d4a017]/40">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-wide mb-2">Sausage Circle</p>
            <p className="text-4xl font-bold text-[#2d5016] mb-1">$47<span className="text-lg font-normal text-gray-500"> / month</span></p>
            <p className="text-sm text-gray-500 mb-6">Cancel anytime · Portion funds free therapy places</p>
            <a
              href="mailto:emily@therapysausages.com?subject=Sausage%20Circle%20Membership%20-%20Join&body=Hi%20Emily%2C%0A%0AI%20would%20like%20to%20join%20the%20Sausage%20Circle%20membership.%0A%0AName%3A%0APreferred%20start%20date%3A%0AAny%20notes%3A%0A%0AThanks!"
              className="block w-full text-center bg-[#c45c26] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#a34a1e] transition mb-4"
            >
              Join the Circle Now
            </a>
            <p className="text-xs text-center text-gray-500">
              Or message @TherapySausages on X / Instagram. Payment links sent personally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Membership Matters</h2>
          <p className="opacity-90 mb-6">
            One-off bookings are beautiful. Recurring members create the stable foundation that lets us keep dogs healthy, offer subsidised NDIS and hardship places, and scale the Digital Academy so more healers can carry the work. Your $47 is not just support for you — it is fuel for the entire giving-first empire.
          </p>
          <Link to="/impact" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition">
            See Live Impact →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Sausage Circle</p>
      </footer>
    </div>
  );
}
