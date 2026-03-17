import { defineType, defineField } from 'sanity';

export const workPage = defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Work Page' }) },
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
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subhead', title: 'Subheadline', type: 'text', rows: 2 },
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
