class Features extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }

    this.innerHTML = `
    <section class="container center">
      <div class="row">
        <div class="col-12 col-md-8 ml-md-2 col-xl-6 ml-xl-3">
          <h2 class="section-title center">Our Latest Featured Projects</h2>
          <p class="section-description center">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 ml-md-3 col-xl-4 ml-xl-4">
          <a class="sub-header" href="#">ALL</a>
          <a class="sub-header" href="#">VECTOR</a>
          <a class="sub-header" href="#">RASTER</a>
          <a class="sub-header" href="#">UI/UX</a>
          <a class="sub-header" href="#">PRINTING</a>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img1.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">2D Vinyl Design</h3>
          <p class="section-description center">vector</p>
        </div>
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img2.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">2D Vinyl Design</h3>
          <p class="section-description center">vector</p>
        </div>
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img3.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">Creative Poster Design</h3>
          <p class="section-description center">Agency</p>
        </div>
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img4.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">Embosed Logo Design</h3>
          <p class="section-description center">Portal</p>
        </div>
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img5.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">3D Helmet Design</h3>
          <p class="section-description center">vector</p>
        </div>
        <div class="col-12 col-sm-4 latest-projects-block">
          <div class="project-img">
            <img src="${imgPath}./img/project-img6.webp" alt="Project" class="sizing" />
            <img
              src="${imgPath}./img/preview-icon.webp"
              alt="Preview-icon"
              class="preview-hover"
            />
          </div>
          <h3 class="section-smaller">2D Vinyl Design</h3>
          <p class="section-description center">raster</p>
        </div>
      </div>
    </section>`
  }
}

customElements.define('features-component', Features);