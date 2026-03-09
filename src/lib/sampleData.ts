// ============================================================
// SAMPLE DATA — used as fallback when Sanity is not connected.
// Replace with real Sanity content once the CMS is live.
// ============================================================

export interface ServiceSample {
  title: string;
  icon: string;
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
  'paid-search': {
    title: 'Paid Search',
    icon: '🔍',
    description:
      'Google & Microsoft Ads strategy, account architecture, and ongoing optimisation built for brands that want to scale spend without sacrificing efficiency.',
    deliverables: [
      'Full account audit and competitive landscape analysis',
      'Keyword strategy and intent-based segmentation',
      'Campaign architecture and ad group structure',
      'Margin-aware bidding strategy and Smart Bidding setup',
      'Ad copy testing framework with rotation rules',
      'Search term analysis and negative keyword management',
      'Quality Score and landing page alignment review',
      'Shopping / Performance Max setup and feed management',
      'Monthly reporting with exec summary and next-30-day plan',
    ],
    approach: [
      {
        step: 'Audit',
        detail:
          'We start with a forensic review of your existing account — structure, bidding, match types, wasted spend, and conversion tracking accuracy. Most accounts we inherit have 20–35% recoverable waste.',
      },
      {
        step: 'Strategy',
        detail:
          'We map your keyword universe to buyer intent and margin tiers. High-intent, high-margin terms get the most aggressive bids. Brand terms are protected. Generic terms are tested before scaling.',
      },
      {
        step: 'Build',
        detail:
          'Campaigns are restructured around intent — not just categories. Ad groups stay tight so Quality Scores stay high and auction prices stay low. Ad copy ladders to landing page messaging.',
      },
      {
        step: 'Optimise',
        detail:
          'Weekly bid reviews, search term sweeps, and ad copy rotation keep performance compounding. We flag anomalies fast and run experiments on a rolling 2-week cycle.',
      },
      {
        step: 'Scale',
        detail:
          'Once efficiency targets are stable, we expand — new keywords, new match types, new markets. Scale is earned, not assumed.',
      },
    ],
    whoFor: [
      'E-commerce brands spending $15K–$500K/mo on Google',
      'B2B SaaS and services companies generating pipeline via search',
      'Local and multi-location businesses running Performance Max',
      'Brands that inherited a poorly structured account and need a reset',
    ],
    relatedSlugs: ['paid-social', 'analytics', 'full-funnel'],
  },

  'paid-social': {
    title: 'Paid Social',
    icon: '📱',
    description:
      'Meta, LinkedIn, and TikTok campaigns that connect brand to conversion. Audience strategy, creative testing, and funnel-aware media planning built around your actual business model.',
    deliverables: [
      'Audience strategy and persona mapping',
      'Campaign and ad set architecture by funnel stage',
      'Creative brief templates and testing framework',
      'Pixel and Conversions API (CAPI) implementation review',
      'Retargeting sequence design (view, visit, cart, customer)',
      'A/B testing plan with statistical significance thresholds',
      'Creative performance scoring and iteration cadence',
      'LinkedIn ABM setup for enterprise pipeline (where applicable)',
      'Monthly creative and performance reporting',
    ],
    approach: [
      {
        step: 'Audience Mapping',
        detail:
          'We define your core buyer personas and map them to platform-specific targeting options — interests, lookalikes, custom audiences, and ABM lists. Audiences are segmented by funnel stage, not just demographics.',
      },
      {
        step: 'Creative Strategy',
        detail:
          'We build a creative testing matrix — hooks, formats, and offers — and brief your creative team (or ours) against it. Every asset has a hypothesis. Every test has a success metric.',
      },
      {
        step: 'Launch',
        detail:
          'Campaigns go live with controlled spend, clear naming conventions, and UTM tracking in place. We monitor the first 72 hours closely and adjust before significant budget is committed.',
      },
      {
        step: 'Test & Learn',
        detail:
          'Winning creative is scaled. Losing creative is cut fast. We maintain a live creative scorecard and rotate new concepts in on a weekly or bi-weekly cadence to avoid fatigue.',
      },
      {
        step: 'Scale',
        detail:
          'Once CPAs are stable and creative pipelines are flowing, we scale horizontally (new audiences) and vertically (higher budgets). We know how to avoid the efficiency cliff most brands hit at 3× their starting spend.',
      },
    ],
    whoFor: [
      'DTC and e-commerce brands scaling on Meta',
      'B2B SaaS companies using LinkedIn for pipeline generation',
      'Consumer brands looking to build awareness and conversion on TikTok',
      'Brands with great products but underperforming ad creative',
    ],
    relatedSlugs: ['paid-search', 'creative-strategy', 'analytics'],
  },

