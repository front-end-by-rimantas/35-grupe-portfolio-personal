class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }

    this.innerHTML = `
    <section class="container bg-third-color">
      <div class="row">
        <div class="col-12 col-md-6">
          <h6 class="section-headline left">This is me</h6>
          <h1 class="section-title uppercase">PHILIP GILBERT</h1>
          <p class="section-description left">
            You will begin to realise why this exercise is called the Dickens
            Pattern with reference to the ghost showing Scrooge some different
            futures.
          </p>
          <a href="#" class="btn">Discover now</a>
        </div>
        <div class="col-10 ml-1 col-md-6 ml-md-0 col-xl-5">
          <img src="${imgPath}./img/hero-img.webp" alt="hero-img" class="sizing" />
        </div>
      </div>
    </section>`
  }
}

customElements.define('hero-component', Hero);