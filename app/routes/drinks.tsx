import type { Route } from "./+types/drinks";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shout a Drink • Therapy Sausages" },
    {
      name: "description",
      content:
        "Shout Emily a drink and keep Sausage Therapy moving. Instant Australian PayID. Love, dachshunds, and the next healing move.",
    },
  ];
}

const shouts = [
  { amt: 8, label: "Schooner", love: "A cold one and a breath." },
  { amt: 15, label: "Pint + chips", love: "Dinner-adjacent kindness." },
  { amt: 25, label: "Proper shout", love: "The night gets lighter." },
  { amt: 50, label: "Keep the flame on", love: "Fuel, dogs, tomorrow." },
];

export default function Drinks() {
  return (
    <div className="min-h-screen bg-[#140e0a] text-[#f6ead7]">
      <header className="sticky top-0 z-50 bg-[#140e0a]/95 backdrop-blur border-b border-[#e8b86d]/20">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-[#e8b86d]">
            🐾 Therapy Sausages
          </Link>
          <Link to="/give" className="text-sm text-[#c9b39a] hover:text-[#e8b86d]">
            Give & Grow
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-5 py-10 pb-20">
        <p className="text-xs tracking-[0.2em] uppercase text-[#e8b86d] font-bold">From the heart</p>
        <h1 className="text-4xl font-bold mt-2 mb-3 leading-tight">Shout a drink. Stay in the pack.</h1>
        <p className="text-[#c9b39a] text-lg leading-relaxed mb-8">
          This is not a platform cut. This is a human asking her people to put a schooner in the hand that keeps showing up for the dogs. Love first. PayID lands in seconds.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {shouts.map((s) => (
            <a
              key={s.amt}
              href={`mailto:emilybluerichards@gmail.com?subject=Shout%20$${s.amt}%20—%20SAUSAGE&body=PayID%20emilybluerichards@gmail.com%0AAmount%20$${s.amt}%0ARef%20SAUSAGE%0A%0ASending%20love.`}
              className="rounded-2xl border border-[#e8b86d]/25 bg-[#2a1c13] p-4 hover:border-[#e8b86d] transition"
            >
              <div className="text-2xl font-bold text-[#f3d5a0]">${s.amt}</div>
              <div className="font-semibold">{s.label}</div>
              <div className="text-sm text-[#c9b39a] mt-1">{s.love}</div>
            </a>
          ))}
        </div>

        <section className="rounded-2xl border border-[#e8b86d]/25 bg-[#221710] p-5 mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#e8b86d] font-bold">PayID</p>
          <p className="font-mono text-[#f3d5a0] text-lg break-all mt-2">emilybluerichards@gmail.com</p>
          <p className="text-sm text-[#c9b39a] mt-3 leading-relaxed">
            Open your bank app → PayID → paste the email → any amount → reference <strong className="text-[#f6ead7]">SAUSAGE</strong>.
            <br />
            Mobile: 0447 034 232
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href="sms:0447034232?body=Shouting%20a%20drink%20via%20PayID%20emilybluerichards@gmail.com"
              className="inline-block bg-[#e8b86d] text-[#1a120c] font-bold px-5 py-2.5 rounded-full"
            >
              Text to confirm
            </a>
            <a
              href="mailto:emilybluerichards@gmail.com?subject=I%20shouted%20a%20drink"
              className="inline-block border border-[#e8b86d] text-[#e8b86d] font-bold px-5 py-2.5 rounded-full"
            >
              Email love
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-[#e8b86d]/20 p-5 mb-6">
          <h2 className="text-xl font-bold text-[#f3d5a0] mb-2">What the love actually does</h2>
          <p className="text-[#c9b39a] leading-relaxed">
            Tonight it is a drink and a moment to breathe. Tomorrow it is fuel, the dogs, Sausage Therapy sessions, and the next honest move. You are not funding a slogan. You are standing next to someone who has not quit.
          </p>
        </section>

        <p className="text-center text-sm text-[#c9b39a]">
          Bigger giving lives on <Link to="/give" className="text-[#e8b86d] font-semibold">Give & Grow</Link>.
          <br />
          <a className="text-[#e8b86d]" href="https://x.com/TherapySausages">@TherapySausages</a>
        </p>
      </main>
    </div>
  );
}
