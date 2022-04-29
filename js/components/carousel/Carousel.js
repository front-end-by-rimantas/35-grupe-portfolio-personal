import { SponsorCard } from './SponsorCard.js';
class Carousel {
  constructor(data, cardClass, section, settings) {
    this.cardClass = cardClass;
    this.data = data;
    this.settings = settings;
    this.size = { mobile: 1, tablet: 2, desktop: 5 };
    this.previousNext = false;
    this.listLength = 0;
    this.fullListHTML = '';
    this.section = section;

    this.init();
  }

  init() {
    this.updateDefaultSetting();
    this.listHTML();
  }

  isObject(obj) {
    if (typeof obj !== 'object' || obj !== null || Array.isArray(obj)) {
      return true;
    }
  }

  updateDefaultSetting() {
    if (!this.isObject(this.settings)) {
      return 'Ne objetas';
    }
    if (this.isObject(this.settings.size)) {
      if (
        this.settings.size.mobile &&
        Number.isInteger(this.settings.size.mobile)
      ) {
        this.size.mobile = this.settings.size.mobile;
      }
      if (
        this.settings.size.tablet &&
        Number.isInteger(this.settings.size.tablet)
      ) {
        this.size.tablet = this.settings.size.tablet;
      }
      if (
        this.settings.size.minDesktop &&
        Number.isInteger(this.settings.size.minDesktop)
      ) {
        this.size.minDesktop = this.settings.size.minDesktop;
      }
      if (
        this.settings.size.maxDesktop &&
        Number.isInteger(this.settings.size.maxDesktop)
      ) {
        this.size.maxDesktop = this.settings.size.maxDesktop;
      }
    }

    if (
      this.settings.previousNext &&
      typeof this.settings.previousNext === 'boolean'
    ) {
      this.previousNext = this.settings.previousNext;
    }
  }

  listHTML() {
    let html = '';

    let maxImgInPage = 0;
    for (const key in this.size) {
      if (maxImgInPage < this.size[key]) {
        maxImgInPage = this.size[key];
      }
    }

    const list = [
      ...this.data.list.slice(-maxImgInPage),
      ...this.data.list,
      ...this.data.list.slice(0, maxImgInPage),
    ];
    this.listLength = list.length;
    for (let i = 0; i < list.length; i++) {
      if (this.section === 'sponsor') {
        html += new SponsorCard(
          this.data.imgPath + list[i].src,
          this.data.imgPath + list[i].alt,
          list.length
        ).render();
      } else {
        console.log('Need to choose section card');
      }
    }
    this.fullListHTML = html;
  }
}

export { Carousel };
