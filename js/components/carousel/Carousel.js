import { sponsorsData } from '../../data/sponsorsData.js';
import { SponsorCard } from './SponsorCard.js';
class Carousel {
  constructor(cardClass, data, settings) {
    this.cardClass = cardClass;
    this.data = data;
    this.settings = settings;
    this.size = { mobile: 1, tablet: 2, minDesktop: 3, maxDesktop: 5 };
    this.previousNext = false;

    this.init();
  }

  init() {
    this.updateDefaultSetting();
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

  getListElement(index) {
    return new SponsorCard(
      sponsorsData.imgPath + sponsorsData.list[index].src,
      sponsorsData.imgPath + sponsorsData.list[index].alt
    ).render();
  }

  listHTML() {
    let html = '';
    html += this.getListElement(sponsorsData.list.length - 2);
    html += this.getListElement(sponsorsData.list.length - 1);
    for (let i = 0; i < sponsorsData.list.length; i++) {
      html += this.getListElement(i);
    }
    html += this.getListElement(0);
    html += this.getListElement(1);
    return html;
  }

  getHTML() {
    let html = this.listHTML();
    console.log(html);
    return html;
  }
}

export { Carousel };
