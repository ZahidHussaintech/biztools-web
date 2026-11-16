import React, { useState } from 'react';
import { Copy, Check, Code2, Link2, FileText, Calculator } from 'lucide-react';

export default function ToolsHub() {
  const [activeTab, setActiveTab] = useState('meta');
  const [copied, setCopied] = useState(false);

  // 1. Meta & Schema State
  const [metaTitle, setMetaTitle] = useState('Best Free SEO Tools for Small Businesses | BizTools');
  const [metaDesc, setMetaDesc] = useState('Discover tested free digital marketing, SEO, and WordPress optimization tools to grow organic traffic without expensive subscriptions.');
  const [pageUrl, setPageUrl] = useState('https://biztools.zahidhussainofficial.com/');

  // 2. UTM Builder State
  const [utmUrl, setUtmUrl] = useState('https://zahidhussainofficial.com');
  const [utmSource, setUtmSource] = useState('linkedin');
  const [utmMedium, setUtmMedium] = useState('social');
  const [utmCampaign, setUtmCampaign] = useState('q4_saas_outreach');

  // 3. Content Analyzer State
  const [sampleText, setSampleText] = useState(
    'Technical SEO and Core Web Vitals optimization help small businesses rank higher on Google without paying for expensive ads. Fast websites convert more international leads.'
  );

  // 4. SaaS / Agency ROI Calculator State
  const [monthlyTraffic, setMonthlyTraffic] = useState(5000);
  const [convRate, setConvRate] = useState(2.5);
  const [clientValue, setClientValue] = useState(450);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatedMetaCode = `<!-- Primary Meta Tags -->
<title>${metaTitle}</title>
<meta name="title" content="${metaTitle}" />
<meta name="description" content="${metaDesc}" />
<link rel="canonical" href="${pageUrl}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${pageUrl}" />
<meta property="og:title" content="${metaTitle}" />
<meta property="og:description" content="${metaDesc}" />`;

  const generatedUtmLink = `${utmUrl}${utmUrl.includes('?') ? '&' : '?'}utm_source=${encodeURIComponent(
    utmSource || 'direct'
  )}&utm_medium=${encodeURIComponent(utmMedium || 'referral')}&utm_campaign=${encodeURIComponent(
    utmCampaign || 'campaign'
  )}`;

  const words = sampleText.trim() ? sampleText.trim().split(/\s+/).length : 0;
  const chars = sampleText.length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  const estimatedLeads = Math.round((monthlyTraffic * convRate) / 100);
  const estimatedRevenue = estimatedLeads * clientValue;

  const tabs = [
    { id: 'meta', label: 'SEO Meta & OG Generator', icon: Code2 },
    { id: 'utm', label: 'UTM Campaign Builder', icon: Link2 },
    { id: 'content', label: 'Word & Readability Counter', icon: FileText },
    { id: 'roi', label: 'Funnel & SaaS ROI Calculator', icon: Calculator },
  ];

  return (
    <div className="bg-[#111827]/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium border transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TOOL 1: SEO Meta Generator */}
      {activeTab === 'meta' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label className="text-slate-300 font-medium">Page Title</label>
                <span className={metaTitle.length > 60 ? 'text-amber-400' : 'text-emerald-400'}>
                  {metaTitle.length} / 60 chars
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label className="text-slate-300 font-medium">Meta Description</label>
                <span className={metaDesc.length > 160 ? 'text-amber-400' : 'text-emerald-400'}>
                  {metaDesc.length} / 160 chars
                </span>
              </div>
              <textarea
                rows={3}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 font-medium mb-1.5">Canonical URL</label>
              <input
                type="text"
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Google SERP Preview */}
            <div className="bg-white rounded-xl p-4 text-left">
              <p className="text-xs text-slate-500 truncate">{pageUrl}</p>
              <h4 className="text-[#1a0dab] text-base font-medium leading-snug mt-0.5 line-clamp-1">
                {metaTitle || 'Your Page Title Appears Here'}
              </h4>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {metaDesc || 'Your meta description preview in Google search results.'}
              </p>
            </div>

            {/* Generated HTML */}
            <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-4">
              <button
                onClick={() => copyText(generatedMetaCode)}
                className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy HTML'}
              </button>
              <pre className="text-xs text-emerald-300 overflow-x-auto pt-6 leading-relaxed">
                {generatedMetaCode}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: UTM Campaign Link Builder */}
      {activeTab === 'utm' && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Destination URL *</label>
              <input
                type="text"
                value={utmUrl}
                onChange={(e) => setUtmUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Campaign Source (utm_source)</label>
              <input
                type="text"
                value={utmSource}
                onChange={(e) => setUtmSource(e.target.value)}
                placeholder="google, linkedin, newsletter"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Campaign Medium (utm_medium)</label>
              <input
                type="text"
                value={utmMedium}
                onChange={(e) => setUtmMedium(e.target.value)}
                placeholder="cpc, social, email"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1.5">Campaign Name (utm_campaign)</label>
              <input
                type="text"
                value={utmCampaign}
                onChange={(e) => setUtmCampaign(e.target.value)}
                placeholder="uk_lead_gen"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <code className="text-xs sm:text-sm text-emerald-300 break-all">{generatedUtmLink}</code>
            <button
              onClick={() => copyText(generatedUtmLink)}
              className="shrink-0 flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied URL' : 'Copy Trackable URL'}
            </button>
          </div>
        </div>
      )}

      {/* TOOL 3: Word & Readability Counter */}
      {activeTab === 'content' && (
        <div className="space-y-4">
          <textarea
            rows={5}
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            placeholder="Paste your blog post, LinkedIn copy, or ad script here..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-emerald-500 focus:outline-none"
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-400">{words}</p>
              <p className="text-xs text-slate-400 mt-1">Total Words</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">{chars}</p>
              <p className="text-xs text-slate-400 mt-1">Characters</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-amber-400">~{readingTime} min</p>
              <p className="text-xs text-slate-400 mt-1">Est. Read Time</p>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 4: Funnel & SaaS ROI Calculator */}
      {activeTab === 'roi' && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Monthly Organic Visitors: <strong className="text-emerald-400">{monthlyTraffic.toLocaleString()}</strong>
              </label>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Landing Page Conversion Rate: <strong className="text-emerald-400">{convRate}%</strong>
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Average Client / Subscription Value (USD): <strong className="text-emerald-400">${clientValue}</strong>
              </label>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={clientValue}
                onChange={(e) => setClientValue(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/15 via-slate-950 to-indigo-500/15 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
            <p className="text-xs uppercase tracking-wider text-slate-400">Projected Monthly Pipeline</p>
            <p className="text-4xl font-extrabold text-white">${estimatedRevenue.toLocaleString()}/mo</p>
            <p className="text-sm text-emerald-300">
              From ~<strong>{estimatedLeads} qualified leads</strong> per month
            </p>
            <a
              href="https://zahidhussainofficial.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-5 py-2.5 rounded-lg transition"
            >
              Build a High-Converting Funnel / Micro-SaaS →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}