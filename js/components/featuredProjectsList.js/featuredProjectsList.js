function featuredProjectsList(selector, data, imgPath) {
  const DOM = document.querySelector(selector);
  let html = '';
  for (const item of data) {
    html += `<div class="col-12 col-sm-4 vienas-vienetas">
        <div class="project-img">
        <img src="${imgPath}./img/project-img${item.image}.webp" title=${item.description} alt="Project" class="sizing" />
        <img
        src="${imgPath}./img/preview-icon.webp"
        alt="Preview-icon"
        class="preview-hover"
      />
      </div>
      <h3 class="section-smaller">${item.title}</h3>
      <p class="section-description center">${item.description}</p>
      </div>`;
  }
  if (DOM) {
    DOM.innerHTML = html;
  }
  return html;
}
export { featuredProjectsList };
