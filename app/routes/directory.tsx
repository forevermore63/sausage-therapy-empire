import type { Route } from "./+types/directory";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Certified Practitioner Directory | Therapy Sausages Network" },
    {
      name: "description",
      content:
        "Find certified Therapy Sausages practitioners and licensed partners across Australia. Verified animal-assisted therapy providers. Network effects, referrals and commissions that scale the healing empire.",
    },
  ];
}

const practitioners = [
  {
    name: "Emily Blue Richards",
    role: "Founder & Lead Practitioner",
    location: "Gold Coast / Noosa / Forevermore Farm",
    tags: ["NDIS", "Corporate", "Farm Retreats", "Certification Trainer"],
    status: "Available",
  },
  {
    name: "Coming Soon — Licensed Practitioners",
    role: "Regional Licensed Practitioners",
    location: "QLD • NSW • VIC • Expanding",
    tags: ["Apply via Franchise", "Certification Pathway"],
    status: "Spots Opening",
  },
];

export default function Directory() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/franchise" className="hover:text-[#c45c26]">Franchise</Link>
            <Link to="/certify" className="hover:text-[#c45c26]">Certification</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-3">Brand-New Tremendous Growth Engine — August 26 Surge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Certified Practitioner Directory
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-95">
            The official network of verified Therapy Sausages practitioners and licensed partners. Find ethical, trained providers near you — or apply to be listed and receive referral flow + commission structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#directory" className="bg-white text-[#c45c26] font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#fdf6e3] transition">
              Browse Directory
            </a>
            <Link to="/franchise" className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              Become a Listed Practitioner
            </Link>
          </div>
        </div>
      </section>

      {/* Why Directory */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d5016] mb-4">Network Effects That Scale Healing</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A living directory turns every new licence into more discoverability for clients and more referral income for practitioners. Clients find trusted providers. Practitioners receive warm leads. The empire grows without central bottlenecks.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Client Discovery</h3>
            <p className="text-gray-700">People searching for ethical dachshund-assisted therapy can find verified practitioners by location, speciality and availability.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Referral Commissions</h3>
            <p className="text-gray-700">Listed practitioners receive warm leads from the central site and pay a transparent commission that funds free places and platform maintenance.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-[#c45c26] mb-2">Quality & Trust</h3>
            <p className="text-gray-700">Only certified or licensed practitioners appear. Standards protect the dogs, the clients, and the brand integrity of Therapy Sausages.</p>
          </div>
        </div>
      </section>

      {/* Directory List */}
      <section id="directory" className="py-16 px-4 bg-[#fdf6e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-10">Current Directory</h2>
          <div className="space-y-6">
            {practitioners.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#c45c26]">{p.name}</h3>
                    <p className="text-[#2d5016] font-medium">{p.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{p.location}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-[#d4a017]/20 text-[#2d5016] px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      p.status === "Available" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {p.status}
                    </span>
                    {p.name.includes("Emily") && (
                      <div className="mt-3">
                        <Link to="/book" className="text-[#c45c26] font-semibold hover:underline">Book with Emily →</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d5016] mb-4">Want to Be Listed?</h2>
        <p className="text-gray-700 mb-6">
          Complete Certification or secure a Practitioner / Farm Partner licence. Once approved you receive a directory profile, referral flow, and the commission structure that keeps the whole network thriving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/certify" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">
            Start Certification
          </Link>
          <Link to="/franchise" className="border-2 border-[#c45c26] text-[#c45c26] font-semibold px-6 py-3 rounded-full hover:bg-[#c45c26]/5 transition">
            Explore Licensing
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2d5016] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Find Healing. Or Deliver It.</h2>
          <p className="opacity-90 mb-8">The directory turns isolated practitioners into a living network. Clients get trusted access. Practitioners get warm leads. The empire grows from true to tremendous.</p>
          <a href="mailto:emily@therapysausages.com?subject=Directory%20Listing%20Enquiry" className="inline-block bg-[#d4a017] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b8860b] transition">
            Enquire About Listing
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-70">
        <p>🐾 Therapy Sausages · Certified Practitioner Directory · Network Effects for Healing</p>
        <p className="mt-2"><Link to="/" className="hover:text-[#d4a017]">← Back to Empire Home</Link></p>
      </footer>
    </div>
  );
}
