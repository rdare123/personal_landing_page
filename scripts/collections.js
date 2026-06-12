// Example collections data — replace with your real sets or load dynamically
const COLLECTIONS = [
  {
    id: "0001",
    title: "Dolce & Gabbana, Light Blue",
    url: "https://www.instagram.com/p/DZZ6TC_EaAt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    photos: [
      "./images/0001/IMG_3944 (2).jpg",
      "./images/0001/IMG_3955 (1).jpg",
      "./images/0001/IMG_3963 (3).jpg",
    ],
  },
  {
    id: "0002",
    title: "Uniball Co., Kuru Toga",
    url: "https://www.instagram.com/p/DZf5IftkQVr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    photos: [
      "./images/0002/IMG_3728.jpg",
      "./images/0002/IMG_3991.jpg",
      "./images/0002/IMG_4007.jpg",
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
