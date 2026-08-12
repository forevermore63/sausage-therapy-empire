import type { Route } from "./+types/journal";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Healing Journal • Therapy Sausages Empire" },
    {
      name: "description",
      content:
        "Practices, stories, nervous-system tips and empire updates from Emily Blue Richards and the Therapy Sausages pack. SEO content that converts into bookings and memberships.",
    },
  ];
}

const posts = [
  {
    slug: "7-day-calm-challenge-origins",
    title: "Why the 7-Day Dachshund Calm Challenge Exists",
    excerpt: "It started as a gift for people who couldn’t yet reach an in-person session. Here is the full origin story and how to use it.",
    date: "10 Aug 2026",
    tag: "Practices",
  },
  {
    slug: "nervous-system-reset-with-dachshunds",
    title: "How Miniature Dachshunds Reset the Human Nervous System",
    excerpt: "The science + lived experience of why long, low-to-the-ground, warm bodies create safety faster than most talk therapy alone.",
    date: "3 Aug 2026",
    tag: "Science & Soul",
  },
  {
    slug: "ndis-friendly-animal-assisted",
    title: "Making Animal-Assisted Therapy Truly NDIS-Friendly",
    excerpt: "What we learned building accessible sessions, documentation and hardship places so more people can receive the wags.",
    date: "28 Jul 2026",
    tag: "Access",
  },
  {
    slug: "forevermore-farm-vision",
    title: "The Forevermore Farm Vision — Land That Heals Both Ends of the Lead",
    excerpt: "Why the hinterland land matters for the dogs, the humans and the long-term sustainability of giving-first therapy.",
    date: "18 Jul 2026",
    tag: "Farm",
  },
  {
    slug: "corporate-stress-that-actually-works",
    title: "Corporate Stress Reduction That Actually Works",
    excerpt: "Why bringing real dogs into offices beats another wellness webinar — and the metrics we track with teams.",
    date: "9 Jul 2026",
    tag: "Corporate",
  },
  {
    slug: "from-true-to-tremendous",
    title: "From True to Tremendous — The Online Empire Elements",
    excerpt: "How Digital Academy, memberships, virtual sessions and transparent impact are scaling the healing beyond geography.",
    date: "1 Jul 2026",
    tag: "Empire",
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur border-b border-[#c45c26]/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#c45c26]">
            <span className="text-2xl">🐾</span> Therapy Sausages
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/journal" className="text-[#c45c26] font-semibold">Journal</Link>
            <Link to="/stories" className="hover:text-[#c45c26]">Stories</Link>
            <Link to="/impact" className="hover:text-[#c45c26]">Impact</Link>
            <Link to="/academy" className="hover:text-[#c45c26]">Academy</Link>
            <Link to="/book" className="bg-[#c45c26] text-white px-4 py-2 rounded-full hover:bg-[#a34a1e]">Book Now</Link>
          </nav>
          <Link to="/book" className="md:hidden bg-[#c45c26] text-white px-3 py-1.5 rounded-full text-sm">Book</Link>
        </div>
      </header>

      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg opacity-90 mb-2">Practices · Stories · Empire Notes</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healing Journal</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-95">
            Real writing from the field. Nervous-system tools, dog wisdom, access notes and the ongoing story of growing from true to tremendous.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl p-6 shadow-md border border-[#c45c26]/10 card-hover">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="bg-[#fdf6e3] text-[#2d5016] px-2 py-0.5 rounded-full text-xs font-medium">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2d5016] mb-2">{p.title}</h2>
              <p className="text-gray-700 mb-4">{p.excerpt}</p>
              <a
                href={`mailto:emily@therapysausages.com?subject=Journal%20Request%20-%20${encodeURIComponent(p.title)}`}
                className="text-[#c45c26] font-semibold hover:underline"
              >
                Request full article / discuss →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#fdf6e3] rounded-2xl p-8 border border-[#c45c26]/15">
          <h2 className="text-2xl font-bold text-[#2d5016] mb-3">Want the latest practices in your inbox?</h2>
          <p className="text-gray-700 mb-6">Join the free 7-Day Calm Challenge list and receive new journal pieces when they drop.</p>
          <form action="mailto:emily@therapysausages.com?subject=Journal%20+%207-Day%20Calm%20List" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" name="email" required placeholder="Your best email" className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-[#c45c26] outline-none" />
            <button type="submit" className="bg-[#c45c26] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#a34a1e] transition">Join Free List</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-8 px-4 text-center text-sm opacity-80">
        <p>🐾 Therapy Sausages Journal · <Link to="/" className="hover:text-[#d4a017]">Home</Link></p>
      </footer>
    </div>
  );
}
