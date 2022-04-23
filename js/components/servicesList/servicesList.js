const servicesList = (selector, data) => {
  const DOM = document.querySelector(selector);
  let htmlString = '';
  for (const iterator of data) {
    htmlString += `<div class="col-12 col-md-6 col-lg-4">
                    <span class="lnr lnr-${iterator.icon} service-icon"></span>
                    <h2 class="section-smaller">${iterator.title}</h2>
                    <p class="section-description service">
                      ${iterator.description}
                    </p>
                </div>`;
  }

  DOM.innerHTML = htmlString;
  return DOM.innerHTML;
};

export default servicesList;