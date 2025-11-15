const photoCards = [
  {
    name: "A Chevy Impala",
    link: "https://i.redd.it/nm5bawp9v6pf1.jpeg",
    gear: "Canon Rebel EOS T6",
  },
  {
    name: "Air Max 90's",
    link: "https://i.redd.it/cyv6vztkkinf1.jpeg",
    gear: "Canon Rebel EOS T6",
  },
  {
    name: "Cat number 1, Boo Boo",
    link: "https://i.redd.it/vk0q83op0lkf1.jpeg",
    gear: "Canon Rebel EOS T6",
  },
  {
    name: "Cat number 2, Mimi",
    link: "https://i.redd.it/xmbdntunvrkf1.jpeg",
    gear: "Canon Rebel EOS T6",
  },
  {
    name: "False Sunflower",
    link: "https://pbs.twimg.com/media/GzMvDLTXkAAam57?format=jpg&name=large",
    gear: "Canon Rebel EOS T6",
  },
  {
    name: "Path Lights",
    link: "https://pbs.twimg.com/media/GzMvDO4XgAEuuOe?format=jpg&name=large",
    gear: "Canon Rebel EOS T6",
  },
];

const photoModal = document.querySelector("#preview-modal");
const modalClose = photoModal.querySelector(".modal__close-btn");
const previewImg = photoModal.querySelector(".modal__image");
const previewCaption = photoModal.querySelector(".modal__caption");
const previewCaptionGear = photoModal.querySelector(".modal__caption-gear");

const photoCardContainer = document.querySelector(".cards__container");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

modalClose.addEventListener("click", function () {
  closeModal(photoModal);
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

    openModal(photoModal);
  });

  return cardElement;
}

photoCards.forEach((card) => {
  const photo = getCardElement(card);

  photoCardContainer.prepend(photo);
});
