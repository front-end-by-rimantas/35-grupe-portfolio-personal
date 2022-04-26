const heroSection = (selector) => {
  const DOM = document.querySelector(selector)
  let imgPath = '';
  if (document.URL.includes('pages')) {
    imgPath = '../.';
  }
  DOM.innerHTML = `
  <div class="row visible-flex hero-container-row no-margin-bottom-sm">
  <div class="col-12 col-md-6 hero-container-text-box">
    <h6 class="section-headline hero uppercase left">This is me</h6>
    <h1 class="section-title hero">PHILIP GILBERT</h1>
    <p class="section-description hero left">
      You will begin to realise why this exercise is called the Dickens
      Pattern with reference to the ghost showing Scrooge some different
      futures.
    </p>
    <a href="#" class="btn">Discover now</a>
  </div>
  <div class="col-8 col-md-6 ml-md-0 col-xl-6 sizing align-self">
    <img
      src="${imgPath}./img/hero-img.webp"
      alt="hero-img"
      style="width: 100%; object-fit: cover"
    />
  </div>
</div>`
}

export { heroSection }