  'programmatic': {
    title: 'Programmatic Display',
    icon: '📺',
    description:
      'Full-funnel display and video across premium inventory. Prospecting, retargeting, and sequential messaging with proper brand safety controls and attribution you can trust.',
    deliverables: [
      'DSP onboarding and campaign setup (DV360 or The Trade Desk)',
      'Audience segmentation: contextual, behavioural, and 1st-party',
      'Private marketplace (PMP) deal curation for brand-safe inventory',
      'Creative specs and asset QA across formats and sizes',
      'Sequential messaging strategy (awareness → consideration → intent)',
      'Frequency cap management and deduplication across channels',
      'Brand safety and viewability controls and reporting',
      'Attribution modelling: view-through, click-through, and data-driven',
      'Monthly media and performance reporting',
    ],
    approach: [
      {
        step: 'Inventory Strategy',
        detail:
          'We identify the right DSP and inventory mix for your audience — open exchange, PMPs, or guaranteed deals. Not all impressions are equal. We buy where your buyers actually are.',
      },
      {
        step: 'Audience Build',
        detail:
          'First-party data goes in first — CRM lists, site visitors, converters. We build lookalikes from your best customers and layer contextual targeting to catch in-market signals.',
      },
      {
        step: 'Creative Sequencing',
        detail:
          'Display works best when it tells a story. We map ad sequences to funnel stages — broad brand messages at the top, specific offers lower down — and manage frequency to avoid fatigue.',
      },
      {
        step: 'Brand Safety',
        detail:
          'We apply category exclusions, keyword blocklists, and viewability minimums before launch. Your ads will not appear next to content that harms your brand.',
      },
      {
        step: 'Attribution',
        detail:
          'View-through attribution is a trap. We set realistic windows and cross-reference programmatic performance against other channel signals to separate signal from noise.',
      },
    ],
    whoFor: [
      'Mid-market and enterprise brands supplementing search and social',
      'B2B companies running account-based advertising at scale',
      'Brands with strong creative assets and awareness goals',
      'Retargeting-heavy programs needing non-Meta inventory',
    ],
    relatedSlugs: ['paid-search', 'paid-social', 'analytics'],
  },

