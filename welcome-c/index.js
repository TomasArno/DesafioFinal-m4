function welcomeComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="welcome">
  
    <div class="welcome__content">
      <h1 class="welcome__title">
      </h1>
      <img src="" alt="" class="welcome__hero" />
    </div>
  </section>
  `;
  el.appendChild(componentEl);
}
