/**
 * Railshop Sanity Seed Script
 * Run: npm run seed
 * Requires SANITY_API_TOKEN in .env (read/write token from sanity.io/manage)
 */

import { createClient } from '@sanity/client';
import { readFileSync, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// -- -- -- Parse .env -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
const __dirname = dirname(fileURLToPath(import.meta.url));

function parseEnv(path) {
  try {
    return Object.fromEntries(
      readFileSync(path, 'utf8')
        .split('\n')
        .filter((l) => l && !l.startsWith('#') && l.includes('='))
        .map((l) => {
          const [k, ...v] = l.split('=');
          return [k.trim(), v.join('=').trim()];
        })
    );
  } catch {
    return {};
  }
}

const env = parseEnv(join(__dirname, '../.env'));
const token = env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌  SANITY_API_TOKEN is not set in .env');
  console.error('   Get a read+write token at https://www.sanity.io/manage → API → Tokens\n');
  process.exit(1);
}

const client = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID || '96n6h9u5',
  dataset: env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
});

// -- -- -- Helpers -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let _kc = 0;
const key = () => `k${++_kc}`;

const p = (text) => ({
  _type: 'block', _key: key(), style: 'normal', markDefs: [],
  children: [{ _type: 'span', _key: key(), text, marks: [] }],
});

const h2 = (text) => ({
  _type: 'block', _key: key(), style: 'h2', markDefs: [],
  children: [{ _type: 'span', _key: key(), text, marks: [] }],
});

async function upsert(doc) {
  await client.createOrReplace(doc);
  console.log(` -  ${doc._type.padEnd(22)} ${doc._id}`);
}

// Upload a local image file and return a Sanity image reference object
async function uploadImage(relativePath, filename) {
  const fullPath = join(__dirname, '../public', relativePath);
  try {
    const stream = createReadStream(fullPath);
    const asset = await client.assets.upload('image', stream, { filename });
    console.log(`  ↑  image uploaded         ${filename}`);
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  } catch (err) {
    console.warn(`  ⚠  image upload skipped   ${filename} (${err.message})`);
    return undefined;
  }
}

