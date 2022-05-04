class TestimonialCard {
  constructor(imgPath, picture, text, feedbackProvider, job) {
    this.imgPath = imgPath;
    this.picture = picture;
    this.text = text;
    this.feedbackProvider = feedbackProvider;
    this.job = job;
  }
  render() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }
    return `
    <div class="testimonials-card">
      <div class="testimonials-content">
        <img
          src="${this.imgPath}${this.picture}"  alt="author"
          class="testimonials-img"
        />
        <p class="section-description">
        ${this.text}
        </p>
        <h3 class="section-smaller">${this.feedbackProvider}</h3>
        <p class="section-description">${this.job}</p>
      </div>
    </div>`;
  };
}

export { TestimonialCard }