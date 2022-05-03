const headerSection = (selector) => {
  const DOM = document.querySelector(selector);

  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }
  DOM.innerHTML = `
    <div class="row nav">
      <div class="col-12">
        <a href="#"><img src="${imgPath}./img/headerLogo.webp" alt="Logo image"/></a>
        <nav class="header-nav visible-lg menu">
          <a ${
            document.URL.includes('pages') ? '' : 'class="active"'
          } href="${imgPath}./">Home</a>
          <a ${
            document.URL.includes('pages/about') ? 'class="active"' : ''
          }href="${
    document.URL.includes('pages/about') ? './' : `${imgPath}./pages/about/`
  }">About</a>
          <a ${
            document.URL.includes('pages/services') ? 'class="active"' : ''
          }href="${
    document.URL.includes('pages/services')
      ? './'
      : `${imgPath}./pages/services/`
  }">Services</a>
          <a ${
            document.URL.includes('pages/portfolio') ? 'class="active"' : ''
          }href="${
    document.URL.includes('pages/portfolio')
      ? './'
      : `${imgPath}./pages/portfolio/`
  }">Portfolio</a>
          <a ${
            document.URL.includes('pages/pricing') ? 'class="active"' : ''
          }href="${
    document.URL.includes('pages/pricing') ? './' : `${imgPath}./pages/pricing/`
  }">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a ${
            document.URL.includes('pages/contact') ? 'class="active"' : ''
          }href="${
    document.URL.includes('pages/contact') ? './' : `${imgPath}./pages/contact/`
  }">Contact</a>
        </nav>
        <div class="hidden-lg icon" id="burger">
          <i class="fa-solid fa-bars menu-icon"></i>
          <i class="fa-solid fa-xmark menu-icon hidden"></i>
        </div>
      </div>
    </div>`;

  function scrollFunction() {
    const headerPosition = 150;
    if (scrollY > headerPosition) {
      DOM.classList.add('shadow');
    } else {
      DOM.classList.remove('shadow');
    }
  }
  addEventListener('scroll', scrollFunction);
  scrollFunction();

  const burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    const headerNav = document.querySelector('.header-nav');
    const burgerIcon = document.querySelector('.fa-bars');
    const crossIcon = document.querySelector('.fa-xmark');
    if (!headerNav.classList.contains('mobile-nav')) {
      headerNav.classList.add('mobile-nav');
      DOM.classList.add('layer');
      burgerIcon.classList.add('hidden');
      crossIcon.classList.remove('hidden');
    } else {
      headerNav.classList.remove('mobile-nav');
      DOM.classList.remove('layer');
      burgerIcon.classList.remove('hidden');
      crossIcon.classList.add('hidden');
    }
    document.onclick = function (e) {
      if (e.target.id === 'header') {
        headerNav.classList.remove('mobile-nav');
        DOM.classList.remove('layer');
        burgerIcon.classList.remove('hidden');
        crossIcon.classList.add('hidden');
      }
    };
  });
};

export { headerSection };
