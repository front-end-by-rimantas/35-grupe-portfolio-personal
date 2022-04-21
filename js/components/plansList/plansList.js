function renderPlans(selector, data) {
   const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `
        <div class="col-12 col-md-6 col-lg-3 text section-description">
        <span class="circle">${item.number}</span>
        <h3 class="section-smaller">${item.title}</h3>
        <p class="section-description">${item.desc}</p>
        <p class="section-description">${item.offer[0]}</p>
        <p class="section-description">${item.offer[1]}</p>
        <p class="section-description">${item.offer[2]}</p>
        <h2 class="section-cost">${item.currency} ${item.price}</h2>
      </div>`;
    }

    DOM.innerHTML = HTML;
}

export { renderPlans };