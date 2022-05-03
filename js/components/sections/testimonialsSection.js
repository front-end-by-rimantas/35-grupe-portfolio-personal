import { testimonialsList } from '../../components/testimonialsList/testimonialsList.js';
import { testimonialsData } from '../../data/testimonialsData.js';

const testimonialsSection = (selector) => {
  const DOM = document.querySelector(selector);
  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }
  DOM.innerHTML = `
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 ml-md-1 ml-lg-2 center">
          <h2 class="section-title center">Client's Feedback About Me</h2>
          <p class="section-description center">
            It is very easy to start smoking but it is an uphill task to quit
            it. Ask any chain smoker or even a person.
          </p>
        </div>
        <div class="col-12 testimonials-slider-content">${testimonialsList(
          '#testimonials_block',
          testimonialsData,
          imgPath
        )}</div>
      </div>`;
};
export { testimonialsSection };
