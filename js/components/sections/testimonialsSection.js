import { Carousel } from '../carousel/Carousel.js';
import { TestimonialCard } from '../carousel/Testimonials.js';
// import { testimonialsList } from '../../components/testimonialsList/testimonialsList.js';
import { testimonialsData } from '../../data/testimonialsData.js';

const testimonialsSection = (selector) => {
  const carouselHTML = new Carousel(testimonialsData, TestimonialCard, 'testimonials', {
    size: {
      mobile: 1,
      tablet: 2,
      desktop: 2,
    },
    previousNext: true,
  });

  const DOM = document.querySelector(selector);

  const cardsVisible = () => {
    let cardCount = 0;
    if (window.innerWidth >= 991) {
      cardCount = carouselHTML.size.desktop;
    } else if (window.innerWidth >= 767) {
      cardCount = carouselHTML.size.tablet;
    } else {
      cardCount = carouselHTML.size.mobile;
    }
    return cardCount;
  };

  let width = 0;
  let trans = 0;

  const render = () => {
    width = (carouselHTML.listLength / cardsVisible()) * 100;
    trans = (100 / carouselHTML.listLength) * cardsVisible();

    let arrowUpHTML = '';
    let arrowDownHTML = '';

    if (carouselHTML.previousNext) {
      arrowUpHTML = '<span class="lnr lnr-arrow-up carousel-btn"></span>';
      arrowDownHTML = '<span class="lnr lnr-arrow-down carousel-btn"></span>';
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
        <div class="testimonials-actions">
                ${arrowUpHTML}
                ${arrowDownHTML}
        </div>
        <div class="col-12 carousel">
          <div class="list-view"> 
            <div class="list" style="transform: translateX(-${trans}%); width: ${width}%">
            ${carouselHTML.fullListHTML}
            </div>
          </div>
        </div>
      </div>`;
  };

  render();
}

export { testimonialsSection }
