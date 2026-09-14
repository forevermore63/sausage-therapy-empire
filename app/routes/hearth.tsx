import type { Route } from "./+types/hearth";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Hearth | Pack Home Base | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Hearth is the online home of the remaining pack — sanctuary, family restoration, farm care and the invitation to sit by the fire with the dogs that still work.",
    },
  ];
}

const seats = [
  { name: "Sit with the pack", detail: "45–60 minute healing session. Mobile Gold Coast / Noosa. NDIS welcome.", path: "/book", price: "From $150" },
  { name: "Come to the land", detail: "Forevermore Farm day immersion. Hinterland + sausages = nervous-system reset.", path: "/farm", price: "From $380" },
  { name: "Keep a place warm", detail: "Membership that funds free sessions and remaining-dog care.", path: "/membership", price: "Sausage Circle" },
  { name: "Light the hearth for another", detail: "Gift a session or micro-give so someone who cannot pay still sits.", path: "/gift", price: "Give" },
];

export default function Hearth() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/beacon" className="hover:text-[#c45c26]">Beacon</Link>
            <Link to="/mosaic" className="hover:text-[#c45c26]">Mosaic</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 15 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Hearth</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            Five remain. The fire stays lit. This is the online home of the pack — not a shop window, a place to sit.
            Family restoration, farm care and healing that does not extract.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {seats.map((s) => (
            <Link key={s.name} to={s.path} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 hover:shadow-lg transition">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a017] mb-1">{s.price}</p>
              <h3 className="text-xl font-bold text-[#c45c26] mb-2">{s.name}</h3>
              <p className="text-gray-700">{s.detail}</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link to="/signal" className="text-[#c45c26] font-semibold hover:underline">Send a signal if you cannot come in person →</Link>
        </p>
      </section>
    </div>
  );
}
