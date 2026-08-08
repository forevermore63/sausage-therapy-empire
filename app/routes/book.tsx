import type { Route } from "./+types/book";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book a Session • Therapy Sausages" },
    {
      name: "description",
      content:
        "Book individual healing sessions, corporate events, group days or SNOUTSAIL boat experiences with Therapy Sausages. NDIS-friendly. Mobile across Gold Coast, Noosa and beyond. Led by Emily Blue Richards.",
    },
  ];
}

export default function Book() {
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
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/shop" className="hover:text-[#c45c26]">Shop</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">📅 Book Your Session</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ready for Real Wags?</h1>
          <p className="text-lg opacity-95">
            Individual, family, corporate or boat. NDIS participants welcome. Emily replies personally and will send available times and a simple booking link.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c45c26]/15">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6 text-center">Send a Booking Enquiry</h2>

          <form
            action="mailto:emily@therapysausages.com"
            method="get"
            encType="text/plain"
            className="space-y-5"
          >
            <input type="hidden" name="subject" value="Therapy Sausages Booking Enquiry" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="body"
                required
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Session Type</label>
              <select
                name="session"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none bg-white"
              >
                <option>Individual / Family Healing (from $150)</option>
                <option>Corporate / Group Event (from $450)</option>
                <option>SNOUTSAIL Boat Experience</option>
                <option>NDIS / Supported Session</option>
                <option>Not sure yet — please advise</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Area / Location</label>
              <input
                type="text"
                name="location"
                placeholder="Gold Coast / Noosa / hinterland / other"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Dates or Flexibility</label>
              <textarea
                name="dates"
                rows={3}
                placeholder="Any preferred days, times or notes..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of People / Special Requests</label>
              <textarea
                name="notes"
                rows={2}
                placeholder="How many people, any accessibility needs, NDIS details etc."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c45c26] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#a34a1e] transition pulse-glow"
            >
              Send Enquiry to Emily
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Prefer direct contact? Email{" "}
            <a href="mailto:emily@therapysausages.com" className="text-[#c45c26] font-medium hover:underline">
              emily@therapysausages.com
            </a>{" "}
            or message{" "}
            <a href="https://x.com/TherapySausages" target="_blank" rel="noreferrer" className="text-[#c45c26] font-medium hover:underline">
              @TherapySausages
            </a>
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-white/80 rounded-xl p-4 border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Individual</p>
            <p className="text-gray-600">From $150 · 45–60 min</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">Corporate / Group</p>
            <p className="text-gray-600">From $450 · Pack included</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 border border-[#c45c26]/10">
            <p className="font-bold text-[#c45c26]">NDIS Friendly</p>
            <p className="text-gray-600">Supported sessions available</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Bookings</p>
      </footer>
    </div>
  );
}
