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
