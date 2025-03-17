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

let mouseMove = false;

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
	square.addEventListener("mousedown", (e) => {
		mouseMove = true;
		changeSquareColor(e);
	});

	square.addEventListener("mousemove", (e) => {
		if (mouseMove) {
			changeSquareColor(e);
		}
	});

	square.addEventListener("mouseup", () => {
		mouseMove = false;
	});
});

function changeSquareColor(e) {
	e.currentTarget.style.backgroundColor = "red";
}
