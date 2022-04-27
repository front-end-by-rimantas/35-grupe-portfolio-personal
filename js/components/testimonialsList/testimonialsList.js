function testimonialsList(selector, data) {
  const DOM = document.querySelector(selector);
  let html = '';
  for (const item of data) {
    html += `<div class="col-12 testimonials-slider-content">
      <div class="testimonials-card">
          <img src="./img/blog-${item.picture}-img.webp" alt="author" />
          <div class="testimonials-content">
            <p class="section-description">
              ${item.text}
            </p>
            <h3 class="section-smaller">${item.feedbackProvider}</h3>
            <p class="section-description">${item.job}</p>
          </div>
        </div>
        <div class="testimonials-actions">
          <span class="lnr lnr-arrow-left angle-icon"></span>
          <span class="lnr lnr-arrow-right angle-icon"></span>
        </div>
    </div>`;
  }
  if (DOM) {
    DOM.innerHTML = html;
  }
  return html;
}
export { testimonialsList };
