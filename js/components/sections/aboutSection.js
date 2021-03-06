const aboutSection = (selector) => {
  const DOM = document.querySelector(selector);

  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }
  DOM.innerHTML = `
  <div class="row visible-flex about-container-row no-margin">
        <div class="col-12 col-md-6">
          <img src="${imgPath}./img/about-img.webp" alt="Me" class="sizing" />
        </div>
        <div class="col-12 col-md-6 col-lg-5 ml-lg-1">
          <h3 class="section-headline uppercase aboutMe left">ABOUT ME</h3>
          <h2 class="section-title about-me">PERSONAL DETAILS</h2>
          <p class="section-description about-me left">
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought. such as Coca Cola. Dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
          <a href="#" class="btn">View full details</a>
        </div>
      </div>`
}

export { aboutSection }