  'analytics': {
    title: 'Analytics & Tracking',
    icon: '📊',
    description:
      'GA4 implementation, GTM governance, custom event tracking, and dashboards that make the right decision obvious. We fix the data foundation so every dollar of spend is measurable.',
    deliverables: [
      'GA4 audit and gap analysis against current setup',
      'GTM container audit, cleanup, and documentation',
      'Custom event taxonomy design aligned to your funnel',
      'Conversion event setup (key actions, not just thank-you pages)',
      'Enhanced e-commerce or lead gen tracking implementation',
      'Cross-channel UTM framework and naming conventions',
      'Looker Studio dashboard: channel, campaign, and funnel views',
      'Server-side tagging setup for improved data accuracy (where needed)',
      'Offline conversion import (for brick-and-mortar or CRM-heavy businesses)',
    ],
    approach: [
      {
        step: 'Audit',
        detail:
          'We review your current GA4 property, GTM container, and all connected ad platforms. We document what is tracking, what is broken, and what is creating misleading data.',
      },
      {
        step: 'Event Taxonomy',
        detail:
          'We design an event schema that maps to your actual business funnel — not the default GA4 events, not arbitrary clicks. Every event has a name, a trigger, and a business question it answers.',
      },
      {
        step: 'Implementation',
        detail:
          'We build in GTM, test in preview mode, validate in DebugView, and cross-reference against platform-native reporting before calling it done. QA is not optional.',
      },
      {
        step: 'Attribution Setup',
        detail:
          'We configure data-driven attribution in GA4 and align conversion windows across Google Ads, Meta, and any other connected platforms so you are comparing apples to apples.',
      },
      {
        step: 'Reporting',
        detail:
          'We build a Looker Studio dashboard that gives your team a single source of truth — spend, conversions, CPAs, and trend lines by channel — without needing to log into five different platforms.',
      },
    ],
    whoFor: [
      'Brands that suspect their conversion tracking is inaccurate',
      'E-commerce businesses that migrated from UA to GA4 and lost confidence in their data',
      'Multi-location retailers wanting to connect ad spend to in-store revenue',
      'Teams spending significant budget across channels but lacking a unified view',
    ],
    relatedSlugs: ['paid-search', 'paid-social', 'full-funnel'],
  },

  'creative-strategy': {
    title: 'Creative Strategy',
    icon: '🎨',
    description:
      'Ad creative testing frameworks that surface winning concepts faster, reduce wasted creative budget, and give your team a repeatable process for staying ahead of fatigue.',
    deliverables: [
      'Existing creative audit: what has worked, why, and for how long',
      'Creative testing matrix: hooks, formats, offers, and audiences',
      'Brief templates aligned to testing hypotheses',
      'Creative scoring model (hook rate, hold rate, CTR, CVR, efficiency)',
      'Fatigue detection thresholds by platform and audience size',
      'Iteration playbook: when to evolve vs. when to cut',
      'Monthly creative performance review with learnings document',
      'Competitor creative analysis (where relevant)',
    ],
    approach: [
      {
        step: 'Creative Audit',
        detail:
          'We pull historical performance data and score every past creative against hook rate, hold rate, and conversion rate. Patterns emerge fast — usually two or three formats and angles account for 80% of results.',
      },
      {
        step: 'Testing Matrix',
        detail:
          'We build a matrix of variables to test: hooks (first 3 seconds), offer frames, social proof formats, and visual styles. Each cell in the matrix is a testable hypothesis, not a creative whim.',
      },
      {
        step: 'Brief Writing',
        detail:
          'We write production-ready briefs that give your creative team or UGC partners exactly what they need — concept, hook, script, call to action, and the metric that defines success.',
      },
      {
        step: 'In-Platform Testing',
        detail:
          'We structure campaigns to give each concept a fair budget allocation, a minimum impression threshold before judgement, and a clear kill or scale decision rule.',
      },
      {
        step: 'Iteration',
        detail:
          'Winners get iterated — new hooks on proven concepts, new formats for proven angles. Losers are documented and learned from. The creative library compounds over time.',
      },
    ],
    whoFor: [
      'Brands running paid social who feel like they are always chasing creative fatigue',
      'Teams with a creative resource but no structured testing process',
      'Founders and CMOs who want data to drive creative decisions, not gut feel',
      'E-commerce brands spending heavily on UGC and wanting to maximise ROI on it',
    ],
    relatedSlugs: ['paid-social', 'full-funnel'],
  },

