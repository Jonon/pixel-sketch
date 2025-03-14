const gridContainer = document.querySelector(".container");

let gridSize = 16;

function createSquare() {
	const square = document.createElement("div");
	square.classList.add("square");
	gridContainer.classList.add("grid");
	square.style.width = `calc(100% / ${gridSize})`;
	gridContainer.appendChild(square);
}

function drawGrid(gridSize) {
	for (let i = 0; i < gridSize * gridSize; i++) {
		createSquare();
	}
}

drawGrid(gridSize);
