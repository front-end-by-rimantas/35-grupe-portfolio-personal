class SponsorCard {
  constructor(imgPath, imgAlt) {
    this.imgPath = imgPath;
    this.imgAlt = imgAlt;
  }
  render() {
    return `<img src='${this.imgPath}' alt='${this.imgAlt}' class="item"></img>`;
  }
}

export { SponsorCard };
