function renderPlans(selector, data) {
   const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `
        <div class="text plan">
        <span class="circle">${item.number}</span>
        <h3 class="section-smaller">${item.title}</h3>
        <p class="section-description">${item.desc}</p>
        <p class="section-description">${item.offer[0]}</p>
        <p class="section-description">${item.offer[1]}</p>
        <p class="section-description">${item.offer[2]}</p>
        <h2 class="section-cost">${item.currency} ${item.price}</h2>
        <a href="#" class="buy-plan">buy now</a>
      </div>`;
    }

    DOM.innerHTML = HTML;
}

export { renderPlans };
