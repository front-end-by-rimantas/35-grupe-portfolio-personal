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
          <a class="sub-header aa aktyvi" href="#projects">ALL</a>
          <a class="sub-header aa" href="#projects">VECTOR</a>
          <a class="sub-header aa" href="#projects">RASTER</a>
          <a class="sub-header aa" href="#projects">UI/UX</a>
          <a class="sub-header aa" href="#projects">PRINTING</a>
        </div>
      </div>
      <div id="featuredProjects_block" class="row">${featuredProjectsList('#featuredProjects_block', featuredProjectsData, imgPath)}</div> `

    const elementsList =  document.getElementsByClassName("aa");
      for (let i = 0; i < elementsList.length; i++) {
        elementsList[i].addEventListener("click", function() {
       
        const dabartinis = document.getElementsByClassName("aktyvi");
        dabartinis[0].className = dabartinis[0].className.replace("aktyvi", "")
         this.className += " aktyvi";
        });
  }
}

export { projectsSection }
