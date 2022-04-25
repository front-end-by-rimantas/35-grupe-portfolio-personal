function featuredProjectsList(selector, data) {
  const DOM = document.querySelector(selector);
  let html = '';
  for (const item of data) {
    html += `<div class="col-12 col-sm-4 latest-projects-block">
        <div class="project-img">
        <img src="./img/project-img${item.image}.webp" alt="Project" class="sizing" />
        <img
        src="./img/preview-icon.webp"
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
