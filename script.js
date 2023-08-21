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
