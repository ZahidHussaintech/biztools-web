import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useParams, useLocation } from 'react-router-dom';
import {
  Sparkles,
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
    isActive
      ? 'text-emerald-400 font-semibold'
      : 'text-slate-300 hover:text-emerald-400 transition';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#090D16]/90 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950">
            B
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            BizTools<span className="text-emerald-400">.Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/tools" className={linkClass}>Free Tools</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog & Reviews</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://zahidhussainofficial.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <span>Custom SaaS / Hire</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0D1322] border-b border-slate-800 px-4 py-4 space-y-3 text-sm">
          <NavLink to="/" end onClick={() => setOpen(false)} className="block py-1.5 text-slate-200">Home</NavLink>
          <NavLink to="/tools" onClick={() => setOpen(false)} className="block py-1.5 text-slate-200">Free Tools</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)} className="block py-1.5 text-slate-200">Blog & Reviews</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="block py-1.5 text-slate-200">About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="block py-1.5 text-slate-200">Contact</NavLink>
          <a
            href="https://zahidhussainofficial.com"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-emerald-500 text-slate-950 font-semibold py-2.5 rounded-lg mt-2"
          >
            Custom SaaS / Hire →
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-[#070A11] py-10 px-4 sm:px-6 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">
        <div>
          <span className="font-bold text-base text-white">
            BizTools<span className="text-emerald-400">.Studio</span>
          </span>
          <p className="mt-2 leading-relaxed">
            Free browser-based SEO utilities and honest comparisons of free alternatives to expensive marketing SaaS for UK, US, EU, AU & NZ businesses.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-slate-200 uppercase tracking-wider">Platform</p>
          <div className="flex flex-col space-y-1.5">
            <Link to="/tools" className="hover:text-emerald-400">Free Marketing & SEO Tools</Link>
            <Link to="/blog" className="hover:text-emerald-400">Software Comparisons & Guides</Link>
            <Link to="/about" className="hover:text-emerald-400">About Editorial Team</Link>
            <Link to="/contact" className="hover:text-emerald-400">Contact & Partnerships</Link>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-slate-200 uppercase tracking-wider">Legal & Compliance</p>
          <div className="flex flex-col space-y-1.5">
            <Link to="/privacy-policy" className="hover:text-emerald-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-400">Terms of Use & Disclaimer</Link>
            <a href="https://zahidhussainofficial.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
              Main Developer Portfolio →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} BizTools Studio by Zahid Hussain. All rights reserved.</p>
        <p>biztools.zahidhussainofficial.com</p>
      </div>
    </footer>
  );
}

/* ==================== PAGE 1: HOME ==================== */
function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-14 px-4 sm:px-6 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_55%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Lean Businesses in the UK, US, Europe, AU & NZ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Free Digital Marketing, SEO & WordPress Tools —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
              Without the $200/mo SaaS Bloat
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Use our free browser-based SEO & marketing utilities or read practitioner-tested comparisons of free alternatives to Canva Pro, Ahrefs, and paid WordPress plugins.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              <Wrench className="w-4 h-4" />
              Open Free Tools Suite
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium px-6 py-3 rounded-xl text-sm transition"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Read All SEO & Tool Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">100% Free Utilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Interactive SEO & Growth Calculators</h2>
          </div>
          <Link to="/tools" className="text-sm text-emerald-400 hover:underline font-medium">
            Dedicated Tools View →
          </Link>
        </div>
        <ToolsHub />
      </section>

      {/* Latest Guides */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 border-t border-slate-800/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Latest Playbooks</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Featured Software Reviews & SEO Fixes</h2>
          </div>
          <Link to="/blog" className="text-sm text-emerald-400 hover:underline font-medium">
            View All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-[#111827]/80 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 font-medium">
                    {article.category}
                  </span>
                  <span>{article.date} • {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{article.excerpt}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Read Full Guide</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

/* ==================== PAGE 2: TOOLS PAGE ==================== */
function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14 space-y-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Free Browser Suite</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
          Free Digital Marketing, SEO & SaaS Calculators
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Generate Google-ready meta tags, build UTM-tracked campaign URLs, audit content readability, and forecast lead conversion ROI—100% locally in your browser.
        </p>
      </div>
      <ToolsHub />
    </div>
  );
}

/* ==================== PAGE 3: BLOG ARCHIVE PAGE ==================== */
function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'SEO & GSC', 'Canva & Design', 'WordPress & Speed'];

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
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Knowledge Base</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Free Tool Reviews & Technical SEO Guides
          </h1>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Canva, GSC, WordPress..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-semibold'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
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
            className="group bg-[#111827]/80 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 font-medium">
                  {article.category}
                </span>
                <span>{article.date} • {article.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                {article.title}
              </h2>
              <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{article.excerpt}</p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Read Full Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ==================== PAGE 4: SINGLE BLOG POST PAGE ==================== */
function ArticleDetailPage() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.id === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Article Not Found</h1>
        <Link to="/blog" className="inline-block text-emerald-400 underline">
          ← Back to All Guides
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to All Guides
      </Link>

      <div className="space-y-3">
        <span className="px-3 py-1 rounded-md bg-indigo-500/15 text-indigo-300 text-xs font-semibold">
          {article.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{article.title}</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Published {article.date} • {article.readTime} • Reviewed by Zahid Hussain
        </p>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
        <p className="text-xs font-bold uppercase text-emerald-300 mb-1">Practitioner Verdict</p>
        <p className="text-sm sm:text-base text-slate-200">{article.verdict}</p>
      </div>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-300">
              <th className="py-2.5 pr-4">Free Tool</th>
              <th className="py-2.5 pr-4">Replaces</th>
              <th className="py-2.5 pr-4">Free Limit</th>
              <th className="py-2.5">Best Use Case</th>
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
          <div key={idx} className="space-y-2">
            <h2 className="text-xl font-bold text-white">{sec.heading}</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{sec.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-bold text-white">Want Help Implementing This Stack or Building a Custom Web Tool?</p>
          <p className="text-xs text-slate-400 mt-1">Available for WordPress Core Web Vitals optimization, technical SEO audits & React SaaS MVPs.</p>
        </div>
        <a
          href="https://zahidhussainofficial.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl"
        >
          Work With Zahid →
        </a>
      </div>
    </article>
  );
}

/* ==================== PAGE 5: ABOUT PAGE ==================== */
function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">About BizTools Studio</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
        Helping Lean Businesses Replace Expensive Software With Free, High-Speed Stacks
      </h1>
      <p className="text-slate-300 leading-relaxed">
        BizTools Studio (biztools.zahidhussainofficial.com) is an independent digital marketing utilities and software review publication founded by <strong>Zahid Hussain</strong>—a Full-Stack Web Developer (React, Node.js, WordPress) and Certified Digital Marketing & Data Analytics Specialist.
      </p>
      <p className="text-slate-300 leading-relaxed">
        Small businesses, solo founders, and boutique agencies across the UK, United States, Europe, Australia, and New Zealand often spend hundreds of dollars every month on overlapping SEO, design, and analytics subscriptions. Every tool and workflow reviewed on this platform is hands-on tested on real production websites.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 pt-2">
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h3 className="font-bold text-white text-sm">Google Search Ads Certified</h3>
          <p className="text-xs text-slate-400 mt-1">Data-backed search intent & conversion funnel architecture.</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h3 className="font-bold text-white text-sm">Cisco Data Analytics Certified</h3>
          <p className="text-xs text-slate-400 mt-1">Objective benchmarking of free vs. paid SaaS tiers.</p>
        </div>
        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h3 className="font-bold text-white text-sm">Full-Stack Web & SEO</h3>
          <p className="text-xs text-slate-400 mt-1">React, Vite, WordPress speed optimization & technical GSC fixes.</p>
        </div>
      </div>
    </div>
  );
}

