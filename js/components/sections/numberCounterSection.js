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
  let calculated = false;
  const counter = (items) => {
    if (!calculated) {
      if ((scrollY > 1200 && scrollY < 1300) || scroll) {
        calculated = true;
        const myArr = Array(numbers.length).fill(0);
        const newArr = myArr.map((val, index) => {
          return numbers[index].number;
        });
        for (let i = 0; i <= Math.max(...newArr); i++) {
          for (let ii = 0; ii < numbers.length; ii++) {
            setTimeout(renderNumbers(items, i, ii, newArr), 10);
          }
        }
      }
    }
  };

  addEventListener('scroll', () => counter(DOM.querySelectorAll('h2')));
};

export { numbersCounterContainer };
