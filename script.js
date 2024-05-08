// Function to open dropdown menu

function dropdown(input, show, display) {
  const dropdownItems = document.querySelector(`${show}`);
  document.querySelector(`${input}`).addEventListener("mouseover", () => {
    dropdownItems.style.display = `${display}`;
  });
}
