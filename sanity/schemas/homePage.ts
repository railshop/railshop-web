import { defineType, defineField, defineArrayMember } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Home Page' }) },
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Overrides the default page title in search results' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2, description: 'Shown in search results — aim for 150–160 characters' },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subhead', title: 'Subheadline', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'whoWeServe',
      title: 'Who We Serve Section',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 3 },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        {
          name: 'industries',
          title: 'Industries',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        },
      ],
    }),
    defineField({
      name: 'aboutTeaser',
      title: 'About Teaser Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 3 },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
                { name: 'heading', title: 'Heading', type: 'string' },
                { name: 'body', title: 'Body', type: 'text', rows: 2 },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'blogTeaser',
      title: 'Blog Teaser Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'ctaBanner',
      title: 'CTA Banner',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
      ],
    }),
  ],
});
