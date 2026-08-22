import type { Route } from "./+types/cam";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live Pack Cam | Therapy Sausages Virtual Presence" },
    {
      name: "description",
      content:
        "Watch the Therapy Sausages pack live from Forevermore Farm and mobile base. Free public moments + exclusive member streams. Build daily habit, grow the list, convert to sessions and memberships.",
    },
  ];
}

export default function Cam() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/live" className="hover:text-[#c45c26]">Pack Live</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Live Pack Cam
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Real-time windows into the pack at Forevermore Farm and on the road. Free public moments that build daily habit and trust. Exclusive member streams that convert into bookings, memberships and gifts. Zero marginal cost once the cameras are live.
          </p>
        </div>
      </section>

      {/* Status Banner */}
      <section className="py-6 px-4 bg-[#2d5016] text-white text-center">
        <p className="font-semibold">
          🎥 Camera status: <span className="text-[#d4a017]">Coming Online</span> — Public teaser streams & member-only full access launching with next farm setup.
        </p>
        <p className="text-sm opacity-80 mt-1">Join the waitlist below to be first when the cams go live.</p>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-12">How Live Pack Cam Grows the Empire</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">👀</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Free Public Moments</h3>
            <p className="text-gray-700">Short scheduled windows (morning pack stretch, evening wind-down). Low friction, high emotion. Drives Instagram, X and email list growth every single day.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Member Exclusive Streams</h3>
            <p className="text-gray-700">Longer, quieter, behind-the-scenes access for Sausage Circle members. Increases perceived value, reduces churn and creates daily reasons to stay subscribed.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Conversion Pathways</h3>
            <p className="text-gray-700">Every stream ends with soft CTAs: Book a real session, Gift a Session, Join the Circle, Build a Custom Pack. Habit → Trust → Transaction.</p>
          </div>
        </div>
      </section>

      {/* Placeholder Cam Area */}
      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-2xl aspect-video flex flex-col items-center justify-center text-white p-8 text-center">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold mb-2">Live Pack Cam Coming Soon</h3>
            <p className="opacity-80 max-w-md mb-6">
              Once the farm cameras and mobile unit are online, this space becomes a real-time window into the pack. Public teaser hours + full member access.
            </p>
            <p className="text-sm text-[#d4a017]">Technical setup in progress · Privacy & welfare first</p>
          </div>
        </div>
      </section>

      {/* Waitlist + Membership */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d5016] mb-4">Be First When the Cams Go Live</h2>
        <p className="text-gray-600 mb-6">
          Join the free waitlist for public stream alerts, or become a Sausage Circle member now for guaranteed exclusive access the moment cameras are online.
        </p>
        <form action="mailto:emily@therapysausages.com?subject=Live%20Pack%20Cam%20Waitlist" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input type="email" name="email" required placeholder="Your best email" className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
          <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Join Waitlist</button>
        </form>
        <Link to="/membership" className="inline-block border-2 border-[#c45c26] text-[#c45c26] font-semibold px-8 py-3 rounded-full hover:bg-[#c45c26]/5 transition">
          Or Join Sausage Circle for Full Access →
        </Link>
      </section>

      {/* Related */}
      <section className="py-12 px-4 bg-[#2d5016] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">While You Wait — Stay Connected</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/live" className="bg-white/10 px-5 py-2.5 rounded-full hover:bg-white/20 transition">Pack Live Events</Link>
            <Link to="/virtual" className="bg-white/10 px-5 py-2.5 rounded-full hover:bg-white/20 transition">Virtual Pack Sessions</Link>
            <Link to="/ai" className="bg-white/10 px-5 py-2.5 rounded-full hover:bg-white/20 transition">Sausage AI Companion</Link>
            <Link to="/farm" className="bg-white/10 px-5 py-2.5 rounded-full hover:bg-white/20 transition">Forevermore Farm</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Live Pack Cam · Real presence, zero geography limits</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
