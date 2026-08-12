import type { Route } from "./+types/events";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events Calendar • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Upcoming dachshund therapy sessions, Forevermore Farm days, virtual Q&As, corporate events and SNOUTSAIL experiences. Book or enquire for Gold Coast, Noosa & online.",
    },
  ];
}

const upcoming = [
  {
    date: "Sat 16 Aug 2026",
    title: "Hinterland Day Immersion",
    location: "Forevermore Farm, Cooran",
    type: "Farm",
    spots: "4 places left",
    price: "From $380",
    cta: "/farm",
  },
  {
    date: "Wed 20 Aug 2026",
    title: "Corporate Stress-Reset Pack Visit",
    location: "Gold Coast (mobile)",
    type: "Corporate",
    spots: "Open for enquiries",
    price: "From $450",
    cta: "/book",
  },
  {
    date: "Sun 24 Aug 2026",
    title: "Virtual Pack Circle — Live Zoom",
    location: "Online worldwide",
    type: "Virtual",
    spots: "Unlimited",
    price: "$47 or free for members",
    cta: "/virtual",
  },
  {
    date: "Fri 29 Aug 2026",
    title: "SNOUTSAIL Afternoon on the Water",
    location: "Marina + hinterland combo",
    type: "Boat",
    spots: "Enquire",
    price: "Enquire",
    cta: "/book",
  },
  {
    date: "Sat 6 Sep 2026",
    title: "Family Healing Session + Pack Play",
    location: "Noosa / Sunshine Coast",
    type: "Individual",
    spots: "2 family slots",
    price: "From $150",
    cta: "/book",
  },
  {
    date: "Ongoing",
    title: "NDIS & Hardship Priority Places",
    location: "Gold Coast / Noosa / Farm",
    type: "Access",
    spots: "Limited monthly",
    price: "Supported",
    cta: "/give",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/events" className="text-[#c45c26] font-semibold">Events</Link>
            <Link to="/farm" className="hover:text-[#c45c26]">Farm</Link>
            <Link to="/virtual" className="hover:text-[#c45c26]">Virtual</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/membership" className="hover:text-[#c45c26]">Membership</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Live Calendar</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events That Heal</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Real dates. Real dogs. Real nervous-system resets. Farm days, corporate packs, virtual circles and SNOUTSAIL experiences — all giving-first.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-5xl mx-auto">
        <div className="space-y-6">
          {upcoming.map((e) => (
            <div
              key={e.title + e.date}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 flex flex-col md:flex-row md:items-center gap-4 card-hover"
            >
              <div className="md:w-36 shrink-0">
                <p className="text-sm font-semibold text-[#c45c26]">{e.date}</p>
                <span className="inline-block mt-1 text-xs bg-[#fdf6e3] text-[#2d5016] px-2 py-0.5 rounded-full">{e.type}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#2d5016]">{e.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{e.location} · {e.spots}</p>
              </div>
              <div className="md:text-right shrink-0">
                <p className="font-bold text-[#c45c26] mb-2">{e.price}</p>
                <Link
                  to={e.cta}
                  className="inline-block bg-[#c45c26] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#a34a1e] transition"
                >
                  {e.type === "Access" ? "Support Access" : "Enquire / Book"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#fdf6e3] rounded-2xl p-8 border border-[#c45c26]/15">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Want a private or custom date?</h2>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            Emily designs private pack experiences, corporate offsites and family days around your needs. NDIS-friendly options available.
          </p>
          <Link to="/book" className="bg-[#c45c26] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#a34a1e] transition inline-block">
            Request Custom Event
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-80">
        <p>🐾 Therapy Sausages · From true to tremendous · <Link to="/" className="hover:text-[#d4a017]">Home</Link></p>
      </footer>
    </div>
  );
}
