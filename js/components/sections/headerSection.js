const headerSection = (selector) => {
  const DOM = document.querySelector(selector)
  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }
  DOM.innerHTML = `
  <div class="row nav">
        <div class="col-12">
          <img src="${imgPath}./img/headerLogo.webp" alt="Logo image" />
          <nav class="header-nav visible-md menu">
            <a ${document.URL.includes('pages') ? '' : 'class="active"'} href="${imgPath}./">Home</a>
            <a ${document.URL.includes('about') ? 'class="active"' : ''}href="${document.URL.includes('about') ? './' : `${imgPath}./pages/about/`}">About</a>
            <a ${document.URL.includes('services') ? 'class="active"' : ''}href="${document.URL.includes('services') ? './' : `${imgPath}./pages/services/`}">Services</a>
            <a ${document.URL.includes('portfolio') ? 'class="active"' : ''}href="${document.URL.includes('portfolio') ? './' : `${imgPath}./pages/portfolio/`}">Portfolio</a>
            <a ${document.URL.includes('pricing') ? 'class="active"' : ''}href="${document.URL.includes('pricing') ? './' : `${imgPath}./pages/pricing/`}">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
            <a ${document.URL.includes('contact') ? 'class="active"' : ''}href="${document.URL.includes('contact') ? './' : `${imgPath}./pages/contact/`}">Contact</a>
          </nav>
          <a href="#" class="hidden-md icon" id="burger">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>`

}

export { headerSection }