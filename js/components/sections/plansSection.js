import { renderPlans } from '../../components/plansList/plansList.js';
import { plansData } from '../../data/plansData.js';

const plansSection = (selector) => {
  const DOM = document.querySelector(selector);
  DOM.innerHTML = `
      <div class="row">
        <div class="col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2">
          <h2 class="section-title center">Choose Your Plan</h2>
          <p class="section-description center">
            When someone does something that they know that they shouldn’t do,
            did they.
          </p>
        </div>
      </div>
      <div id="plans_block" class="row bg-third-color">${renderPlans('#plans_block', plansData)}</div>`
}
export { plansSection }