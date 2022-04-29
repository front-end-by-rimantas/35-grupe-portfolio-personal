// component imports
import { headerSection } from '../components/sections/headerSection.js';
import { footerSection } from '../components/sections/footerSection.js';
import { pageNameSection } from '../components/sections/pageNameSection.js';
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
pageNameSection('#pageName');
/* Name of page end */

/* Map */

/* end of Map */

/* Contact */

/* end of Contact */

/* FOOTER */
footerSection('#footer');
/* end of FOOTER */
