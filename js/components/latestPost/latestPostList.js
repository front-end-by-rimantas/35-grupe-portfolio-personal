function renderLatestpost(selector, data) {
  const DOM = document.querySelector(selector);

  let html = '';
  for (const item of data) {
    html += `<div class="col-12 col-md-4 blog">
    <div class='links'>
    <img src="../../../img/blog-img${item.img}.webp" alt="${item.altText}" class="sizing">
    <a href="#"><img src="../../../img/blog-${item.thumb}-img.webp"></a><a class='link'>${item.link}</a>
    <a href="#">${item.date}</a>
    </div>
    <h4 class='upper-heading'>${item.title}</h4>
    <p class='section-description'>${item.desc}</p>
    </div>`;
  }

  DOM.innerHTML = html;
}

export default renderLatestpost;
