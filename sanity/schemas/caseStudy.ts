import { defineType, defineField, defineArrayMember } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
      ],
    }),
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'homepagePullQuote',
      title: 'Homepage Pull Quote',
      description: 'Short bold quote shown in the featured case study block on the homepage',
      type: 'string',
    }),
    defineField({
      name: 'homepageBody',
      title: 'Homepage Body Text',
      description: 'Supporting copy shown below the pull quote on the homepage',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Key Stats',
      description: 'Up to 3 result metrics. Colors are assigned by position: 1st=green, 2nd=blue, 3rd=gold.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'services',
      title: 'Services Used',
      description: 'Service names displayed on the case study detail page',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      description: 'Description of the problem this client faced',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      description: 'Sections describing how we solved the challenge',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'body', title: 'Body', type: 'text', rows: 3 },
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'role', title: 'Role / Title', type: 'string' },
        { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({
      name: 'body',
      title: 'Case Study Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
