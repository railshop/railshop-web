import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

// ============================================================
// IMAGE URL BUILDER
// ============================================================
export function urlForImage(source: { asset?: { _ref?: string } }) {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id';
  if (!source?.asset?._ref) {
    const empty = { width: () => empty, height: () => empty, url: () => '' };
    return empty;
  }
  const [, id, dimensions, format] = source.asset._ref.split('-');
  const base = `https://cdn.sanity.io/images/${projectId}/production/${id}-${dimensions}.${format}`;
  const params: Record<string, string> = {};
  const builder = {
    width(w: number) { params['w'] = String(w); return builder; },
    height(h: number) { params['h'] = String(h); return builder; },
    url() {
      const qs = new URLSearchParams(params).toString();
      return qs ? `${base}?${qs}` : base;
    },
  };
  return builder;
}

// ============================================================
// READ TIME UTILITY
// ============================================================

// Estimates read time from a Sanity portable text body (array of blocks)
export function estimateReadTime(body: any[]): string {
  if (!Array.isArray(body)) return '1 min read';
  const words = body
    .filter((block) => block._type === 'block' && Array.isArray(block.children))
    .flatMap((block: any) => block.children)
    .filter((span: any) => span._type === 'span' && typeof span.text === 'string')
    .reduce((acc: number, span: any) => acc + span.text.trim().split(/\s+/).filter(Boolean).length, 0);
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// ============================================================
// GROQ QUERIES — SINGLETONS
// ============================================================

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings" && _id == "siteSettings"][0]`);
}

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage" && _id == "homePage"][0]`);
}

export async function getAboutPage() {
  return sanityClient.fetch(`*[_type == "aboutPage" && _id == "aboutPage"][0]`);
}

export async function getServicesPage() {
  return sanityClient.fetch(`*[_type == "servicesPage" && _id == "servicesPage"][0]`);
}

export async function getWorkPage() {
  return sanityClient.fetch(`*[_type == "workPage" && _id == "workPage"][0]`);
}

export async function getContactPage() {
  return sanityClient.fetch(`*[_type == "contactPage" && _id == "contactPage"][0]`);
}

export async function getBlogPage() {
  return sanityClient.fetch(`*[_type == "blogPage" && _id == "blogPage"][0]`);
}

// ============================================================
// GROQ QUERIES — COLLECTIONS
// ============================================================

export async function getServices() {
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, description, icon, ctaHeadline, order
    }`
  );
}

export async function getServiceBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id, title, slug, description, icon, body,
      whatIsIncluded, approach, whoThisIsFor, ctaHeadline, order, seo
    }`,
    { slug }
  );
}

export async function getCaseStudies() {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id, title, slug, excerpt, client, industry, featured, publishedAt,
      stats, homepagePullQuote, homepageBody,
      "categories": categories[]->{ title, slug }
    }`
  );
}

export async function getFeaturedCaseStudy() {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0] {
      _id, title, slug, excerpt, client, industry,
      stats, homepagePullQuote, homepageBody
    }`
  );
}

export async function getCaseStudyBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id, title, slug, excerpt, client, industry, featured,
      stats, homepagePullQuote, homepageBody,
      challenge, approach, testimonial, gallery, services,
      body, publishedAt, coverImage, seo,
      "categories": categories[]->{ title, slug }
    }`,
    { slug }
  );
}

export async function getPosts(limit = 10) {
  return sanityClient.fetch(
    `*[_type == "post"] | order(featured desc, publishedAt desc)[0...$limit] {
      _id, title, slug, excerpt, publishedAt, featured, coverImage,
      "categories": categories[]->{ title, slug }
    }`,
    { limit: limit - 1 }
  );
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, body, publishedAt, featured,
      coverImage, author, seo,
      "categories": categories[]->{ title, slug }
    }`,
    { slug }
  );
}

export async function getTeamMembers() {
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, photo, linkedinUrl, order
    }`
  );
}

export async function getAllPostSlugs() {
  return sanityClient.fetch(`*[_type == "post"]{ "slug": slug.current }`);
}

export async function getAllServiceSlugs() {
  return sanityClient.fetch(`*[_type == "service"]{ "slug": slug.current }`);
}

export async function getAllCaseStudySlugs() {
  return sanityClient.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`);
}
