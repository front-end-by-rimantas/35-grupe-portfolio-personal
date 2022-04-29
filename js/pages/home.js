// component imports
import servicesList from '../components/servicesList/servicesList.js';
import servicesData from '../data/servicesData.js';

import { renderPlans } from '../components/plansList/plansList.js';
import { plansData } from '../data/plansData.js';

import { heroSection } from '../components/sections/heroSection.js';
import { headerSection } from '../components/sections/headerSection.js';

// import { heroSection } from '../components/sections/heroSection.js'
// import { headerSection } from '../components/sections/headerSection.js';
import { aboutSection } from '../components/sections/aboutSection.js';
// import { numbersCounterContainer } from '../components/sections/numberCounterSection.js';
import { testimonialsSection } from '../components/sections/testimonialsSection.js';
import { sponsorsSection } from '../components/sections/sponsorsSection.js';
import { footerSection } from '../components/sections/footerSection.js';
import { projectsSection } from '../components/sections/projectsSection.js';
import { plansSection } from '../components/sections/plansSection.js';
import { servicesSection } from '../components/sections/serviceSection.js';
import { postsSection } from '../components/sections/postsSection.js';

// components execution

/* HEADER */
headerSection('#header');
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
aboutSection('#about');
/* end of AboutMe */

/* OfferedService */
servicesSection('#services');
/* end of OfferedService */

/* NumbersCounter */
// numbersCounterContainer('#numberCounter');
/* end of NumbersCounter */

/* LatestFeaturedProjects */
projectsSection('#projects');
/* end of LatestFeaturedProjects */

/* Testimonials */
testimonialsSection('#testimonials');
/* end of Testimonials */

/* Plans */
plansSection('#plans');
/* end of Plans */

/* LatestPost */
postsSection('#posts');
/* end of LatestPost */

/* Sponsors */
sponsorsSection('#sponsors');
/* end of Sponsors */

/* FOOTER */
footerSection('#footer');
/* end of FOOTER */
