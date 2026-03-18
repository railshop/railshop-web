import { defineType, defineField, defineArrayMember } from 'sanity';

export const thankYouPage = defineType({
  name: 'thankYouPage',
  title: 'Thank You Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Thank You Page' }) },
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
        { name: 'headline', title: 'Headline', type: 'string', description: 'e.g. "We\'ve got it."' },
        { name: 'subhead', title: 'Subheadline', type: 'text', rows: 2 },
        { name: 'badgeLabel', title: 'Status Badge Label', type: 'string', description: 'e.g. "Message received"' },
      ],
    }),
    defineField({
      name: 'nextSteps',
      title: 'What Happens Next',
      type: 'object',
      fields: [
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          description: 'Exactly 3 steps. First step is shown as active/in-progress.',
          validation: (Rule: any) => Rule.max(3),
          of: [
            defineArrayMember({
              type: 'object',
              preview: { select: { title: 'title' } },
              fields: [
                { name: 'title', title: 'Step Title', type: 'string' },
                { name: 'body', title: 'Step Body', type: 'text', rows: 2 },
                { name: 'statusLabel', title: 'Status Label', type: 'string', description: 'e.g. "In progress", "Up next", "Pending"' },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaCard',
      title: 'Book a Call Card',
      type: 'object',
      description: 'Only shown when "Taking New Clients" is enabled in Site Settings.',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 2 },
      ],
    }),
  ],
});
