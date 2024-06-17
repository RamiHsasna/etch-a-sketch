window.onload = () => {
  const grid = document.getElementById("grid-container");

  if (grid) {
    function createGrid() {
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.textContent = i;
        grid.appendChild(cell);
      }
    }
    createGrid();
  } else {
    console.error('Element with id "grid-container" does not exist');
  }
};
