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

    const aktyvus = document.querySelector(".aktyvi");
      if (aktyvus.innerHTML.includes('VECTOR')) {
        const featurai = document.getElementsByClassName('vienas-vienetas');
        for (let a = 0; a < featurai.length; a++) {
          if (featurai[a].children[2].innerText !== 'vector') {
            let featuras = featurai[a];
            featuras.classList.add('dingo');
          } else {
            let featuras = featurai[a];
            featuras.classList.remove('dingo');
          }
        }
      } else if (aktyvus.innerHTML.includes('RASTER')) {
        const featurai = document.getElementsByClassName('vienas-vienetas');
        for (let a = 0; a < featurai.length; a++) {
          if (featurai[a].children[2].innerText !== 'raster') {
          let featuras = featurai[a];
          featuras.classList.add('dingo');
          } else {
            let featuras = featurai[a];
            featuras.classList.remove('dingo');
          }
        }
      } else if (aktyvus.innerHTML.includes('UI/UX')) {
        const featurai = document.getElementsByClassName('vienas-vienetas');
        for (let a = 0; a < featurai.length; a++) {
          if (featurai[a].children[2].innerText !== 'Agency') {
          let featuras = featurai[a];
          featuras.classList.add('dingo');
          } else {
            let featuras = featurai[a];
            featuras.classList.remove('dingo');
          }
        }
      } else if (aktyvus.innerHTML.includes('PRINTING')) {
        const featurai = document.getElementsByClassName('vienas-vienetas');
        for (let a = 0; a < featurai.length; a++) {
          if (featurai[a].children[2].innerText !== 'Portal') {
          let featuras = featurai[a];
          featuras.classList.add('dingo');
          } else {
            let featuras = featurai[a];
            featuras.classList.remove('dingo');
          }
        }
      } else {
        const featurai = document.getElementsByClassName('vienas-vienetas');
        for (let a = 0; a < featurai.length; a++) {
          let featuras = featurai[a];
          featuras.classList.remove('dingo');
        }
      }
    });
  }
}

export { projectsSection }
