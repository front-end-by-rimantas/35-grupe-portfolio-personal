// component imports
import { headerSection } from '../components/sections/headerSection.js'
import { footerSection } from '../components/sections/footerSection.js'
import { plansSection } from '../components/sections/plansSection.js'
import { FAQSection } from '../components/sections/FAQSection.js';
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
/* end of Name of page end */

/* Plans */
plansSection('#plans');
/* end of Plans */

/* Frequently Asked Questions  */
FAQSection('#FAQ');
/* Frequently Asked Questions end  */

/* FOOTER  */
footerSection('#footer');
/* end of FOOTER  */
