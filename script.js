// Function to open dropdown menu

function dropdown(input, show, displayType) {
  const dropdownItems = document.querySelector(show);
  const inputItem = document.querySelector(input);
  inputItem.addEventListener("mouseover", () => {
    dropdownItems.style.display = displayType;
  });
  inputItem.addEventListener("mouseout", () => {
    dropdownItems.style.display = "none";
  });
}

dropdown("#hover-area", "#dropdown-list", "flex");
