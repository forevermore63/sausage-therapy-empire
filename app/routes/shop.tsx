import type { Route } from "./+types/shop";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wiener Coaster Shop • Therapy Sausages" },
    {
      name: "description",
      content:
        "Digital guides, audio packs, apparel and gifts from the Therapy Sausages empire. Every purchase routes a portion back into free therapy places and dog welfare. New: Gore-Tex Support Sausage Outfits available now.",
    },
  ];
}

const products = [
  {
    id: "gore-tex-support-outfit",
    name: "Gore-Tex Support Sausage Outfit",
    type: "Physical Apparel • Available Now – Custom Fit",
    price: "From $149",
    description: "Premium waterproof breathable Gore-Tex inspired support coat with built-in harness and inbuilt short lead system. Spine-protecting design for dachshunds (IVDD prevention), full belly coverage, dual D-rings, reflective, TherapySausages branded. Measure your dog (back, chest, neck) for perfect fit. Ships Australia-wide. Portion of every sale funds free therapy places and the pack. Order now – production starts immediately on confirmation.",
    emoji: "🧥",
  },
  {
    id: "calm-challenge",
    name: "7-Day Dachshund Calm Challenge",
    type: "Digital PDF + Audio",
    price: "$19",
    description: "Daily short practices and sausage wisdom to settle the nervous system. Instant download.",
    emoji: "📄",
  },
  {
    id: "audio-pack",
    name: "Sausage Wisdom Audio Pack",
    type: "Digital Audio",
    price: "$29",
    description: "Guided meditations, grounding tracks and short talks recorded by Emily. Perfect for daily use.",
    emoji: "🎧",
  },
  {
    id: "foundations-workbook",
    name: "Therapy Foundations Workbook",
    type: "Digital Workbook",
    price: "$47",
    description: "Companion workbook for the Digital Academy Foundations course. Printable + fillable.",
    emoji: "📓",
  },
  {
    id: "coaster-set",
    name: "Wiener Coaster Physical Set",
    type: "Physical Merch",
    price: "$35",
    description: "Set of 4 high-quality coasters featuring the pack. Shipping Australia-wide.",
    emoji: "🍺",
  },
  {
    id: "tshirt",
    name: "Healing Hearts Tee",
    type: "Apparel",
    price: "$42",
    description: "Soft unisex tee with the Therapy Sausages mark. Portion of every sale funds free sessions.",
    emoji: "👕",
  },
  {
    id: "gift-pack",
    name: "Complete Starter Gift Pack",
    type: "Digital Bundle",
    price: "$67",
    description: "Calm Challenge + Audio Pack + Workbook in one bundle. Best value for new supporters.",
    emoji: "🎁",
  },
];

export default function Shop() {
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
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">🎁 Wiener Coaster Shop</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support the Mission. Take the Healing Home.</h1>
          <p className="text-lg opacity-95">
            Digital products, audio and physical merch. Every single purchase allocates a transparent portion straight back into dog welfare and free or subsidised therapy places. <strong>New: Gore-Tex Support Sausage Outfits now available for order and shipment.</strong>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover flex flex-col">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-xl font-bold text-[#c45c26] mb-1">{p.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{p.type}</p>
              <p className="text-gray-700 text-sm flex-1 mb-4">{p.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-[#2d5016]">{p.price}</p>
                <a
                  href={`mailto:emily@therapysausages.com?subject=Shop%20Order%20-%20${encodeURIComponent(p.name)}&body=Hi%20Emily%2C%0A%0AI%20would%20like%20to%20purchase%3A%20${encodeURIComponent(p.name)}%0A%0AName%3A%0AShipping%20address%20(if%20physical)%3A%0ADog%20measurements%20(back%20length%2C%20chest%20girth%2C%20neck)%20if%20apparel%3A%0APreferred%20colour%3A%0A%0AThanks!`}
                  className="bg-[#c45c26] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#a34a1e] transition"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Giving-First Guarantee</h2>
          <p className="opacity-90 mb-6">
            A fixed percentage of every shop sale is ring-fenced for free therapy places and direct dog care. You can see the cumulative result on the Impact Dashboard.
          </p>
          <Link to="/impact" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition">
            View Impact Dashboard →
          </Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <Link to="/" className="hover:text-[#d4a017]">← Back to Therapy Sausages</Link>
        <p className="mt-3 opacity-50">© {new Date().getFullYear()} Therapy Sausages · Wiener Coaster Shop</p>
      </footer>
    </div>
  );
}
