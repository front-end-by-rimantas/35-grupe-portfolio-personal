const footerSection = (selector) => {
  const DOM = document.querySelector(selector);
  DOM.innerHTML = `
  <div class="row">
        <div class="col-12 col-sm-6 col-lg-5">
          <h4 class="section-smaller">About Me</h4>
          <p class="section-description">
            We have tested a number of registry fix and clean utilities and
            present our top 3 list on our site for your convenience
          </p>
          <p class="section-description">
            Copyright ©2022 All rights reserved | This template is made with<i
              class="fa-regular fa-heart"
            ></i>
            by <a class="weblink" href="#">Colorlib</a>
          </p>
        </div>
        <div class="col-12 col-sm-6 col-lg-5">
          <h4 class="section-smaller">Newsletter</h4>
          <p class="section-description">Stay updated with our latest trends</p>
          <form id="forma" class="col-12 col-md-6 ml-lg-1">
            <input
              class="email"
              type="email"
              placeholder="Enter Email Address"
              required
            />
            <button class="submit" type="submit">
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </form>
        </div>
        <div class="col-12 col-sm-12 col-lg-2 social">
          <h4 class="section-smaller mr-btm">Follow Me</h4>
          <p class="section-description">Let us be social</p>
          <a href="https://www.facebook.com/" target="_blank"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/" target="_blank"
            ><i class="fa-brands fa-twitter"></i
          ></a>
          <a href="https://dribbble.com/" target="_blank"
            ><i class="fa-brands fa-dribbble"></i
          ></a>
          <a href="https://www.behance.net/" target="_blank"
            ><i class="fa-brands fa-behance"></i
          ></a>
        </div>
      </div>`;

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    formDOM.querySelector('input').value = '';
  });
};

export { footerSection };
