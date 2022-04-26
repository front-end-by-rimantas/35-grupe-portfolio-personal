const servicesList = (selector, data) => {
  const DOM = document.querySelector(selector);
  let htmlString = '';
  for (const iterator of data) {
    htmlString += `<div class="col-12 col-md-6 col-lg-4 services-selector">
                    <span class="lnr lnr-${iterator.icon} service-icon"></span>
                    <h2 class="section-smaller serviceTitle-selector">${iterator.title}</h2>
                    <p class="section-description service">
                      ${iterator.description}
                    </p>
                </div>`;
  }
  if (DOM) {
    DOM.innerHTML = htmlString;
  }
  return htmlString;
};

export default servicesList;
