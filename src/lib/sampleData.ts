// ============================================================
// SAMPLE DATA — used as fallback when Sanity is not connected.
// Replace with real Sanity content once the CMS is live.
// ============================================================

export interface ServiceSample {
  title: string;
  description: string;
  intro: string[];
  image?: string;
  imageLabel?: string;
  deliverables: string[];
  approach: { step: string; detail: string }[];
  whoFor: string[];
  closing: string;
  testimonial?: { quote: string; author: string; role: string };
  relatedSlugs: string[];
  tools?: { name: string; svg?: string; img?: string }[];
  videos?: { title: string; caption: string; vimeoUrl?: string }[];
}

export interface CaseStudySample {
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  results: string;
  duration: string;
  services: string[];
  challenge: string;
  approach: { heading: string; body: string }[];
  outcomes: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; role: string };
}

// ============================================================
// SERVICES
// ============================================================
export const serviceSamples: Record<string, ServiceSample> = {
  'web-design': {
    title: 'Web Design & Development',
    description:
      'Websites that look the part, load fast, and turn visitors into leads.',
    intro: [
      'Every project starts with discovery, understanding your goals, your audience, and what your competitors are doing well. From there, we plan the sitemap and wireframes before a single pixel gets designed.',
      'We design custom, desktop and mobile, simultaneously. No templates, no page builders. Development happens on a modern, maintainable stack that loads fast and won\'t become a liability in two years. Core Web Vitals, on-page SEO foundations, contact forms, call tracking, CRM integration, and GA4 conversion tracking are built in from day one, not bolted on after launch.',
      'After go-live, you get documentation, support, and a site you can actually manage without calling us for every change.',
    ],
    image: '/images/office.jpg',
    imageLabel: '// RAILSHOP HQ',
    deliverables: [
      'Discovery session: goals, audience, and competitive review',
      'Sitemap and wireframe planning',
      'Custom design for desktop and mobile',
      'Development on a modern, maintainable stack',
      'Contact forms, call tracking, and CRM integration',
      'Core Web Vitals optimization for speed and performance',
      'On-page SEO foundation: title tags, schema, metadata',
      'Google Analytics 4 and conversion tracking setup',
      'Post-launch support and handover documentation',
    ],
    approach: [
      {
        step: 'Discovery',
        detail:
          'We start by understanding your business, your customers, and what you need the site to do. What actions should visitors take? What questions do they have? What makes you different? The answers shape every design decision.',
      },
      {
        step: 'Design',
        detail:
          'We design for conversion first and aesthetics second, though we take both seriously. Every layout decision has a reason. We design desktop and mobile simultaneously, not as an afterthought.',
      },
      {
        step: 'Build',
        detail:
          'We build on fast, maintainable technology. Pages load quickly, the CMS is easy to use, and the codebase is clean. We do not use bloated page builders that slow your site and create long-term technical debt.',
      },
      {
        step: 'Integrate',
        detail:
          'Forms connect to your CRM. Calls are tracked. GA4 is configured with the right events. If you run ads, conversion tracking is set up before launch, not after.',
      },
      {
        step: 'Launch & Optimise',
        detail:
          'We handle the launch and monitor performance in the first weeks. After 30 and 90 days, we review conversion data and make refinements based on real user behaviour, not assumptions.',
      },
    ],
    whoFor: [
      'Service businesses with an outdated site that is losing them leads',
      'New businesses that need a professional web presence from day one',
      'Companies running paid ads to a site that is not converting',
      'Businesses that want a site that can grow with them, not one they will outgrow in a year',
    ],
    closing: 'This tends to be the right fit for service businesses with an outdated site that\'s costing them leads, new businesses that need a professional web presence from day one, or companies running paid ads to a site that just isn\'t converting. If your website hasn\'t kept up with your business, we should talk.',
    testimonial: {
      quote: 'We went from no web presence at all to fully booked by April. The website looks great, we\'re showing up on Google, and the ads actually bring in real customers.',
      author: 'Owner',
      role: 'Regional Landscaping Company',
    },
    relatedSlugs: ['paid-ads', 'seo', 'content-creation'],
    tools: [
      { name: 'Astro', svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"/></svg>' },
      { name: 'Sanity', svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z"/></svg>' },
      { name: 'Tailwind CSS', svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>' },
      { name: 'Webflow', svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z"/></svg>' },
    ],
  },

  'paid-ads': {
    title: 'Paid Ads',
    description:
      'Campaigns built to drive leads, not just clicks.',
    intro: [
      'If you\'re already running ads, we start with a full audit: account structure, targeting, wasted spend, and whether your conversion tracking is actually accurate. Most accounts we inherit have significant recoverable efficiency. If you\'re starting fresh, we do the competitive research before spending a dollar.',
      'We build campaigns across Google Search, Performance Max, and Meta with proper conversion tracking, call tracking, negative keyword management, and audience exclusions from day one. Budget pacing and bid strategy are managed weekly, not monthly. Ad copy and creative direction come from us, not a generic template.',
      'Reporting is monthly, in plain language, with clear next steps. You\'ll always know what\'s working, what\'s not, and what we\'re doing about it.',
    ],
    deliverables: [
      'Platform audit and competitive landscape review',
      'Campaign strategy and channel mix recommendation',
      'Google Search and Performance Max campaign setup',
      'Meta (Facebook/Instagram) campaign setup and audience build',
      'Ad copy and creative direction',
      'Conversion tracking and call tracking setup',
      'Negative keyword management and audience exclusions',
      'Budget pacing and bid strategy management',
      'Monthly reporting with plain-language insights and next steps',
    ],
    approach: [
      {
        step: 'Audit',
        detail:
          'If you are already running ads, we start with a full review: structure, targeting, wasted spend, and conversion tracking accuracy. Most accounts we inherit have significant recoverable efficiency. If you are starting fresh, we do competitive research before we spend a dollar.',
      },
      {
        step: 'Strategy',
        detail:
          'We build a channel plan around your specific services, geography, and budget. Local service businesses are different from national ones. Seasonal businesses need different approaches than year-round ones. The plan fits your actual situation.',
      },
      {
        step: 'Launch',
        detail:
          'Campaigns go live with conversion tracking verified, budgets set conservatively, and naming conventions in place. We watch the first two weeks closely and make adjustments before committing full budget.',
      },
      {
        step: 'Optimise',
        detail:
          'Weekly bid and budget reviews. Monthly creative refreshes. Ongoing negative keyword management. We do not set campaigns and forget them. We treat your ad spend like it is our own.',
      },
      {
        step: 'Scale',
        detail:
          'Once we have efficiency data and conversion volume, we scale what is working. That might mean more budget, new geographies, new services, or new platforms. Growth is structured, not speculative.',
      },
    ],
    whoFor: [
      'Service businesses that need a consistent flow of qualified leads',
      'Companies running ads themselves but not seeing the results they expect',
      'Businesses in competitive local markets that need to show up first',
      'Service companies ready to grow beyond word-of-mouth',
    ],
    closing: 'This is a good fit for service businesses that need a consistent flow of qualified leads, companies running ads themselves but not seeing the results they expect, or businesses in competitive local markets where showing up first matters. If you\'re ready to grow beyond word-of-mouth, let\'s talk.',
    relatedSlugs: ['seo', 'web-design', 'strategy-consulting'],
    tools: [
      { name: 'Google Ads', svg: '<svg height="28" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.252 1.968A3.5 3.5 0 0 0 8.969 6.75l7.5 13a3.5 3.5 0 1 0 6.063-3.498l-7.5-13a3.5 3.5 0 0 0-4.78-1.283ZM7.554 5.702a4.49 4.49 0 0 0 0.549 1.547l3.32 5.755-2.477 4.294A4.501 4.501 0 0 0 2.883 13.8l4.671-8.097ZM4.5 21.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd"/></svg>' },
      { name: 'Local Service Ads', svg: '<svg height="20" viewBox="0 0 2500 2500" fill="currentColor"><circle cx="1250" cy="1250" r="1250"/><path d="m1875 515-883.7 883.8-353.8-353.8-265 265 618.8 618.7 1148.7-1148.7z" fill="var(--bg)"/></svg>' },
      { name: 'Meta Ads', svg: '<svg height="20" viewBox="0 0 287.56 191" fill="currentColor"><path d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"/><path d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"/><path d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"/></svg>' },
      { name: 'Google Analytics', svg: '<svg height="20" viewBox="0 0 301112 333331" fill="currentColor"><path d="M301110 291619c124 22886-18333 41521-41206 41644-1700 14-3415-82-5101-288-21227-3140-36776-21611-36256-43057V43342c-507-21474 15084-39944 36324-43057 22721-2660 43304 13602 45964 36324 192 1673 288 3346 274 5032v249977z"/><path d="M41288 250756c22804 0 41288 18484 41288 41288s-18484 41288-41288 41288S0 314848 0 292044s18484-41288 41288-41288zm108630-125126c-22913 1261-40685 20472-40150 43413v110892c0 30099 13246 48364 32649 52258 22393 4539 44209-9928 48748-32320 562-2743 836-5526 822-8323V167124c41-22886-18470-41467-41356-41507-233 0-480 0-713 14z"/></svg>' },
    ],
  },

  'seo': {
    title: 'SEO',
    description:
      'Search visibility that compounds over time and reduces your reliance on paid.',
    intro: [
      'We start with a full technical audit: crawl errors, indexation issues, page speed, mobile usability, and schema markup. Technical problems get fixed before content work begins. Building on a broken foundation is wasted effort.',
      'From there, we do keyword research mapped to your actual services and locations, optimize every key page (title tags, headers, internal links, schema), and build content that answers real customer questions. For local businesses, that means service pages, location pages, Google Business Profile optimization, and local citation building.',
      'SEO is a long game. We set realistic expectations, track rankings, traffic, and leads from organic search monthly, and adjust priorities based on what\'s gaining traction.',
    ],
    deliverables: [
      'Full technical SEO audit: crawlability, indexation, site speed',
      'Keyword research and opportunity mapping by service and location',
      'On-page optimization: title tags, headers, schema, internal links',
      'Google Business Profile optimization for local search',
      'Content gap analysis and editorial calendar',
      'Local citation building and consistency review',
      'Backlink profile review and outreach strategy',
      'Monthly rank tracking and traffic reporting',
    ],
    approach: [
      {
        step: 'Audit',
        detail:
          'We run a full technical audit first: crawl errors, indexation issues, page speed, mobile usability, and schema markup. Technical problems get fixed before content work begins. Building on a broken foundation is wasted effort.',
      },
      {
        step: 'Keyword Research',
        detail:
          'We identify the searches your ideal customers are making, by service type, location, and intent. We look at search volume, competition, and what you can realistically rank for in your timeframe. Then we prioritise.',
      },
      {
        step: 'On-Page Optimisation',
        detail:
          'Every key service page and location page gets optimised: title tags, meta descriptions, headers, content structure, internal linking, and schema. These are the fundamentals that most local sites get wrong.',
      },
      {
        step: 'Content',
        detail:
          'We build content that answers real customer questions and targets real search terms, not generic filler. For local service businesses, this means service pages, location pages, and FAQ content that drives qualified traffic.',
      },
      {
        step: 'Track & Iterate',
        detail:
          'We track rankings, traffic, and leads from organic search. Monthly reporting shows progress, and we adjust priorities based on what is gaining traction. SEO is a long game. We set realistic expectations and show consistent progress.',
      },
    ],
    whoFor: [
      'Service businesses that want leads without paying for every click',
      'Local businesses that are not showing up in Google Maps or local search results',
      'Companies that have a website but get no organic traffic from it',
      'Businesses playing a long game and wanting compounding visibility over time',
    ],
    closing: 'This works well for service businesses that want leads without paying for every click, local businesses not showing up in Google Maps or local results, or companies with a website that gets no organic traffic. If you\'re playing the long game and want visibility that compounds, we should talk.',
    relatedSlugs: ['web-design', 'content-creation', 'paid-ads'],
    tools: [
      { name: 'Semrush', svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/></svg>' },
      { name: 'Moz', svg: '<svg height="20" viewBox="0 124 359.09 111" fill="currentColor"><path d="M359.09,139.004H243.6v11.568c-10.986-15.8-30.639-26.346-53.178-26.346c-24.593,0-45.768,12.551-55.965,30.803l-0.003-16.141H99.09l-31.449,43.841l-37.809-43.84H0.203L0,219.971h28.024l0.269-39.114l36.966,42.295h6.866l34.134-42.295l0.356,39.114h27.856l-0.003-15.893c10.206,18.238,31.372,30.785,55.954,30.785c34.562,0,62.477-24.727,62.477-55.323c0-4.258-0.59-8.383-1.611-12.359h37.23l-52.646,52.903h117.301V193.57h-46.916L359.09,139.004z M190.422,203.774c-15.245,0-27.524-10.879-27.524-24.378c0-13.5,12.281-24.374,27.524-24.374c15.256,0,27.533,10.874,27.533,24.374C217.955,192.896,205.678,203.774,190.422,203.774z"/></svg>' },
      { name: 'Ahrefs', svg: '<svg height="20" viewBox="0 0 67.8 82.6" fill="currentColor"><path d="M7.1,17.9h40.8v11.5l-15.3,1.2C7.8,32.3,0,38.9,0,57.3V61c0,13.5,9.4,21.6,23.9,21.6c11.5,0,18-2.7,26.1-11h1.3v8.8h16.3V0H7.1V17.9L7.1,17.9z M47.9,56.6c-5.1,5.1-12.6,8.4-18.9,8.4c-6.7,0-9.6-2.5-9.4-8.1c0.2-7.8,3-9.6,16-10.8L47.9,45C47.9,45,47.9,56.6,47.9,56.6z"/></svg>' },
      { name: 'Google Search Console', svg: '<svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor"><path d="M11.081 30.527l-4.72 4.721a.933.933 0 0 1-1.317 0l-.292-.292a.933.933 0 0 1 0-1.316l4.72-4.721a.933.933 0 0 1 1.318 0l.291.291a.93.93 0 0 1 0 1.317z"/><path d="M23.75 32.5h6.042a6.04 6.04 0 0 0 6.041-6.042v-16.25a6.04 6.04 0 0 0-6.041-6.041 6.04 6.04 0 0 0-6.042 6.041V32.5z"/><path d="M13.75 32.5a6.04 6.04 0 0 0 6.042-6.042 6.04 6.04 0 0 0-6.042-6.041 6.04 6.04 0 0 0-6.042 6.041A6.04 6.04 0 0 0 13.75 32.5z"/><path d="M27.97 32.5h-5.887a6.04 6.04 0 0 1-6.041-6.042v-7.916a6.04 6.04 0 0 1 6.041-6.042 6.04 6.04 0 0 1 6.042 6.042v13.804a.154.154 0 0 1-.154.154z" opacity="0.8"/><path d="M28.125 32.346V18.542a6.042 6.042 0 0 0-4.375-5.807V32.5h4.22a.154.154 0 0 0 .155-.154z" opacity="0.6"/><path d="M19.792 26.575a6.04 6.04 0 0 0-3.75-5.59v5.59c0 1.72.72 3.273 1.875 4.373a6.024 6.024 0 0 0 1.875-4.373z" opacity="0.7"/></svg>' },
    ],
  },

  'content-creation': {
    title: 'Content Creation',
    description:
      'Video and photo that works hard across your website, ads, and social.',
    intro: [
      'We start with what you need the content to do: build trust, generate leads, support ads, rank on YouTube. Different goals require different formats. We plan before we produce.',
      'Production is professional and efficient. We handle pre-production (shot lists, interview questions, scheduling) so shoot days are maximized. On location, we capture what makes your work good: the craft, the team, the results. Authentic content, not staged.',
      'One shoot becomes many pieces. A hero video, short-form cuts for Reels and TikTok, social clips, and stills. Everything is edited, color graded, captioned, and exported for every platform. And it\'s all planned for distribution, not just creation.',
    ],
    deliverables: [
      'Content strategy and format planning',
      'On-location video production (service walkthroughs, team, testimonials)',
      'Photography: team, project, and location shots',
      'Short-form social video editing (Reels, TikTok, YouTube Shorts)',
      'Long-form video for YouTube and website',
      'Content calendar with platform-specific distribution plan',
      'Repurposing framework: one shoot, multiple formats',
      'Ongoing content packages (monthly or quarterly)',
    ],
    approach: [
      {
        step: 'Strategy',
        detail:
          'We start with what you need the content to do: build trust, generate leads, support ads, rank on YouTube. Different goals require different formats. We plan before we produce.',
      },
      {
        step: 'Production Planning',
        detail:
          'We handle pre-production: shot lists, interview questions, location scouting, scheduling. Shoot days are efficient because they are planned well. We maximise output from every session.',
      },
      {
        step: 'Production',
        detail:
          'Professional video and photography on location at your business. We capture what makes your work good: the craft, the team, the results. Content that is authentic, not staged.',
      },
      {
        step: 'Post-Production',
        detail:
          'Editing, colour grading, captions, and format exports for every platform. One shoot becomes many pieces of content: a hero video, short-form cuts, social clips, and stills.',
      },
      {
        step: 'Distribution',
        detail:
          'Content is planned for distribution, not just creation. We advise on where to post, when, and how, and how it connects to your paid ads and SEO strategy for maximum reach.',
      },
    ],
    whoFor: [
      'Service businesses with no good photos or video of their actual work',
      'Companies running ads and needing fresh creative on a regular basis',
      'Businesses that want to build a recognisable brand presence on social',
      'Service companies whose work is visual, like landscaping, roofing, construction, and HVAC',
    ],
    closing: 'This is a natural fit for service businesses with no good photos or video of their actual work, companies running ads that need fresh creative regularly, or businesses whose work is visual, like landscaping, roofing, construction, and HVAC. If you want to build a recognizable brand presence, we should talk.',
    relatedSlugs: ['paid-ads', 'seo', 'strategy-consulting'],
    tools: [
      { name: 'Adobe Premiere', svg: '<svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M25.347 12.001v2.437c0 0.1-0.062 0.137-0.2 0.137-0.059-0.002-0.128-0.004-0.197-0.004-0.797 0-1.554 0.172-2.236 0.48l0.034-0.014c-0.25 0.114-0.462 0.27-0.636 0.461l-0.001 0.002v6.373c0 0.125-0.050 0.175-0.162 0.175h-2.462c-0.008 0.001-0.017 0.002-0.026 0.002-0.089 0-0.162-0.066-0.173-0.151l-0-0.001v-6.973l-0.012-0.937-0.025-0.975c0-0.287-0.025-0.562-0.050-0.85-0.001-0.005-0.001-0.012-0.001-0.018 0-0.056 0.037-0.104 0.088-0.119l0.001-0h2.224c0 0 0 0 0.001 0 0.121 0 0.223 0.085 0.249 0.198l0 0.002c0.103 0.329 0.163 0.707 0.163 1.098 0 0.018-0 0.036-0 0.054l0-0.003c0.376-0.432 0.823-0.792 1.325-1.062l0.025-0.012c0.542-0.307 1.191-0.487 1.881-0.487 0.006 0 0.013 0 0.019 0h-0.001c0.006-0.001 0.013-0.001 0.020-0.001 0.080 0 0.146 0.060 0.155 0.138l0 0.001zM16.825 15.938c-0.5 0.69-1.185 1.218-1.982 1.515l-0.030 0.010c-0.775 0.271-1.668 0.428-2.597 0.428-0.075 0-0.151-0.001-0.226-0.003l0.011 0-0.625-0.012-0.537-0.012v4.011c0.001 0.008 0.002 0.016 0.002 0.025 0 0.079-0.061 0.144-0.139 0.15l-0 0h-2.424c-0.1 0-0.15-0.050-0.15-0.162v-12.859c0-0.087 0.037-0.137 0.125-0.137l0.7-0.012 0.95-0.025 1.087-0.025 1.137-0.012c0.063-0.002 0.137-0.003 0.211-0.003 0.846 0 1.658 0.143 2.415 0.406l-0.052-0.016c0.654 0.226 1.213 0.576 1.676 1.026l-0.001-0.001c0.392 0.393 0.702 0.868 0.903 1.397l0.009 0.027c0.181 0.483 0.286 1.041 0.287 1.624v0c0.002 0.053 0.004 0.116 0.004 0.179 0 0.926-0.281 1.785-0.763 2.499l0.010-0.016zM25.685 1.379h-19.369c-2.933 0-5.311 2.378-5.311 5.311v0 18.62c0 0.001 0 0.003 0 0.004 0 2.931 2.376 5.307 5.307 5.307 0.002 0 0.003 0 0.005 0h19.369c0.001 0 0.003 0 0.004 0 2.931 0 5.307-2.376 5.307-5.307 0-0.002 0-0.003 0-0.005v0-18.62c0-0.001 0-0.003 0-0.004 0-2.931-2.376-5.307-5.307-5.307-0.002 0-0.003 0-0.005 0h0zM13.688 11.526c-0.396-0.16-0.855-0.253-1.336-0.253-0.049 0-0.097 0.001-0.145 0.003l0.007-0q-0.681-0.014-1.362 0.025v4.199l0.487 0.025h0.662c0.002 0 0.004 0 0.005 0 0.512 0 1.004-0.082 1.465-0.234l-0.033 0.009c0.411-0.123 0.759-0.354 1.022-0.66l0.002-0.003c0.244-0.32 0.391-0.725 0.391-1.165 0-0.043-0.001-0.085-0.004-0.128l0 0.006c0.003-0.039 0.005-0.085 0.005-0.131 0-0.769-0.479-1.426-1.155-1.689l-0.012-0.004z"/></svg>' },
      { name: 'Adobe Lightroom', svg: '<svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M24.76 12.039v2.437c0 0.1-0.062 0.137-0.2 0.137-0.091-0.006-0.197-0.009-0.304-0.009-0.745 0-1.452 0.16-2.090 0.447l0.032-0.013c-0.263 0.114-0.487 0.27-0.674 0.462l-0 0v6.373c0 0.125-0.050 0.175-0.162 0.175h-2.437c-0.009 0.002-0.018 0.002-0.029 0.002-0.088 0-0.16-0.065-0.171-0.15l-0-0.001v-6.974c0-0.3 0-0.612-0.012-0.937s-0.012-0.65-0.025-0.975q-0.019-0.412-0.076-0.825c-0.002-0.008-0.003-0.016-0.003-0.025 0-0.055 0.038-0.101 0.090-0.112l0.001-0c0.012-0.012 0.025-0.012 0.050 0h2.187c0.124 0.003 0.227 0.085 0.262 0.198l0.001 0.002c0.049 0.083 0.084 0.18 0.099 0.283l0 0.004c0.025 0.125 0.049 0.262 0.062 0.387 0.012 0.137 0.026 0.287 0.026 0.45 0.372-0.433 0.814-0.792 1.311-1.063l0.024-0.012c0.514-0.284 1.126-0.451 1.778-0.451 0.030 0 0.059 0 0.089 0.001l-0.004-0c0.006-0.001 0.013-0.001 0.020-0.001 0.080 0 0.146 0.060 0.155 0.138l0 0.001zM16.95 21.86c-0.004 0.061-0.032 0.114-0.075 0.151l-0 0c-0.033 0.023-0.074 0.036-0.119 0.036-0.003 0-0.005-0-0.008-0h-7.921c-0.137 0-0.2-0.076-0.2-0.225v-12.77c-0.001-0.006-0.001-0.013-0.001-0.020 0-0.080 0.060-0.146 0.138-0.155l0.001-0h2.499c0.006-0.001 0.014-0.002 0.021-0.002 0.059 0 0.108 0.044 0.116 0.101l0 0.001v10.534h5.773c0.126 0 0.164 0.061 0.137 0.175zM25.685 1.379h-19.369c-0.001 0-0.003 0-0.004 0-2.931 0-5.307 2.376-5.307 5.307 0 0.002 0 0.003 0 0.005v-0 18.62c0 0.001 0 0.003 0 0.004 0 2.931 2.376 5.307 5.307 5.307 0.002 0 0.003 0 0.005 0h19.369c0.001 0 0.003 0 0.004 0 2.931 0 5.307-2.376 5.307-5.307 0-0.002 0-0.003 0-0.005v0-18.62c0-0.001 0-0.003 0-0.004 0-2.931-2.376-5.307-5.307-5.307-0.002 0-0.003 0-0.005 0h0z"/></svg>' },
      { name: 'Adobe Creative Cloud', svg: '<svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M10.434 10.388c0.012-0 0.026-0 0.040-0 1.926 0 3.67 0.778 4.936 2.037l-0-0c1.067 1.002 2.046 2.044 3.074 3.087 0.177 0.171 0.287 0.411 0.287 0.677 0 0.131-0.027 0.257-0.076 0.37l0.002-0.006c-0.135 0.357-0.461 0.611-0.850 0.64l-0.003 0c-0.037 0.005-0.079 0.008-0.122 0.008-0.264 0-0.502-0.114-0.667-0.295l-0.001-0.001c-0.98-0.98-1.958-1.946-2.924-2.937-0.739-0.764-1.714-1.295-2.807-1.478l-0.030-0.004c-0.268-0.048-0.576-0.076-0.890-0.076-2.9 0-5.251 2.351-5.251 5.251 0 2.481 1.721 4.561 4.035 5.109l0.036 0.007c0.436 0.087 0.937 0.136 1.450 0.136 0.148 0 0.295-0.004 0.441-0.012l-0.020 0.001c0.011-0.001 0.023-0.001 0.036-0.001 0.145 0 0.275 0.063 0.364 0.163l0 0c0.604 0.591 1.243 1.181 1.871 1.769 0.037 0.038 0.087 0.075 0.125 0.112-0.075 0-0.125 0.012-0.175 0.012h-2.874c-3.465-0.001-6.365-2.419-7.105-5.659l-0.009-0.049c-0.114-0.481-0.180-1.033-0.180-1.601 0-3.225 2.116-5.956 5.035-6.880l0.051-0.014c0.655-0.215 1.409-0.348 2.192-0.367l0.010-0zM19.938 7.060c0.024-0 0.053-0 0.081-0 2.66 0 5.044 1.185 6.651 3.057l0.010 0.012c1.358 1.564 2.185 3.620 2.185 5.869 0 0.417-0.028 0.827-0.083 1.229l0.005-0.047c-0.525 3.753-3.303 6.735-6.904 7.555l-0.060 0.012c-0.586 0.134-1.259 0.211-1.950 0.211-0.441 0-0.874-0.031-1.298-0.092l0.049 0.006c-1.423-0.166-2.700-0.681-3.776-1.458l0.024 0.016c-0.312-0.224-0.586-0.459-0.839-0.715l-0.001-0.001c-1.532-1.506-3.049-3.024-4.581-4.530-0.203-0.178-0.330-0.438-0.330-0.728 0-0.160 0.039-0.312 0.108-0.445l-0.003 0.005c0.166-0.357 0.522-0.600 0.934-0.600 0.051 0 0.101 0.004 0.150 0.011l-0.006-0.001c0.263 0.042 0.489 0.174 0.651 0.363l0.001 0.002c1.381 1.392 2.749 2.760 4.129 4.154 1.004 1.024 2.339 1.720 3.832 1.916l0.033 0.004c0.324 0.056 0.698 0.088 1.079 0.088 2.025 0 3.839-0.902 5.062-2.326l0.007-0.009c0.848-0.951 1.439-2.149 1.652-3.473l0.005-0.039c0.068-0.355 0.107-0.764 0.107-1.182 0-1.580-0.557-3.029-1.485-4.163l0.009 0.012c-1.277-1.637-3.251-2.680-5.468-2.680-1.390 0-2.685 0.410-3.769 1.116l0.027-0.016c-0.027 0.016-0.060 0.025-0.095 0.025-0.025 0-0.048-0.005-0.070-0.013l0.001 0c-0.509-0.381-1.085-0.736-1.691-1.038l-0.066-0.030c-0.010-0.011-0.018-0.023-0.025-0.037l-0-0.001c0.457-0.383 0.972-0.725 1.522-1.007l0.047-0.022c0.954-0.528 2.077-0.879 3.270-0.978l0.030-0.002q0.418-0.032 0.837-0.030zM19.477 4.944c-0.289 0.025-0.590 0.050-0.878 0.087-1.314 0.150-2.511 0.518-3.599 1.070l0.060-0.028c-1.188 0.589-2.203 1.332-3.072 2.219l-0.002 0.002c-0.034 0.040-0.085 0.066-0.141 0.066-0.012 0-0.024-0.001-0.036-0.004l0.001 0c-0.412-0.064-0.888-0.100-1.373-0.100-4.013 0-7.441 2.504-8.807 6.035l-0.022 0.064c-0.313 0.787-0.519 1.697-0.576 2.649l-0.001 0.024c-0.001 0.058-0.010 0.114-0.026 0.167l0.001-0.004v0.966c0.025 0.251 0.063 0.490 0.087 0.741 0.133 1.083 0.443 2.066 0.902 2.961l-0.023-0.050c1.001 2.019 2.651 3.590 4.671 4.468l0.060 0.023c0.897 0.406 1.940 0.672 3.036 0.740l0.025 0.001c0.038 0 0.075 0.005 0.111 0.013l-0.003-0.001h10.717c0.229-0.021 0.452-0.044 0.684-0.075 1.304-0.150 2.492-0.518 3.572-1.070l-0.059 0.027c1.901-0.942 3.448-2.352 4.529-4.082l0.027-0.047c0.717-1.105 1.236-2.407 1.471-3.805l0.008-0.060c0.062-0.425 0.100-0.865 0.151-1.292 0.001-0.058 0.010-0.114 0.026-0.167l-0.001 0.004v-0.992c-0.025-0.287-0.062-0.565-0.062-0.827-0.150-1.305-0.518-2.493-1.070-3.573l0.027 0.059c-0.955-1.899-2.372-3.444-4.107-4.527l-0.047-0.027c-1.098-0.708-2.391-1.223-3.778-1.460l-0.061-0.009c-0.452-0.075-0.891-0.112-1.343-0.162-0.063-0.002-0.123-0.011-0.181-0.026l0.006 0.001z"/></svg>' },
      { name: 'Figma', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.015-4.49-4.491s2.014-4.49 4.49-4.49h4.588v8.981zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z"/></svg>' },
    ],
    videos: [
      { title: 'Brand Launch Video', caption: 'Full brand story for a regional HVAC company, shot on location across three service areas.' },
      { title: 'Service Walkthrough', caption: 'A day-in-the-life style walkthrough showing the team, the craft, and the finished result.' },
      { title: 'Customer Testimonial', caption: 'Real customers talking about real results. No scripts, no actors.' },
      { title: 'Social Cuts Package', caption: 'Short-form edits optimized for Reels, TikTok, and YouTube Shorts from a single shoot day.' },
    ],
  },

  'strategy-consulting': {
    title: 'Strategy Consulting',
    description:
      'A clear plan so you invest in the right things, in the right order.',
    intro: [
      'We start with a structured conversation about your business: revenue goals, current lead sources, what\'s been tried, what your best customers look like, and where you want to be in 12 months. Context shapes strategy.',
      'From there, we audit your full digital footprint: website performance, search visibility, ad account history, social presence, and competitive positioning. We assess your current tools and vendors, identify gaps and quick wins, and map your customer journey from first touch to close.',
      'You get a written 90-day action plan: specific activities, recommended channels, budget splits, success metrics, and who owns what. Clear enough to execute without us, and practical enough that you\'ll want to keep us involved.',
    ],
    deliverables: [
      'Digital presence audit: website, search, social, and ads',
      'Competitor analysis across key digital channels',
      'Customer journey mapping: how prospects find and choose you',
      'Channel prioritisation framework based on your goals and budget',
      'Prioritised 90-day action plan with owner and timeline',
      'Budget recommendation by channel and activity',
      'Vendor and tool review (what to keep, what to cut)',
      'Optional: monthly consulting retainer for ongoing guidance',
    ],
    approach: [
      {
        step: 'Discovery',
        detail:
          'We start with a structured conversation about your business: revenue goals, current lead sources, what has been tried, what your best customers look like, and where you want to be in 12 months. Context shapes strategy.',
      },
      {
        step: 'Audit',
        detail:
          'We assess your current digital footprint: website performance, search visibility, ad account history, social presence, and competitive positioning. We identify the gaps and the quick wins.',
      },
      {
        step: 'Prioritisation',
        detail:
          'Not everything can or should be done at once. We prioritise based on impact, cost, and your current capacity. The highest-leverage activities come first, the ones that will move the needle fastest given your budget and team.',
      },
      {
        step: 'Plan',
        detail:
          'You receive a written 90-day action plan: specific activities, recommended channels, budget splits, success metrics, and who owns what. Clear enough to execute without us, and practical enough that you will want to.',
      },
      {
        step: 'Handoff or Retainer',
        detail:
          'Some clients execute the plan themselves or with their own team. Others want us to stay involved. We offer a monthly consulting retainer for businesses that want ongoing strategic guidance as they grow.',
      },
    ],
    whoFor: [
      'Business owners who know they need to do more digitally but are not sure where to start',
      'Companies that have been spending on marketing without clear results',
      'Businesses preparing for a growth phase and wanting a clear plan before they invest',
      'Teams that want an experienced outside perspective on their current approach',
    ],
    closing: 'This works well for business owners who know they need to do more digitally but aren\'t sure where to start, companies that have been spending on marketing without clear results, or teams preparing for a growth phase who want a clear plan before they invest. If you want an experienced outside perspective, we should talk.',
    relatedSlugs: ['paid-ads', 'seo', 'web-design'],
  },

  'ai-integration': {
    title: 'AI Integration',
    description:
      'Cut through the hype. Find where AI actually saves time and money.',
    intro: [
      'We map your current business processes and identify where AI can genuinely help: repetitive tasks, content production, customer communication, reporting, scheduling. We separate real opportunity from hype.',
      'We recommend the right tools for your specific situation, not the most popular ones. Then we design workflows that fit how your team actually works, configure the tools, build the integrations, create templates and prompts, and connect everything to your existing systems. We handle the technical setup so your team can focus on using it.',
      'After implementation, we train your team with practical, role-specific guidance. AI tools evolve fast, and we stay current so you don\'t have to.',
    ],
    deliverables: [
      'AI opportunity audit: where AI can save time or reduce cost in your operations',
      'Tool evaluation and recommendation (ChatGPT, Claude, Zapier AI, and others)',
      'Custom workflow design for AI-assisted tasks',
      'Implementation and integration with your existing tools',
      'Team training: how to use AI tools effectively day-to-day',
      'Content and communication templates built with AI',
      'Ongoing advisory: staying current as tools evolve',
    ],
    approach: [
      {
        step: 'Opportunity Audit',
        detail:
          'We map your current business processes and identify where AI can genuinely help: repetitive tasks, content production, customer communication, reporting, and scheduling. We separate real opportunity from AI hype.',
      },
      {
        step: 'Tool Selection',
        detail:
          'We recommend the right tools for your specific situation, not the most popular ones, but the most useful ones for your business and team. We evaluate cost, learning curve, integration capability, and actual ROI.',
      },
      {
        step: 'Workflow Design',
        detail:
          'We design AI-assisted workflows that fit how your team actually works. Adoption matters as much as capability. The best AI tool is the one people actually use.',
      },
      {
        step: 'Implementation',
        detail:
          'We configure the tools, build the integrations, create templates and prompts, and connect everything to your existing systems. We handle the technical setup so your team can focus on using it.',
      },
      {
        step: 'Train & Iterate',
        detail:
          'We train your team on the new workflows with practical, role-specific guidance. After 30 days, we review what is working and refine. AI tools evolve fast, and we stay current so you do not have to.',
      },
    ],
    whoFor: [
      'Service businesses spending too much time on repetitive admin and communication tasks',
      'Business owners curious about AI but unsure what is actually useful vs. overhyped',
      'Companies that want to move faster without hiring more people',
      'Teams looking to improve their marketing content output without proportional cost increases',
    ],
    closing: 'This is a good fit for service businesses spending too much time on repetitive admin, business owners curious about AI but unsure what\'s actually useful, or teams looking to move faster without hiring more people. If you want to cut through the noise and find what actually works, we should talk.',
    relatedSlugs: ['strategy-consulting', 'content-creation', 'paid-ads'],
  },
};

// ============================================================
// CASE STUDIES
// ============================================================
export const caseStudySamples: Record<string, CaseStudySample> = {
  'hvac-market-leader': {
    title: 'From local HVAC company to regional market leader.',
    client: 'Confidential, Family-Owned HVAC Company',
    industry: 'HVAC',
    excerpt:
      'A family-owned HVAC business stuck on word-of-mouth and slow seasons. We built their digital foundation (web, paid search, SEO, and content) and grew with them for five years.',
    results: '8x blended ROAS · 4x revenue growth',
    duration: '5-year partnership',
    services: ['Web Design & Development', 'Paid Ads', 'SEO', 'Content Creation'],
    challenge:
      'The business had been running for over a decade on referrals and seasonal door hangers. Revenue was flat and highly seasonal. Summer AC calls and winter heating emergencies were feast-or-famine. They had no website, no Google presence, and no way for a homeowner searching online to find them. A younger competitor was eating their market with a basic website and Google Ads. The owners knew they needed to go digital but had no idea where to start.',
    approach: [
      {
        heading: 'Website & Digital Foundation',
        body: 'We started with a conversion-focused website built around the services and service areas that mattered most. Clear calls to action, fast load times, and a site structure designed for local SEO. We set up Google Analytics, call tracking, and conversion events from day one so we could measure everything from the start.',
      },
      {
        heading: 'Local SEO & Google Business Profile',
        body: 'We optimised their Google Business Profile, built out service area pages for every city and suburb they served, and implemented local schema markup. Within 90 days they were appearing in the local 3-pack for core HVAC terms. Organic calls started coming in before a single paid ad ran.',
      },
      {
        heading: 'Paid Search Launch',
        body: 'We launched Google Search campaigns targeting high-intent HVAC terms (emergency AC repair, furnace replacement, HVAC installation) with campaigns structured by service type and geography. Budgets were set conservatively in Year 1 and scaled as conversion data matured. Call tracking tied every lead back to a specific keyword and campaign.',
      },
      {
        heading: 'Content & Authority Building',
        body: 'We produced a regular cadence of service and seasonal content, including maintenance guides, comparison posts, and local area pages, that compounded over time. By Year 3, organic search was driving 40% of all inbound leads at zero marginal cost per lead.',
      },
    ],
    outcomes: [
      { value: '8×', label: 'Blended ROAS across all channels' },
      { value: '4×', label: 'Revenue growth over 5 years' },
      { value: '40%', label: 'Leads from organic by Year 3' },
      { value: '5 yrs', label: 'Partnership duration' },
    ],
    testimonial: {
      quote:
        "Railshop built us from nothing online to the point where we're turning away work in the summer. The website, the ads, the Google presence, they built all of it and it just keeps compounding. Best investment we've ever made in the business.",
      author: 'Owner',
      role: 'Family-Owned HVAC Company',
    },
  },

  'landscaping-digital-presence': {
    title: 'From zero digital presence to fully booked seasons.',
    client: 'Confidential, Regional Landscaping Company',
    industry: 'Landscaping',
    excerpt:
      'A regional landscaping company with no website and no online visibility. We built their site, launched local SEO, and ran targeted paid search during peak seasons.',
    results: '3.2× ROAS · First page rankings in 90 days',
    duration: '2-year engagement',
    services: ['Web Design & Development', 'SEO', 'Paid Ads'],
    challenge:
      'The company had built a strong reputation through word-of-mouth over eight years but had never invested in digital. They had no website, no Google Business Profile, and were not showing up for any local search terms. A slow spring booking period prompted the owner to look at what competitors were doing online, and the gap was significant. They needed to build their entire digital presence from scratch, quickly, before the peak season.',
    approach: [
      {
        heading: 'Website in 4 Weeks',
        body: 'We prioritised speed without sacrificing quality. The site launched in four weeks with service pages for each offering (lawn care, landscaping design, hardscape, seasonal clean-up) and location pages for their primary service areas. Contact forms and click-to-call prominent on every page.',
      },
      {
        heading: 'Google Business Profile & Local SEO',
        body: 'We built out the Google Business Profile with photos, services, and regular posts. Within 60 days it was generating calls directly from the profile. We built location-specific landing pages and optimised for the "near me" and "[service] + [city]" terms that drive actual booking intent.',
      },
      {
        heading: 'Seasonal Paid Search',
        body: 'We ran Google Search campaigns during the high-intent spring booking window, late February through May, targeting lawn care and landscaping terms across the service area. Campaigns paused in winter and ramped up again in spring, keeping the budget efficient and the calendar full.',
      },
    ],
    outcomes: [
      { value: '3.2×', label: 'ROAS on paid search' },
      { value: 'Page 1', label: 'Google rankings within 90 days' },
      { value: 'Fully booked', label: 'First spring season post-launch' },
      { value: '2 yrs', label: 'Ongoing engagement' },
    ],
    testimonial: {
      quote:
        "We went from no web presence at all to fully booked by April. The website looks great, we're showing up on Google, and the ads actually bring in real customers, not junk leads. Couldn't be happier.",
      author: 'Owner',
      role: 'Regional Landscaping Company',
    },
  },

  'excavation-digital-foundation': {
    title: 'Building a digital foundation for a growing excavation company.',
    client: 'Confidential, Excavation Contractor',
    industry: 'Excavation',
    excerpt:
      'An excavation contractor relying entirely on referrals with no digital presence. We built their brand online with a site, local SEO, and Google Ads, opening up a new inbound lead channel.',
    results: 'New inbound channel · 68% lower CPL vs. industry avg',
    duration: '18-month engagement',
    services: ['Web Design & Development', 'SEO', 'Paid Ads', 'Strategy Consulting'],
    challenge:
      'The contractor had a strong reputation locally but zero online presence. No website, not listed on Google, nothing. All work came through word-of-mouth and relationships with general contractors. The owner wanted to diversify lead sources and reduce dependence on any single referral network. The challenge was that excavation is a low-volume, high-value category where quality mattered more than volume, and the website and ads needed to filter for the right types of projects.',
    approach: [
      {
        heading: 'Brand & Website',
        body: 'We started with the brand, a professional identity that matched the scale and quality of the work. The website featured project photography, a clear service breakdown (site prep, utility trenching, land clearing, demolition), and a contact form that asked qualifying questions to filter out low-value enquiries from the start.',
      },
      {
        heading: 'Google Ads for High-Intent Search',
        body: 'Excavation search volume is low but intent is high. Someone searching for an excavation contractor usually has a project ready to go. We built tightly structured campaigns around specific service terms and ran them within a defined geographic radius. Cost-per-lead came in 68% below the industry benchmark within three months.',
      },
      {
        heading: 'Local SEO for Contractor Searches',
        body: 'We optimised for the searches that general contractors and property developers use, like "excavation contractor near me," "site preparation contractor," and similar. Reviews from existing clients were collected systematically and the Google Business Profile was built out with project photos and service descriptions.',
      },
    ],
    outcomes: [
      { value: '−68%', label: 'CPL vs. industry average' },
      { value: 'New', label: 'Inbound lead channel established' },
      { value: '4.1×', label: 'ROAS on Google Ads' },
      { value: '18mo', label: 'Engagement duration' },
    ],
    testimonial: {
      quote:
        "We had never gotten a lead from the internet in 12 years of business. Now we get inbound enquiries every week from people we've never met. The quality is good too. They're real projects, not tire-kickers.",
      author: 'Owner',
      role: 'Excavation Contractor',
    },
  },

  'home-security-digital-acquisition': {
    title: 'Scaling a home security brand beyond door-to-door.',
    client: 'Confidential, Regional Home Security Company',
    industry: 'Home Security',
    excerpt:
      'A regional home security company over-reliant on door-to-door sales. We built their digital acquisition engine, including paid search, local SEO, and a converting website, to create a scalable inbound channel.',
    results: '2.8× lead volume · 47% lower CPL',
    duration: '2-year engagement',
    services: ['Web Design & Development', 'Paid Ads', 'SEO'],
    challenge:
      'The company had grown to a reasonable size through door-to-door sales, an expensive, inconsistent, and increasingly difficult channel. Customer acquisition cost was high, sales rep turnover was a constant problem, and the business had no digital presence to fall back on. Leadership wanted to build a scalable inbound channel that could eventually reduce dependence on door-to-door entirely. The challenge was competing against national security brands with far larger ad budgets.',
    approach: [
      {
        heading: 'Conversion-Focused Website',
        body: 'The existing website was a brochure with no clear calls to action and no conversion tracking. We rebuilt it around the customer journey: what a homeowner thinking about security wants to know, what objections they have, and what it takes to get them to request a quote. Trust signals, clear pricing tiers, and prominent calls-to-action at every scroll depth.',
      },
      {
        heading: 'Google Search: Local Intent Targeting',
        body: 'We targeted the high-intent local search terms that national brands often under-invest in, like "[city] home security," "home alarm installation near me," and specific product and service terms. Being locally relevant gave us a quality score and relevance advantage over national competitors. CPL came in 47% below the industry average within the first 90 days.',
      },
      {
        heading: 'SEO & Review Strategy',
        body: 'Local SEO and a systematic review collection process gave the business a strong organic presence alongside paid. Reviews from existing customers built the social proof that converts curious searchers into booked appointments. Within 12 months, organic was contributing 35% of all digital leads.',
      },
    ],
    outcomes: [
      { value: '2.8×', label: 'Lead volume increase' },
      { value: '−47%', label: 'CPL vs. industry average' },
      { value: '35%', label: 'Leads from organic by Month 12' },
      { value: '2 yrs', label: 'Ongoing engagement' },
    ],
    testimonial: {
      quote:
        "Door-to-door will always be part of our business but now it's not the only thing. Digital brings in leads every day without us chasing them. The website, the ads, and the Google presence Railshop built have genuinely changed how we grow.",
      author: 'Director of Sales',
      role: 'Regional Home Security Company',
    },
  },
};
