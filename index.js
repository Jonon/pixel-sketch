const gridContainer = document.querySelector(".container");

function createSquare() {
	const square = document.createElement("div");
	square.classList.add("square");
	gridContainer.appendChild(square);
}

function drawGrid(gridSize) {
	for (let i = 0; i < gridSize * 16; i++) {
		createSquare();
	}
}

drawGrid(16);
