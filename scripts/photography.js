const photoCards = [
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
  {
    name: "Cat.",
    link: "https://i.redd.it/jkz2vw25xcpg1.jpeg",
    gear: "camera",
  },
  {
    name: "Downtown",
    link: "https://i.redd.it/cmmj66qhnjog1.jpeg",
    gear: "camera",
  },
];

/*const designCards = [
  {
    name: "Pip-Boy",
    img: "images/pip-boy.jpg",
    link: "#",
  },
  {
    name: "Cyberpunk",
    img: "images/cyberpunk.jpg",
    link: "https://play.google.com/store/apps/details?id=com.silversun.cyberpunkwatchface&pcampaignid=web_share",
  },
  {
    name: "Digital OLED",
    img: "images/digital-oled.jpg",
    link: "https://play.google.com/store/apps/details?id=com.silversun.digital_oled&pcampaignid=web_share",
  },
];

const softwareCards = [
  {
    name: "Spots (For TripleTen)",
    img: "images/spots.png",
    link: "https://github.com/rdare123/se_project_spots",
  },
  {
    name: "My Minecraft Mod",
    img: "images/cyberpunk.jpg",
    link: "https://www.curseforge.com/minecraft-bedrock/addons/magicraft-spells-magical-items",
  },
];*/

const previewModal = document.querySelector("#preview-modal");
const errorModal = document.querySelector("#not-on-store-popup");
const modalClose = previewModal.querySelector(".modal__close-btn");
const previewImg = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCaptionGear = previewModal.querySelector(".modal__caption-gear");

const menuButton = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__nav");
const navLinks = document.querySelector(".header__nav-links");

const contactModal = document.querySelector("#contact-modal");
const contactModalOpen = document.querySelector(".header__hirable");
const contactModalClose = contactModal.querySelector(".form__close-btn");
const contactForm = contactModal.querySelector(".modal__form");

const photoCardContainer = document.querySelector("#photo-card-container");
const designCardContainer = document.querySelector("#design-card-container");
const programCardContainer = document.querySelector(
  "#programming-card-container",
);
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

let menuOpen = false;

/*const designCardTemplate = document
  .querySelector("#card-template-design")
  .content.querySelector(".card");

const programCardTemplate = document
  .querySelector("#card-template-programming")
  .content.querySelector(".card");*/

menuButton.addEventListener("click", function () {
  if (menuOpen == false || menuOpen == undefined) {
    menuOpen = true;
    navBar.classList.add("header__nav_type_expand");
    navLinks.classList.add("header__nav-links_type_expand");
  } else if (menuOpen == true) {
    menuOpen = false;
    navBar.classList.remove("header__nav_type_expand");
    navLinks.classList.remove("header__nav-links_type_expand");
  }
});

modalClose.addEventListener("click", function () {
  closeModal(previewModal);
});

contactModalOpen.addEventListener("click", function () {
  openModal(contactModal);
});

contactModalClose.addEventListener("click", function () {
  closeModal(contactModal);
  contactForm.reset();
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleContactSubmit(e) {
  e.preventDefault();

  contactForm.reset();

  closeModal(contactModal);
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

photoCards.forEach((card) => {
  const photo = getCardElement(card);

  photoCardContainer.prepend(photo);
});
