class SponsorCard {
  constructor(imgPath, imgAlt, elementCount) {
    this.imgPath = imgPath;
    this.imgAlt = imgAlt;
    this.elementCount = elementCount;
  }

  render() {
    let imgPath = '';
    if (document.URL.includes('pages')) {
      imgPath = '../.';
    }
    const width = 100 / this.elementCount;
    return `<img src='${imgPath + this.imgPath}' alt='${
      imgPath + this.imgAlt
    }' class="sponsorCard" style="width:${width}%">`;
  }
}

export { SponsorCard };
