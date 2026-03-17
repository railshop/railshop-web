import { defineType, defineField, defineArrayMember } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon (emoji or SVG name)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'Full Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whatIsIncluded',
      title: 'What Is Included',
      description: 'List of deliverables / inclusions',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      description: 'Step-by-step approach for this service',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Name', type: 'string' },
            { name: 'detail', title: 'Step Detail', type: 'text', rows: 2 },
          ],
        }),
      ],
    }),
    defineField({
      name: 'whoThisIsFor',
      title: 'Who This Is For',
      description: 'List of ideal client descriptors',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      description: 'Headline shown in the page-level CTA banner',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
