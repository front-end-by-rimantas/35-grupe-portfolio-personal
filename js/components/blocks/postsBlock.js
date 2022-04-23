class Posts extends HTMLElement {
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
        <div class="col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2 center">
          <h2 class="section-title">Latest Posts From Our Blog</h2>
          <p class="section-description">
            You may be a skillful, effective employer but if you don’t trust
            your personnel and the opposite, then the chances of improving and
            expanding the business
          </p>
        </div>
      </div>
      <div id="latest_blog" class="row"></div>
    </section>`
  }
}

customElements.define('posts-component', Posts);