  'full-funnel': {
    title: 'Full-Funnel Strategy',
    icon: '🗺️',
    description:
      'A coherent paid media strategy that connects awareness to conversion across every channel. For brands ready to stop running isolated tactics and start building a growth system.',
    deliverables: [
      'Full-funnel audit: paid, owned, and earned channel mapping',
      'Customer journey mapping with channel touchpoints',
      'Budget allocation model by funnel stage and channel',
      'Attribution model recommendation and setup',
      'Unified UTM and reporting framework across all channels',
      'Cross-channel audience strategy (prospecting, retargeting, retention)',
      'Channel-specific KPI hierarchy aligned to business outcomes',
      'Quarterly strategy review and channel rebalancing',
    ],
    approach: [
      {
        step: 'Funnel Mapping',
        detail:
          'We map your actual customer journey from first touch to conversion and beyond — where does paid play, where does organic take over, where does email close the deal? Most brands have gaps they have never noticed.',
      },
      {
        step: 'Channel Alignment',
        detail:
          'Each channel gets a defined role in the funnel. Search captures demand. Paid social creates it. Programmatic builds awareness and retargets. They work together, not in competition for credit.',
      },
      {
        step: 'Budget Allocation',
        detail:
          'We model your budget across channels using historical performance data and industry benchmarks. You get a recommended split with the reasoning behind it, updated quarterly as data matures.',
      },
      {
        step: 'Attribution Framework',
        detail:
          'We set up consistent attribution across channels — same windows, same definitions, same reporting tool. You see the full picture instead of each channel claiming 100% credit.',
      },
      {
        step: 'Ongoing Optimisation',
        detail:
          'Channels are rebalanced quarterly based on performance. Budget flows toward what is working. Underperforming channels get a fixed window to improve or get cut.',
      },
    ],
    whoFor: [
      'Growth-stage companies with $100K+ monthly ad spend across multiple channels',
      'Brands whose paid search and paid social teams operate in silos',
      'CMOs who need to justify budget allocation to a board or CFO',
      'Companies preparing to scale into new markets or verticals',
    ],
    relatedSlugs: ['paid-search', 'paid-social', 'analytics'],
  },
};

