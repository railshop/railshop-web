import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { servicesPage } from './servicesPage';
import { workPage } from './workPage';
import { contactPage } from './contactPage';
import { blogPage } from './blogPage';
import { service } from './service';
import { caseStudy } from './caseStudy';
import { post } from './post';
import { category } from './category';
import { teamMember } from './teamMember';

export const schemaTypes = [
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  workPage,
  contactPage,
  blogPage,
  // Collections
  service,
  caseStudy,
  post,
  category,
  teamMember,
];
