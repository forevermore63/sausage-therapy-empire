import type { Route } from "./+types/gift";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gift a Session or Corporate Gift Card • Therapy Sausages" },
    {
      name: "description",
      content:
        "Gift real dachshund therapy sessions, farm experiences or corporate wellness packs. Beautiful digital certificates, instant delivery options and every gift funds free places. Grow the dream from true to tremendous through generosity.",
    },
  ];
}

export default function Gift() {
  const [selected, setSelected] = useState("session");

  const options = [
    { id: "session", title: "Individual Healing Session", price: "$150 – $220", desc: "45–60 min with the pack. Perfect personal gift for someone who needs calm." },
    { id: "farm", title: "Farm Day Immersion", price: "From $380", desc: "Full day on Forevermore Farm. Transformative gift for a loved one or yourself." },
    { id: "virtual", title: "Virtual Pack Series (4)", price: "$180", desc: "Four live or recorded virtual sessions. Accessible anywhere." },
    { id: "corporate", title: "Corporate Pack Visit", price: "From $450", desc: "Gift wellness to a whole team. High perceived value, measurable impact." },
    { id: "membership", title: "3-Month Sausage Circle", price: "$141", desc: "Three months of membership practices, priority and community." },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">Book Instead</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Give the gift of real calm</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift a Session or Experience</h1>
          <p className="text-lg opacity-95">
            Beautiful digital certificates. Instant or scheduled delivery. Every gift funds free places and grows the empire from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#2d5016] mb-8">Choose what to gift</h2>
        <div className="space-y-4 mb-10">
          {options.map((o) => (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition ${
                selected === o.id
                  ? "border-[#c45c26] bg-[#fdf6e3]"
                  : "border-gray-200 bg-white hover:border-[#c45c26]/40"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#c45c26]">{o.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{o.desc}</p>
                </div>
                <p className="font-bold text-[#2d5016] whitespace-nowrap ml-4">{o.price}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8">
          <h3 className="text-xl font-bold text-[#2d5016] mb-4">How to complete your gift</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>Email Emily with the gift type you selected, recipient name, and any personal message.</li>
            <li>We’ll send a beautiful digital certificate (PDF) and a unique booking code.</li>
            <li>Recipient uses the code to book their preferred date — no pressure, full flexibility.</li>
            <li>Payment is secure via invoice or Stripe link. Portion funds free community places.</li>
          </ol>
          <a
            href={`mailto:emily@therapysausages.com?subject=Gift%20Purchase%20-%20${options.find(o => o.id === selected)?.title || "Session"}&body=Hi%20Emily,%0A%0AI%20would%20like%20to%20gift%20a%20${options.find(o => o.id === selected)?.title || "session"}.%0A%0ARecipient%20name:%20%0AMy%20message%20to%20them:%20%0APreferred%20delivery%20date%20(if%20not%20immediate):%20%0A%0AThank%20you!`}
            className="block w-full text-center bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] text-lg"
          >
            Email Emily to Complete Gift
          </a>
          <p className="text-center text-sm text-gray-500 mt-3">She replies personally, usually same day.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-bold text-[#c45c26]">Instant or Scheduled</h3>
            <p className="text-sm text-gray-600">Digital certificate delivered when you want.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💛</div>
            <h3 className="font-bold text-[#c45c26]">Giving-first</h3>
            <p className="text-sm text-gray-600">Every gift funds free and low-cost places.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-bold text-[#c45c26]">High perceived value</h3>
            <p className="text-sm text-gray-600">Real experiences beat generic gift cards.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Corporate Gift Cards & Team Packs</h2>
        <p className="text-gray-700 mb-6">Want to gift wellness to an entire team or key clients? We create branded certificates and flexible booking windows. Perfect for end-of-year, milestones or culture investments.</p>
        <a href="mailto:emily@therapysausages.com?subject=Corporate%20Gift%20Cards%20Enquiry" className="inline-block border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5">Enquire about Corporate Gifting</a>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Gift the Wags · From true to tremendous</p>
      </footer>
    </div>
  );
}
