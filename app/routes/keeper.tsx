import type { Route } from "./+types/keeper";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Keeper | Sponsor a Remaining Pack Member | Therapy Sausages" },
    {
      name: "description",
      content:
        "Become Keeper of one of the five remaining cancer-detection dachshunds. $39/month funds food, rest, and free therapy places.",
    },
  ];
}

const dogs = [
  { name: "Tom", note: "Named for a late brother. Steady. Reads rooms first." },
  { name: "Pepper’s grandson", note: "Sausage’s line. Still here. Still pointing." },
  { name: "Kindling girl", note: "Smallest frame, largest field." },
  { name: "Trail boy", note: "Works the edges. Finds the load." },
  { name: "Root pup", note: "Land-bonded. Holds Forevermore." },
];

export default function Keeper() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [dog, setDog] = useState(dogs[0].name);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">Brand-New Online Element — 28 September 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Keeper</h1>
          <p className="text-lg opacity-95">
            The working pack was 23. Five remain. Keeper is how they eat, rest, and keep working without the empire extracting from the land or from Emily.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {dogs.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl p-5 border border-[#c45c26]/10 shadow-sm">
                <p className="font-bold text-[#c45c26]">{d.name}</p>
                <p className="text-sm text-gray-700">{d.note}</p>
              </div>
            ))}
            <p className="text-sm text-gray-600">$39 / month per Keeper bond. Cancel any time. Photo + monthly field note included.</p>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 space-y-4 h-fit"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Become Keeper</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={dog} onChange={(e) => setDog(e.target.value)}>
                  {dogs.map((d) => (
                    <option key={d.name} value={d.name}>{d.name}</option>
                  ))}
                </select>
                <button className="w-full bg-[#2d5016] text-white font-semibold py-3 rounded-full">Hold this bond · $39/mo</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🛡️</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Bond held</h3>
                <p className="text-gray-700 mb-4">{name || "You"} is Keeper of {dog}. The pack felt that.</p>
                <Link to="/grove" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full inline-block">Plant a Grove tree →</Link>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
