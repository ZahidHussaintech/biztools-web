import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  Wrench,
  ShieldCheck,
  Mail,
  X,
} from 'lucide-react';
import ToolsHub from './components/ToolsHub';
import { ARTICLES } from './data/content';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [legalModal, setLegalModal] = useState(null);

  const categories = ['All', 'SEO & GSC', 'Canva & Design', 'WordPress & Speed'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#090D16]/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950">
              B
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              BizTools<span className="text-emerald-400">.Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#tools" className="hover:text-emerald-400 transition">Free Tools</a>
            <a href="#guides" className="hover:text-emerald-400 transition">Tool Reviews & SEO Guides</a>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <button
              onClick={() => setLegalModal('contact')}
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <a
            href="https://zahidhussainofficial.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <span>Hire / Custom SaaS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
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
            <a
              href="#tools"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              <Wrench className="w-4 h-4" />
              Launch Free Marketing Tools
            </a>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium px-6 py-3 rounded-xl text-sm transition"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Browse Free Tool Guides
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Free Tools Hub */}
      <section id="tools" className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            100% Free Browser Utilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Interactive SEO, UTM & Growth Calculators
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            No signup, no credit card, and zero data stored on external servers.
          </p>
        </div>

        <ToolsHub />
      </section>

      {/* Blog & Tool Comparisons Section */}
      <section id="guides" className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 border-t border-slate-800/70">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Tested Software Stacks & Playbooks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Free Tool Reviews & Technical SEO Guides
            </h2>
          </div>

          {/* Search Input */}
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

        {/* Category Filter Pills */}
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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-[#111827]/80 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 transition cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 font-medium">
                    {article.category}
                  </span>
                  <span>
                    {article.date} • {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{article.excerpt}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Read Full Comparison & Verdict</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About & SaaS Lead Funnel Banner */}
      <section id="about" className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-14">
        <div className="bg-gradient-to-r from-slate-900 via-[#111827] to-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Curated by Zahid Hussain
            </span>
            <h2 className="text-2xl font-bold text-white">
              Need a Custom Micro-SaaS, Fast React Web App, or Technical SEO Audit?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every tool and workflow on BizTools Studio is tested by Zahid Hussain — Full-Stack Web Developer (React, Node.js, WordPress) and Certified Digital Marketing & Data Analytics Specialist. We help startups and SMEs across the UK, US, Europe, Australia, and New Zealand replace bloated software with fast, custom web solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Google Search Ads Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cisco Data Analytics Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Core Web Vitals Specialist
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://zahidhussainofficial.com"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-5 py-3.5 rounded-xl transition"
            >
              View Portfolio & Case Studies
            </a>
            <button
              onClick={() => setLegalModal('contact')}
              className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm px-5 py-3 rounded-xl transition cursor-pointer"
            >
              Request a Free Tool / Audit
            </button>
          </div>
        </div>
      </section>

      {/* Footer with AdSense Mandatory Links */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#070A11] py-8 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BizTools Studio by Zahid Hussain. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <button onClick={() => setLegalModal('privacy')} className="hover:text-emerald-400 cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => setLegalModal('terms')} className="hover:text-emerald-400 cursor-pointer">
              Terms & Disclaimer
            </button>
            <button onClick={() => setLegalModal('contact')} className="hover:text-emerald-400 cursor-pointer">
              Contact Us
            </button>
            <a
              href="https://zahidhussainofficial.com"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              zahidhussainofficial.com
            </a>
          </div>
        </div>
      </footer>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111827] border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="sticky top-0 float-right bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-slate-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-emerald-400">{activeArticle.category}</span>
            <h2 className="text-2xl font-bold text-white mt-1 leading-snug">{activeArticle.title}</h2>
            <p className="text-xs text-slate-400 mt-1">
              Published {activeArticle.date} • {activeArticle.readTime} • By Zahid Hussain
            </p>

            {/* Quick Verdict Box */}
            <div className="mt-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <p className="text-xs font-bold uppercase text-emerald-300 mb-1">Quick Practitioner Verdict</p>
              <p className="text-sm text-slate-200">{activeArticle.verdict}</p>
            </div>

            {/* Comparison Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-300">
                    <th className="py-2.5 pr-3">Free Tool</th>
                    <th className="py-2.5 pr-3">Replaces</th>
                    <th className="py-2.5 pr-3">Free Limit</th>
                    <th className="py-2.5">Best Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {activeArticle.table.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 pr-3 font-semibold text-emerald-300">{row.tool}</td>
                      <td className="py-2.5 pr-3">{row.replaces}</td>
                      <td className="py-2.5 pr-3">{row.freeLimit}</td>
                      <td className="py-2.5">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Detailed Sections */}
            <div className="mt-6 space-y-5">
              {activeArticle.sections.map((sec, idx) => (
                <div key={idx}>
                  <h3 className="text-base font-bold text-white mb-1.5">{sec.heading}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Legal & Contact Modal (AdSense Compliance) */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-slate-700 rounded-2xl max-w-lg w-full p-6 relative space-y-4">
            <button
              onClick={() => setLegalModal(null)}
              className="float-right bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg text-slate-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {legalModal === 'privacy' && (
              <>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                  <h3>Privacy Policy</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  BizTools Studio (biztools.zahidhussainofficial.com) respects visitor privacy. All browser calculators (Meta Tag Generator, UTM Builder, Word Counter, and ROI Calculator) run 100% locally in your browser; we do not store your pasted text or URLs on external databases. We may use Google Analytics and Google AdSense cookies to serve relevant advertisements in compliance with GDPR and CCPA standards.
                </p>
              </>
            )}

            {legalModal === 'terms' && (
              <>
                <h3 className="font-bold text-white">Terms of Use & Affiliate Disclaimer</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  All software reviews and free tier limits listed on BizTools Studio are independently tested and updated regularly. Third-party software pricing and free plan quotas may change at the vendor’s discretion. Content is provided for educational and business productivity purposes.
                </p>
              </>
            )}

            {legalModal === 'contact' && (
              <>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Mail className="w-5 h-5" />
                  <h3>Contact BizTools Studio</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Have a free marketing tool to suggest, or want to build a custom SaaS / high-speed website for your business? Reach out directly:
                </p>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm space-y-1.5">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:contact@zahidhussainofficial.com" className="text-emerald-400 underline">
                      contact@zahidhussainofficial.com
                    </a>
                  </p>
                  <p>
                    <strong>Main Portfolio:</strong>{' '}
                    <a
                      href="https://zahidhussainofficial.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 underline"
                    >
                      zahidhussainofficial.com
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}