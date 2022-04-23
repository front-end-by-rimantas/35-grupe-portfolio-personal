class Sponsors extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }
    this.innerHTML = `
    <section class="container bg-gradient">
      <div class="row">
        <div class="col-12">PHOTO SLIDER/CAROUSEL</div>
      </div>
    </section>`
  }
}

customElements.define('sponsors-component', Sponsors);