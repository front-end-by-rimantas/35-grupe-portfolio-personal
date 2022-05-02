import { featuredProjectsList } from '../../components/featuredProjectsList.js/featuredProjectsList.js';
import { featuredProjectsData } from '../../data/featuredProjectsData.js';

const projectsSection = (selector) => {
  const DOM = document.querySelector(selector);
  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }

  DOM.innerHTML = `
    <div class="row">
      <div class="col-12 col-md-10 ml-md-1 col-xl-6 ml-xl-3">
        <h2 class="section-title center line">Our Latest Featured Projects</h2>
        <p class="section-description center">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 ml-md-3 col-xl-4 ml-xl-4">
        <a class="sub-header filter active-filter" href="#projects">ALL</a>
        <a class="sub-header filter" href="#projects">VECTOR</a>
        <a class="sub-header filter" href="#projects">RASTER</a>
        <a class="sub-header filter" href="#projects">UI/UX</a>
        <a class="sub-header filter" href="#projects">PRINTING</a>
      </div>
    </div>
    <div id="featuredProjects_block" class="row">${featuredProjectsList(
      '#featuredProjects_block',
      featuredProjectsData,
      imgPath
    )}</div> `;

  // const animationAdd = (block) => {
  //   block.classList.add('animation');
  //   setTimeout(function () {
  //   block.classList.remove('animation');
  //   }, 500);
  // };

  const elementsList = document.getElementsByClassName('filter');
  for (let i = 0; i < elementsList.length; i++) {
    elementsList[i].addEventListener('click', function () {
      const dabartinis = document.getElementsByClassName('active-filter');
      dabartinis[0].className = dabartinis[0].className.replace(
        'active-filter',
        ''
      );
      this.className += ' active-filter';

      function projectsFilter(card) {
        const featurai = document.getElementsByClassName('filter-card');
        for (let a = 0; a < featurai.length; a++) {
          let featuras = featurai[a];
          if (featurai[a].children[2].innerText !== card) {
            featuras.classList.add('no-display');
            // animationAdd(featuras);
            // setTimeout(function () {
            //   featuras.classList.add('no-display');
            // }, 500);
          } else {
            featuras.classList.remove('no-display');
          }
        }
      }

      const aktyvus = document.querySelector('.active-filter');
      if (aktyvus.innerHTML.includes('VECTOR')) {
        projectsFilter('vector');
      } else if (aktyvus.innerHTML.includes('RASTER')) {
        projectsFilter('raster');
      } else if (aktyvus.innerHTML.includes('UI/UX')) {
        projectsFilter('Agency');
      } else if (aktyvus.innerHTML.includes('PRINTING')) {
        projectsFilter('Portal');
      } else {
        const featurai = document.getElementsByClassName('filter-card');
        for (let a = 0; a < featurai.length; a++) {
          let featuras = featurai[a];
          featuras.classList.remove('no-display');
        }
      }
    });
  }
};

export { projectsSection };
