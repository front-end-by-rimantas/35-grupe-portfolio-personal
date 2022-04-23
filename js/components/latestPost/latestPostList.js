function renderLatestpost(selector, data) {
  const DOM = document.querySelector(selector);

  let html = '';
  for (const item of data) {
    html += `<div class="col-12 col-md-4 blog">
    <img class='img' src="../../../img/blog-img${item.img}.webp" alt="${item.altText}" class="sizing">
    <div class='links'>
    <a class= 'link' href="#"><img src='../../../img/blog-${item.thumb}-img.webp'>${item.link}</a>
    <a class= 'comments' href="#">${item.date}</a>
    </div>
    <h4 class='upper-heading'>${item.title}</h4>
    <p class='section-description mr-btm'>${item.desc}</p>
    </div>`;
  }

  DOM.innerHTML = html;
}

export default renderLatestpost;
