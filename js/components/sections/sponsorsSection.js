import { Carousel } from '../carousel/Carousel.js';
import { sponsorsData } from '../../data/sponsorsData.js';
import { SponsorCard } from '../carousel/SponsorCard.js';
const sponsorsSection = (selector) => {
  const carouselHTML = new Carousel(sponsorsData, SponsorCard, {
    size: {
      mobile: 1,
      tablet: 2,
      minDesktop: 3,
      maxDesktop: 5,
    },
  });

  const DOM = document.querySelector(selector);
  console.log(Carousel);
  DOM.innerHTML = `
  <div class="row">
    <div class="col-12 carousel"> 
      <div class="list-view"> 
        <div class="list">
        ${carouselHTML.getHTML()}
        </div>
      </div>
    </div>
  </div>`;
};
export { sponsorsSection };

// `<div class="list-view">
//               <div class="list">
//                 <div class="item">4</div>
//                 <div class="item">5</div>
//                 <div class="item">1</div>
//                 <div class="item">2</div>
//                 <div class="item">3</div>
//                 <div class="item">4</div>
//                 <div class="item">5</div>
//                 <div class="item">1</div>
//                 <div class="item">2</div>
//               </div>
//             </div>`;