// -- -- -- Seed -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
async function seed() {
  console.log('\n🌱  Seeding Railshop Sanity dataset...\n');

  // -- -- UPLOAD IMAGES -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  console.log(' - Uploading images -');
  const [
    imgDrew, imgSean, imgDrewSean, imgOffice,
    imgLogoWindowNation, imgLogoVectorSecurity, imgLogoFireIce, imgLogoJPOps,
  ] = await Promise.all([
    uploadImage('images/drew 169 cropped.jpg',                     'drew-opalinski.jpg'),
    uploadImage('images/sean 169 cropped.jpg',                     'sean-connelly.jpg'),
    uploadImage('images/drew_sean.jpg',                            'drew-sean.jpg'),
    uploadImage('images/office.jpg',                               'office.jpg'),
    uploadImage('images/logos/window nation logo.png',                'logo-window-nation.png'),
    uploadImage('images/logos/vector security logo.svg',              'logo-vector-security.svg'),
    uploadImage('images/logos/fire and ice logo.png',                 'logo-fire-and-ice.png'),
    uploadImage('images/logos/jp operations logo.svg',                'logo-jp-operations.svg'),
  ]);

  // -- -- SITE SETTINGS -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteTitle: 'Railshop',
    siteDescription: 'Digital growth for service businesses.',
    siteUrl: 'https://railshop.co',
    footerTagline: "Digital growth for service businesses. Built on strategy. Delivered by people who've done it at scale.",
    address: '33 East Pittsburgh Street\nGreensburg, PA 15601',
    hubspotMeetingsUrl: 'https://launch.railshop.co/meetings/andrew-opalinski?embed=true',
    clientLoginUrl: 'https://launchpad.railshop.co',
    takingNewClients: true,
    linkedIn: 'https://linkedin.com/company/railshop',
    instagramUrl: 'https://instagram.com/railshop',
    footerCtaHeading: 'Get Started',
    footerCtaCopy: 'Ready to see what the right digital partner can do for your business?',
  });

  // -- -- HOME PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'homePage',
    _type: 'homePage',
    seo: {
      metaTitle: 'Railshop | Digital Marketing for Home & Consumer Service Businesses',
      metaDescription: "Railshop is a boutique digital growth agency for home and consumer service businesses. We build websites, run paid ads, and drive SEO - delivered by senior leaders who've done it at scale.",
    },
    hero: {
      headline: 'We help service businesses grow revenue online.',
      subhead: "Railshop is a boutique growth partner for home and consumer service brands. We build what your business needs - and nothing it doesn't.",
    },
    servicesSection: {
      title: 'Services built for measurable growth',
      intro: 'Six ways we help service businesses compete and grow online. Every engagement starts with your goals - not a default package.',
    },
    whoWeServe: {
      headline: 'Built for service businesses ready to grow.',
      body: "You run a great operation. Your digital presence should reflect that - and drive real leads. Whether you're a local landscaping company or a regional security provider, we build what your business needs to compete and win online.",
      ctaLabel: "See If We're a Fit",
      industries: ['Concrete & Hardscape','Construction','Excavation','Home & Business Security','HVAC','Landscaping','Plumbing','Roofing','Windows & Doors'],
    },
    aboutTeaser: {
      title: 'Enterprise experience. Boutique delivery.',
      body: "Railshop is a digital growth partner co-founded by a corporate marketing leader and a product management leader in software. We spent years at the senior level inside national brands - building and scaling the kinds of digital programs most agencies only claim to understand. We started Railshop to bring that experience directly to growing service businesses, without the overhead.",
      cards: [
        { _key: key(), eyebrow: '01', heading: 'Senior-Only Team',            body: 'Every engagement is led by us directly - no coordinators, no junior hires.' },
        { _key: key(), eyebrow: '02', heading: 'The Right People, Every Time', body: 'When a project needs a specialist, we know exactly who to call and why. No guesswork, no overhead.' },
        { _key: key(), eyebrow: '03', heading: 'Built to Partner',             body: "We're built for long-term partnerships - the kind where strategy compounds and results keep growing." },
      ],
    },
    blogTeaser: {
      title: 'Straight talk on digital marketing.',
      intro: "No noise, no vanity metrics - just honest perspective on what's working for service businesses online.",
    },
    proofStats: [
      { _key: key(), value: '$100M+', label: 'Ad Spend Managed' },
      { _key: key(), value: '8x',     label: 'Avg Blended ROAS' },
      { _key: key(), value: '5+ Yrs', label: 'Avg Client Tenure' },
      { _key: key(), value: '9+',     label: 'Industries Served' },
    ],
    ctaBanner: {
      title: 'Ready to grow your service business online?',
      subtitle: "We take on a limited number of new clients. Book a call to see if we're the right fit.",
    },
  });

  // -- -- ABOUT PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'aboutPage',
    _type: 'aboutPage',
    seo: {
      metaTitle: 'About - Railshop',
      metaDescription: 'Railshop is a boutique performance marketing agency. Senior practitioners, no account managers, no black boxes.',
    },
    hero: {
      eyebrow: '// About',
      headline: 'Built different on purpose.',
      subhead: 'We started Railshop because great service businesses deserve better than what most agencies offer.',
    },
    ourStory: {
      ...(imgOffice && { image: imgOffice }),
      blocks: [
        {
          _key: key(),
          eyebrow: '// Origin Story',
          heading: 'Why we started',
          body: "Between us, we bring backgrounds on opposite sides of digital. One side is performance marketing - paid media, SEO, and web programs built and scaled at national service brands, with tens of millions in ad spend managed directly. The other side is product and software - leading development at scale, building the systems that make sure strategy actually ships. Most agencies don't have both. We thought it was worth building something that does.",
        },
        {
          _key: key(),
          eyebrow: '// The Difference',
          heading: 'The Railshop difference',
          body: "We kept seeing the same pattern: service businesses with real growth potential being handed off to junior account managers at agencies that barely understood their industry. Generic campaigns. Vanity reporting. Businesses left wondering why the phone wasn't ringing at the rate the dashboards suggested it should be. We knew we could do better - so we built a model where senior experience is the baseline, not the upsell. Strategy and execution, from people who've done it at scale.",
        },
      ],
    },
    valuesSection: {
      eyebrow: '// How We Work',
      heading: 'How we work.',
      values: [
        { _key: key(), eyebrow: '01', heading: 'Honest Reporting',      body: "You'll always know what's working and what isn't. No vanity metrics, no spin." },
        { _key: key(), eyebrow: '02', heading: 'No Vanity Metrics',     body: 'We measure what moves your business forward. ROAS, CPL, revenue - not impressions and reach.' },
        { _key: key(), eyebrow: '03', heading: 'Senior-Only Delivery',  body: "Every engagement is led by co-founders, not coordinators. You deal directly with the people doing the work." },
        { _key: key(), eyebrow: '04', heading: 'Long-Term Thinking',    body: "We're not optimizing for the next 30 days. We're building programs that compound." },
      ],
    },
    clientLogos: [
      ...(imgLogoWindowNation  ? [{ _key: key(), name: 'Window Nation',    logo: imgLogoWindowNation }]  : []),
      ...(imgLogoVectorSecurity ? [{ _key: key(), name: 'Vector Security',  logo: imgLogoVectorSecurity }] : []),
      ...(imgLogoFireIce        ? [{ _key: key(), name: 'Fire & Ice',       logo: imgLogoFireIce }]        : []),
      ...(imgLogoJPOps          ? [{ _key: key(), name: 'JP Operations',    logo: imgLogoJPOps }]          : []),
    ],
    ctaBanner: {
      title: 'Senior experience. No hand-offs.',
      subtitle: "We take on a limited number of new clients. Book a call to see if we're the right fit.",
    },
  });

  // -- -- SERVICES PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'servicesPage',
    _type: 'servicesPage',
    seo: {
      metaTitle: 'Services - Railshop',
      metaDescription: 'Digital growth services for service businesses - web design, paid ads, SEO, content, strategy, and AI integration.',
    },
    hero: {
      eyebrow: '// Services',
      headline: 'What we do best.',
      subhead: 'We build what service businesses need to compete online - websites, paid ads, SEO, content, and AI integration. Senior-level experience on every engagement - no hand-offs, no black boxes.',
    },
    manifest: {
      title: 'Services built for measurable growth',
      intro: 'Six ways we help service businesses compete and grow online. Every engagement starts with your goals - not a default package.',
    },
    approach: {
      title: 'A process built for measurable outcomes.',
      sub: 'Every engagement follows the same north star - find what works, build on it, and grow.',
    },
    ctaBanner: {
      title: 'Not sure where to start?',
      subtitle: "Most clients begin with a 30-minute call. We'll tell you exactly where we'd focus first - no pitch, no pressure.",
    },
  });

  // -- -- WORK PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'workPage',
    _type: 'workPage',
    seo: {
      metaTitle: 'Work - Railshop',
      metaDescription: "Case studies from Railshop. See how we've helped service businesses build their digital presence and drive real growth.",
    },
    hero: {
      eyebrow: '// Work',
      headline: 'Real results for service businesses.',
      subhead: "Numbers matter. So does context. These are some of the programs we're proud of - and why they worked.",
    },
    ctaBanner: {
      title: 'Want results like these?',
      subtitle: "We take on a limited number of new clients. Book a call to see if we're the right fit.",
    },
  });

  // -- -- CONTACT PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'contactPage',
    _type: 'contactPage',
    seo: {
      metaTitle: 'Contact - Railshop',
      metaDescription: 'Book a call with Railshop or send us a message. We respond within one business day.',
    },
    hero: {
      eyebrow: '// Contact',
      headline: "Let's talk about your business.",
      subhead: "No pitch, no pressure. Just a straightforward conversation about where you're trying to go and whether we're the right team to help you get there.",
    },
    bookACall: {
      heading: 'Book a Call',
      subhead: "Pick a time that works for you. We'll come prepared.",
      agendaItems: [
        'A straight read on where your digital presence stands',
        "Honest perspective on what we'd prioritize first",
        "No obligation - we'll tell you if we're not the right fit",
        "If it's a match, a clear path to getting started",
      ],
      briefFooter: "If we're not the right fit, we'll say so - and point you somewhere better.",
    },
    sendAMessage: {
      heading: 'Prefer to send a message instead?',
      sub: "Tell us about your business and what you're trying to achieve. We'll review it and follow up within one business day.",
      responseStat1Value: '~4h',
      responseStat1Label: 'Avg. response time',
      responseStat2Value: '100%',
      responseStat2Label: 'Responses sent',
      socialProofText: 'Most of our best client relationships started with a single message.',
    },
  });

  // -- -- BLOG PAGE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  await upsert({
    _id: 'blogPage',
    _type: 'blogPage',
    seo: {
      metaTitle: 'Blog - Railshop',
      metaDescription: 'Straight talk on digital marketing for service businesses. No noise - honest perspective from practitioners who live in the accounts.',
    },
    hero: {
      eyebrow: '// Blog',
      headline: 'Straight talk on digital marketing.',
      subhead: "No noise, no vanity metrics - just honest perspective on what's working for service businesses online.",
    },
    newsletter: {
      title: 'Get it in your inbox.',
      description: 'New posts, no spam. Practical marketing perspective for service business owners and marketing leaders.',
    },
  });

  // -- -- SERVICES -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  console.log('\n - Services -');

  const services = [
    {
      _id: 'service-web-design',      slug: 'web-design',
      title: 'Web Design & Development',
      description: 'High-converting websites built for service businesses. Strategy-first, not template-first.',
      icon: '⬡', order: 1,
      seo: { metaTitle: 'Web Design & Development - Railshop', metaDescription: 'Fast, conversion-focused websites built for service businesses. We design and build sites that look the part, load fast, and turn visitors into leads.' },
      whatIsIncluded: [
        'Discovery session: goals, audience, and competitive review',
        'Sitemap and wireframe planning',
        'Custom design - desktop and mobile',
        'Development on a modern, maintainable stack',
        'Contact forms, call tracking, and CRM integration',
        'Core Web Vitals optimization for speed and performance',
        'On-page SEO foundation: title tags, schema, metadata',
        'Google Analytics 4 and conversion tracking setup',
        'Post-launch support and handover documentation',
      ],
      approach: [
        { _key: key(), step: 'Discovery',       detail: 'We start by understanding your business, your customers, and your competitive landscape. No assumptions.' },
        { _key: key(), step: 'Design',           detail: 'We design a site that reflects your brand and is built to convert - desktop and mobile from day one.' },
        { _key: key(), step: 'Build',            detail: 'Development on a fast, maintainable stack with clean code, proper structure, and performance built in.' },
        { _key: key(), step: 'Integrate',        detail: 'We connect your forms, call tracking, CRM, and analytics so everything talks to everything from launch.' },
        { _key: key(), step: 'Launch & Optimise', detail: "We don't just hand it off. We monitor performance post-launch and make adjustments based on real data." },
      ],
      whoThisIsFor: [
        'Service businesses with an outdated site that is losing them leads',
        'New businesses that need a professional web presence from day one',
        'Companies running paid ads to a site that is not converting',
        'Businesses that want a site that can grow with them - not one they will outgrow in a year',
      ],
      ctaHeadline: 'Ready to build a site that actually converts?',
    },
    {
      _id: 'service-paid-ads',      slug: 'paid-ads',
      title: 'Paid Ads',
      description: 'Google Ads, LSA, and Meta campaigns built around your cost-per-lead goals - not vanity metrics.',
      icon: '◈', order: 2,
      seo: { metaTitle: 'Paid Ads - Railshop', metaDescription: 'Google, Meta, and beyond - campaigns built to drive leads, not just clicks. We manage paid advertising end-to-end for service businesses that need a reliable lead pipeline.' },
      whatIsIncluded: [
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
        { _key: key(), step: 'Audit',    detail: "We review your current accounts (if any) and the competitive landscape before we spend a dollar." },
        { _key: key(), step: 'Strategy', detail: 'We define the channel mix, targeting approach, and budget allocation based on your goals and market.' },
        { _key: key(), step: 'Launch',   detail: 'Campaigns go live with full tracking in place. Every lead is tied back to a specific keyword or audience from day one.' },
        { _key: key(), step: 'Optimise', detail: 'We continuously refine bids, ad copy, audiences, and targeting based on what the data tells us.' },
        { _key: key(), step: 'Scale',    detail: 'When we find what works, we scale it - methodically, with an eye on CPL and not just volume.' },
      ],
      whoThisIsFor: [
        'Service businesses that need a consistent flow of qualified leads',
        'Companies running ads themselves but not seeing the results they expect',
        'Businesses in competitive local markets that need to show up first',
        'Service companies ready to grow beyond word-of-mouth',
      ],
      ctaHeadline: 'Ready to build a lead pipeline that actually works?',
    },
    {
      _id: 'service-seo',      slug: 'seo',
      title: 'SEO',
      description: 'Local and technical SEO that compounds over time and reduces your reliance on paid.',
      icon: '◎', order: 3,
      seo: { metaTitle: 'SEO - Railshop', metaDescription: 'Sustainable organic growth through technical SEO and content that ranks. We build search visibility that compounds over time.' },
      whatIsIncluded: [
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
        { _key: key(), step: 'Audit',              detail: "A full technical review of your site - crawlability, site speed, indexation, and competitive gaps." },
        { _key: key(), step: 'Keyword Research',    detail: 'We map the keywords that drive real booking intent in your specific market - not just high-volume generic terms.' },
        { _key: key(), step: 'On-Page Optimisation', detail: 'We optimise every page for relevance and authority - title tags, headers, schema, internal linking.' },
        { _key: key(), step: 'Content',             detail: 'We build out the content your site needs to rank - service pages, location pages, and supporting articles.' },
        { _key: key(), step: 'Track & Iterate',     detail: 'Monthly rank tracking and traffic reporting, with ongoing adjustments as the market evolves.' },
      ],
      whoThisIsFor: [
        'Service businesses that want leads without paying for every click',
        'Local businesses that are not showing up in Google Maps or local search results',
        'Companies that have a website but get no organic traffic from it',
        'Businesses playing a long game and wanting compounding visibility over time',
      ],
      ctaHeadline: 'Ready to build organic visibility that compounds?',
    },
    {
      _id: 'service-content-creation',      slug: 'content-creation',
      title: 'Content Creation',
      description: 'Video and photo content that builds authority and keeps your brand visible between campaigns.',
      icon: '▣', order: 4,
      seo: { metaTitle: 'Content Creation - Railshop', metaDescription: 'Video and photo content that builds authority and keeps your brand visible between campaigns.' },
      whatIsIncluded: [
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
        { _key: key(), step: 'Strategy',            detail: 'We define the content formats, topics, and cadence that will build authority in your market.' },
        { _key: key(), step: 'Production Planning', detail: 'We plan every shoot - subjects, locations, shot list, and equipment - before we show up.' },
        { _key: key(), step: 'Production',          detail: 'On-location video and photo production, led by people who understand what service business content needs to communicate.' },
        { _key: key(), step: 'Post-Production',     detail: 'Editing, colour grading, captioning, and format adaptation for every platform your content will live on.' },
        { _key: key(), step: 'Distribution',        detail: 'We deliver a content calendar and publishing plan so the content keeps working after the shoot.' },
      ],
      whoThisIsFor: [
        'Service businesses with no good photos or video of their actual work',
        'Companies running ads and needing fresh creative on a regular basis',
        'Businesses that want to build a recognisable brand presence on social',
        'Service companies whose work is visual - landscaping, roofing, construction, HVAC',
      ],
      ctaHeadline: 'Ready to make content that builds your brand?',
    },
    {
      _id: 'service-strategy-consulting',      slug: 'strategy-consulting',
      title: 'Strategy Consulting',
      description: "Not sure where to start? We'll audit your full digital presence and build a prioritized plan.",
      icon: '◇', order: 5,
      seo: { metaTitle: 'Strategy Consulting - Railshop', metaDescription: 'Not sure where to start? We will assess what your business needs and build a clear, prioritised digital growth plan.' },
      whatIsIncluded: [
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
        { _key: key(), step: 'Discovery',          detail: 'We start with a deep-dive into your business - goals, current activity, competitive position, and budget.' },
        { _key: key(), step: 'Audit',              detail: 'A full review of your digital presence across website, search, paid, and social.' },
        { _key: key(), step: 'Prioritisation',     detail: 'We identify the highest-leverage opportunities and sequence them based on your goals and resources.' },
        { _key: key(), step: 'Plan',               detail: 'A clear, actionable 90-day plan with specific recommendations, priorities, and next steps.' },
        { _key: key(), step: 'Handoff or Retainer', detail: "We can hand the plan to your team or stay on as an ongoing strategic partner - your call." },
      ],
      whoThisIsFor: [
        'Business owners who know they need to do more digitally but are not sure where to start',
        'Companies that have been spending on marketing without clear results',
        'Businesses preparing for a growth phase and wanting a clear plan before they invest',
        'Teams that want an experienced outside perspective on their current approach',
      ],
      ctaHeadline: 'Ready for a clear plan you can actually act on?',
    },
    {
      _id: 'service-ai-integration',      slug: 'ai-integration',
      title: 'AI Integration',
      description: 'Practical AI implementation that reduces cost, saves time, and gives your business a real edge.',
      icon: '⬡', order: 6,
      seo: { metaTitle: 'AI Integration - Railshop', metaDescription: 'Practical AI implementation that saves time, reduces cost, and gives your business a real edge.' },
      whatIsIncluded: [
        'AI opportunity audit: where AI can save time or reduce cost in your operations',
        'Tool evaluation and recommendation (ChatGPT, Claude, Zapier AI, and others)',
        'Custom workflow design for AI-assisted tasks',
        'Implementation and integration with your existing tools',
        'Team training: how to use AI tools effectively day-to-day',
        'Content and communication templates built with AI',
        'Ongoing advisory: staying current as tools evolve',
      ],
      approach: [
        { _key: key(), step: 'Opportunity Audit', detail: 'We identify where AI can meaningfully reduce time, cost, or errors in your specific operation.' },
        { _key: key(), step: 'Tool Selection',    detail: 'We evaluate and recommend the right tools for your use cases - no vendor bias, just fit.' },
        { _key: key(), step: 'Workflow Design',   detail: "We design the AI-assisted workflows that slot into how your team actually works." },
        { _key: key(), step: 'Implementation',    detail: "We set up the tools, build the integrations, and make sure everything works before we hand it over." },
        { _key: key(), step: 'Train & Iterate',   detail: "We train your team and stay engaged as tools evolve - AI moves fast and your advantage should too." },
      ],
      whoThisIsFor: [
        'Service businesses spending too much time on repetitive admin and communication tasks',
        'Business owners curious about AI but unsure what is actually useful vs. overhyped',
        'Companies that want to move faster without hiring more people',
        'Teams looking to improve their marketing content output without proportional cost increases',
      ],
      ctaHeadline: 'Ready to put AI to work in your business?',
    },
  ];

  for (const { slug, ...s } of services) {
    await upsert({ ...s, _type: 'service', slug: { current: slug } });
  }

  // -- -- CASE STUDIES -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  console.log('\n - Case Studies -');

  const caseStudies = [
    {
      _id: 'case-study-hvac',
      slug: 'hvac-market-leader',
      title: 'From local HVAC company to regional market leader.',
      client: 'Confidential - Family-Owned HVAC Company',
      industry: 'HVAC',
      featured: true,
      publishedAt: '2026-01-01',
      excerpt: "A family-owned HVAC business stuck on word-of-mouth and slow seasons. We built their digital foundation - web, paid search, SEO, and content - and grew with them for five years.",
      homepagePullQuote: 'From local HVAC company to regional market leader.',
      homepageBody: "A family-owned HVAC business ready to scale but stuck on word-of-mouth and slow seasons. We built their digital foundation - web, paid search, SEO, and content - and grew with them for five years. The result: 4x revenue growth and an 8x blended return on ad spend.",
      stats: [
        { _key: key(), value: '8x',  label: 'Blended ROAS' },
        { _key: key(), value: '4x',  label: 'Revenue Growth' },
        { _key: key(), value: '5yr', label: 'Partnership' },
      ],
      services: ['Web Design & Development','Paid Ads','SEO','Content Creation'],
      challenge: "The business had been running for over a decade on referrals and seasonal door hangers. Revenue was flat and highly seasonal - summer AC calls and winter heating emergencies were feast-or-famine. They had no website, no Google presence, and no way for a homeowner searching online to find them. A younger competitor was eating their market with a basic website and Google Ads. The owners knew they needed to go digital but had no idea where to start.",
      approach: [
        { _key: key(), heading: 'Website & Digital Foundation',        body: 'We started with a conversion-focused website built around the services and service areas that mattered most. Clear calls to action, fast load times, and a site structure designed for local SEO. We set up Google Analytics, call tracking, and conversion events from day one so we could measure everything from the start.' },
        { _key: key(), heading: 'Local SEO & Google Business Profile', body: 'We optimised their Google Business Profile, built out service area pages for every city and suburb they served, and implemented local schema markup. Within 90 days they were appearing in the local 3-pack for core HVAC terms. Organic calls started coming in before a single paid ad ran.' },
        { _key: key(), heading: 'Paid Search Launch',                  body: 'We launched Google Search campaigns targeting high-intent HVAC terms - emergency AC repair, furnace replacement, HVAC installation - with campaigns structured by service type and geography. Budgets were set conservatively in Year 1 and scaled as conversion data matured. Call tracking tied every lead back to a specific keyword and campaign.' },
        { _key: key(), heading: 'Content & Authority Building',        body: 'We produced a regular cadence of service and seasonal content - maintenance guides, comparison posts, and local area pages - that compounded over time. By Year 3, organic search was driving 40% of all inbound leads at zero marginal cost per lead.' },
      ],
      testimonial: {
        quote: "Railshop built us from nothing online to the point where we're turning away work in the summer. The website, the ads, the Google presence - they built all of it and it just keeps compounding. Best investment we've ever made in the business.",
        name: 'Owner',
        role: 'Family-Owned HVAC Company',
      },
      seo: { metaTitle: 'HVAC Market Leader - Railshop Case Study', metaDescription: "How we helped a family-owned HVAC company grow 4x in revenue with a full digital buildout over 5 years." },
    },
    {
      _id: 'case-study-landscaping',
      slug: 'landscaping-digital-presence',
      title: 'From zero digital presence to fully booked seasons.',
      client: 'Confidential - Regional Landscaping Company',
      industry: 'Landscaping',
      featured: false,
      publishedAt: '2025-11-01',
      excerpt: "A regional landscaping company with no website and no online visibility. We built their site, launched local SEO, and ran targeted paid search during peak seasons.",
      homepagePullQuote: 'From zero digital presence to fully booked seasons.',
      homepageBody: 'Built from the ground up - web, SEO, and paid ads. First page rankings in 90 days.',
      stats: [
        { _key: key(), value: '3.2x',    label: 'ROAS' },
        { _key: key(), value: '90 days', label: 'First Page Rankings' },
      ],
      services: ['Web Design & Development','SEO','Paid Ads'],
      challenge: "The company had built a strong reputation through word-of-mouth over eight years but had never invested in digital. They had no website, no Google Business Profile, and were not showing up for any local search terms. A slow spring booking period prompted the owner to look at what competitors were doing online - and the gap was significant. They needed to build their entire digital presence from scratch, quickly, before the peak season.",
      approach: [
        { _key: key(), heading: 'Website in 4 Weeks',                     body: "We prioritised speed without sacrificing quality. The site launched in four weeks with service pages for each offering - lawn care, landscaping design, hardscape, seasonal clean-up - and location pages for their primary service areas. Contact forms and click-to-call prominent on every page." },
        { _key: key(), heading: 'Google Business Profile & Local SEO',    body: 'We built out the Google Business Profile with photos, services, and regular posts. Within 60 days it was generating calls directly from the profile. We built location-specific landing pages and optimised for the "near me" and "[service] + [city]" terms that drive actual booking intent.' },
        { _key: key(), heading: 'Seasonal Paid Search',                    body: 'We ran Google Search campaigns during the high-intent spring booking window - late February through May - targeting lawn care and landscaping terms across the service area. Campaigns paused in winter and ramped up again in spring, keeping the budget efficient and the calendar full.' },
      ],
      testimonial: {
        quote: "We went from no web presence at all to fully booked by April. The website looks great, we're showing up on Google, and the ads actually bring in real customers - not junk leads. Couldn't be happier.",
        name: 'Owner',
        role: 'Regional Landscaping Company',
      },
      seo: { metaTitle: 'Landscaping Digital Presence - Railshop Case Study', metaDescription: 'How we built a full digital presence for a regional landscaping company - web, SEO, and paid ads - resulting in fully booked seasons.' },
    },
    {
      _id: 'case-study-excavation',
      slug: 'excavation-digital-foundation',
      title: 'Building a digital foundation for a growing excavation company.',
      client: 'Confidential - Excavation Contractor',
      industry: 'Excavation',
      featured: false,
      publishedAt: '2025-09-01',
      excerpt: "An excavation contractor relying entirely on referrals with no digital presence. We built their brand online - site, local SEO, and Google Ads - opening up a new inbound lead channel.",
      homepagePullQuote: 'A new inbound channel from scratch.',
      homepageBody: 'An excavation contractor relying entirely on referrals. We built their digital foundation and opened a new inbound lead channel. 68% lower cost-per-lead than the industry average.',
      stats: [
        { _key: key(), value: '−68%', label: 'CPL vs. Industry Avg' },
        { _key: key(), value: '4.1x', label: 'ROAS on Google Ads' },
      ],
      services: ['Web Design & Development','SEO','Paid Ads','Strategy Consulting'],
      challenge: "The contractor had a strong reputation locally but zero online presence - no website, not listed on Google, nothing. All work came through word-of-mouth and relationships with general contractors. The owner wanted to diversify lead sources and reduce dependence on any single referral network. The challenge was that excavation is a low-volume, high-value category - quality mattered more than volume, and the website and ads needed to filter for the right types of projects.",
      approach: [
        { _key: key(), heading: 'Brand & Website',                   body: 'We started with the brand - a professional identity that matched the scale and quality of the work. The website featured project photography, a clear service breakdown (site prep, utility trenching, land clearing, demolition), and a contact form that asked qualifying questions to filter out low-value enquiries from the start.' },
        { _key: key(), heading: 'Google Ads for High-Intent Search', body: 'Excavation search volume is low but intent is high - someone searching for an excavation contractor usually has a project ready to go. We built tightly structured campaigns around specific service terms and ran them within a defined geographic radius. Cost-per-lead came in 68% below the industry benchmark within three months.' },
        { _key: key(), heading: 'Local SEO for Contractor Searches', body: 'We optimised for the searches that general contractors and property developers use - "excavation contractor near me," "site preparation contractor," and similar. Reviews from existing clients were collected systematically and the Google Business Profile was built out with project photos and service descriptions.' },
      ],
      testimonial: {
        quote: "We had never gotten a lead from the internet in 12 years of business. Now we get inbound enquiries every week from people we've never met. The quality is good too - they're real projects, not tire-kickers.",
        name: 'Owner',
        role: 'Excavation Contractor',
      },
      seo: { metaTitle: 'Excavation Digital Foundation - Railshop Case Study', metaDescription: 'How we helped an excavation contractor build their first digital presence and achieve 68% lower CPL than the industry average.' },
    },
    {
      _id: 'case-study-home-security',
      slug: 'home-security-digital-acquisition',
      title: 'Scaling a home security brand beyond door-to-door.',
      client: 'Confidential - Regional Home Security Company',
      industry: 'Home Security',
      featured: false,
      publishedAt: '2025-07-01',
      excerpt: "A regional home security company over-reliant on door-to-door sales. We built their digital acquisition engine - paid search, local SEO, and a converting website.",
      homepagePullQuote: 'Scaling a home security brand beyond door-to-door.',
      homepageBody: '2.8x lead volume. 47% lower CPL. A program built to run without constant intervention.',
      stats: [
        { _key: key(), value: '2.8x', label: 'Lead Volume' },
        { _key: key(), value: '−47%', label: 'Lower CPL' },
      ],
      services: ['Web Design & Development','Paid Ads','SEO'],
      challenge: "The company had grown to a reasonable size through door-to-door sales - an expensive, inconsistent, and increasingly difficult channel. Customer acquisition cost was high, sales rep turnover was a constant problem, and the business had no digital presence to fall back on. Leadership wanted to build a scalable inbound channel that could eventually reduce dependence on door-to-door entirely. The challenge was competing against national security brands with far larger ad budgets.",
      approach: [
        { _key: key(), heading: 'Conversion-Focused Website',          body: 'The existing website was a brochure with no clear calls to action and no conversion tracking. We rebuilt it around the customer journey - what a homeowner thinking about security wants to know, what objections they have, and what it takes to get them to request a quote. Trust signals, clear pricing tiers, and prominent calls-to-action at every scroll depth.' },
        { _key: key(), heading: 'Google Search - Local Intent Targeting', body: 'We targeted the high-intent local search terms that national brands often under-invest in - "[city] home security," "home alarm installation near me," and specific product and service terms. Being locally relevant gave us a quality score and relevance advantage over national competitors. CPL came in 47% below the industry average within the first 90 days.' },
        { _key: key(), heading: 'SEO & Review Strategy',               body: 'Local SEO and a systematic review collection process gave the business a strong organic presence alongside paid. Reviews from existing customers built the social proof that converts curious searchers into booked appointments. Within 12 months, organic was contributing 35% of all digital leads.' },
      ],
      testimonial: {
        quote: "Door-to-door will always be part of our business but now it's not the only thing. Digital brings in leads every day without us chasing them. The website, the ads, and the Google presence Railshop built have genuinely changed how we grow.",
        name: 'Director of Sales',
        role: 'Regional Home Security Company',
      },
      seo: { metaTitle: 'Home Security Digital Acquisition - Railshop Case Study', metaDescription: 'How we helped a regional home security company build a digital lead engine - 2.8x lead volume and 47% lower CPL.' },
    },
  ];

  for (const { slug, ...cs } of caseStudies) {
    await upsert({ ...cs, _type: 'caseStudy', slug: { current: slug } });
  }

  // -- -- TEAM MEMBERS -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  console.log('\n - Team Members -');

  await upsert({
    _id: 'team-drew', _type: 'teamMember',
    name: 'Andrew Opalinski',
    role: 'Co-Founder · Head of Digital Strategy',
    bio: "Former Head of Digital Marketing at Window Nation and Vector Security, where he built and scaled paid media, SEO, and web programs across national markets. Drew brings that enterprise playbook directly to growing service businesses.",
    linkedinUrl: 'https://linkedin.com/in/drewrailshop',
    order: 1,
    ...(imgDrew && { photo: imgDrew }),
  });

  await upsert({
    _id: 'team-sean', _type: 'teamMember',
    name: 'Sean Connelly',
    role: 'Co-Founder · Head of Product & Operations',
    bio: "VP of Product at Momentive Software, where he leads product development and systems thinking at scale. Sean brings that same discipline to every Railshop engagement - making sure strategy translates into execution that actually ships.",
    linkedinUrl: 'https://linkedin.com/in/seanrailshop',
    order: 2,
    ...(imgSean && { photo: imgSean }),
  });

  // --- CATEGORIES ------------------------------------------------------------
  console.log('\n - Categories -');

  const categories = [
    { _id: 'category-strategy',  title: 'Strategy',  slug: 'strategy'  },
    { _id: 'category-paid-ads',  title: 'Paid Ads',  slug: 'paid-ads'  },
    { _id: 'category-seo',       title: 'SEO',       slug: 'seo'       },
    { _id: 'category-web',       title: 'Web',       slug: 'web'       },
    { _id: 'category-ai',        title: 'AI',        slug: 'ai'        },
    { _id: 'category-content',   title: 'Content',   slug: 'content'   },
  ];

  for (const { _id, title, slug } of categories) {
    await upsert({ _id, _type: 'category', title, slug: { current: slug } });
  }

  const ref = (id) => ({ _type: 'reference', _ref: id });

  // --- BLOG POSTS -------------------------------------------------------------
  console.log('\n - Blog Posts -');

  const posts = [
    {
      _id: 'post-why-service-businesses-fail',
      slug: 'why-service-businesses-fail-online',
      title: 'Why Most Service Businesses Fail Online (And What Actually Works)',
      excerpt: 'The common mistakes we see across every industry - and the framework we use to fix them.',
      publishedAt: '2026-02-12',
      featured: true,
      categories: [{ _key: key(), ...ref('category-strategy') }],
      seo: { metaTitle: 'Why Most Service Businesses Fail Online - Railshop Blog', metaDescription: 'The common mistakes service businesses make online - and the framework we use to fix them.' },
      body: [
        p("Most service businesses are not failing because their work is bad. They are failing online because the strategies they are running were designed for companies with six-figure ad budgets, in-house marketing teams, and the patience to wait eighteen months for results. That is not the reality for most owner-operators."),
        h2('What We See Happening'),
        p("The pattern is consistent across industries. A business invests in a website, runs some Google Ads, maybe hires an SEO vendor - and then waits. Traffic ticks up, but leads do not follow proportionally. The agency sends a report full of impressions and click-through rates. The owner is left wondering why the phone is not ringing at the same rate the dashboards suggest it should be."),
        p("The disconnect is almost never about budget. It is about fit. The channels, the messaging, and the targeting are all being optimised for the wrong outcome. Clicks are easy to generate. Qualified calls from people ready to book are significantly harder - and require a fundamentally different approach."),
        h2('Why It Happens'),
        p("Generic agencies are built to serve as many clients as possible with the same playbook. That playbook was developed for e-commerce or lead generation at scale, not for the specific conversion dynamics of a service business where trust, timing, and geography all matter in ways that are difficult to systematise."),
        p("Service businesses also tend to underestimate how much their reputation, response time, and follow-up process affect digital performance. A campaign can generate twenty qualified leads a month and still produce zero revenue if the back-end is not ready to handle them. Digital performance and operational performance are more connected than most owners realise."),
        h2('What Actually Works'),
        p("What we have found, across HVAC, landscaping, home security, and adjacent trades, is that the highest-performing programs share a few common characteristics. They are tightly geo-targeted, with messaging that reflects the specific market - not boilerplate copy pasted from a national template. They run fewer channels but run them properly. And they are connected directly to how the business handles inbound inquiry."),
        p("The businesses that grow consistently are not the ones spending the most. They are the ones with the tightest feedback loop between what their marketing says and what their sales process delivers."),
        h2('The Takeaway'),
        p("Stop measuring inputs. Impressions, clicks, and rankings are proxy metrics. They matter only insofar as they produce qualified inquiries at a cost the business can sustain. Build your program around that outcome and you will make much better decisions about where to invest - and where to stop."),
      ],
    },
    {
      _id: 'post-google-ads-plateau',
      slug: 'google-ads-plateau',
      title: 'Why Most Google Ads Accounts Plateau After Month 3',
      excerpt: 'The structural patterns we see in stalled accounts, and the levers that consistently move them.',
      publishedAt: '2026-01-28',
      featured: false,
      categories: [{ _key: key(), ...ref('category-paid-ads') }],
      seo: { metaTitle: 'Why Google Ads Accounts Plateau After Month 3 - Railshop Blog', metaDescription: 'The structural reasons most Google Ads accounts stall - and the levers that consistently move them forward.' },
      body: [
        p("There is a predictable arc to most Google Ads accounts that have not been set up with long-term structure in mind. Month one feels like progress - impressions, clicks, some conversions. By month three, performance plateaus. The client is spending the same budget and getting roughly the same results, week after week."),
        p("This is not bad luck. It is structural. And understanding why it happens is the first step to fixing it."),
        h2('The Structural Problem'),
        p("Most accounts plateau because they were launched without a clear theory of how they would scale. The campaigns are built to go live - not to compound. Once the initial optimisation phase settles out, there is no mechanism for sustained improvement. The algorithm optimises toward the conversion signals it has, the budget deploys against the same audiences and keywords, and results flatten."),
        p("This is compounded by the fact that most agencies report on inputs - click-through rates, quality scores, impression share - rather than outcomes. Clients get reports that look healthy even when leads are flat, because the metrics being reported do not map to what the business actually cares about."),
        h2('The Levers That Actually Move Accounts'),
        p("Consistently improving Google Ads accounts requires working on a few specific dimensions: campaign structure, creative refresh cadence, audience expansion strategy, and conversion signal quality."),
        p("Campaign structure matters because it determines how the algorithm can allocate budget and optimise bids. Accounts that lump everything into broad match campaigns with single bidding strategies limit their own ceiling. Splitting by intent level, match type, and service category gives the algorithm more to work with and gives you more control over where the money goes."),
        p("Creative refresh matters because ad fatigue is real. Copy that drove strong CTR in month one will see declining performance by month three if it has not been refreshed. Systematic creative testing - not just running two versions of the same ad - is one of the most reliable ways to unlock incremental improvement."),
        h2('What To Do If You Are Plateaued'),
        p("Start with your conversion data. Are the leads coming through actually qualified? Is the CRM capture working properly? Is call tracking accurate? Before making structural changes, make sure you are optimising against accurate signals."),
        p("Then look at your match type distribution and search term reports. If you are getting irrelevant traffic, your negatives are not working hard enough. If you are over-indexed on exact match, you may be missing intent you do not know exists."),
        p("Plateaus are almost always a signal that the account needs active management - not more budget. If you are spending more to try to get more leads and the CPL is holding flat or rising, adding budget before fixing structure will just scale the problem."),
      ],
    },
    {
      _id: 'post-local-seo-2026',
      slug: 'local-seo-2026',
      title: "Local SEO in 2026: What's Changed and What Still Works",
      excerpt: 'The tactics that have faded and the fundamentals that keep driving rankings for service businesses.',
      publishedAt: '2026-01-14',
      featured: false,
      categories: [{ _key: key(), ...ref('category-seo') }],
      seo: { metaTitle: "Local SEO in 2026: What's Changed and What Still Works - Railshop Blog", metaDescription: 'The local SEO tactics that have faded and the fundamentals that keep driving rankings for service businesses in 2026.' },
      body: [
        p("Local SEO for service businesses has changed significantly over the past two years - and not always in the ways people expect. Some of the tactics that drove rankings in 2022 and 2023 have faded. Some have flipped entirely. But the fundamentals remain, and they are more important than the tactics built on top of them."),
        h2('What Has Changed'),
        p("The Google local pack is more competitive than it was two years ago. More businesses are active on Google Business Profile, more are collecting reviews systematically, and the gap between a well-optimised profile and a basic one has narrowed in many markets. This has pushed differentiation down to signals that are harder to fake - review quality and recency, website authority, and behavioral signals like click-through rates and time on site."),
        p("AI-generated local landing pages have also saturated the market. Creating a page for every [service] + [city] combination used to be a reliable way to capture long-tail local traffic. Many businesses now have these pages, which means they no longer differentiate by their existence alone. The quality and depth of the content on those pages matters more than it ever has."),
        p("The rise of AI Overviews in search results has changed how informational queries display, but the impact on local service searches has been more limited. When someone searches 'plumber near me' or 'HVAC repair [city]', they are in purchase mode - and Google still shows the local pack and paid results for those queries."),
        h2('What Still Works'),
        p("Google Business Profile remains the single highest-leverage local SEO asset for service businesses. A well-managed profile - with complete information, regular photo updates, a consistent stream of genuine reviews, and active Q&A management - still drives significant call volume directly."),
        p("Review velocity and quality matter more than total count. A business with 40 reviews published in the last 90 days will generally outperform a business with 400 reviews where none are from the last year. Systematic review collection - asking every satisfied customer through a simple, frictionless process - is still one of the most cost-effective local SEO investments available."),
        p("Local backlinks from genuinely local sources - chamber memberships, sponsorships, local media, industry associations - carry more weight than they did when domain authority from any source looked similar."),
        h2('What To Focus On in 2026'),
        p("If we were building a local SEO program from scratch for a service business today, the priority order would be: fix technical foundations first (crawlability, speed, schema), optimise and actively manage the Google Business Profile, build a systematic review collection process, create genuinely useful location and service pages, and then build local authority over time."),
        p("The basics, done consistently and well, still outperform most sophisticated tactics in local search. That is unlikely to change."),
      ],
    },
    {
      _id: 'post-website-conversion',
      slug: 'service-business-website-conversion',
      title: 'What Makes a Service Business Website Actually Convert',
      excerpt: "Speed, structure, and trust signals - the three things that separate websites that generate leads from ones that don't.",
      publishedAt: '2025-12-18',
      featured: false,
      categories: [{ _key: key(), ...ref('category-web') }],
      seo: { metaTitle: 'What Makes a Service Business Website Convert - Railshop Blog', metaDescription: "Speed, structure, and trust signals - the three factors that consistently separate service business websites that generate leads from ones that don't." },
      body: [
        p("Most service business websites are not doing the job they were designed to do. They look fine. They load. They have a phone number somewhere on the page. But they do not convert - not at the rate they should, given the traffic they receive."),
        p("After building and analysing dozens of service business websites, three factors consistently separate sites that generate leads from sites that do not: speed, structure, and trust signals."),
        h2('Speed'),
        p("Core Web Vitals are now a ranking factor, but they matter far more for conversion than they do for rankings. A page that takes four seconds to load on mobile loses a significant percentage of visitors before they even see the headline. For a service business, most of those visitors are on mobile and most of them are in active need - which means the window to capture them is short."),
        p("Speed is rarely a design problem. It is almost always a technical problem - unoptimised images, render-blocking scripts, shared hosting with no caching, third-party tools loading synchronously. Most of these are fixable without redesigning anything."),
        h2('Structure'),
        p("By structure, we mean the hierarchy of information on the page and the clarity of the path to conversion. Most service business websites present too much information with too little guidance about what to do with it. The visitor arrives, sees a wall of text about the company, and leaves - not because they were not interested, but because they could not immediately understand whether this business served their need and what to do next."),
        p("The pages that convert well for service businesses answer three questions immediately: What do you do? Do you serve my area? How do I contact you? Every additional piece of information on the page is in service of those three questions - or it is creating friction."),
        h2('Trust Signals'),
        p("Trust signals are the evidence on the page that tells a visitor it is safe to contact this business. For service businesses, the most effective trust signals are reviews (real ones, with names and specificity), photos of actual work, an address or service area that confirms local presence, and evidence of tenure - how long the business has been operating."),
        p("Trust signals are not the same as credentials. Badges, certifications, and awards matter less than a customer review that says 'they showed up on time, did the job cleanly, and charged exactly what they quoted.' Specificity builds trust. Generic claims do not."),
        h2('Where To Start'),
        p("If your site is not converting at the rate you expect, the fastest diagnosis is to run it through PageSpeed Insights, then review it on mobile as if you were a customer who had never heard of your business. Does it load fast? Can you understand what this business does in three seconds? Is there a clear action to take, and is there evidence you should trust them?"),
        p("Most sites fail on at least two of these three. Fixing them does not require a full rebuild - but it does require honest assessment of what the site is actually doing, as opposed to what you wish it were doing."),
      ],
    },
    {
      _id: 'post-ai-in-client-engagements',
      slug: 'ai-in-client-engagements',
      title: "How We're Using AI in Client Engagements Right Now",
      excerpt: 'Practical applications, not hype. Where AI is actually saving time and improving output in our day-to-day work.',
      publishedAt: '2025-12-03',
      featured: false,
      categories: [{ _key: key(), ...ref('category-ai') }],
      seo: { metaTitle: "How We're Using AI in Client Engagements Right Now - Railshop Blog", metaDescription: "Practical AI applications in marketing agency work - where it actually saves time and where the hype doesn't match reality." },
      body: [
        p("There is a lot of noise about AI in marketing right now. Most of it is either breathless hype about what AI will eventually do or dismissive takes from people who have not actually tried to use it seriously. We are going to skip both and talk about where AI is actually useful in client engagements as of right now."),
        h2('Where AI Is Genuinely Useful'),
        p("Research and synthesis is the area where AI creates the most leverage for us. Competitive research, market landscape reviews, initial keyword clustering, and summarising long documents are all tasks that AI handles well with the right prompting. What used to take two to three hours of analyst time can now be done in twenty minutes and reviewed in ten."),
        p("Content outlines and first drafts are another area where AI provides real leverage - with a critical caveat. AI-generated first drafts for service business content are rarely publishable as written. They are too generic, they lack the specificity that builds trust in local markets, and they often miss the nuance that makes service business content credible to a sophisticated reader. But as a starting structure, they save meaningful time."),
        p("Ad copy testing is a third area. We use AI to generate variants of headline and description combinations, which we then filter and test. The hit rate is not high - maybe one in ten generated variations is worth testing - but generating them is nearly instant, so the economics still work."),
        h2('Where AI Does Not Help (Yet)'),
        p("Strategy and judgment are not areas where AI adds much value for us. An AI can summarise research and flag patterns, but the decision about which channel to prioritise for a specific business in a specific market requires context that AI does not have. We have not found a way to delegate those decisions."),
        p("Client relationships are similarly not something AI can touch. The trust that clients place in us is based on direct communication, consistent follow-through, and honest assessment of results. There is no AI shortcut to that."),
        h2('How We Think About It'),
        p("We approach AI tools the way we approach any other tool - as a means to an end. The question is not 'how do we use more AI?' It is 'where is the time being spent that AI could absorb without degrading the output?' In our experience, that is a narrower set of tasks than the hype suggests, but it is a real set of tasks with real time savings."),
        p("If you are curious about how AI might apply to your business specifically, that is actually one of the better use cases for a strategy consultation - a concrete audit of where AI creates real value versus where it creates the illusion of productivity."),
      ],
    },
  ];

  // Posts: create if missing, then patch non-image fields only.
  // coverImage is intentionally excluded so manually uploaded WebP versions in
  // the Sanity media library are never overwritten by the seed.
  for (const { slug, ...post } of posts) {
    const { _id, _type = 'post', ...fields } = { ...post, _type: 'post', slug: { current: slug } };
    await client.createIfNotExists({ _id, _type, ...fields });
    await client.patch(_id).set(fields).commit();
    console.log(`  ✓  ${'post'.padEnd(22)} ${_id}`);
  }

  // --- THANK YOU PAGE --------------------------------------------------------
  console.log('\n - Thank You Page -');

  await upsert({
    _id: 'thankYouPage', _type: 'thankYouPage',
    seo: {
      metaTitle: 'Message Received - Railshop',
      metaDescription: 'We received your message and will follow up within one business day.',
    },
    hero: {
      headline: "We've got it.",
      subhead: "Your message is in. We review every inquiry personally and will follow up within one business day - usually sooner.",
      badgeLabel: 'Message received',
    },
    nextSteps: {
      steps: [
        { _key: key(), title: 'We review your message',    body: 'Our team reads every inquiry. No auto-replies, no canned responses - just a real person looking at what you sent.',                                statusLabel: 'In progress' },
        { _key: key(), title: 'You hear from us directly', body: "Expect a reply within one business day. We'll acknowledge what you're working on and suggest the most useful next step.",                         statusLabel: 'Up next'     },
        { _key: key(), title: "We talk (if it's a fit)",   body: "If it makes sense, we'll set up a quick call - no pitch, no pressure. Just a straight conversation about what you're building.",                 statusLabel: 'Pending'     },
      ],
    },
    ctaCard: {
      heading: 'Prefer to just book a call?',
      body: 'Skip the back-and-forth and pick a time directly on our calendar. 30 minutes, no obligation.',
    },
  });

  console.log('\n✅  Seed complete - all documents created/updated.\n');
}

seed().catch((err) => {
  console.error('\n❌  Seed failed:', err.message);
  process.exit(1);
});
