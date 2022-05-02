import { numbersList } from '../../components/numbersList/numbersList.js';
import { numbers } from '../../data/numbers.js';

const numbersCounterContainer = (selector) => {
  const DOM = document.querySelector(selector);

  let DOMhtml = `
  <div class="row">
    ${numbersList('#numberCounter', numbers)}
  </div>`;

  DOM.innerHTML = DOMhtml;

  const renderNumbers = (items, i, num, array) => {
    if (i <= array[num]) {
      setTimeout(() => {
        items[num].innerHTML = i;
      }, 10);
    }
  };

  const counter = (items) => {
    const myArr = Array(items.length).fill(0);
    const newArr = myArr.map((a, b) => {
      return items[b].innerText;
    });
    for (let i = 0; i <= Math.max(...newArr); i++) {
      for (let ii = 0; ii < items.length; ii++) {
        setTimeout(renderNumbers(items, i, ii, newArr), 10);
      }
    }
  };

  counter(DOM.querySelectorAll('h2'));
};

export { numbersCounterContainer };
