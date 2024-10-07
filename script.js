const CONTAINER = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const defaultGridSize = 16;
const containerSize = 650;

gridSize.addEventListener("click", resetGrid);

function resetGrid (){
    let size = prompt("Enter the desired grid size (max 100):");
    createGrid(size);
    colorGrid();
}

function createGrid(size) {
    while(CONTAINER.hasChildNodes()) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }

    let squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`  ;
        CONTAINER.appendChild(square);
    }
}

function colorGrid() {
    const GRIDS = document.querySelectorAll(".square");

    GRIDS.forEach((grid) => {
        grid.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "red";
        });
    });
}

createGrid(defaultGridSize);
colorGrid();

