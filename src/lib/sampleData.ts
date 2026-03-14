// ============================================================
// SAMPLE DATA — used as fallback when Sanity is not connected.
// Replace with real Sanity content once the CMS is live.
// ============================================================

export interface ServiceSample {
  title: string;
  description: string;
  deliverables: string[];
  approach: { step: string; detail: string }[];
  whoFor: string[];
  relatedSlugs: string[];
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
      'Fast, conversion-focused websites built for service businesses. We design and build sites that look the part, load fast, and turn visitors into leads.',
    deliverables: [
      'Discovery session: goals, audience, and competitive review',
      'Sitemap and wireframe planning',
      'Custom design — desktop and mobile',
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
          'We design for conversion first and aesthetics second — though we take both seriously. Every layout decision has a reason. We design desktop and mobile simultaneously, not as an afterthought.',
      },
      {
        step: 'Build',
        detail:
          'We build on fast, maintainable technology. Pages load quickly, the CMS is easy to use, and the codebase is clean. We do not use bloated page builders that slow your site and create long-term technical debt.',
      },
      {
        step: 'Integrate',
        detail:
          'Forms connect to your CRM. Calls are tracked. GA4 is configured with the right events. If you run ads, conversion tracking is set up before launch — not after.',
      },
      {
        step: 'Launch & Optimise',
        detail:
          'We handle the launch and monitor performance in the first weeks. After 30 and 90 days, we review conversion data and make refinements based on real user behaviour — not assumptions.',
      },
    ],
    whoFor: [
      'Service businesses with an outdated site that is losing them leads',
      'New businesses that need a professional web presence from day one',
      'Companies running paid ads to a site that is not converting',
      'Businesses that want a site that can grow with them — not one they will outgrow in a year',
    ],
    relatedSlugs: ['paid-ads', 'seo', 'content-creation'],
  },

  'paid-ads': {
    title: 'Paid Ads',
    description:
      'Google, Meta, and beyond — campaigns built to drive leads, not just clicks. We manage paid advertising end-to-end for service businesses that need a reliable lead pipeline.',
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
          'If you are already running ads, we start with a full review — structure, targeting, wasted spend, and conversion tracking accuracy. Most accounts we inherit have significant recoverable efficiency. If you are starting fresh, we do competitive research before we spend a dollar.',
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
          'Weekly bid and budget reviews. Monthly creative refreshes. Ongoing negative keyword management. We do not set campaigns and forget them — we treat your ad spend like it is our own.',
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
    relatedSlugs: ['seo', 'web-design', 'strategy'],
  },

  'seo': {
    title: 'SEO',
    description:
      'Sustainable organic growth through technical SEO and content that ranks. We build search visibility that compounds over time and drives leads without paying for every click.',
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
          'We run a full technical audit first — crawl errors, indexation issues, page speed, mobile usability, and schema markup. Technical problems get fixed before content work begins. Building on a broken foundation is wasted effort.',
      },
      {
        step: 'Keyword Research',
        detail:
          'We identify the searches your ideal customers are making — by service type, location, and intent. We look at search volume, competition, and what you can realistically rank for in your timeframe. Then we prioritise.',
      },
      {
        step: 'On-Page Optimisation',
        detail:
          'Every key service page and location page gets optimised: title tags, meta descriptions, headers, content structure, internal linking, and schema. These are the fundamentals that most local sites get wrong.',
      },
      {
        step: 'Content',
        detail:
          'We build content that answers real customer questions and targets real search terms — not generic filler. For local service businesses, this means service pages, location pages, and FAQ content that drives qualified traffic.',
      },
      {
        step: 'Track & Iterate',
        detail:
          'We track rankings, traffic, and leads from organic search. Monthly reporting shows progress, and we adjust priorities based on what is gaining traction. SEO is a long game — we set realistic expectations and show consistent progress.',
      },
    ],
    whoFor: [
      'Service businesses that want leads without paying for every click',
      'Local businesses that are not showing up in Google Maps or local search results',
      'Companies that have a website but get no organic traffic from it',
      'Businesses playing a long game and wanting compounding visibility over time',
    ],
    relatedSlugs: ['web-design', 'content-creation', 'paid-ads'],
  },

  'content-creation': {
    title: 'Content Creation',
    description:
      'Video and photo content that builds authority and keeps your brand visible between campaigns. We create content that works hard across your website, ads, and social channels.',
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
          'We start with what you need the content to do — build trust, generate leads, support ads, rank on YouTube. Different goals require different formats. We plan before we produce.',
      },
      {
        step: 'Production Planning',
        detail:
          'We handle pre-production: shot lists, interview questions, location scouting, scheduling. Shoot days are efficient because they are planned well. We maximise output from every session.',
      },
      {
        step: 'Production',
        detail:
          'Professional video and photography on location at your business. We capture what makes your work good — the craft, the team, the results. Content that is authentic, not staged.',
      },
      {
        step: 'Post-Production',
        detail:
          'Editing, colour grading, captions, and format exports for every platform. One shoot becomes many pieces of content — a hero video, short-form cuts, social clips, and stills.',
      },
      {
        step: 'Distribution',
        detail:
          'Content is planned for distribution, not just creation. We advise on where to post, when, and how — and how it connects to your paid ads and SEO strategy for maximum reach.',
      },
    ],
    whoFor: [
      'Service businesses with no good photos or video of their actual work',
      'Companies running ads and needing fresh creative on a regular basis',
      'Businesses that want to build a recognisable brand presence on social',
      'Service companies whose work is visual — landscaping, roofing, construction, HVAC',
    ],
    relatedSlugs: ['paid-ads', 'seo', 'strategy'],
  },

  'strategy': {
    title: 'Strategy Consulting',
    description:
      'Not sure where to start? We will assess what your business needs and build a clear, prioritised digital growth plan — so you invest in the right things, in the right order.',
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
          'We start with a structured conversation about your business — revenue goals, current lead sources, what has been tried, what your best customers look like, and where you want to be in 12 months. Context shapes strategy.',
      },
      {
        step: 'Audit',
        detail:
          'We assess your current digital footprint: website performance, search visibility, ad account history, social presence, and competitive positioning. We identify the gaps and the quick wins.',
      },
      {
        step: 'Prioritisation',
        detail:
          'Not everything can or should be done at once. We prioritise based on impact, cost, and your current capacity. The highest-leverage activities come first — the ones that will move the needle fastest given your budget and team.',
      },
      {
        step: 'Plan',
        detail:
          'You receive a written 90-day action plan: specific activities, recommended channels, budget splits, success metrics, and who owns what. Clear enough to execute without us — practical enough that you will want to.',
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
    relatedSlugs: ['paid-ads', 'seo', 'web-design'],
  },

  'ai-integration': {
    title: 'AI Integration',
    description:
      'Practical AI implementation that saves time, reduces cost, and gives your business a real edge. We cut through the hype and identify where AI actually creates value for service businesses.',
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
          'We map your current business processes and identify where AI can genuinely help — repetitive tasks, content production, customer communication, reporting, and scheduling. We separate real opportunity from AI hype.',
      },
      {
        step: 'Tool Selection',
        detail:
          'We recommend the right tools for your specific situation — not the most popular ones, the most useful ones for your business and team. We evaluate cost, learning curve, integration capability, and actual ROI.',
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
          'We train your team on the new workflows with practical, role-specific guidance. After 30 days, we review what is working and refine. AI tools evolve fast — we stay current so you do not have to.',
      },
    ],
    whoFor: [
      'Service businesses spending too much time on repetitive admin and communication tasks',
      'Business owners curious about AI but unsure what is actually useful vs. overhyped',
      'Companies that want to move faster without hiring more people',
      'Teams looking to improve their marketing content output without proportional cost increases',
    ],
    relatedSlugs: ['strategy', 'content-creation', 'paid-ads'],
  },
};

