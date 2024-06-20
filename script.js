var container = document.querySelector(".container");
var button = document.querySelector("#clearButton");

function addDiv(numberOfDivsToCreate) {
  var gridCellDimensions = (600 / numberOfDivsToCreate - 2).toFixed(2);
  var gridSize = Math.pow(numberOfDivsToCreate, 2);

  // create grid squares & add to container
  for (var rows = 0; rows < gridSize; rows++) {
    for (var columns = 0; columns < gridSize; columns++) {
      var newDiv = document.createElement("div");
      container.appendChild(newDiv);
      newDiv.classList.add("grid");
      newDiv.style.height = gridCellDimensions + "px";
      newDiv.style.width = gridCellDimensions + "px";
      newDiv.style.border = "1px solid black";
      gridSize--;
    }
  }
  var gridCells = document.querySelectorAll(".grid");
  gridCells.forEach((cell) => cell.addEventListener("mouseover", changeColor));
  console.log(gridCellDimensions);
  console.log("Grid has been created!!");
}

function changeColor() {
  this.style.backgroundColor = "#000000";
}

window.onload = addDiv(16);
