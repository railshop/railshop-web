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
  // Basic ref parser — replace with @sanity/image-url in production
  if (!source?.asset?._ref) return '';
  const [, id, dimensions, format] = source.asset._ref.split('-');
  return `https://cdn.sanity.io/images/${import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id'}/production/${id}-${dimensions}.${format}`;
}

// ============================================================
// GROQ QUERIES
// ============================================================

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getServices() {
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) { _id, title, slug, description, icon }`
  );
}

export async function getServiceBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getCaseStudies() {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id, title, slug, excerpt, client, industry, results, featured, publishedAt,
      "categories": categories[]->{ title, slug }
    }`
  );
}

export async function getFeaturedCaseStudy() {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0] {
      _id, title, slug, excerpt, client, industry, results
    }`
  );
}

export async function getCaseStudyBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getPosts(limit = 10) {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id, title, slug, excerpt, publishedAt,
      "categories": categories[]->{ title, slug }
    }`,
    { limit: limit - 1 }
  );
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
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