// ============================================================
// CASE STUDIES
// ============================================================
export const caseStudySamples: Record<string, CaseStudySample> = {
  'hvac-market-leader': {
    title: 'From local HVAC company to regional market leader.',
    client: 'Confidential — Family-Owned HVAC Company',
    industry: 'HVAC',
    excerpt:
      'A family-owned HVAC business stuck on word-of-mouth and slow seasons. We built their digital foundation — web, paid search, SEO, and content — and grew with them for five years.',
    results: '8x blended ROAS · 4x revenue growth',
    duration: '5-year partnership',
    services: ['Web Design & Development', 'Paid Ads', 'SEO', 'Content Creation'],
    challenge:
      'The business had been running for over a decade on referrals and seasonal door hangers. Revenue was flat and highly seasonal — summer AC calls and winter heating emergencies were feast-or-famine. They had no website, no Google presence, and no way for a homeowner searching online to find them. A younger competitor was eating their market with a basic website and Google Ads. The owners knew they needed to go digital but had no idea where to start.',
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
        body: 'We launched Google Search campaigns targeting high-intent HVAC terms — emergency AC repair, furnace replacement, HVAC installation — with campaigns structured by service type and geography. Budgets were set conservatively in Year 1 and scaled as conversion data matured. Call tracking tied every lead back to a specific keyword and campaign.',
      },
      {
        heading: 'Content & Authority Building',
        body: 'We produced a regular cadence of service and seasonal content — maintenance guides, comparison posts, and local area pages — that compounded over time. By Year 3, organic search was driving 40% of all inbound leads at zero marginal cost per lead.',
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
        "Railshop built us from nothing online to the point where we're turning away work in the summer. The website, the ads, the Google presence — they built all of it and it just keeps compounding. Best investment we've ever made in the business.",
      author: 'Owner',
      role: 'Family-Owned HVAC Company',
    },
  },

  'landscaping-digital-presence': {
    title: 'From zero digital presence to fully booked seasons.',
    client: 'Confidential — Regional Landscaping Company',
    industry: 'Landscaping',
    excerpt:
      'A regional landscaping company with no website and no online visibility. We built their site, launched local SEO, and ran targeted paid search during peak seasons.',
    results: '3.2× ROAS · First page rankings in 90 days',
    duration: '2-year engagement',
    services: ['Web Design & Development', 'SEO', 'Paid Ads'],
    challenge:
      'The company had built a strong reputation through word-of-mouth over eight years but had never invested in digital. They had no website, no Google Business Profile, and were not showing up for any local search terms. A slow spring booking period prompted the owner to look at what competitors were doing online — and the gap was significant. They needed to build their entire digital presence from scratch, quickly, before the peak season.',
    approach: [
      {
        heading: 'Website in 4 Weeks',
        body: 'We prioritised speed without sacrificing quality. The site launched in four weeks with service pages for each offering — lawn care, landscaping design, hardscape, seasonal clean-up — and location pages for their primary service areas. Contact forms and click-to-call prominent on every page.',
      },
      {
        heading: 'Google Business Profile & Local SEO',
        body: 'We built out the Google Business Profile with photos, services, and regular posts. Within 60 days it was generating calls directly from the profile. We built location-specific landing pages and optimised for the "near me" and "[service] + [city]" terms that drive actual booking intent.',
      },
      {
        heading: 'Seasonal Paid Search',
        body: 'We ran Google Search campaigns during the high-intent spring booking window — late February through May — targeting lawn care and landscaping terms across the service area. Campaigns paused in winter and ramped up again in spring, keeping the budget efficient and the calendar full.',
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
        "We went from no web presence at all to fully booked by April. The website looks great, we're showing up on Google, and the ads actually bring in real customers — not junk leads. Couldn't be happier.",
      author: 'Owner',
      role: 'Regional Landscaping Company',
    },
  },

  'excavation-digital-foundation': {
    title: 'Building a digital foundation for a growing excavation company.',
    client: 'Confidential — Excavation Contractor',
    industry: 'Excavation',
    excerpt:
      'An excavation contractor relying entirely on referrals with no digital presence. We built their brand online — site, local SEO, and Google Ads — opening up a new inbound lead channel.',
    results: 'New inbound channel · 68% lower CPL vs. industry avg',
    duration: '18-month engagement',
    services: ['Web Design & Development', 'SEO', 'Paid Ads', 'Strategy Consulting'],
    challenge:
      'The contractor had a strong reputation locally but zero online presence — no website, not listed on Google, nothing. All work came through word-of-mouth and relationships with general contractors. The owner wanted to diversify lead sources and reduce dependence on any single referral network. The challenge was that excavation is a low-volume, high-value category — quality mattered more than volume, and the website and ads needed to filter for the right types of projects.',
    approach: [
      {
        heading: 'Brand & Website',
        body: 'We started with the brand — a professional identity that matched the scale and quality of the work. The website featured project photography, a clear service breakdown (site prep, utility trenching, land clearing, demolition), and a contact form that asked qualifying questions to filter out low-value enquiries from the start.',
      },
      {
        heading: 'Google Ads for High-Intent Search',
        body: 'Excavation search volume is low but intent is high — someone searching for an excavation contractor usually has a project ready to go. We built tightly structured campaigns around specific service terms and ran them within a defined geographic radius. Cost-per-lead came in 68% below the industry benchmark within three months.',
      },
      {
        heading: 'Local SEO for Contractor Searches',
        body: 'We optimised for the searches that general contractors and property developers use — "excavation contractor near me," "site preparation contractor," and similar. Reviews from existing clients were collected systematically and the Google Business Profile was built out with project photos and service descriptions.',
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
        "We had never gotten a lead from the internet in 12 years of business. Now we get inbound enquiries every week from people we've never met. The quality is good too — they're real projects, not tire-kickers.",
      author: 'Owner',
      role: 'Excavation Contractor',
    },
  },

  'home-security-digital-acquisition': {
    title: 'Scaling a home security brand beyond door-to-door.',
    client: 'Confidential — Regional Home Security Company',
    industry: 'Home Security',
    excerpt:
      'A regional home security company over-reliant on door-to-door sales. We built their digital acquisition engine — paid search, local SEO, and a converting website — to create a scalable inbound channel.',
    results: '2.8× lead volume · 47% lower CPL',
    duration: '2-year engagement',
    services: ['Web Design & Development', 'Paid Ads', 'SEO'],
    challenge:
      'The company had grown to a reasonable size through door-to-door sales — an expensive, inconsistent, and increasingly difficult channel. Customer acquisition cost was high, sales rep turnover was a constant problem, and the business had no digital presence to fall back on. Leadership wanted to build a scalable inbound channel that could eventually reduce dependence on door-to-door entirely. The challenge was competing against national security brands with far larger ad budgets.',
    approach: [
      {
        heading: 'Conversion-Focused Website',
        body: 'The existing website was a brochure with no clear calls to action and no conversion tracking. We rebuilt it around the customer journey — what a homeowner thinking about security wants to know, what objections they have, and what it takes to get them to request a quote. Trust signals, clear pricing tiers, and prominent calls-to-action at every scroll depth.',
      },
      {
        heading: 'Google Search — Local Intent Targeting',
        body: 'We targeted the high-intent local search terms that national brands often under-invest in — "[city] home security," "home alarm installation near me," and specific product and service terms. Being locally relevant gave us a quality score and relevance advantage over national competitors. CPL came in 47% below the industry average within the first 90 days.',
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