// ============================================================
// CASE STUDIES
// ============================================================
export const caseStudySamples: Record<string, CaseStudySample> = {
  'ecom-roas-turnaround': {
    title: 'From stagnant ROAS to category leadership in 90 days',
    client: 'Confidential — DTC Apparel Brand',
    industry: 'E-Commerce',
    excerpt:
      'A DTC fashion brand with strong product-market fit had plateaued at 1.8× blended ROAS after 18 months of steady spend increases. Their previous agency had maxed out the obvious levers. We rebuilt the account from the ground up.',
    results: '3.2× blended ROAS in 90 days',
    duration: '90-day turnaround, ongoing retainer',
    services: ['Paid Search', 'Paid Social', 'Creative Strategy', 'Analytics'],
    challenge:
      'The brand had been growing steadily until spend crossed $80K/month, at which point ROAS began declining with each budget increase. Their Google Ads account had accumulated three years of structural debt — overlapping ad groups, conflicting match types, and Smart Bidding signals poisoned by misattributed conversions. Their Meta account was showing 4.2× attributed ROAS but real business performance said something different. The founding team knew the numbers were off but did not know where to start.',
    approach: [
      {
        heading: 'Account Audit & Attribution Rebuild',
        body: 'We started with the data. GA4 was tracking three different "purchase" events, two of which were double-counting. View-through attribution on Meta was claiming credit for 60% of sales that search data showed as direct. We rebuilt conversion tracking from scratch — server-side Conversions API for Meta, enhanced conversions for Google, a unified GA4 event schema — before touching a single campaign setting. It took three weeks. It was the most important three weeks.',
      },
      {
        heading: 'Google Ads Restructure',
        body: 'We collapsed 47 ad groups into 12, restructured around margin tiers rather than product categories, and switched from Target ROAS to a manually-guided approach while new Smart Bidding signals accumulated. Negative keyword lists were rebuilt from 18 months of search term data. Shopping campaigns were restructured with custom labels for margin and inventory velocity. Within 30 days, CPCs dropped 22% and conversion rates improved 18%.',
      },
      {
        heading: 'Meta Creative Testing System',
        body: "We audited the last 12 months of Meta creative and found that three ad concepts — a founder story video, a before/after UGC format, and a product-feature carousel — had driven 71% of all conversions. Everything else was noise. We built a systematic testing framework around those three proven angles: new hooks every two weeks, new offers monthly, new formats quarterly. This gave the algorithm consistent winning signals instead of constant creative churn.",
      },
      {
        heading: 'Unified Reporting',
        body: "We connected GA4, Google Ads, and Meta Ads into a single Looker Studio dashboard showing blended ROAS, channel-attributed ROAS, and a 'true ROAS' model that weighted channels by their actual contribution to last-click conversions. For the first time, the team could see which channel was actually driving growth — not which one was claiming the most credit.",
      },
    ],
    outcomes: [
      { value: '3.2×', label: 'Blended ROAS (from 1.8×)' },
      { value: '−38%', label: 'Customer acquisition cost' },
      { value: '+41%', label: 'Revenue at same spend level' },
      { value: '3', label: 'Evergreen creative concepts identified' },
    ],
    testimonial: {
      quote:
        "We had been stuck at the same ROAS for six months and genuinely thought we had hit our ceiling. Railshop showed us the ceiling was self-imposed — bad tracking and a broken account structure were the real constraint. The 90-day turnaround was real.",
      author: 'Head of Growth',
      role: 'DTC Apparel Brand',
    },
  },

  'saas-paid-social-scale': {
    title: 'Scaling a B2B SaaS brand from $40K to $200K/mo in paid social',
    client: 'Confidential — B2B SaaS (Project Management)',
    industry: 'SaaS / B2B',
    excerpt:
      'A B2B SaaS company had hit a hard ceiling on Meta due to audience saturation and was writing off LinkedIn as "too expensive." We built a dual-channel strategy that unlocked scale on both while keeping CPA stable — and opened up a new enterprise pipeline the founders had not seen before.',
    results: '5× spend scale with stable CPA',
    duration: '5-month scale program',
    services: ['Paid Social', 'Creative Strategy', 'Full-Funnel Strategy'],
    challenge:
      'The company had grown to $40K/month on Meta with a strong 2.4× pipeline ROAS. But every time they tried to push spend higher, CPA degraded sharply. Their audience was too narrow — they were targeting a specific job title in a specific company size band, and they had saturated it. LinkedIn had been tested once, generated $180 CPLs, and been written off. The CMO needed a path to $200K/month without blowing up the efficiency they had worked hard to build.',
    approach: [
      {
        heading: 'Meta Audience Expansion',
        body: 'The saturation problem had a structural cause: all campaigns were running to the same three saved audiences with 100% audience overlap. We rebuilt the account with proper exclusions, separated prospecting from retargeting with hard audience boundaries, and introduced a lookalike expansion strategy based on the top 5% of customers by LTV rather than all converters. This immediately increased the addressable audience by 4×.',
      },
      {
        heading: 'LinkedIn ABM Strategy',
        body: "LinkedIn's high CPLs were a creative problem, not a platform problem. The previous test had run the same bottom-of-funnel offer (book a demo) that worked on Meta. LinkedIn buyers are earlier in the journey — they need to be educated before they are sold. We switched to a content-first approach: a gated benchmark report as the lead magnet, followed by a 4-ad retargeting sequence that warmed leads over 30 days before asking for a meeting. CPL dropped from $180 to $62.",
      },
      {
        heading: 'Video-First Creative',
        body: "Both platforms responded strongly to video. We developed a three-part video series — a 60-second problem-awareness video, a 30-second product demo clip, and a 15-second social proof compilation — and deployed them sequentially across both channels. The problem-awareness video outperformed every static ad by 2.8× on click-through rate.",
      },
      {
        heading: 'Enterprise Pipeline Track',
        body: 'LinkedIn ABM campaigns targeting named enterprise accounts (500+ employees) at companies in the ICP were run separately from the SMB prospecting campaigns. These were measured on pipeline influenced, not CPL — a different success metric for a different buyer journey. Within four months, LinkedIn was responsible for 60% of enterprise opportunities.',
      },
    ],
    outcomes: [
      { value: '5×', label: 'Monthly spend ($40K → $200K)' },
      { value: 'Stable', label: 'CPA across full scale period' },
      { value: '−66%', label: 'LinkedIn CPL reduction' },
      { value: '60%', label: 'Enterprise pipeline from LinkedIn ABM' },
    ],
    testimonial: {
      quote:
        "We had convinced ourselves LinkedIn didn't work for us. Railshop reframed the entire approach — the issue wasn't the platform, it was asking LinkedIn users to buy before they were ready. The content-first strategy changed everything.",
      author: 'CMO',
      role: 'B2B SaaS Company',
    },
  },

  'retail-measurement': {
    title: 'Building a measurement foundation for a multi-location retailer',
    client: 'Confidential — Regional Retail Chain (24 locations)',
    industry: 'Retail',
    excerpt:
      "A 24-location regional retailer had been running Google Ads for three years showing 0.4× ROAS. The CFO was ready to cut the entire budget. We proved the ads were actually generating a 3.1× return — the measurement was the problem, not the campaigns.",
    results: '40% improvement in attribution accuracy, true ROAS revealed as 3.1×',
    duration: '6-week implementation, ongoing analytics retainer',
    services: ['Analytics & Tracking', 'Paid Search'],
    challenge:
      "Google Ads was optimising for online purchases and phone call conversions — two actions that represented less than 15% of actual revenue. The remaining 85% happened in-store, was never imported into Google Ads, and was invisible to the algorithm. This meant Smart Bidding was systematically undervaluing in-store-driving keywords and over-investing in digital-conversion keywords. The account looked broken because it was measuring the wrong thing.",
    approach: [
      {
        heading: 'Attribution Audit',
        body: 'We started by mapping every conversion action in Google Ads against the actual revenue it represented. Online purchases: $180 average order value. Phone calls: highly variable, average $320. In-store visits attributable to ad clicks: unmeasured. We built a revenue model showing that a 1% improvement in in-store attribution accuracy was worth more to the business than any campaign optimisation.',
      },
      {
        heading: 'Offline Conversion Import',
        body: "The retailer's POS system captured email addresses at checkout. We built a pipeline: POS data → hashed email list → Google Ads offline conversion import, running daily. Within six weeks, Google Ads had 8× more conversion data than it had before. Smart Bidding signals went from noise to signal.",
      },
      {
        heading: 'GA4 Reimplementation',
        body: "The existing GA4 setup was a UA migration that had been done quickly and incorrectly. Sessions, users, and conversions were all miscounted. We rebuilt from scratch: correct event taxonomy, server-side tagging for accuracy, and cross-device user stitching using the retailer's loyalty program IDs. The new setup gave us confidence in the numbers for the first time.",
      },
      {
        heading: 'Executive Dashboard',
        body: 'We built a Looker Studio dashboard that the CMO and CFO could both use. For the CMO: channel and campaign performance with blended ROAS including offline. For the CFO: cost per in-store visit, revenue per location influenced by digital, and a 90-day trend view. The CFO signed off on a $80K monthly budget increase within two weeks of seeing the new data.',
      },
    ],
    outcomes: [
      { value: '3.1×', label: 'True ROAS (previously read as 0.4×)' },
      { value: '8×', label: 'Conversion data volume after offline import' },
      { value: '+$80K', label: 'Additional monthly budget approved' },
      { value: '40%', label: 'Attribution accuracy improvement' },
    ],
    testimonial: {
      quote:
        "Our CFO was two weeks away from cutting the entire Google Ads budget. The measurement work Railshop did didn't just save the program — it got us an $80K increase. The ads were working all along. We just couldn't see it.",
      author: 'Head of Marketing',
      role: 'Regional Retail Chain',
    },
  },
};
