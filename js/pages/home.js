// component imports
import servicesList from '../components/servicesList/servicesList.js';
import servicesData from '../data/servicesData.js';

import renderLatestpost from '../components/latestPost/latestPostList.js';
import latestPostData from '../data/latestPostData.js';

import { renderPlans } from '../components/plansList/plansList.js';
import { plansData } from '../data/plansData.js';

import { heroSection } from '../components/sections/heroSection.js'
// components execution

/* HEADER */
heroSection('#hero');
/* enf of HEADER */

/* Hero (hero section) */
/* end of Hero (hero section) */

/* AboutMe */
/* end of AboutMe */

/* OfferedService */
servicesList('#services_block', servicesData);
/* end of OfferedService */

/* NumbersCounter */
/* end of NumbersCounter */

/* LatestFeaturedProjects */
/* end of LatestFeaturedProjects */

/* Testimonials */
/* end of Testimonials */

/* Plans */
renderPlans('#plans_block', plansData);
/* end of Plans */

/* LatestPost */

renderLatestpost('#latest_blog', latestPostData);

/* end of LatestPost */

/* Sponsors */
/* end of Sponsors */
/* FOOTER */
/* end of FOOTER */
