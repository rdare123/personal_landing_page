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
  {
    name: "Kuru Toga",
    link: "https://cf.preview.redd.it/just-started-yesterday-v0-ys4jbucg393h1.jpg?width=1080&crop=smart&auto=webp&s=03c5741fd8cd408796fb2245902e3851a8a74736",
    gear: "camera2",
  },
  {
    name: "Dolce & Gabbana Cologne",
    link: "https://cf.preview.redd.it/just-started-yesterday-v0-hvcj8uog393h1.jpg?width=1080&crop=smart&auto=webp&s=309ac606c05b53b723134abe425bde044d378c21",
    gear: "camera2",
  },
  {
    name: "Traffic Light",
    link: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/711687098_122116999053253342_1798948642692333299_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ezn7lCVcdP8Q7kNvwEYmuPV&_nc_oc=AdrGo_NoQaMtPljkuTAmG2QySz-7r7KHJB_fsUWBgZug0HM_9JtiOlpGkx2Wpi8ha9LgKDXSx42Zn9E2yfDPDHY-&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=K3xC6GWBzEMEklfPh8Ux8A&_nc_ss=7b2a8&oh=00_Af-cinf2lCPyl6jBRokY0TLY5iXPxxSqxTs5R7FWHemCTQ&oe=6A2B64C5",
    gear: "camera2",
  },
  {
    name: "Creek",
    link: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/693453451_122114901411253342_3155020786017392387_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3aDAF67RyY0Q7kNvwHFLdP1&_nc_oc=AdoloS7s_YFI6UmL8PMjmFvChoFiPkdvMG2nIRdZMbR7PyAa_SRXGob-A0c60vcXPuZaS8rlzFwx567pdH5Wuoro&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=ja1lmD79Jm-d6esVmhN_Jw&_nc_ss=7b2a8&oh=00_Af8s9KkFbX3f8cRRFKiGVch90i-ILQOuhJMPbvS-Xddcyw&oe=6A2B4A70",
    gear: "camera2",
  },
  {
    name: "Cat in Sunlight",
    link: "https://i.redd.it/d6mgago28exg1.jpeg",
    gear: "camera2",
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
    } else if (data.gear == "camera2") {
      previewCaptionGear.textContent = "Canon EOS R10";
    }

    openModal(previewModal);
  });

  return cardElement;
}

photoCards.forEach((card) => {
  const photo = getCardElement(card);

  photoCardContainer.prepend(photo);
});

// collapse grid after 9 images and add toggle to reveal the rest
photoCardContainer.classList.add("collapsed");
const toggleBtn = document.getElementById("toggle-more");
if (toggleBtn) {
  if (photoCards.length <= 9) {
    toggleBtn.style.display = "none";
  } else {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.classList.toggle("expanded");
      photoCardContainer.classList.toggle("collapsed", !expanded);
      toggleBtn.setAttribute("aria-expanded", String(expanded));
      toggleBtn.innerHTML = expanded
        ? 'Show less <span class="cards__toggle-arrow">▲</span>'
        : 'Show more <span class="cards__toggle-arrow">▼</span>';
    });
  }
}
