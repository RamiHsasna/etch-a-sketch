var container = document.querySelector(".container");
var button = document.querySelector("#clearButton");

function createGrid(numberOfDivs) {
  var gridSize = numberOfDivs ** 2;

  //Changes grid size and number of grid items depending on the parameter value
  container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;

  // create grid squares & add to container

  for (let i = 1; i <= gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.border = "1px solid black";
    gridItem.textContent = " ";
    container.appendChild(gridItem);
  }
  var gridCells = document.querySelectorAll(".grid-item");
  gridCells.forEach((cell) => cell.addEventListener("mouseover", changeColor));
  console.log("Grid has been created!!");
}

function changeColor() {
  this.style.backgroundColor = "#f8f8ff";
}

button.addEventListener("click", function clearGrid() {
  let gridSize = prompt("Enter grid size");
  if (gridSize < 0 || gridSize > 100) prompt("Enter size between 0 and 100");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridSize);
});
window.onload = createGrid(16);
