export const ARTICLES = [
  {
    id: 'free-ahrefs-semrush-alternatives',
    category: 'SEO & GSC',
    readTime: '7 min read',
    date: 'Nov 14, 2026',
    title: '7 Best Free Alternatives to Ahrefs & Semrush for Lean Businesses (2026 Tested)',
    excerpt:
      'Paying $129/month for keyword research when starting out makes zero sense. Here is the exact free SEO stack used by UK and US boutique agencies.',
    verdict: 'Combine Google Search Console + Keyword Surfer + Screaming Frog (Free 500 URLs) to cover 85% of paid SEO suite workflows at $0/month.',
    table: [
      { tool: 'Google Search Console', replaces: 'Rank Tracker & Site Audit', freeLimit: '100% Free Unlimited', bestFor: 'Real search queries & indexing fixes' },
      { tool: 'Screaming Frog SEO Spider', replaces: 'Ahrefs Site Audit', freeLimit: 'Up to 500 URLs', bestFor: 'Broken links, meta tags & redirect chains' },
      { tool: 'Ahrefs Webmaster Tools', replaces: 'Backlink Checker', freeLimit: 'Verified sites free', bestFor: 'Monitoring referring domains & toxicity' },
      { tool: 'Keyword Surfer', replaces: 'Keyword Overview', freeLimit: 'Unlimited Chrome searches', bestFor: 'US/UK/AU search volume inside Google SERP' },
    ],
    sections: [
      {
        heading: '1. Why Small Businesses Overpay for Enterprise SEO Suites',
        body: 'Most founders in London, New York, or Sydney subscribe to $130/month SEO tools only to check 20 keywords once a week. Until your site passes 50,000 monthly organic sessions, free first-party data from Google Search Console and Bing Webmaster Tools is far more accurate than third-party estimates.',
      },
      {
        heading: '2. Step-by-Step Free Audit Workflow',
        body: 'Start by verifying your domain in Google Search Console, run a 500-URL crawl using Screaming Frog to fix missing H1s and canonical tags, and validate structured data using Google Rich Results Test. This single workflow resolves 90% of technical ranking bottlenecks.',
      },
    ],
  },
  {
    id: 'free-canva-pro-alternatives',
    category: 'Canva & Design',
    readTime: '6 min read',
    date: 'Nov 12, 2026',
    title: 'Best Free Canva Pro Alternatives for Fast Ad Creatives & Background Removal',
    excerpt:
      'Need transparent PNGs, brand kits, and social ad banners without recurring design subscriptions? These browser-based tools deliver studio output for free.',
    verdict: 'Use Photopea for PSD/layer editing, Adobe Express Free for quick social templates, and Remove.bg / Upscale.media for instant asset prep.',
    table: [
      { tool: 'Adobe Express (Free Tier)', replaces: 'Canva Social Templates', freeLimit: 'Thousands of templates & fonts', bestFor: 'Quick LinkedIn, Instagram & display ads' },
      { tool: 'Photopea', replaces: 'Photoshop & Canva Pro Resize', freeLimit: '100% Free browser-based', bestFor: 'Editing PSD, Figma & vector files online' },
      { tool: 'Figma Starter', replaces: 'Canva Brand Kit & Mockups', freeLimit: '3 active design files free', bestFor: 'UI mockups, carousels & web banners' },
    ],
    sections: [
      {
        heading: '1. Where Free Design Tools Beat Paid Subscriptions',
        body: 'Modern browser-based WebAssembly tools like Photopea and Figma run natively in Chrome without heavy downloads. For e-commerce stores and agencies, exporting compressed WebP graphics directly from these tools also improves Core Web Vitals.',
      },
      {
        heading: '2. Export Settings That Keep Pages Fast',
        body: 'Always export hero banners in WebP format under 150 KB and reserve SVG for logos and icons. Heavy PNG exports are the #1 reason landing pages fail mobile PageSpeed tests.',
      },
    ],
  },
  {
    id: 'wordpress-core-web-vitals-free-stack',
    category: 'WordPress & Speed',
    readTime: '8 min read',
    date: 'Nov 10, 2026',
    title: 'How to Hit 95+ Mobile PageSpeed on WordPress Using Only Free Plugins & Cloudflare',
    excerpt:
      'Ditch bloated caching plugins. Learn the exact Cloudflare CDN + free optimization setup that cuts Largest Contentful Paint (LCP) under 1.5 seconds.',
    verdict: 'Pair Cloudflare Free CDN with LiteSpeed Cache (or WP Super Cache + Autoptimize) and WebP Express to pass Core Web Vitals without paying $59/year.',
    table: [
      { tool: 'Cloudflare Free Plan', replaces: 'Paid CDN & Basic WAF', freeLimit: 'Unlimited bandwidth + SSL', bestFor: 'Global TTFB speed across US, EU & AU' },
      { tool: 'LiteSpeed Cache', replaces: 'WP Rocket ($59/yr)', freeLimit: '100% Free plugin', bestFor: 'Page caching, CSS/JS minify & critical CSS' },
      { tool: 'Converter for Media', replaces: 'Imagify / ShortPixel', freeLimit: 'Unlimited local WebP', bestFor: 'Automatic WebP conversion on upload' },
    ],
    sections: [
      {
        heading: '1. Fix Time to First Byte (TTFB) at the DNS Level',
        body: 'If your server is in one region but your buyers are in the UK, Europe, or Australia, uncached requests suffer 400ms+ latency. Routing DNS through Cloudflare edge caching serves static assets from the visitor’s nearest city.',
      },
      {
        heading: '2. Eliminate Render-Blocking Elementor Scripts',
        body: 'Disable unused Google Fonts, defer non-critical JavaScript, and preload your above-the-fold hero image. Even heavy Elementor sites routinely jump from 52 to 94+ on mobile PageSpeed with these three toggles.',
      },
    ],
  },
  {
    id: 'fix-gsc-crawled-currently-not-indexed',
    category: 'SEO & GSC',
    readTime: '6 min read',
    date: 'Nov 08, 2026',
    title: 'How to Fix "Crawled - Currently Not Indexed" in Google Search Console (2026 Guide)',
    excerpt:
      'Google found your pages but refused to put them in search results. Here is the exact 4-step diagnostic checklist to get stuck URLs indexed fast.',
    verdict: 'Strengthen internal linking from indexed hub pages, remove thin/duplicate parameter URLs, and submit clean XML sitemaps.',
    table: [
      { tool: 'GSC URL Inspection', replaces: 'Paid Index Checkers', freeLimit: 'Free daily quota', bestFor: 'Checking canonical & crawl status' },
      { tool: 'Bing Webmaster + IndexNow', replaces: 'Manual Ping Tools', freeLimit: 'Instant API indexing', bestFor: 'Fast indexing across Bing, Yahoo & DuckDuckGo' },
    ],
    sections: [
      {
        heading: '1. Why Google Skips Indexing Valid Pages',
        body: 'In 2026, Google’s crawl budget prioritizes pages with clear topical authority and strong internal links. Orphan pages—URLs with fewer than two internal links pointing to them—are the most common victims of "Crawled - currently not indexed".',
      },
      {
        heading: '2. The 48-Hour Recovery Protocol',
        body: 'Add 2–3 contextual internal links from your highest-traffic pages, upgrade thin 400-word drafts with original comparison tables, and trigger a fresh crawl via GSC URL Inspection.',
      },
    ],
  },
];