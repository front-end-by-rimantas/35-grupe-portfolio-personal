function testimonialsList(selector, data, imgPath) {
  const DOM = document.querySelector(selector);
  let html = `<div class="testimonials-actions">
  <span class="lnr lnr-arrow-up carousel-btn"></span>
  <span class="lnr lnr-arrow-down carousel-btn"></span>
</div>`;
  for (const item of data) {
    html += `<div class="col-12 testimonials-slider-content">
      <div class="testimonials-card">
        <div class="testimonials-content">
          <img
            src="${imgPath}./img/blog-${item.picture}-img.webp"
            alt="author"
            class="testimonials-img"
          />
          <p class="section-description">
          ${item.text}
          </p>
          <h3 class="section-smaller">${item.feedbackProvider}</h3>
          <p class="section-description">${item.job}</p>
        </div>
      </div>
    </div>
    `;
  }
  if (DOM) {
    DOM.innerHTML = html;
  }
  return html;
}
export { testimonialsList };
