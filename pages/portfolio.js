function showWelcome(welcomeData) {
  const imgWelcomeEl = document.querySelector(".welcome__hero");
  const titleWelcomeEl = document.querySelector(".welcome__title");

  imgWelcomeEl.setAttribute("src", welcomeData.img);
  titleWelcomeEl.textContent = welcomeData.title;
}

function showCards(cardsData) {
  const containerTemplateEl = document.querySelector(".card-container");
  const templateEl = containerTemplateEl.querySelector(".template").content;

  const cardImgEl = templateEl.querySelector(".card__img");
  const cardTitleEl = templateEl.querySelector(".card__title");
  const cardDescEl = templateEl.querySelector(".card__description");

  cardImgEl.setAttribute("src", cardsData.img);
  cardTitleEl.textContent = cardsData.title;
  cardDescEl.textContent = cardsData.description;

  const clone = document.importNode(templateEl, true);

  containerTemplateEl.appendChild(clone);
}

function parseData(res) {
  const portfolio = res.items.filter((x) => {
    return x.sys.contentType.sys.id == "work";
  });

  const portfolioImg = res.includes.Asset.filter((x) => {
    return x.metadata.tags[0].sys.id == "work";
  });

  const cardsData = portfolio.map((item) => {
    return {
      title: item.fields.title,
      description: item.fields.description,
    };
  });
  let contador = 0;
  cardsData.map((field) => {
    field.img = portfolioImg[contador].fields.file.url;
    contador++;
  });

  const portfolioWelcomeTitle = res.items.find((x) => {
    return x.metadata.tags[0].sys.id == "welcomeWork";
  });

  const portfolioImgWelcome = res.includes.Asset.filter((x) => {
    return x.metadata.tags[0].sys.id == "welcomeService";
  });

  const welcomeData = {
    title: portfolioWelcomeTitle.fields.titleWelcome,
    img: portfolioImgWelcome[0].fields.file.url,
  };
  showWelcome(welcomeData);
  return cardsData;
}

function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/xfz9lznsmed7/environments/master/entries?access_token=5qriaqQtppfoNJR67S_Qv2ZKGPR3xA456sGwZj23GPM"
  )
    .then((obj) => {
      return obj.json();
    })
    .then((data) => {
      return parseData(data);
    });
}

function mainPortfolio() {
  headerComponent(document.querySelector(".header-cont"));
  welcomeComponent(document.querySelector(".welcome-cont"));
  cardComponent(document.querySelector(".main-container"));
  footerComponent(document.querySelector(".footer-cont"));

  getData().then((cards) => {
    for (const card of cards) {
      showCards(card);
    }
  });
}
mainPortfolio();
