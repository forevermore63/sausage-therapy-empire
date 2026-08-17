import type { Route } from "./+types/oracle";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sausage Oracle • Daily Dachshund Wisdom | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Receive daily sausage wisdom, nervous-system resets and personalized guidance from the pack. Free interactive oracle + form for deeper insight. Part of the giving-first Therapy Sausages empire.",
    },
  ];
}

const dailyWisdom = [
  "A sausage dog does not rush the walk. The path reveals itself one paw at a time.",
  "When the world feels too loud, press your forehead to a warm dachshund side and breathe with the rise and fall.",
  "Healing is not linear. It is a series of gentle wags that slowly rewire the heart.",
  "The pack stays close. You are never truly alone when you choose connection.",
  "Soft eyes. Soft belly. Soft nervous system. This is the sausage way.",
  "Every booking that funds a free place for someone in need multiplies the light.",
  "Rest is not laziness. A dachshund knows the power of the perfect sun-patch nap.",
];

export default function Oracle() {
  const todayIndex = new Date().getDate() % dailyWisdom.length;
  const wisdom = dailyWisdom[todayIndex];

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

      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <p className="text-[#c45c26] font-semibold mb-2">🔮 New Online Element</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">Sausage Oracle</h1>
        <p className="text-lg text-gray-700 mb-10">
          Daily dachshund wisdom for nervous-system regulation, emotional clarity and empire alignment. Free. Always giving-first.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#c45c26]/15 mb-12">
          <p className="text-sm uppercase tracking-widest text-[#c45c26] mb-4">Today's Oracle</p>
          <p className="text-2xl md:text-3xl font-medium text-[#2d5016] leading-relaxed italic">
            “{wisdom}”
          </p>
          <p className="mt-6 text-sm text-gray-500">— The Pack</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-left">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Ask for Personal Guidance</h2>
          <p className="text-gray-600 mb-6">Share what is present for you. Emily or the team will reply with sausage-aligned insight (usually within 48 hours).</p>
          <form action="mailto:emily@therapysausages.com?subject=Sausage%20Oracle%20Guidance%20Request" method="get" className="space-y-4">
            <input type="text" name="name" placeholder="Your name" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <input type="email" name="email" placeholder="Your email" required className="w-full border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <textarea name="body" rows={5} placeholder="What is on your heart or what guidance do you seek?" required className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none"></textarea>
            <button type="submit" className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition">
              Send to the Oracle
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/calm" className="text-[#c45c26] font-semibold hover:underline">7-Day Calm Challenge →</Link>
          <Link to="/wisdom" className="text-[#c45c26] font-semibold hover:underline">Wisdom Library →</Link>
          <Link to="/membership" className="text-[#c45c26] font-semibold hover:underline">Join Sausage Circle →</Link>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Therapy Sausages · From true to tremendous · Giving-first
      </footer>
    </div>
  );
}
