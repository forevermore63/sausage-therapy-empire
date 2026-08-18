import type { Route } from "./+types/live";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pack Live • Live Streams & Recorded Healing | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Live dachshund pack streams, recorded calm sessions and upcoming virtual events. Real-time healing presence from Forevermore Farm and Gold Coast. Part of the giving-first Therapy Sausages empire.",
    },
  ];
}

export default function Live() {
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

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-[#c45c26] font-semibold mb-2">📡 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Pack Live</h1>
        <p className="text-lg text-gray-700 mb-10">
          Real-time and on-demand presence with the therapy pack. Calm, connection and wags delivered to your screen.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#c45c26]/15 mb-10">
          <div className="aspect-video bg-[#2d5016]/10 rounded-2xl flex items-center justify-center mb-6">
            <div className="text-center">
              <p className="text-5xl mb-3">🐾</p>
              <p className="text-xl font-semibold text-[#2d5016]">Next Live Stream</p>
              <p className="text-gray-600 mt-2">Check Instagram @sausage_therapy or join Sausage Circle for schedule</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">When live, embed will appear here (YouTube / Instagram Live / Zoom). For now, join the membership for priority access.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Upcoming Live Circles</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Weekly Virtual Pack (Sausage Circle members first)</li>
              <li>• Monthly Open Calm Stream (public)</li>
              <li>• Special Farm Day Live from Forevermore</li>
            </ul>
            <Link to="/events" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Full Events Calendar →</Link>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">On-Demand Recordings</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 10-min Nervous System Reset with the pack</li>
              <li>• Guided breathing + sausage presence</li>
              <li>• Behind-the-scenes farm healing</li>
            </ul>
            <Link to="/membership" className="inline-block mt-4 text-[#c45c26] font-semibold hover:underline">Unlock in Membership →</Link>
          </div>
        </div>

        <div className="bg-[#2d5016] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Get Notified of Every Live</h2>
          <p className="opacity-90 mb-6">Email or join the Circle so you never miss a stream.</p>
          <form action="mailto:emily@therapysausages.com?subject=Pack%20Live%20Notifications" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" name="email" required placeholder="Your email" className="flex-1 border-0 rounded-full px-5 py-3 text-gray-900 outline-none" />
            <button type="submit" className="bg-[#d4a017] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:bg-[#e0b030] transition">Notify Me</button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/virtual" className="text-[#c45c26] font-semibold hover:underline">Virtual Pack Sessions →</Link>
          <Link to="/membership" className="text-[#c45c26] font-semibold hover:underline">Sausage Circle →</Link>
          <Link to="/events" className="text-[#c45c26] font-semibold hover:underline">Events →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · From true to tremendous · Giving-first
      </footer>
    </div>
  );
}