/* ==================== PAGE 6: CONTACT PAGE ==================== */
function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-6">
      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
        <Mail className="w-4 h-4" />
        <span>Get In Touch</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact BizTools Studio</h1>
      <p className="text-slate-300 leading-relaxed">
        Want to suggest a free digital marketing tool for review, report a bug in our calculators, or discuss a custom Micro-SaaS / WordPress speed project? Reach out directly:
      </p>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 space-y-4 text-sm">
        <div>
          <p className="text-xs text-slate-400">Direct Business & Editorial Email</p>
          <a href="mailto:contact@zahidhussainofficial.com" className="text-lg font-bold text-emerald-400 hover:underline">
            contact@zahidhussainofficial.com
          </a>
        </div>
        <div>
          <p className="text-xs text-slate-400">Developer Portfolio & Freelance Services</p>
          <a href="https://zahidhussainofficial.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
            https://zahidhussainofficial.com
          </a>
        </div>
        <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
          Typical response time: Within 24 business hours (UK / EU / US / AU time zones supported).
        </p>
      </div>
    </div>
  );
}

/* ==================== PAGE 7 & 8: PRIVACY & TERMS ==================== */
function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-4 text-sm text-slate-300 leading-relaxed">
      <div className="flex items-center gap-2 text-emerald-400 font-bold">
        <ShieldCheck className="w-5 h-5" />
        <span>Legal & Data Protection</span>
      </div>
      <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
      <p>
        BizTools Studio (https://biztools.zahidhussainofficial.com) is committed to protecting visitor privacy in compliance with UK GDPR, EU GDPR, and CCPA regulations.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">1. Client-Side Browser Tools</h2>
      <p>
        All interactive utilities on this website (Meta Tag Generator, UTM Link Builder, Word Counter, and ROI Calculator) run 100% locally inside your web browser. We do not transmit, log, or store any URLs, text, or numbers you enter into these tools.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">2. Analytics & Advertising Cookies</h2>
      <p>
        We may use privacy-compliant analytics and third-party advertising partners such as Google AdSense. Google uses cookies (including the DoubleClick cookie) to serve ads based on a user’s prior visits to this website or other websites on the Internet. Users may opt out of personalized advertising by visiting Google Ads Settings.
      </p>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-14 space-y-4 text-sm text-slate-300 leading-relaxed">
      <h1 className="text-3xl font-extrabold text-white">Terms of Use & Software Disclaimer</h1>
      <p>
        All articles, software comparisons, and free-tier quotas published on BizTools Studio are independently researched for educational and business productivity purposes.
      </p>
      <p>
        Third-party SaaS pricing, free plan limits, and features change frequently; visitors should verify current terms on the respective vendor’s official website before making purchasing decisions.
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