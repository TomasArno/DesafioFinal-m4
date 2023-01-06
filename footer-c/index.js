function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<footer class="footer">
  <div class="footer__content">
    <img src="./images/sun.jpg" alt="" class="logo" />
    
    <div class="footer__social-media">
      <div class="footer__item-app-container">
      <a href="https://github.com/TomasArno?tab=repositories">
        <img src="./images/Instagram_icon.png.webp" class="footer__app-logo" />
        </a>
      </div>
      <div class="footer__item-app-container">
      <a href="https://github.com/TomasArno?tab=repositories">
        <img src="./images/pngwing.com.png" class="footer__app-logo" />
      </a>
        </div>
      <div class="footer__item-app-container">
      <a href="https://github.com/TomasArno?tab=repositories">
        <img src="./images/pngegg.png" class="footer__app-logo" />
        </a>
      </div>
    </div>
    <p class="copyrigth">2022 - https://apx.school</p>
  </div>
</footer>`;
  el.appendChild(componentEl);
}
