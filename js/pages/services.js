// component imports

import servicesList from '../components/servicesList/servicesList.js';
import servicesData from '../data/servicesData.js';

import { renderPlans } from '../components/plansList/plansList.js';
import { plansData } from '../data/plansData.js';

import renderLatestpost from '../components/latestPost/latestPostList.js';
import latestPostData from '../data/latestPostData.js';

import { headerSection } from '../components/sections/headerSection.js';
import { footerSection } from '../components/sections/footerSection.js';
import { numbersCounterContainer } from '../components/sections/numberCounterSection.js';
import { plansSection } from '../components/sections/plansSection.js';
import { testimonialsSection } from '../components/sections/testimonialsSection.js';
import { servicesSection } from '../components/sections/serviceSection.js';
import { pageNameSection } from '../components/sections/pageNameSection.js';
// components execution

/* HEADER */
headerSection('#header');
// const mainHeaderDOM = document.querySelector('.main-header');

// addEventListener('scroll', function () {
//   const headerPosition = 150;
//   if (scrollY > headerPosition) {
//     mainHeaderDOM.classList.add('shadow');
//   } else {
//     mainHeaderDOM.classList.remove('shadow');
//   }
// });
/* enf of HEADER */

/* Page name */
pageNameSection('#pageName');
/* Page name end */

/* OfferedService */
servicesSection('#services');
/* end of OfferedService */

/* NumbersCounter */
numbersCounterContainer('#numberCounter');
/* end of NumbersCounter */

/* Plans */
plansSection('#plans');
/* end of Plans */

/* Testimonials */
testimonialsSection('#testimonials');
/* end of Testimonials */

/* FOOTER */
footerSection('#footer');
/* end of FOOTER */
