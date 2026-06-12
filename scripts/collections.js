// Example collections data — replace with your real sets or load dynamically
const COLLECTIONS = [
  {
    id: "shoes",
    title: "Shoes — Studio Set",
    url: "https://www.google.com/search?q=shoes+studio",
    photos: [
      "https://i.redd.it/cyv6vztkkinf1.jpeg",
      "https://i.redd.it/jkz2vw25xcpg1.jpeg",
      "https://i.redd.it/cmmj66qhnjog1.jpeg",
    ],
  },
  {
    id: "accessories",
    title: "Accessories — Product Pack",
    url: "https://www.google.com/search?q=accessories+product+pack",
    photos: [
      "https://cf.preview.redd.it/just-started-yesterday-v0-hvcj8uog393h1.jpg?width=1080&crop=smart&auto=webp&s=309ac606c05b53b723134abe425bde044d378c21",
      "https://cf.preview.redd.it/just-started-yesterday-v0-ys4jbucg393h1.jpg?width=1080&crop=smart&auto=webp&s=03c5741fd8cd408796fb2245902e3851a8a74736",
      "https://pbs.twimg.com/media/GzMvDLTXkAAam57?format=jpg&name=large",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle — Downtown",
    url: "https://www.google.com/search?q=lifestyle+downtown",
    photos: [
      "https://i.redd.it/d6mgago28exg1.jpeg",
      "https://pbs.twimg.com/media/GzMvDO4XgAEuuOe?format=jpg&name=large",
      "https://i.redd.it/xmbdntunvrkf1.jpeg",
    ],
  },
];

const list = document.getElementById("collections-list");

function createCollectionCard(col) {
  const li = document.createElement("li");
  li.className = "collection-card";

  // preview (images only) — not clickable; use 'View' to open the collection
  const preview = document.createElement("div");
  preview.className = "collection-preview";

  const left = document.createElement("div");
  left.className = "collection-preview-left";
  const imgL = document.createElement("img");
  imgL.src = col.photos[0] || "";
  imgL.alt = col.title + " — 1";
  imgL.loading = "lazy";
  left.appendChild(imgL);

  const right = document.createElement("div");
  right.className = "collection-preview-right";
  const imgR1 = document.createElement("img");
  imgR1.src = col.photos[1] || col.photos[0] || "";
  imgR1.alt = col.title + " — 2";
  imgR1.loading = "lazy";
  const imgR2 = document.createElement("img");
  imgR2.src = col.photos[2] || col.photos[0] || "";
  imgR2.alt = col.title + " — 3";
  imgR2.loading = "lazy";
  right.appendChild(imgR1);
  right.appendChild(imgR2);

  preview.appendChild(left);
  preview.appendChild(right);

  const meta = document.createElement("div");
  meta.className = "collection-meta";
  const title = document.createElement("h3");
  title.className = "collection-title";
  title.textContent = col.title;

  // full collection url (default to google for now)
  const fullUrl = col.url || "https://www.google.com";

  const fullLink = document.createElement("a");
  fullLink.className = "collection-full";
  fullLink.href = fullUrl;
  fullLink.target = "_blank";
  fullLink.rel = "noopener noreferrer";
  fullLink.textContent = "View";

  // controls wrapper so title stays left and buttons align right
  const controls = document.createElement("div");
  controls.className = "collection-controls";
  controls.appendChild(fullLink);

  meta.appendChild(title);
  meta.appendChild(controls);

  li.appendChild(preview);
  li.appendChild(meta);

  // clicking the card (anywhere that's not a link) opens the collection URL
  li.addEventListener("click", (e) => {
    if (e.target.closest("a")) return; // let anchors handle their own navigation
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  });

  return li;
}

// render collections (no-op if container missing)
if (list) COLLECTIONS.forEach((c) => list.appendChild(createCollectionCard(c)));

// --- Header/menu and modal behaviors (match other pages) ---
const previewModal = document.querySelector("#preview-modal");
const modalClose = previewModal
  ? previewModal.querySelector(".modal__close-btn")
  : null;
const previewImg = previewModal
  ? previewModal.querySelector(".modal__image")
  : null;
const previewCaption = previewModal
  ? previewModal.querySelector(".modal__caption")
  : null;
const previewCaptionGear = previewModal
  ? previewModal.querySelector(".modal__caption-gear")
  : null;

const menuButton = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__nav");
const navLinks = document.querySelector(".header__nav-links");

const contactModal = document.querySelector("#contact-modal");
const contactModalOpen = document.querySelector(".header__hirable");
const contactModalClose = contactModal
  ? contactModal.querySelector(".form__close-btn")
  : null;
const contactForm = contactModal
  ? contactModal.querySelector(".modal__form")
  : null;

let menuOpen = false;

if (menuButton) {
  menuButton.addEventListener("click", function () {
    if (menuOpen == false || menuOpen == undefined) {
      menuOpen = true;
      navBar && navBar.classList.add("header__nav_type_expand");
      navLinks && navLinks.classList.add("header__nav-links_type_expand");
    } else {
      menuOpen = false;
      navBar && navBar.classList.remove("header__nav_type_expand");
      navLinks && navLinks.classList.remove("header__nav-links_type_expand");
    }
  });
}

function openModal(modal) {
  modal && modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal && modal.classList.remove("modal_is-opened");
}

if (modalClose && previewModal) {
  modalClose.addEventListener("click", () => closeModal(previewModal));
}

if (contactModalOpen && contactModal) {
  contactModalOpen.addEventListener("click", () => openModal(contactModal));
}

if (contactModalClose && contactModal) {
  contactModalClose.addEventListener("click", () => {
    closeModal(contactModal);
    contactForm && contactForm.reset();
  });
}
