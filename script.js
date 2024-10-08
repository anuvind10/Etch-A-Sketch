const CONTAINER = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const clearGrid = document.querySelector("#clearGrid");
const defaultGridSize = 16;
const containerSize = 650;
var size = defaultGridSize;
var red;
var blue;
var green;

gridSize.addEventListener("click", resetGrid);
clearGrid.addEventListener("click", resetGrid)

function resetGrid (event){
    if (event.target.id == "gridSize") {
        size = prompt("Enter the desired grid size (max 100):");
    }
    createGrid(size == null ? defaultGridSize : size);
}

function createGrid(size) {
    // Remove existing grid when resizing the grid.
    while(CONTAINER.hasChildNodes()) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }

    // Determine size of each square based on the number of squares to fit in the fixed container size.
    let squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`  ;
        CONTAINER.appendChild(square);
    }

    colorGrid();
}

function colorGrid() {
    const GRIDS = document.querySelectorAll(".square");

    GRIDS.forEach((grid) => {
        grid.addEventListener("mouseenter", (event) => {
            // new color if it's an uncolored square.
            if (!event.target.style.backgroundColor){
                generateRandomColor();
                event.target.style.backgroundColor = "rgba("+`${red}`+", "+`${green}`+", "+`${blue}`+")";
                event.target.style.opacity = 0.1;
            }
            // increase opacity if mouse passes over an already colored square.
            else if (event.target.style.opacity < 1){
                event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
            }
        });
    });
}

function generateRandomColor(){
    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
}

createGrid(size);

