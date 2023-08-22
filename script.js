const offerArrow = document.getElementById("offerArrow");
const offerDropdown = document.getElementById("offerDropdown");

let isDropdownVisible = false;

offerArrow.addEventListener("click", (event) => {
  event.preventDefault();
  isDropdownVisible = !isDropdownVisible;
  offerDropdown.classList.toggle("hidden");
  offerArrow.classList.toggle("rotate-180", isDropdownVisible);
});

document.addEventListener("click", (event) => {
  const offerLink = document.getElementById("offerLink");
  if (!offerLink.contains(event.target) && event.target !== offerArrow) {
    offerDropdown.classList.add("hidden");
    offerArrow.classList.remove("rotate-180");
    isDropdownVisible = false;
  }
});

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const closeButton = document.getElementById("closeButton");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
  searchOverlay.classList.remove("hidden");
  searchInput.focus();
});

closeButton.addEventListener("click", () => {
  searchOverlay.classList.add("hidden");
  searchInput.value = "";
});

const footerLinks = [
  { text: "Kontakt", href: "mailto:giarddesign@kontakt.pl" },
  { text: "Instagram", href: "#" },
  { text: "Facebook", href: "#" },
  { text: "Linkedln", href: "#" },
];

const footerLinksContainer = document.getElementById("footer-links");

footerLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.textContent = link.text;
  anchor.classList.add(
    "cursor-pointer",
    "text-sm",
    "leading-6",
    "hover:text-primary",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  footerLinksContainer.appendChild(anchor);
});

document.addEventListener("DOMContentLoaded", function () {
  Macy.init({
    container: "#galleryContainer",
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 3,
    breakAt: {
      1200: 2,
      800: 1,
    },
  });
});

const images = [
  "/assets/gallery/photo1.png",
  "/assets/gallery/photo6.png",
  "/assets/gallery/photo7.png",
  "/assets/gallery/photo2.png",
  "/assets/gallery/photo4.png",
  "/assets/gallery/photo8.png",
  "/assets/gallery/photo3.png",
  "/assets/gallery/photo5.png",
  "/assets/gallery/photo9.png",
];

const columns = document.querySelectorAll(".macy-column");

for (let i = 0; i < columns.length; i++) {
  const column = columns[i];
  for (let j = 0; j < 6; j++) {
    const index = (i * 6 + j) % images.length;
    const item = document.createElement("div");
    item.classList.add("macy-item");
    const img = document.createElement("img");
    img.src = images[index];
    img.alt = `Zdjęcie ${index + 1}`;
    item.appendChild(img);
    column.appendChild(item);
  }
}

const expandButton = document.getElementById("expandButton");
const expandText = document.getElementById("expandText");
const expandIconCollapse = document.getElementById("expandIconCollapse");
const expandIconExpand = document.getElementById("expandIconExpand");
const galleryContainer = document.getElementById("galleryContainer");
let isSectionExpanded = false;

expandButton.addEventListener("click", () => {
  if (isSectionExpanded) {
    expandText.textContent = "Rozwiń";
    expandIconCollapse.style.display = "block";
    expandIconExpand.style.display = "none";
    galleryContainer.style.maxHeight = "1500px";
  } else {
    expandText.textContent = "Zwiń";
    expandIconCollapse.style.display = "none";
    expandIconExpand.style.display = "block";
    galleryContainer.style.maxHeight = "none";
  }

  isSectionExpanded = !isSectionExpanded;
});
