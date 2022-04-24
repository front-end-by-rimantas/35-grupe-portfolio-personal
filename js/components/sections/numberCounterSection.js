const numbersCounterContainer = (selector) => {
  const DOM = document.querySelector(selector);
  DOM.innerHTML = `
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">2536</h2>
          <p class="section-description center">Projects Completed</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">6784</h2>
          <p class="section-description center">Happy Clients</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">2239</h2>
          <p class="section-description center">Cups of Coffee</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2 class="section-headline center">434</h2>
          <p class="section-description center">Real Professionals</p>
        </div>
      </div>`

}

export { numbersCounterContainer }