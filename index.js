const gridContainer = document.querySelector(".container");

const slider = document.querySelector(".slider");

slider.addEventListener("click", newGrid);

function setGridSize() {
	gridSize = slider.value;
	return gridSize;
}

function createSquare() {
	const square = document.createElement("div");
	square.classList.add("square");
	gridContainer.classList.add("grid");
	square.style.width = `calc(100% / ${setGridSize()})`;
	gridContainer.appendChild(square);
}

function drawGrid(gridSize) {
	for (let i = 0; i < gridSize * gridSize - 1; i++) {
		createSquare();
	}
}

function newGrid() {
	gridContainer.innerHTML = "";
	createSquare();
	drawGrid(setGridSize());

	let mouseMove = false;

	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mousedown", (e) => {
			mouseMove = true;
			changeSquareColor(e);
			e.preventDefault();
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
}

newGrid();
