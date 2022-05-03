const FAQSection = (selector) => {
  const DOM = document.querySelector(selector)

  DOM.innerHTML = ` <div class="row">
  <div class="col-12 col-md-10 col-lg-8 ml-md-1 ml-lg-2 center">
    <h2 class="section-title center">Frequently Asked Questions</h2>
    <p class="section-description center">
      When someone does something that they know that they shouldn’t do,
      did they really have a choice. Maybe what I mean to say is did they
      really have a chance. You can take two people.
    </p>
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-10 col-lg-8 ml-md-1 ml-lg-2 faq-list">
    <div class="question">
      <span class="lnr lnr-chevron-up"></span>
      <span class="lnr lnr-chevron-down"></span>
      <a href="#">Dude You Re Getting A Telescope</a>
    </div>
    <p class="section-description">
      Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo
      ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit
      metus eget diam. Proin ac metus diam.
    </p>
    <div class="question">
      <span class="lnr lnr-chevron-up"></span>
      <span class="lnr lnr-chevron-down"></span>
      <a href="#">The Basics Of Buying A Telescope</a>
    </div>
    <p class="section-description">
      Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis. leo quam
      aliquet diam, congue laoreet elit metus eget diam.
    </p>
    <div class="question">
      <span class="lnr lnr-chevron-up"></span>
      <span class="lnr lnr-chevron-down"></span>
      <a href="#">Astronomy Binoculars A Great Alternative</a>
    </div>
    <p class="section-description">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
      hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
    </p>
    <div class="question">
      <span class="lnr lnr-chevron-up"></span>
      <span class="lnr lnr-chevron-down"></span>
      <a href="#">Do Your Self Realizations Quickly Fade</a>
    </div>
    <p class="section-description">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
      hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
    </p>
    <div class="question">
      <span class="lnr lnr-chevron-up"></span>
      <span class="lnr lnr-chevron-down"></span>
      <a href="#">Success Steps For Your Personal Or Business Life</a>
    </div>
    <p class="section-description">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
      hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
    </p>
  </div>
</div>`
}

export { FAQSection };

