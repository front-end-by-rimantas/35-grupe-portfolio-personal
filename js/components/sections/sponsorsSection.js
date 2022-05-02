import { Carousel } from '../carousel/Carousel.js';
import { sponsorsData } from '../../data/sponsorsData.js';
import { SponsorCard } from '../carousel/SponsorCard.js';

const sponsorsSection = (selector) => {
  const carouselHTML = new Carousel(sponsorsData, SponsorCard, 'sponsor', {
    size: {
      mobile: 2,
      tablet: 3,
      desktop: 5,
    },
  });

  const DOM = document.querySelector(selector);

  const getScreenCardCount = () => {
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
    width = (carouselHTML.listLength / getScreenCardCount()) * 100;
    trans = (100 / carouselHTML.listLength) * getScreenCardCount();

    DOM.innerHTML = `
    <div class="row">
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

  window.addEventListener('resize', function () {
    render();

    const allItems = document.querySelectorAll('.list > .sponsorCard');

    if (getScreenCardCount() === carouselHTML.size.desktop) {
      for (const i of allItems) {
        i.classList.add('bigScreenPadding');
      }
    } else if (getScreenCardCount() === carouselHTML.size.tablet) {
      for (const i of allItems) {
        i.classList.add('mdScreenPadding');
      }
    } else {
      for (const i of allItems) {
        i.classList.add('smScreenPadding');
      }
    }
  });

  const orginalColor = document.querySelector('.list').style.color;
  document.querySelector('.list').onmouseover = function () {
    this.style.color = 'red';
  };
  document.querySelector('.list').onmouseleave = function () {
    this.style.color = orginalColor;
  };

  const nextSlide = () => {
    if (document.querySelector('.list').style.color !== 'red') {
      trans += 100 / carouselHTML.listLength;
      document.querySelector('.list').style.transition = `all 1s`;
      document.querySelector(
        '.list'
      ).style.transform = `translateX(-${trans}%)`;
      if (trans > (100 / carouselHTML.listLength) * 5 * 2) {
        trans = (100 / carouselHTML.listLength) * 5;
        document.querySelector('.list').style.transition = `none 0s`;
        document.querySelector(
          '.list'
        ).style.transform = `translateX(-${trans}%)`;
        setTimeout(nextSlide, 0);
      } else {
        setTimeout(nextSlide, 3000);
      }
    } else {
      setTimeout(nextSlide, 3000);
    }
  };
  setTimeout(nextSlide, 3000);
};

export { sponsorsSection };
