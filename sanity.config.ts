import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './sanity/schemas';

const singletons = ['siteSettings', 'homePage', 'aboutPage', 'servicesPage', 'workPage', 'contactPage', 'blogPage', 'thankYouPage'];

export default defineConfig({
  name: 'railshop-web',
  title: 'Railshop Web',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '96n6h9u5',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Services Page')
              .id('servicesPage')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.listItem()
              .title('Work Page')
              .id('workPage')
              .child(S.document().schemaType('workPage').documentId('workPage')),
            S.listItem()
              .title('Contact Page')
              .id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.listItem()
              .title('Blog Page')
              .id('blogPage')
              .child(S.document().schemaType('blogPage').documentId('blogPage')),
            S.listItem()
              .title('Thank You Page')
              .id('thankYouPage')
              .child(S.document().schemaType('thankYouPage').documentId('thankYouPage')),
            S.divider(),
            // Collections
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('caseStudy').title('Case Studies'),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('teamMember').title('Team Members'),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
    // Prevent singletons from appearing in "New document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletons.includes(schemaType)),
  },
});
