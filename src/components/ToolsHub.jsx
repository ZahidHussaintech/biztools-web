import React, { useState } from 'react';
import { Copy, Check, Code2, Link2, FileText, Calculator, Braces, Briefcase } from 'lucide-react';

export default function ToolsHub() {
  const [activeTab, setActiveTab] = useState('meta');
  const [copied, setCopied] = useState(false);

  // 1. Meta & OG State
  const [metaTitle, setMetaTitle] = useState('Free SEO & Marketing Stack for Small Businesses | BizTools');
  const [metaDesc, setMetaDesc] = useState(
    'Practical free alternatives to paid SEO, design, and WordPress tools—tested on live client sites across the UK, US, and Australia.'
  );
  const [pageUrl, setPageUrl] = useState('https://biztools.zahidhussainofficial.com/');

  // 2. JSON-LD Schema Generator State
  const [schemaType, setSchemaType] = useState('LocalBusiness');
  const [bizName, setBizName] = useState('Northgate Digital Studio');
  const [bizUrl, setBizUrl] = useState('https://example.co.uk');
  const [bizCity, setBizCity] = useState('London');
  const [bizCountry, setBizCountry] = useState('GB');

  // 3. UTM Builder State
  const [utmUrl, setUtmUrl] = useState('https://zahidhussainofficial.com/services');
  const [utmSource, setUtmSource] = useState('linkedin');
  const [utmMedium, setUtmMedium] = useState('organic_post');
  const [utmCampaign, setUtmCampaign] = useState('uk_seo_audit');

  // 4. Content Readability & Keyword Counter State
  const [sampleText, setSampleText] = useState(
    'Most small service businesses waste money on bloated software subscriptions before fixing basic technical bottlenecks like slow mobile load times and unindexed pages.'
  );
  const [targetKeyword, setTargetKeyword] = useState('technical');

  // 5. Agency Retainer & Margin Calculator State
  const [hoursPerMonth, setHoursPerMonth] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [targetMargin, setTargetMargin] = useState(60);

  // 6. Funnel ROI Calculator State
  const [monthlyTraffic, setMonthlyTraffic] = useState(4000);
  const [convRate, setConvRate] = useState(2.5);
  const [clientValue, setClientValue] = useState(500);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatedMetaCode = `<title>${metaTitle}</title>
<meta name="description" content="${metaDesc}" />
<link rel="canonical" href="${pageUrl}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${pageUrl}" />
<meta property="og:title" content="${metaTitle}" />
<meta property="og:description" content="${metaDesc}" />`;

  const generatedSchemaCode = `<script type="application/ld+json">
${JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: bizName,
    url: bizUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: bizCity,
      addressCountry: bizCountry,
    },
  },
  null,
  2
)}
</script>`;

  const generatedUtmLink = `${utmUrl}${utmUrl.includes('?') ? '&' : '?'}utm_source=${encodeURIComponent(
    utmSource || 'direct'
  )}&utm_medium=${encodeURIComponent(utmMedium || 'referral')}&utm_campaign=${encodeURIComponent(
    utmCampaign || 'campaign'
  )}`;

  const words = sampleText.trim() ? sampleText.trim().split(/\s+/).length : 0;
  const chars = sampleText.length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const keywordMatches =
    targetKeyword.trim() && words > 0
      ? (sampleText.toLowerCase().match(new RegExp(`\\b${targetKeyword.trim().toLowerCase()}\\b`, 'g')) || []).length
      : 0;
  const keywordDensity = words > 0 ? ((keywordMatches / words) * 100).toFixed(1) : '0.0';

  const deliveryCost = hoursPerMonth * hourlyCost;
  const recommendedRetainer = Math.round(deliveryCost / (1 - targetMargin / 100));
  const netProfit = recommendedRetainer - deliveryCost;

  const estimatedLeads = Math.round((monthlyTraffic * convRate) / 100);
  const estimatedRevenue = estimatedLeads * clientValue;

  const tabs = [
    { id: 'meta', label: 'Meta & SERP Preview', icon: Code2 },
    { id: 'schema', label: 'JSON-LD Schema', icon: Braces },
    { id: 'utm', label: 'UTM Link Builder', icon: Link2 },
    { id: 'content', label: 'Keyword & Readability', icon: FileText },
    { id: 'retainer', label: 'Retainer & Margin', icon: Briefcase },
    { id: 'roi', label: 'Funnel ROI Estimator', icon: Calculator },
  ];

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-xl">
      {/* Accessible Tool Tabs (44px+ height & generous spacing) */}
      <div role="tablist" aria-label="Free Marketing Tools" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[48px] flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium border transition cursor-pointer text-left ${
                isActive
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-200'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TOOL 1: SEO Meta & SERP Preview */}
      {activeTab === 'meta' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label htmlFor="tool-meta-title" className="text-slate-200 font-medium">
                  Page Title
                </label>
                <span className={metaTitle.length > 60 ? 'text-amber-300' : 'text-emerald-300'}>
                  {metaTitle.length} / 60 chars
                </span>
              </div>
              <input
                id="tool-meta-title"
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <label htmlFor="tool-meta-desc" className="text-slate-200 font-medium">
                  Meta Description
                </label>
                <span className={metaDesc.length > 160 ? 'text-amber-300' : 'text-emerald-300'}>
                  {metaDesc.length} / 160 chars
                </span>
              </div>
              <textarea
                id="tool-meta-desc"
                rows={3}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="tool-meta-url" className="block text-xs text-slate-200 font-medium mb-1.5">
                Canonical URL
              </label>
              <input
                id="tool-meta-url"
                type="url"
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 text-left" aria-label="Google Search Result Preview">
              <p className="text-xs text-slate-600 truncate">{pageUrl}</p>
              <p className="text-[#1a0dab] text-base font-medium leading-snug mt-0.5 line-clamp-1">
                {metaTitle || 'Your Page Title Appears Here'}
              </p>
              <p className="text-xs text-slate-700 mt-1 line-clamp-2">
                {metaDesc || 'Your meta description preview in Google search results.'}
              </p>
            </div>

            <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-4">
              <button
                onClick={() => copyText(generatedMetaCode)}
                className="min-h-[40px] mb-3 inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied HTML' : 'Copy Meta Tags'}
              </button>
              <pre className="text-xs text-emerald-300 overflow-x-auto leading-relaxed">{generatedMetaCode}</pre>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: JSON-LD Schema Generator */}
      {activeTab === 'schema' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="schema-type" className="block text-xs text-slate-200 font-medium mb-1.5">
                Schema Entity Type
              </label>
              <select
                id="schema-type"
                value={schemaType}
                onChange={(e) => setSchemaType(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              >
                <option value="LocalBusiness">LocalBusiness</option>
                <option value="ProfessionalService">ProfessionalService</option>
                <option value="Organization">Organization</option>
                <option value="SoftwareApplication">SoftwareApplication</option>
              </select>
            </div>
            <div>
              <label htmlFor="schema-name" className="block text-xs text-slate-200 font-medium mb-1.5">
                Business or Brand Name
              </label>
              <input
                id="schema-name"
                type="text"
                value={bizName}
                onChange={(e) => setBizName(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="schema-city" className="block text-xs text-slate-200 font-medium mb-1.5">
                  City
                </label>
                <input
                  id="schema-city"
                  type="text"
                  value={bizCity}
                  onChange={(e) => setBizCity(e.target.value)}
                  className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="schema-country" className="block text-xs text-slate-200 font-medium mb-1.5">
                  Country Code (GB, US, AU)
                </label>
                <input
                  id="schema-country"
                  type="text"
                  value={bizCountry}
                  onChange={(e) => setBizCountry(e.target.value)}
                  className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="schema-url" className="block text-xs text-slate-200 font-medium mb-1.5">
                Website URL
              </label>
              <input
                id="schema-url"
                type="url"
                value={bizUrl}
                onChange={(e) => setBizUrl(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <button
              onClick={() => copyText(generatedSchemaCode)}
              className="min-h-[40px] mb-3 inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold px-3.5 py-2 rounded-lg cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied JSON-LD' : 'Copy Schema Script'}
            </button>
            <pre className="text-xs text-emerald-300 overflow-x-auto leading-relaxed">{generatedSchemaCode}</pre>
          </div>
        </div>
      )}

      {/* TOOL 3: UTM Campaign Builder */}
      {activeTab === 'utm' && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="utm-url" className="block text-xs text-slate-200 font-medium mb-1.5">
                Destination URL
              </label>
              <input
                id="utm-url"
                type="url"
                value={utmUrl}
                onChange={(e) => setUtmUrl(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="utm-source" className="block text-xs text-slate-200 font-medium mb-1.5">
                Campaign Source
              </label>
              <input
                id="utm-source"
                type="text"
                value={utmSource}
                onChange={(e) => setUtmSource(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="utm-medium" className="block text-xs text-slate-200 font-medium mb-1.5">
                Campaign Medium
              </label>
              <input
                id="utm-medium"
                type="text"
                value={utmMedium}
                onChange={(e) => setUtmMedium(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="utm-campaign" className="block text-xs text-slate-200 font-medium mb-1.5">
                Campaign Name
              </label>
              <input
                id="utm-campaign"
                type="text"
                value={utmCampaign}
                onChange={(e) => setUtmCampaign(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <code className="text-xs sm:text-sm text-emerald-300 break-all">{generatedUtmLink}</code>
            <button
              onClick={() => copyText(generatedUtmLink)}
              className="min-h-[44px] shrink-0 inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold px-4 py-2.5 rounded-lg cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied URL' : 'Copy Trackable URL'}
            </button>
          </div>
        </div>
      )}

      {/* TOOL 4: Content Readability & Keyword Counter */}
      {activeTab === 'content' && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="content-sample" className="block text-xs text-slate-200 font-medium mb-1.5">
                Draft Copy or Article Paragraph
              </label>
              <textarea
                id="content-sample"
                rows={4}
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="content-keyword" className="block text-xs text-slate-200 font-medium mb-1.5">
                Focus Keyword to Check
              </label>
              <input
                id="content-keyword"
                type="text"
                value={targetKeyword}
                onChange={(e) => setTargetKeyword(e.target.value)}
                className="w-full min-h-[44px] bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
              />
              <p className="text-xs text-slate-400 mt-2">
                Keep focus keyword density around 1%–2% so copy reads naturally.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-400">{words}</p>
              <p className="text-xs text-slate-300 mt-1">Words</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-300">{chars}</p>
              <p className="text-xs text-slate-300 mt-1">Characters</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-amber-300">~{readingTime} min</p>
              <p className="text-xs text-slate-300 mt-1">Read Time</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-300">{keywordDensity}%</p>
              <p className="text-xs text-slate-300 mt-1">Keyword Density ({keywordMatches}x)</p>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 5: Agency Retainer & Margin Calculator */}
      {activeTab === 'retainer' && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label htmlFor="retainer-hours" className="block text-xs text-slate-200 mb-1.5">
                Estimated Delivery Hours / Month: <strong className="text-emerald-300">{hoursPerMonth} hrs</strong>
              </label>
              <input
                id="retainer-hours"
                type="range"
                min="5"
                max="120"
                step="5"
                value={hoursPerMonth}
                onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="retainer-cost" className="block text-xs text-slate-200 mb-1.5">
                Internal Delivery Cost / Hour: <strong className="text-emerald-300">${hourlyCost}/hr</strong>
              </label>
              <input
                id="retainer-cost"
                type="range"
                min="10"
                max="150"
                step="5"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="retainer-margin" className="block text-xs text-slate-200 mb-1.5">
                Target Gross Profit Margin: <strong className="text-emerald-300">{targetMargin}%</strong>
              </label>
              <input
                id="retainer-margin"
                type="range"
                min="20"
                max="85"
                step="5"
                value={targetMargin}
                onChange={(e) => setTargetMargin(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-2.5">
            <p className="text-xs uppercase tracking-wider text-slate-400">Recommended Client Retainer</p>
            <p className="text-4xl font-extrabold text-white">${recommendedRetainer.toLocaleString()}/mo</p>
            <p className="text-xs text-slate-300">
              Delivery Cost: ${deliveryCost.toLocaleString()} • Net Margin: <strong className="text-emerald-300">${netProfit.toLocaleString()}/mo</strong>
            </p>
          </div>
        </div>
      )}

      {/* TOOL 6: Funnel ROI Estimator */}
      {activeTab === 'roi' && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label htmlFor="roi-traffic" className="block text-xs text-slate-200 mb-1.5">
                Monthly Organic Visitors: <strong className="text-emerald-300">{monthlyTraffic.toLocaleString()}</strong>
              </label>
              <input
                id="roi-traffic"
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="roi-conv" className="block text-xs text-slate-200 mb-1.5">
                Landing Page Conversion Rate: <strong className="text-emerald-300">{convRate}%</strong>
              </label>
              <input
                id="roi-conv"
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="roi-value" className="block text-xs text-slate-200 mb-1.5">
                Average Client Value (USD): <strong className="text-emerald-300">${clientValue}</strong>
              </label>
              <input
                id="roi-value"
                type="range"
                min="50"
                max="3000"
                step="50"
                value={clientValue}
                onChange={(e) => setClientValue(Number(e.target.value))}
                className="w-full min-h-[44px] accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
            <p className="text-xs uppercase tracking-wider text-slate-400">Projected Monthly Pipeline</p>
            <p className="text-4xl font-extrabold text-white">${estimatedRevenue.toLocaleString()}/mo</p>
            <p className="text-sm text-emerald-300">
              From ~<strong>{estimatedLeads} qualified leads</strong> per month
            </p>
            <a
              href="https://zahidhussainofficial.com/services"
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center mt-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-5 py-2.5 rounded-lg transition"
            >
              Request a Technical SEO / Funnel Audit →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}