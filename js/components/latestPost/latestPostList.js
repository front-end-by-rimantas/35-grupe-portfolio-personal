function renderLatestpost(selector, data) {
  const DOM = document.querySelector(selector);

  let html = '';
  for (const item of data) {
    html += `<div class="col-12 col-md-4">
    <div>
    <img src="../../../img/blog-img${item.img}.webp" alt="${item.altText}" class="sizing">
    <a href="#"><img src="../../../img/blog-${item.thumb}-img.webp">${item.link}</a>
    <a href="#">${item.date}</a>
    </div>
    <h4>${item.title}</h4>
    <p>${item.desc}</p>
    </div>`;
  }
  if (DOM) {
    DOM.innerHTML = html;
  }
  return html;
}

export default renderLatestpost;
