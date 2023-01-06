function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="contact">
  <h2 class="contact__title">Escribime</h2>
  <form class="form">
    <label for="" class="form__label">
      <p class="form__input-title">Nombre</p>
      <input type="text" name="name" class="form__input" required/>
    </label>
    <label for="" class="form__label">
      <p class="form__input-title">Email</p>
      <input type="email" name="email" class="form__input" required />
    </label>
    <label for="" class="form__label">
      <p class="form__input-title">Mensaje</p>
      <textarea type="text" name="message" class="form__textarea"></textarea>
    </label>
    <button type ="submit" class="button">Enviar</button>
  </form>
</section>`;

  const formEl = componentEl.querySelector(".form");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    var data = new FormData(formEl);

    let message = data.get("message");

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "arnotomas1@gmail.com",
        message: message,
      }),
    })
      .then(() => {
        console.log("el form se envió correctamente");
        formEl.reset();
      })
      .catch(() => {
        console.log("El form NO se envió debido a un error inesperado");
      });
  });

  el.appendChild(componentEl);
}
