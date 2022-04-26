// component imports
import { headerSection } from '../components/sections/headerSection.js';
import { projectsSection } from '../components/sections/projectsSection.js';
import { footerSection } from '../components/sections/footerSection.js';

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

/* Name of page */
/* end of Name of page end */

/* LatestFeaturedProjects */
projectsSection('#projects');
/* end of LatestFeaturedProjects */

/* FOOTER  */
footerSection('#footer');
/* end of FOOTER  */
