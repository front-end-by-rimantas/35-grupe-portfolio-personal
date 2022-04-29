class SponsorCard {
  constructor(imgPath, imgAlt, elementCount) {
    this.imgPath = imgPath;
    this.imgAlt = imgAlt;
    this.elementCount = elementCount;
  }

  render() {
    const width = 100 / this.elementCount;
    return `<img src='${this.imgPath}' alt='${this.imgAlt}' class="sponsorCard" style="width:${width}%">`;
  }
}

export { SponsorCard };
