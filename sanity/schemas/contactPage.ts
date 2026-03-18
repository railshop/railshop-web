import { defineType, defineField, defineArrayMember } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Contact Page' }) },
  fields: [
    // ── SEO ─────────────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Overrides the default page title in search results' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2, description: 'Shown in search results — aim for 150–160 characters' },
      ],
    }),

    // ── OPEN SECTION (hero) ──────────────────────────────────────────────
    defineField({
      name: 'openSection',
      title: 'Open Section',
      description: 'The top conversion-focused section above the Calendly embed.',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small label above the headline (e.g. "Free · 30 Min Discovery Call")' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'sub', title: 'Subheadline', type: 'text', rows: 2 },
      ],
    }),

    // ── TRUST STRIP — CLIENT LOGOS ──────────────────────────────────────
    defineField({
      name: 'clientLogos',
      title: 'Client Logos (Trust Strip)',
      description: 'Logos shown above the Calendly embed. Managed separately from the About page logos.',
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

    // ── SEND A MESSAGE (secondary form) ─────────────────────────────────
    defineField({
      name: 'sendAMessage',
      title: 'Send a Message Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'sub', title: 'Subheadline', type: 'text', rows: 2 },
        { name: 'responseStat1Value', title: 'Response Stat 1 — Value', type: 'string', description: 'e.g. ~4h' },
        { name: 'responseStat1Label', title: 'Response Stat 1 — Label', type: 'string', description: 'e.g. Avg. response time' },
        { name: 'responseStat2Value', title: 'Response Stat 2 — Value', type: 'string', description: 'e.g. 100%' },
        { name: 'responseStat2Label', title: 'Response Stat 2 — Label', type: 'string', description: 'e.g. Responses sent' },
        { name: 'socialProofText', title: 'Social Proof Text', type: 'string', description: 'Shown below the submit button' },
      ],
    }),
  ],
});
