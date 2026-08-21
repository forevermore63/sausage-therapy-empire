import type { Route } from "./+types/packbuilder";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Custom Healing Pack Builder • Design Your Support | Therapy Sausages" },
    {
      name: "description",
      content:
        "Build your perfect Therapy Sausages healing pack. Mix sessions, virtual access, farm days, digital products and memberships. Instant recommendation + booking pathway. High-converting personalisation engine.",
    },
  ];
}

const options = {
  sessions: [
    { id: "individual", label: "1× Individual / Family Session", price: 180, desc: "45–60 min mobile or location" },
    { id: "individual3", label: "3× Session Pack", price: 495, desc: "Save $45 · Ideal for ongoing support" },
    { id: "corporate", label: "Corporate / Group Visit", price: 550, desc: "Office or event · up to 20 people" },
  ],
  farm: [
    { id: "day", label: "Farm Day Immersion", price: 380, desc: "Hinterland reset with the full pack" },
    { id: "overnight", label: "Overnight Reset", price: 890, desc: "One night + deep restoration" },
  ],
  digital: [
    { id: "virtual", label: "Virtual Pack Series (4 weeks)", price: 147, desc: "Live Zoom circles + recordings" },
    { id: "membership", label: "Sausage Circle Membership (1 month)", price: 47, desc: "Practices, Q&As, priority booking" },
    { id: "academy", label: "Digital Academy Access", price: 997, desc: "Full systems & training library" },
  ],
  extras: [
    { id: "gift", label: "Gift Certificate Add-on", price: 50, desc: "Extra value for someone you love" },
    { id: "calm", label: "7-Day Calm Challenge PDF + Audio", price: 0, desc: "Free with any paid pack" },
  ],
};

export default function PackBuilder() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const allItems = [...options.sessions, ...options.farm, ...options.digital, ...options.extras];
  const total = allItems
    .filter((item) => selected.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  const selectedLabels = allItems
    .filter((item) => selected.includes(item.id))
    .map((item) => item.label)
    .join(", ");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a34a1e]">Book Session</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="opacity-90 mb-2">Personalised · Instant · Conversion-Optimised</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Custom Healing Pack Builder</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Mix and match the exact support you (or someone you love) need. See the total live, then book or enquire with one click. Every pack funds free places.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#2d5016] mb-4">Sessions</h2>
              <div className="space-y-3">
                {options.sessions.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                      selected.includes(item.id)
                        ? "border-[#c45c26] bg-[#c45c26]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[#c45c26]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 w-5 h-5 accent-[#c45c26]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">{item.label}</span>
                        <span className="font-bold text-[#c45c26]">${item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d5016] mb-4">Forevermore Farm</h2>
              <div className="space-y-3">
                {options.farm.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                      selected.includes(item.id)
                        ? "border-[#c45c26] bg-[#c45c26]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[#c45c26]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 w-5 h-5 accent-[#c45c26]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">{item.label}</span>
                        <span className="font-bold text-[#c45c26]">${item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d5016] mb-4">Digital & Ongoing</h2>
              <div className="space-y-3">
                {options.digital.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                      selected.includes(item.id)
                        ? "border-[#c45c26] bg-[#c45c26]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[#c45c26]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 w-5 h-5 accent-[#c45c26]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">{item.label}</span>
                        <span className="font-bold text-[#c45c26]">${item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d5016] mb-4">Extras</h2>
              <div className="space-y-3">
                {options.extras.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition ${
                      selected.includes(item.id)
                        ? "border-[#c45c26] bg-[#c45c26]/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-[#c45c26]/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 w-5 h-5 accent-[#c45c26]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">{item.label}</span>
                        <span className="font-bold text-[#c45c26]">{item.price === 0 ? "Free" : `$${item.price}`}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg border border-[#c45c26]/20">
              <h3 className="text-lg font-bold text-[#2d5016] mb-4">Your Pack</h3>
              {selected.length === 0 ? (
                <p className="text-gray-500 text-sm mb-6">Select items to build your custom healing pack.</p>
              ) : (
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {allItems
                    .filter((item) => selected.includes(item.id))
                    .map((item) => (
                      <li key={item.id} className="flex justify-between">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.price === 0 ? "Free" : `$${item.price}`}</span>
                      </li>
                    ))}
                </ul>
              )}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Estimated Total</span>
                  <span className="text-2xl font-bold text-[#c45c26]">${total}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Final pricing confirmed by Emily. NDIS options available.</p>
              </div>
              <a
                href={`mailto:emily@therapysausages.com?subject=Custom%20Healing%20Pack%20Enquiry&body=Hi%20Emily,%0A%0AI%20built%20this%20pack:%0A${encodeURIComponent(selectedLabels || "(none selected yet)")}%0A%0AEstimated%20total:%20$${total}%0A%0APlease%20help%20me%20book%20or%20refine%20it.`}
                className={`block w-full text-center font-semibold py-3.5 rounded-full transition ${
                  selected.length > 0
                    ? "bg-[#c45c26] text-white hover:bg-[#a34a1e] pulse-glow"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {selected.length > 0 ? "Send Pack to Emily →" : "Select items first"}
              </a>
              <p className="text-xs text-center text-gray-500 mt-3">Or <Link to="/book" className="text-[#c45c26] underline">book a standard session</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#fdf6e3] text-center">
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          Every custom pack contributes to free therapy places and dog welfare. Emily will refine pricing, availability and NDIS pathways with you personally.
        </p>
        <Link to="/gift" className="text-[#c45c26] font-semibold hover:underline">Prefer to gift a pack? → Gift a Session</Link>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Custom Healing Pack Builder · From true to tremendous</p>
        <p className="mt-2 opacity-60">© {new Date().getFullYear()} · Led by Emily Blue Richards</p>
      </footer>
    </div>
  );
}
