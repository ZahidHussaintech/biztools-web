import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useParams, useLocation } from 'react-router-dom';
import {
  Search,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Wrench,
  ShieldCheck,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import ToolsHub from './components/ToolsHub';
import { ARTICLES } from './data/content';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `min-h-[44px] inline-flex items-center px-2 ${
      isActive ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-emerald-400 transition'
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#090D16]/95 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="min-h-[44px] inline-flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950">
            B
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            BizTools<span className="text-emerald-400">.Studio</span>
          </span>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-4 text-sm">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/tools" className={linkClass}>Free Tools</NavLink>
          <NavLink to="/blog" className={linkClass}>Guides & Reviews</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://zahidhussainofficial.com"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <span>Hire / Custom SaaS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile Navigation" className="md:hidden bg-[#0D1322] border-b border-slate-800 px-4 py-4 space-y-2 text-sm">
          <NavLink to="/" end onClick={() => setOpen(false)} className="min-h-[44px] flex items-center text-slate-200">Home</NavLink>
          <NavLink to="/tools" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center text-slate-200">Free Tools</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center text-slate-200">Guides & Reviews</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center text-slate-200">About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="min-h-[44px] flex items-center text-slate-200">Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-[#070A11] py-10 px-4 sm:px-6 text-xs text-slate-300">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800/70">
        <div>
          <p className="font-bold text-base text-white">
            BizTools<span className="text-emerald-400">.Studio</span>
          </p>
          <p className="mt-2 leading-relaxed text-slate-400">
            Practitioner-tested SEO utilities and honest comparisons of free alternatives to paid marketing software for lean businesses.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-white uppercase tracking-wider mb-2">Platform</p>
          <div className="flex flex-col">
            <Link to="/tools" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">Free Marketing & SEO Tools</Link>
            <Link to="/blog" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">Software Reviews & Guides</Link>
            <Link to="/about" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">About Editorial Standards</Link>
            <Link to="/contact" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">Contact & Partnerships</Link>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-white uppercase tracking-wider mb-2">Legal & Policies</p>
          <div className="flex flex-col">
            <Link to="/privacy-policy" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">Privacy Policy</Link>
            <Link to="/terms" className="min-h-[44px] inline-flex items-center hover:text-emerald-400">Terms & Disclaimer</Link>
            <a href="https://zahidhussainofficial.com" target="_blank" rel="noreferrer" className="min-h-[44px] inline-flex items-center text-emerald-400 hover:underline">
              Developer Portfolio →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
        <p>© {new Date().getFullYear()} BizTools Studio by Zahid Hussain. All rights reserved.</p>
        <p>biztools.zahidhussainofficial.com</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section className="pt-14 pb-12 px-4 sm:px-6 border-b border-slate-800/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-emerald-300 text-xs font-medium mb-5">
            Tested Stacks & Browser Utilities for UK, US, EU, AU & NZ Teams
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Practical Marketing, SEO & WordPress Tools — Without Monthly Bloat
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Run quick technical SEO checks in your browser or read field-tested comparisons of free alternatives to Canva Pro, Ahrefs, and paid WordPress plugins.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/tools"
              className="min-h-[48px] inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              <Wrench className="w-4 h-4" />
              Open 6 Free Browser Tools
            </Link>
            <Link
              to="/blog"
              className="min-h-[48px] inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium px-6 py-3 rounded-xl text-sm transition"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Read All 8 Practitioner Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">100% Client-Side Utilities</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Interactive SEO & Agency Calculators</h2>
          </div>
          <Link to="/tools" className="min-h-[44px] inline-flex items-center text-sm text-emerald-400 hover:underline font-medium">
            Dedicated Tools Page →
          </Link>
        </div>
        <ToolsHub />
      </section>

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 border-t border-slate-800/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Editorial Playbooks</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Latest Software Reviews & Technical Fixes</h2>
          </div>
          <Link to="/blog" className="min-h-[44px] inline-flex items-center text-sm text-emerald-400 hover:underline font-medium">
            Browse All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ARTICLES.slice(0, 4).map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-[#111827] border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 font-medium">
                    {article.category}
                  </span>
                  <span>{article.date} • {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">{article.excerpt}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Read Practitioner Notes</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14 space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Free Browser Suite</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
          Free Digital Marketing, SEO & Agency Calculators
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
          Every calculator runs locally in your browser—no login walls, no stored client URLs, and instant copy-ready code.
        </p>
      </div>
      <ToolsHub />
    </div>
  );
}

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'SEO & GSC', 'Canva & Design', 'WordPress & Speed', 'AI & SaaS Stacks'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Practitioner Knowledge Base</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Tool Comparisons & Technical SEO Guides
          </h1>
        </div>

        <div className="relative w-full md:w-72">
          <label htmlFor="blog-search-input" className="sr-only">
            Search guides and tools
          </label>
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" aria-hidden="true" />
          <input
            id="blog-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Canva, GSC, WordPress..."
            className="w-full min-h-[44px] bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-medium border transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-semibold'
                : 'bg-slate-900 text-slate-200 border-slate-700 hover:border-slate-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.id}`}
            className="group bg-[#111827] border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 font-medium">
                  {article.category}
                </span>
                <span>{article.date} • {article.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                {article.title}
              </h2>
              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">{article.excerpt}</p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Read Full Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.id === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Article Not Found</h1>
        <Link to="/blog" className="min-h-[44px] inline-flex items-center text-emerald-400 underline">
          ← Back to All Guides
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <Link to="/blog" className="min-h-[44px] inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to All Guides
      </Link>

      <div className="space-y-3">
        <span className="px-3 py-1 rounded-md bg-slate-800 text-emerald-300 text-xs font-semibold">
          {article.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{article.title}</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Published {article.date} • {article.readTime} • Written & Tested by Zahid Hussain
        </p>
      </div>

      <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-5">
        <p className="text-xs font-bold uppercase text-emerald-300 mb-1">Bottom-Line Verdict</p>
        <p className="text-sm sm:text-base text-slate-200">{article.verdict}</p>
      </div>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-200">
              <th className="py-2.5 pr-4">Free Tool</th>
              <th className="py-2.5 pr-4">Replaces</th>
              <th className="py-2.5 pr-4">Free Tier Quota</th>
              <th className="py-2.5">Where It Shines</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {article.table.map((row, idx) => (
              <tr key={idx}>
                <td className="py-3 pr-4 font-semibold text-emerald-300">{row.tool}</td>
                <td className="py-3 pr-4">{row.replaces}</td>
                <td className="py-3 pr-4">{row.freeLimit}</td>
                <td className="py-3">{row.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 pt-2">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-2">
            <h2 className="text-xl font-bold text-white">{sec.heading}</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{sec.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-bold text-white text-base">Need Hands-On Help With Your Site or Custom Tool?</h2>
          <p className="text-xs text-slate-300 mt-1">Available for WordPress Core Web Vitals fixes, technical SEO audits, and React SaaS MVPs.</p>
        </div>
        <a
          href="https://zahidhussainofficial.com"
          target="_blank"
          rel="noreferrer"
          className="min-h-[44px] shrink-0 inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl"
        >
          Work With Zahid →
        </a>
      </div>
    </article>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">About BizTools Studio</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
        Built by a Practitioner Who Tests Every Stack on Production Sites
      </h1>
      <p className="text-slate-300 leading-relaxed">
        BizTools Studio (biztools.zahidhussainofficial.com) is run by <strong>Zahid Hussain</strong>—a Full-Stack Web Developer (React, Node.js, WordPress) and Certified Digital Marketing & Data Analytics Specialist.
      </p>
      <p className="text-slate-300 leading-relaxed">
        After auditing dozens of small business sites across the UK, US, Europe, Australia, and New Zealand, one pattern kept repeating: owners were paying $150–$300/month for bloated SaaS tools while missing basic fundamentals like clean XML sitemaps, WebP compression, and proper canonical tags. Every guide here comes directly from real client work.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 pt-2">
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h2 className="font-bold text-white text-sm">Google Search Ads Certified</h2>
          <p className="text-xs text-slate-300 mt-1">Search intent & landing page conversion experience.</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h2 className="font-bold text-white text-sm">Cisco Data Analytics Certified</h2>
          <p className="text-xs text-slate-300 mt-1">Evidence-based benchmarking of free vs. paid tiers.</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h2 className="font-bold text-white text-sm">Full-Stack Web & SEO</h2>
          <p className="text-xs text-slate-300 mt-1">React, Vite, WordPress speed & Search Console recovery.</p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
        <Mail className="w-4 h-4" />
        <span>Contact</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h1>
      <p className="text-slate-300 leading-relaxed">
        Want to suggest a free tool for review, flag a calculator bug, or discuss a custom Micro-SaaS or WordPress speed project? Email directly:
      </p>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4 text-sm">
        <div>
          <p className="text-xs text-slate-400">Editorial & Project Inquiries</p>
          <a href="mailto:contact@zahidhussainofficial.com" className="min-h-[44px] inline-flex items-center text-lg font-bold text-emerald-400 hover:underline">
            contact@zahidhussainofficial.com
          </a>
        </div>
        <div>
          <p className="text-xs text-slate-400">Portfolio & Case Studies</p>
          <a href="https://zahidhussainofficial.com" target="_blank" rel="noreferrer" className="min-h-[44px] inline-flex items-center text-emerald-400 hover:underline">
            https://zahidhussainofficial.com
          </a>
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-4 text-sm text-slate-300 leading-relaxed">
      <div className="flex items-center gap-2 text-emerald-400 font-bold">
        <ShieldCheck className="w-5 h-5" />
        <span>Privacy & Data Handling</span>
      </div>
      <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
      <p>
        BizTools Studio (https://biztools.zahidhussainofficial.com) respects visitor privacy under UK GDPR, EU GDPR, and CCPA standards.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">1. Local Browser Calculators</h2>
      <p>
        All tools on this site execute locally in your browser. We do not log, store, or transmit your URLs, draft copy, or financial figures to any backend server.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">2. Analytics & Advertising</h2>
      <p>
        We may use privacy-conscious analytics and Google AdSense cookies to fund free tools. Visitors can manage ad personalization anytime via Google Ad Settings.
      </p>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-4 text-sm text-slate-300 leading-relaxed">
      <h1 className="text-3xl font-extrabold text-white">Terms of Use & Disclaimer</h1>
      <p>
        Guides and comparisons on BizTools Studio reflect hands-on testing at the time of publication. SaaS vendors frequently adjust free-tier quotas, so always confirm current plan limits on the vendor’s site.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-slate-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}