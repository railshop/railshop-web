import { defineType, defineField, defineArrayMember } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'About Page' }) },
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
      name: 'ourStory',
      title: 'Our Story Section',
      type: 'object',
      fields: [
        {
          name: 'blocks',
          title: 'Content Blocks',
          description: 'Two-column content blocks (text + photo)',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
                { name: 'heading', title: 'Heading', type: 'string' },
                { name: 'body', title: 'Body', type: 'text', rows: 4 },
                { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
                {
                  name: 'imagePosition',
                  title: 'Image Position',
                  type: 'string',
                  options: { list: ['left', 'right'], layout: 'radio' },
                  initialValue: 'right',
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', title: 'Client Name', type: 'string' },
            { name: 'logo', title: 'Logo', type: 'image' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'valuesSection',
      title: 'Values Section',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'values',
          title: 'Value Cards',
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
