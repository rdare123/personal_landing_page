const photoCards = [
  {
    name: "A Chevy Impala",
    link: "https://i.redd.it/nm5bawp9v6pf1.jpeg",
    gear: "camera",
  },
  {
    name: "Air Max 90's",
    link: "https://i.redd.it/cyv6vztkkinf1.jpeg",
    gear: "camera",
  },
  {
    name: "Cat number 1, Boo Boo",
    link: "https://i.redd.it/vk0q83op0lkf1.jpeg",
    gear: "camera",
  },
  {
    name: "Cat number 2, Mimi",
    link: "https://i.redd.it/xmbdntunvrkf1.jpeg",
    gear: "camera",
  },
  {
    name: "False Sunflower",
    link: "https://pbs.twimg.com/media/GzMvDLTXkAAam57?format=jpg&name=large",
    gear: "camera",
  },
  {
    name: "Path Lights",
    link: "https://pbs.twimg.com/media/GzMvDO4XgAEuuOe?format=jpg&name=large",
    gear: "camera",
  },
];

const designCards = [
  {
    name: "Fallout Pip-Boy",
    img: null,
    link: null,
    desc: "",
  },
  {
    name: "Cyberpunk",
    img: null,
    link: null,
    desc: "",
  },
  {
    name: "Digital OLED",
    img: "https://i.redd.it/yyqdmxh3ehbc1.jpeg",
    link: null,
    desc: "",
  },
];

const previewModal = document.querySelector("#preview-modal");
const modalClose = previewModal.querySelector(".modal__close-btn");
const previewImg = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCaptionGear = previewModal.querySelector(".modal__caption-gear");

const photoCardContainer = document.querySelector("#photo-card-container");
const designCardContainer = document.querySelector("#design-card-container");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const designCardTemplate = document
  .querySelector("#card-template-design")
  .content.querySelector(".card");

modalClose.addEventListener("click", function () {
  closeModal(previewModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__caption");
  const cardOpenLink = cardElement.querySelector(".card__open-ext");
  const cardImage = cardElement.querySelector(".card__img");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardOpenLink.textContent = data.link;
  cardOpenLink.href = data.link;
  cardTitle.textContent = data.name;

  cardImage.addEventListener("click", () => {
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    previewImg.src = data.link;
    previewImg.alt = data.name;
    previewCaption.textContent = data.name;
    previewCaptionGear.textContent = data.gear;

    if (data.gear == "camera") {
      previewCaptionGear.textContent = "Canon EOS Rebel T6";
    } else if (data.gear == "phone") {
      previewCaptionGear.textContent = "Samsung Galaxy S24+";
    }

    openModal(previewModal);
  });

  return cardElement;
}

function getDesignCardElement(data) {
  const cardElement = designCardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__caption");
  const cardOpenLink = cardElement.querySelector(".card__open-ext");
  const cardImage = cardElement.querySelector(".card__img");

  cardImage.src = data.img;
  cardImage.alt = data.name;
  cardOpenLink.textContent = "Play Store";
  cardOpenLink.href = data.link;
  cardTitle.textContent = data.name;

  cardImage.addEventListener("click", () => {
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    previewImg.src = data.img;
    previewImg.alt = data.name;
    previewCaption.textContent = data.name;

    openModal(previewModal);
  });

  return cardElement;
}

photoCards.forEach((card) => {
  const photo = getCardElement(card);

  photoCardContainer.prepend(photo);
});

designCards.forEach((card) => {
  const designCard = getDesignCardElement(card);

  designCardContainer.prepend(designCard);
});
