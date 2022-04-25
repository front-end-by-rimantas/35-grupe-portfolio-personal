// component imports
import servicesList from '../components/servicesList/servicesList.js';
import servicesData from '../data/servicesData.js';

import renderLatestpost from '../components/latestPost/latestPostList.js';
import latestPostData from '../data/latestPostData.js';

import { renderPlans } from '../components/plansList/plansList.js';
import { plansData } from '../data/plansData.js';


import { heroSection } from '../components/sections/heroSection.js'
// import { headerSection } from '../components/sections/headerSection.js';
// import { aboutSection } from "../components/sections/aboutSection.js";
// import { numbersCounterContainer } from '../components/sections/numberCounterSection.js';
// import { testimonialsSection } from '../components/sections/testimonialsSection.js'
// import { sponsorsSection } from '../components/sections/sponsorsSection.js'
// import { footerSection } from '../components/sections/footerSection.js';
// import { projectsSection } from '../components/sections/projectsSection.js'
// import { plansSection } from '../components/sections/plansSection.js'

import { featuredProjectsList } from '../components/featuredProjectsList.js/featuredProjectsList.js';
import { featuredProjectsData } from '../data/featuredProjectsData.js';

// components execution

/* HEADER */
// headerSection('#header');
const mainHeaderDOM = document.querySelector('.main-header');

addEventListener('scroll', function () {
  const headerPosition = 150;
  if (scrollY > headerPosition) {
    mainHeaderDOM.classList.add('shadow');
  } else {
    mainHeaderDOM.classList.remove('shadow');
  }
});
/* enf of HEADER */

/* Hero (hero section) */
heroSection('#hero');
/* end of Hero (hero section) */

/* AboutMe */
// aboutSection('#about');
/* end of AboutMe */

/* OfferedService */
// servicesSection('#services');
servicesList('#services_block', servicesData);
/* end of OfferedService */

/* NumbersCounter */
// numbersCounterContainer('#numberCounter');
/* end of NumbersCounter */

/* LatestFeaturedProjects */
// projectsSection('#projects');
featuredProjectsList('#featuredProjects_block', featuredProjectsData);
/* end of LatestFeaturedProjects */

/* Testimonials */
// testimonialsSection('#testimonials');
/* end of Testimonials */

/* Plans */
// plansSection('#plans');
renderPlans('#plans_block', plansData);
/* end of Plans */

/* LatestPost */
// postsSection('#posts');
renderLatestpost('#latest_blog', latestPostData);
/* end of LatestPost */

/* Sponsors */
// sponsorsSection('#sponsors');
/* end of Sponsors */

/* FOOTER */
// footerSection('#footer');
/* end of FOOTER */
