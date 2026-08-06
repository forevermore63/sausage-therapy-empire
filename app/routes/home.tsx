import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Sausages • Healing Hearts with Every Wag" },
    {
      name: "description",
      content:
        "Real dachshund therapy sessions across Gold Coast, Noosa & beyond. NDIS-friendly, giving-first animal-assisted healing led by Emily Blue Richards. Book individual, corporate, boat experiences & more.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#sessions" className="hover:text-[#c45c26]">Sessions</a>
            <a href="#impact" className="hover:text-[#c45c26]">Impact</a>
            <a href="#shop" className="hover:text-[#c45c26]">Shop</a>
            <a href="#book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</a>
          </nav>
          <a href="#book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl opacity-90 mb-3">Real dachshund therapy • Gold Coast, Noosa & beyond</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Healing Hearts<br />with Every Wag
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Led by Emily Blue Richards. Individual sessions, corporate events, SNOUTSAIL boat experiences. 
            NDIS-friendly. Giving-first — every booking supports dog welfare and access for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Book a Session
            </a>
            <a href="https://x.com/TherapySausages" target="_blank" rel="noreferrer" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Message @TherapySausages
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="sessions" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">Sessions That Heal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Individual Healing</h3>
            <p className="text-3xl font-bold mb-2">From $150</p>
            <p className="text-gray-700 mb-4">45–60 min one-on-one or family with the pack. Ideal for individuals, NDIS participants & families. Mobile across Gold Coast / Noosa.</p>
            <a href="#book" className="text-[#c45c26] font-semibold hover:underline">Book →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Corporate & Groups</h3>
            <p className="text-3xl font-bold mb-2">From $450</p>
            <p className="text-gray-700 mb-4">Office visits, team days, private parties. Stress reduction that actually works. Pack of miniature dachshunds included.</p>
            <a href="#book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md card-hover border border-[#c45c26]/10">
            <div className="text-4xl mb-4">⛵</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">SNOUTSAIL Boat</h3>
            <p className="text-3xl font-bold mb-2">Enquire</p>
            <p className="text-gray-700 mb-4">Unique marina + hinterland combination for deeper healing and corporate standout. Available when conditions allow.</p>
            <a href="#book" className="text-[#c45c26] font-semibold hover:underline">Enquire →</a>
          </div>
        </div>
      </section>

      {/* Impact / Giving-first */}
      <section id="impact" className="py-16 px-4 bg-[#2d5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Giving-First Empire</h2>
          <p className="text-lg mb-8 opacity-95">
            A portion of every booking supports dog welfare, rescue, and free or subsidised therapy for those who need it most. 
            Real dogs. Real results. Real impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#d4a017]">100%</p>
              <p className="text-sm">Real miniature dachshunds</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#d4a017]">NDIS</p>
              <p className="text-sm">Friendly & accessible</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#d4a017]">∞</p>
              <p className="text-sm">Hearts healed</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#d4a017]">%</p>
              <p className="text-sm">Goes back to the dogs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop / Digital Elements */}
      <section id="shop" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">New Online Empire Elements</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Digital products, merch & memberships launching to scale the healing far beyond the local area — while funding more free sessions and dog care.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#d4a017]/30">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-lg mb-2">Dachshund Therapy Guide</h3>
            <p className="text-gray-600 text-sm mb-4">Digital e-book + audio: how sausage dogs reduce stress, anxiety & support NDIS goals. Instant download.</p>
            <p className="font-bold text-[#c45c26]">Coming soon · $29</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#d4a017]/30">
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="font-bold text-lg mb-2">Guided Wag Meditations</h3>
            <p className="text-gray-600 text-sm mb-4">Calming audio sessions recorded with the pack. Perfect for daily nervous-system reset.</p>
            <p className="font-bold text-[#c45c26]">Coming soon · $19</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#d4a017]/30">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-bold text-lg mb-2">Wiener Coaster Merch</h3>
            <p className="text-gray-600 text-sm mb-4">Apparel, coasters & gifts that fund therapy access. Shop opens with first collection.</p>
            <p className="font-bold text-[#c45c26]">Shop launching</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">Want early access or wholesale / corporate packs? Email us.</p>
          <a href="mailto:emily@therapysausages.com?subject=Early%20Access%20-%20Digital%20Products" className="inline-block bg-[#d4a017] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b8860b] transition">
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-2">Book Your Session</h2>
          <p className="text-center text-gray-600 mb-8">Tell us what you need. Emily will reply personally.</p>
          <form
            action="mailto:emily@therapysausages.com"
            method="get"
            encType="text/plain"
            className="bg-white rounded-2xl p-6 shadow-lg space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input name="name" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Session Type</label>
              <select name="type" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#c45c26] outline-none">
                <option>Individual / Family ($150+)</option>
                <option>Corporate / Group ($450+)</option>
                <option>SNOUTSAIL Boat</option>
                <option>NDIS Enquiry</option>
                <option>Digital Products / Merch</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Area / Notes</label>
              <textarea name="notes" rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#c45c26] outline-none" placeholder="Gold Coast, Noosa, dates, group size, special needs..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full hover:bg-[#a34a1e] transition">
              Send Booking Enquiry
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Or email directly: <a href="mailto:emily@therapysausages.com" className="text-[#c45c26] underline">emily@therapysausages.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-lg">🐾 Therapy Sausages</p>
            <p className="text-sm opacity-70">Led by Emily Blue Richards · Gold Coast & Noosa</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://www.instagram.com/sausage_therapy/" target="_blank" rel="noreferrer" className="hover:text-[#d4a017]">Instagram</a>
            <a href="https://x.com/TherapySausages" target="_blank" rel="noreferrer" className="hover:text-[#d4a017]">X / Twitter</a>
            <a href="mailto:emily@therapysausages.com" className="hover:text-[#d4a017]">Email</a>
          </div>
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Therapy Sausages · Giving-first healing empire</p>
        </div>
      </footer>
    </div>
  );
}
