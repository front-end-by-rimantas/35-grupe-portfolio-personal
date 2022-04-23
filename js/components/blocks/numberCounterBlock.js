class Counter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }

    this.innerHTML = `
    <section class="container bg-gradient center">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">2536</h2>
          <p class="section-description center">Projects Completed</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">6784</h2>
          <p class="section-description center">Happy Clients</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">2239</h2>
          <p class="section-description center">Cups of Coffee</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">434</h2>
          <p class="section-description center">Real Professionals</p>
        </div>
      </div>
    </section>`
  }
}

customElements.define('counter-component', Counter);