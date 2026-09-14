import type { Route } from "./+types/signal";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signal Tower | Inbound Bookings + Media | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Signal Tower is the inbound channel for media, corporate, NDIS coordinators and soul clients. One form, four lanes, zero chase.",
    },
  ];
}

const lanes = [
  { title: "Book a session", hint: "Individual, family or NDIS", path: "/book" },
  { title: "Corporate / team day", hint: "Office, farm or SNOUTSAIL", path: "/corporate" },
  { title: "Media / podcast / press", hint: "Use the Beacon kit first", path: "/beacon" },
  { title: "Grant or 2032 partner", hint: "Legacy + grants packet", path: "/grants" },
];

export default function Signal() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/beacon" className="hover:text-[#c45c26]">Beacon</Link>
            <Link to="/hearth" className="hover:text-[#c45c26]">Hearth</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 15 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Signal Tower</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Stop chasing. Let the right people send a clear signal. Four lanes. One reply path. Giving-first on every conversion.
          </p>
          <p className="text-sm opacity-90">Direct: 0476 552 669 · @TherapySausages</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {lanes.map((l) => (
            <Link key={l.title} to={l.path} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{l.title}</h3>
              <p className="text-gray-700">{l.hint}</p>
            </Link>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
          <h3 className="text-xl font-bold text-[#2d5016] mb-3">Send a written signal</h3>
          <p className="text-gray-700 mb-4">Name, lane, date window, and whether this is paid, gifted or media. Emily replies when the pack can hold it.</p>
          <a href="mailto:hello@therapysausages.live?subject=Signal%20Tower" className="inline-block bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e]">
            Email the tower →
          </a>
        </div>
      </section>
    </div>
  );
}
