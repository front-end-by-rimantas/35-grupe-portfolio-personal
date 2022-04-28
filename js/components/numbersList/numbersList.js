function numbersList(selector, data) {
    const DOM = document.querySelector(selector);
    let html = '';
    for (const item of data) {
        html += `
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3">
            <h2 class="section-headline center num">${item.number}</h2>
            <p class="section-description center">${item.desc}</p>
          </div>`;
    }
    if (DOM) {
      DOM.innerHTML = html;
    }
    return html;
  }
  export { numbersList };
  