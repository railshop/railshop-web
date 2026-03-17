import { defineType, defineField, defineArrayMember } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Contact Page' }) },
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
      name: 'bookACall',
      title: 'Book a Call Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subhead', title: 'Subheadline', type: 'text', rows: 2 },
        {
          name: 'agendaItems',
          title: 'Agenda Items',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        },
        { name: 'briefFooter', title: 'Brief Footer Note', type: 'string' },
      ],
    }),
    defineField({
      name: 'sendAMessage',
      title: 'Send a Message Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'sub', title: 'Subheadline', type: 'text', rows: 2 },
        { name: 'responseStat1Value', title: 'Response Stat 1 — Value', type: 'string' },
        { name: 'responseStat1Label', title: 'Response Stat 1 — Label', type: 'string' },
        { name: 'responseStat2Value', title: 'Response Stat 2 — Value', type: 'string' },
        { name: 'responseStat2Label', title: 'Response Stat 2 — Label', type: 'string' },
        { name: 'socialProofText', title: 'Social Proof Text', type: 'string' },
      ],
    }),
  ],
});
