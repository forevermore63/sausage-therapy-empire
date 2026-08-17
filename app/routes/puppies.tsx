import type { Route } from "./+types/puppies";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Therapy Dachshund Waitlist & Placement | Noosa Dachshunds / Therapy Sausages" },
    {
      name: "description",
      content:
        "Join the waitlist for carefully bred, temperament-tested miniature dachshunds destined for emotional support, therapy work and forever families. Ethical breeding + giving-first placement through Forevermore Farm / Noosa Dachshunds.",
    },
  ];
}

export default function Puppies() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Session</Link>
        </div>
      </header>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-[#c45c26] font-semibold mb-2 text-center">🐕 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4 text-center">Therapy Dachshund Waitlist</h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Carefully planned litters of cream and classic miniature dachshunds raised for emotional intelligence, calm temperament and lifelong partnership. Priority for therapy, NDIS and support-role homes. Ethical. Transparent. Giving-first.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h2 className="text-xl font-bold text-[#c45c26] mb-3">What You Receive</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Temperament-tested for therapy suitability</li>
              <li>✓ Early socialisation with the pack</li>
              <li>✓ Health testing & DNA screening</li>
              <li>✓ Lifetime support from Emily & team</li>
              <li>✓ Placement preference for impact homes</li>
              <li>✓ Optional therapy training pathway</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h2 className="text-xl font-bold text-[#c45c26] mb-3">How Placement Works</h2>
            <ul className="space-y-2 text-gray-700">
              <li>1. Join the waitlist below</li>
              <li>2. Receive litter announcements & updates</li>
              <li>3. Application & interview process</li>
              <li>4. Matching based on lifestyle & goals</li>
              <li>5. Deposit & home preparation</li>
              <li>6. Welcome into the wider sausage family</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c45c26]/15">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4 text-center">Join the Waitlist</h2>
          <p className="text-gray-600 mb-6 text-center">No obligation. You will only be contacted when a suitable litter or placement opportunity arises. Preference given to therapy / NDIS / support homes.</p>
          <form action="mailto:emily@therapysausages.com?subject=Therapy%20Dachshund%20Waitlist%20Application" method="get" className="space-y-4 max-w-lg mx-auto">
            <input type="text" name="name" placeholder="Full name" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <select name="body" className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" required>
              <option value="">Primary interest</option>
              <option value="Therapy / Emotional Support dog">Therapy / Emotional Support dog</option>
              <option value="NDIS participant companion">NDIS participant companion</option>
              <option value="Family pet with calm temperament">Family pet with calm temperament</option>
              <option value="Breeding / program interest">Breeding / program interest</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="body" rows={4} placeholder="Tell us a little about your home, lifestyle and hopes for a sausage companion..." className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"></textarea>
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Join Therapy Dachshund Waitlist
            </button>
          </form>
        </div>

        <p className="text-center mt-10 text-sm text-gray-500">
          Part of Noosa Dachshunds / Forevermore Farm ethical breeding program. All placements support the wider therapy mission and free-access places.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/farm" className="text-[#c45c26] font-semibold hover:underline">Forevermore Farm →</Link>
          <Link to="/ndis" className="text-[#c45c26] font-semibold hover:underline">NDIS Portal →</Link>
          <Link to="/" className="text-[#c45c26] font-semibold hover:underline">Back to Empire Home →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · Noosa Dachshunds · From true to tremendous
      </footer>
    </div>
  );
}
