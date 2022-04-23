class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }



    this.innerHTML = `
    <header class="container">
      <div class="row nav">
        <div class="col-12">
          <img src="${imgPath}./img/headerLogo.webp" alt="Logo image" />
          <nav class="hidden visible-md menu">
            <a class="active" href="./">Home</a>
            <a href="./pages/about/">About</a>
            <a href="./pages/services/">Services</a>
            <a href="./pages/portfolio/">Portfolio</a>
            <a href="./pages/pricing/">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
            <a href="./pages/contact/">Contact</a>
          </nav>
          <a href="#" class="hidden-md icon">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>
    </header>`
  }
}

customElements.define('header-component', Header);