import { featuredProjectsList } from '../../components/featuredProjectsList.js/featuredProjectsList.js';
import { featuredProjectsData } from '../../data/featuredProjectsData.js';

const projectsSection = (selector) => {
  const DOM = document.querySelector(selector)
  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }

  DOM.innerHTML = `
  <div class="row">
        <div class="col-12 col-md-8 ml-md-2 col-xl-6 ml-xl-3">
          <h2 class="section-title center">Our Latest Featured Projects</h2>
          <p class="section-description center">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 ml-md-3 col-xl-4 ml-xl-4">
          <a class="sub-header aa active" href="#projects">ALL</a>
          <a class="sub-header aa" href="#projects">VECTOR</a>
          <a class="sub-header aa" href="#projects">RASTER</a>
          <a class="sub-header aa" href="#projects">UI/UX</a>
          <a class="sub-header aa" href="#projects">PRINTING</a>
        </div>
      </div>
      <div id="featuredProjects_block" class="row">${featuredProjectsList('#featuredProjects_block', featuredProjectsData, imgPath)}</div> `
  
 
//   const dom = document.querySelector(".aa");
//   console.log(dom);

 
// function activeClass() {
//   // const all = document.querySelectorAll('a.aa');
//   // console.log(all);
  
//   if (dom.classList.contains('.active')) {
//     // all.classList.remove('.active');
//     dom.classList.remove('active');
//   } else {
//     // dom.classList.remove('.active');
//     dom.classList.add('active');
//   } 
// } 
// dom.addEventListener("click", activeClass());
}





export { projectsSection }




// addEventListener()
