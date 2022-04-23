class Testimonials extends HTMLElement {
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
        <div class="col-12 col-md-10 col-lg-8 ml-md-1 ml-lg-2 center">
          <h2 class="section-title center">Client's Feedback About Me</h2>
          <p class="section-description center">
            It is very easy to start smoking but it is an uphill task to quit
            it. Ask any chain smoker or even a person.
          </p>
        </div>
        <div class="col-12">SLIDER/CAROUSEL</div>
      </div>
    </section>`
  }
}

customElements.define('testimonials-component', Testimonials);