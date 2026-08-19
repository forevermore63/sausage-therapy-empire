import type { Route } from "./+types/roi";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Corporate Wellness ROI Calculator • Therapy Sausages" },
    {
      name: "description",
      content:
        "Calculate the real dollar return of bringing Therapy Sausages dachshund packs into your workplace. Instant projected savings on stress, absenteeism and turnover + easy booking path.",
    },
  ];
}

export default function ROI() {
  const [teamSize, setTeamSize] = useState(25);
  const [stressLevel, setStressLevel] = useState(6);
  const [turnover, setTurnover] = useState(18);
  const [showResult, setShowResult] = useState(false);

  const calc = () => {
    const avgSalary = 75000;
    const stressCostPerPerson = stressLevel * 420;
    const turnoverCost = (turnover / 100) * teamSize * avgSalary * 0.5;
    const annualStressCost = teamSize * stressCostPerPerson;
    const totalAnnualBurden = annualStressCost + turnoverCost;
    const reductionRate = 0.22;
    const projectedSavings = Math.round(totalAnnualBurden * reductionRate);
    const sessionsSuggested = Math.max(4, Math.ceil(teamSize / 20) * 4);
    const sessionCost = sessionsSuggested * 650;
    const netROI = projectedSavings - sessionCost;
    const roiMultiple = sessionCost > 0 ? (projectedSavings / sessionCost).toFixed(1) : "∞";
    return { projectedSavings, sessionsSuggested, sessionCost, netROI, roiMultiple, totalAnnualBurden };
  };

  const result = showResult ? calc() : null;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/book" className="hover:text-[#c45c26]">Book</Link>
            <Link to="/partners" className="hover:text-[#c45c26]">Partners</Link>
            <Link to="/roi" className="text-[#c45c26] font-semibold">ROI Calculator</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Corporate Pack</Link>
          </nav>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">B2B Conversion Engine</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Wellness ROI Calculator</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            See the real dollar impact of bringing real dachshunds into your workplace. Transparent math. Instant numbers. Then book the pack.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-[#c45c26]/15 p-8">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-6">Your Team Snapshot</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team / office size</label>
              <input
                type="range"
                min="5"
                max="500"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#c45c26]"
              />
              <p className="text-center font-bold text-[#c45c26] text-xl mt-1">{teamSize} people</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current average stress / burnout level (1–10)</label>
              <input
                type="range"
                min="1"
                max="10"
                value={stressLevel}
                onChange={(e) => setStressLevel(Number(e.target.value))}
                className="w-full accent-[#c45c26]"
              />
              <p className="text-center font-bold text-[#c45c26] text-xl mt-1">{stressLevel}/10</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual voluntary turnover rate (%)</label>
              <input
                type="range"
                min="5"
                max="40"
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full accent-[#c45c26]"
              />
              <p className="text-center font-bold text-[#c45c26] text-xl mt-1">{turnover}%</p>
            </div>

            <button
              onClick={() => setShowResult(true)}
              className="w-full bg-[#c45c26] text-white font-semibold py-3.5 rounded-full hover:bg-[#a34a1e] transition text-lg"
            >
              Calculate Projected Savings
            </button>
          </div>

          {result && (
            <div className="mt-10 p-6 bg-[#fdf6e3] rounded-xl border-2 border-[#d4a017]">
              <h3 className="text-xl font-bold text-[#2d5016] mb-4">Your Projected Annual Impact</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Estimated current burden</p>
                  <p className="text-2xl font-bold text-gray-800">${result.totalAnnualBurden.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Projected savings (22% lift)</p>
                  <p className="text-2xl font-bold text-[#2d5016]">${result.projectedSavings.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Recommended pack visits / year</p>
                  <p className="text-2xl font-bold text-[#c45c26]">{result.sessionsSuggested}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Net ROI multiple</p>
                  <p className="text-2xl font-bold text-[#d4a017]">{result.roiMultiple}×</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Model uses conservative mid-range Australian professional salaries and published workplace wellness impact ranges. Real results vary by culture and frequency. Every corporate booking also funds free community and NDIS places.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book"
                  className="flex-1 bg-[#c45c26] text-white text-center font-semibold py-3 rounded-full hover:bg-[#a34a1e] transition"
                >
                  Book Corporate Pack Now
                </Link>
                <a
                  href="mailto:emily@therapysausages.com?subject=Corporate%20ROI%20Follow-up%20-%20Team%20of%20"
                  className="flex-1 border-2 border-[#c45c26] text-[#c45c26] text-center font-semibold py-3 rounded-full hover:bg-[#c45c26]/5 transition"
                >
                  Email Emily for Custom Quote
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold text-[#c45c26]">Evidence-based</h3>
            <p className="text-sm text-gray-600">Animal-assisted interventions consistently reduce cortisol and improve self-reported wellbeing in workplace studies.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <div className="text-3xl mb-2">💛</div>
            <h3 className="font-bold text-[#c45c26]">Giving-first</h3>
            <p className="text-sm text-gray-600">A portion of every corporate booking funds free places for trauma survivors, NDIS participants and rescues.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-[#c45c26]/10">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-[#c45c26]">Ready to scale</h3>
            <p className="text-sm text-gray-600">From single office visits to multi-site quarterly programs and 2032 Olympic legacy supplier pathways.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm">
        <p>🐾 Therapy Sausages · Led by Emily Blue Richards · Gold Coast, Noosa & Forevermore Farm</p>
        <p className="opacity-60 mt-2">From true to tremendous · Giving-first healing empire</p>
      </footer>
    </div>
  );
}
