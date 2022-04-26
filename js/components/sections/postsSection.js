import renderLatestpost from '../../components/latestPost/latestPostList.js';
import latestPostData from '../../data/latestPostData.js';
const postsSection = (selector) => {
  const DOM = document.querySelector(selector);
  DOM.innerHTML = `
  <div class="row">
    <div class="col-12 col-md-10 ml-md-1 col-lg-8 ml-lg-2 center">
      <h2 class="section-title">Latest Posts From Our Blog</h2>
      <p class="section-description">
        You may be a skillful, effective employer but if you don’t trust
        your personnel and the opposite, then the chances of improving and
        expanding the business
      </p>
    </div>
  </div>
  <div id="latest_blog" class="row">${renderLatestpost('#latest_blog', latestPostData)}</div>`
}
export { postsSection }