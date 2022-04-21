function renderFeaturedProjects(selector, data) {
  const DOM = document.querySelector(selector);
  let HTML = '';
  for (const item of data) {
    HTML += `
        <div class="col-12 col-sm-4 latest-projects-block">
        <div class="project-img">
        <img src="../../../img/project-img${item.image}.webp" alt="Project" class="sizing" />
        <img
        src="../../../img/preview-icon.webp"
        alt="Preview-icon"
        class="preview-hover"
      />
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      </div>`;
  }
  DOM.innerHTML = HTML;
}
export { renderFeaturedProjects };
