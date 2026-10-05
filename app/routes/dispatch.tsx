import type { Route } from "./+types/dispatch";
import { Link } from "react-router";
import { useMemo, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dispatch | Wiener Coaster + Coffee Van | Therapy Sausages" },
    {
      name: "description",
      content:
        "Dispatch books the Therapy Sausages Wiener Coaster and the Mitchell coffee van as one online request. Events, farm days, and pop-up calm across Queensland and northern NSW.",
    },
  ];
}

const bases = ["Mitchell QLD", "Gold Coast", "Noosa", "Forevermore Farm", "Brisbane"];

export default function Dispatch() {
  const [name, setName] = useState("");
  const [base, setBase] = useState(bases[0]);
  const [pack, setPack] = useState("coaster");
  const [km, setKm] = useState(40);
  const [done, setDone] = useState(false);
  const quote = useMemo(() => {
    const baseFee = pack === "both" ? 980 : pack === "van" ? 420 : 650;
    const travel = Math.max(0, km - 20) * 2.4;
    return Math.round(baseFee + travel);
  }, [pack, km]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-[#c45c26]">🐾 Therapy Sausages</Link>
          <Link to="/nomad" className="text-sm text-[#2d5016] font-semibold">Nomad tour →</Link>
        </div>
      </header>
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="opacity-90 mb-3">New online element — 6 October 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dispatch</h1>
          <p className="text-lg opacity-95">One form sends the Wiener Coaster, the coffee van, or both. The dream stops living only on the farm and starts arriving.</p>
        </div>
      </section>
      <section className="py-14 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10">
              <h2 className="font-bold text-[#2d5016] mb-2">What rolls</h2>
              <p className="text-sm text-gray-700">Toyota Coaster with the pack for team days and farm gates. Mitchell coffee van for the queue, the sponsors, and the giving cup. Pair them and the day pays for itself twice.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#c45c26]/10 text-sm text-gray-700 space-y-1">
              <p>Coaster half-day from $650</p>
              <p>Coffee van half-day from $420</p>
              <p>Both from $980 plus travel past 20 km</p>
              <p>10% of Dispatch days funds dog recovery</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 shadow-md space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const held = JSON.parse(localStorage.getItem("st-dispatch") || "[]");
              held.push({ name, base, pack, km, quote, at: new Date().toISOString() });
              localStorage.setItem("st-dispatch", JSON.stringify(held));
              setDone(true);
            }}
          >
            {!done ? (
              <>
                <h2 className="text-xl font-bold text-[#2d5016]">Request a roll-out</h2>
                <input className="w-full border rounded-xl px-4 py-3" placeholder="Name or venue" value={name} onChange={(e) => setName(e.target.value)} required />
                <select className="w-full border rounded-xl px-4 py-3" value={base} onChange={(e) => setBase(e.target.value)}>
                  {bases.map((b) => <option key={b}>{b}</option>)}
                </select>
                <select className="w-full border rounded-xl px-4 py-3" value={pack} onChange={(e) => setPack(e.target.value)}>
                  <option value="coaster">Wiener Coaster</option>
                  <option value="van">Coffee van</option>
                  <option value="both">Both</option>
                </select>
                <label className="text-sm text-gray-600">Travel km from base: {km}</label>
                <input type="range" min={0} max={400} value={km} onChange={(e) => setKm(Number(e.target.value))} />
                <p className="text-2xl font-bold text-[#c45c26]">Guide ${quote}</p>
                <button className="w-full bg-[#c45c26] text-white font-semibold py-3 rounded-full">Hold Dispatch</button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-3">🚐</p>
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">Dispatch held</h3>
                <p className="text-gray-700">{name} · {pack} from {base} · guide ${quote}</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
