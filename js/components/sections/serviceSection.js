import servicesList from '../../components/servicesList/servicesList.js';
import servicesData from '../../data/servicesData.js';

const servicesSection = (selector) => {
  const DOM = document.querySelector(selector);
  DOM.innerHTML = `
  <div class="row">
    <div class="col-12 col-lg-8 ml-lg-2 services-selector">
      <h1 class="section-title">My Offered Services</h1>
      <p class="section-description service">
        At about this time of year, some months after New Year’s resolutions
        have been made and kept, or made and neglected.
      </p>
    </div>
  </div>
  <div id="services_block" class="row">${servicesList('#services_block', servicesData)}</div>`
}
export { servicesSection }
