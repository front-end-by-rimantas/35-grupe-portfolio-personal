const pageNameSection = (selector) => {
  const DOM = document.querySelector(selector);
  let pageName = '';
  if (document.URL.includes('about')) {
    pageName = 'About Me';
  } else if (document.URL.includes('services')) {
    pageName = 'Services';
  } else if (document.URL.includes('portfolio')) {
    pageName = 'Portfolio';
  } else if (document.URL.includes('pricing')) {
    pageName = 'Pricing Plan';
  } else if (document.URL.includes('contact')) {
    pageName = 'Contact Us';
  }
  DOM.innerHTML = `
  <div class="row">
        <div class="flex-center">
          <h1 class="section-title page-name">${pageName}</h1>
          <div class="inline">
            <a href="../" class="link-styling section-description">Home</a>
            <span class="lnr lnr-arrow-right"></span>
            <a href="./" class="link-styling section-description">${pageName}</a>
          </div>
        </div>
      </div>
  `
}

export { pageNameSection }