const footerSection = (selector) => {
  const DOM = document.querySelector(selector)
  DOM.innerHTML = `
  <div class="row">
        <div class="col-12 col-sm-6 col-lg-5">
          <h4 class="section-smaller">About Me</h4>
          <p class="section-description">
            We have tested a number of registry fix and clean utilities and
            present our top 3 list on our site for your convenience
          </p>
          <p class="section-description">
            Copyright ©2022 All rights reserved | This template is made with
            &hearts; by <a href="#">Colorlib</a>
          </p>
        </div>
        <div class="col-12 col-sm-6 col-lg-5">
          <h4 class="section-smaller">Newsletter</h4>
          <p class="section-description">Stay updated with our latest trends</p>
          <form class="col-12 col-md-6 ml-lg-1">
            <input type="email" placeholder="Enter Email Address" />
            <button>>></button>
          </form>
        </div>
        <div class="col-12 col-sm-12 col-lg-2">
          <h4 class="section-smaller">Follow Me</h4>
          <p class="section-description">Let us be social</p>
          <a href="#">icon</a>
          <a href="#">icon</a>
          <a href="#">icon</a>
          <a href="#">icon</a>
        </div>
      </div>`
}

export { footerSection }