function renderPlans(selector, data) {
   const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `
        <div class="text plan">
        <span class="circle">${item.number}</span>
        <h3 class="section-subtitle">${item.title}</h3>
        <p>${item.desc}</p>
        <p>${item.offer[0]}</p>
        <p>${item.offer[1]}</p>
        <p>${item.offer[2]}</p>
        <h2 class="section-title">${item.currency} ${item.price}</h2>
        <a href="#" class="buy-plan">Buy now</a>
      </div>`;
    }

    DOM.innerHTML = HTML;
}

export { renderPlans };
