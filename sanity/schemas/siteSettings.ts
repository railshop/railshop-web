import { defineType, defineField, defineArrayMember } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: { select: {}, prepare: () => ({ title: 'Site Settings' }) },
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG Image',
      type: 'image',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'hubspotMeetingsUrl',
      title: 'HubSpot Meetings URL',
      description: 'Full embed URL for the Book a Call widget',
      type: 'url',
    }),
    defineField({
      name: 'clientLoginUrl',
      title: 'Client Login URL',
      type: 'url',
    }),
    defineField({
      name: 'takingNewClients',
      title: 'Taking New Clients?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'footerCtaHeading',
      title: 'Footer CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'footerCtaCopy',
      title: 'Footer CTA Copy',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'stats',
      title: 'Social Proof Stats',
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
    }),
  ],
});
