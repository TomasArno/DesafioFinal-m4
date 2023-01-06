function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<header class="header">
  <a href="./index.html">
  <img src="./images/sun.jpg" alt="" class="logo" />
  </a>

  <img
    src="./images/1024px-Hamburger_icon_white.svg.png"
    alt=""
    class="header__menu-desplegable logo"
  />

  <div class = "menu-desplegado">
  <p class="close-menu">X</p>
  <div class = "menu-desplegado__content">
  <p><a class="menu-desplegado__item" href="./index.html">Home</a></p>
  <p><a class="menu-desplegado__item" href="./portfolio.html">Portfolio</a></p>
  <p><a class="menu-desplegado__item" href="./services.html">Servicios</a></p>
  <p><a class="menu-desplegado__item" href="./contact.html">Contacto</a></p>
  </div>
  </div>

  <div class = "header__menu">
  <p>Porfolio</p>
  <p>Servicios</p>
  <p>Contacto</p>
  </div>
  <div class="header__items-container">
    <p class="header__item"><a href="./portfolio.html">Portfolio</a></p>
    <p class="header__item"><a href="./services.html">Servicios</a></p>
    <p class="header__item"><a href="./contact.html">Contacto</a></p>
  </div>
</header>`;

  el.appendChild(componentEl);

  const menuDesplegable = document.querySelector(".header__menu-desplegable");
  const menuDesplegado = document.querySelector(".menu-desplegado");
  const closeMenu = menuDesplegado.querySelector(".close-menu");

  menuDesplegable.addEventListener("click", () => {
    menuDesplegado.style.display = "inherit";
    menuDesplegable.style.display = "none";
  });

  closeMenu.addEventListener("click", () => {
    menuDesplegado.style.display = "none";
    menuDesplegable.style.display = "inherit";
  });
}
