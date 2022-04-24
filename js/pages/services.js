// component imports
import servicesList from '../components/servicesList/servicesList.js';
import servicesData from '../data/servicesData.js';

import { renderPlans } from '../components/plansList/plansList.js';
import { plansData } from '../data/plansData.js';
// components execution

/* HEADER */
const mainHeaderDOM = document.querySelector('.main-header');

addEventListener('scroll', function () {
    const headerPosition = 150;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('shadow');
    } else {
        mainHeaderDOM.classList.remove('shadow');
    }
})
/* enf of HEADER */

/* Page name */
/* Page name end */

/* OfferedService */
servicesList('#services_block', servicesData);
/* end of OfferedService */

/* NumbersCounter */
/* end of NumbersCounter */

/* Plans */
renderPlans('#plans_block', plansData);
/* end of Plans */

/* Testimonials */
/* end of Testimonials */

/* FOOTER */
/* end of FOOTER */
