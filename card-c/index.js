function cardComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class ="main-container">
  <div class="card-container">
  <template class="template">
  
    <article class="card">
      <img
        src=""
        alt=""
        class="card__img"
      />
      <h3 class="card__title"></h3>
      <p class="card__description">
        
      </p>
    </article>
    </template>
    </div>
    </div>

    `;

  el.appendChild(componentEl);
}
