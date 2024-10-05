const CONTAINER = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const defaultGridSize = 16;


gridSize.addEventListener("click", resetGrid);

function resetGrid (){
    let size = prompt("Enter the desired grid size (max 100):");
    createGrid(size);
}

function createGrid(size) {
    while(CONTAINER.hasChildNodes()) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }

    for(let i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add("column");
        CONTAINER.appendChild(column);
    
        for(let j = 0; j < size; j++) {
            const row = document.createElement('div');
            row.classList.add("row");
            column.appendChild(row);
        }
    }
}

createGrid(defaultGridSize);

const GRIDS = document.querySelectorAll(".row");

GRIDS.forEach((grid) => {
    grid.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "red";
    });
});

