import type { Route } from "./+types/cascade";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cascade Engine | One Booking → Full Revenue Waterfall | Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "The Cascade Engine turns a single therapy booking into an automated waterfall of upsells, digital products, memberships, referrals and impact gifts. True → tremendous leverage for Sausage Therapy.",
    },
  ];
}

const cascadeSteps = [
  {
    title: "Trigger Booking",
    detail: "Individual, family, corporate or farm session lands",
    value: "$150–$2,400",
  },
  {
    title: "Instant Digital Upsell",
    detail: "Healing Vault pack + Calm Challenge unlock offered at checkout",
    value: "+$37–$147",
  },
  {
    title: "Membership Invitation",
    detail: "7-day free Sausage Circle trial with one-click convert",
    value: "+$97–$297/mo",
  },
  {
    title: "Referral Cascade",
    detail: "Share link generates Wag Points + free session seed for new clients",
    value: "2–5× LTV",
  },
  {
    title: "Impact Gift Layer",
    detail: "Automatic % to free places + Dream Seed Fund match",
    value: "Visible impact",
  },
];

export default function Cascade() {
  const [activated, setActivated] = useState(false);
  const [selectedStream, setSelectedStream] = useState(0);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/bloom" className="hover:text-[#c45c26]">Bloom</Link>
            <Link to="/forge" className="hover:text-[#c45c26]">Forge</Link>
            <Link to="/wave" className="hover:text-[#c45c26]">Wave</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Online Element — 10 September 2026 Tremendous Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cascade Engine
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            One booking becomes a full waterfall of revenue, memberships, referrals and free places. Automated. Giving-first. Designed so every session multiplies the dream.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5016] text-center mb-10">The Cascade Flow</h2>
          <div className="space-y-4 mb-12">
            {cascadeSteps.map((step, i) => (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl border-2 transition cursor-pointer ${
                  selectedStream === i
                    ? "border-[#c45c26] bg-white shadow-md"
                    : "border-[#c45c26]/15 bg-white/70 hover:border-[#c45c26]/40"
                }`}
                onClick={() => setSelectedStream(i)}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[#c45c26] text-white flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-[#c45c26]">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.detail}</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="font-bold text-[#2d5016]">{step.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#c45c26]/10 text-center">
            <h3 className="text-xl font-bold text-[#c45c26] mb-3">
              Activate Cascade on every new booking
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Connects to Live Command, Vault, Circles, Wag Points and Dream Seed Fund. One protected booking triggers the full waterfall automatically.
            </p>
            <button
              onClick={() => setActivated(true)}
              className="bg-[#2d5016] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1f3a0f] transition"
            >
              Activate Cascade Engine →
            </button>
          </div>

          {activated && (
            <div className="mt-8 bg-[#2d5016] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Cascade is live</h3>
              <p className="mb-6 opacity-95">
                Every future booking now multiplies. Track the waterfall in Live Command and feed more actions through Bloom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/live-empire" className="bg-white text-[#2d5016] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6e3]">
                  Open Live Command
                </Link>
                <Link to="/bloom" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
                  Feed Bloom
                </Link>
                <Link to="/book" className="border-2 border-[#d4a017] text-[#d4a017] font-semibold px-6 py-3 rounded-full hover:bg-[#d4a017]/10">
                  Book & Trigger
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-4">Why Cascade compounds</h2>
          <p className="text-gray-700 mb-6">
            Single-transaction thinking leaves money and impact on the table. Cascade turns every session into a multi-stream engine that funds free places, dog recovery and the Forevermore vision while you focus on presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/forge" className="text-[#c45c26] font-semibold hover:underline">
              Build Legacy next →
            </Link>
            <Link to="/wave" className="text-[#c45c26] font-semibold hover:underline">
              Amplify the Wave →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
