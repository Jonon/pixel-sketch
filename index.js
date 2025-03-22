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
	square.setAttribute("shade", 0);
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

	function enableRGB() {
		console.log("Enable RGB");
		function randomNum() {
			return Math.floor(Math.random() * 256);
		}
		return (backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);
	}

	function shade(e) {
		let shadeValue = parseFloat(e.currentTarget.getAttribute("shade"));

		function incrementShade() {
			if (shadeValue >= 1) {
				return (shadeValue = 0.1);
			} else {
				return (shadeValue = Math.round((shadeValue += 0.1) * 100) / 100);
			}
		}

		let newShadeValue = incrementShade();
		e.currentTarget.setAttribute("shade", newShadeValue);
		e.currentTarget.style.opacity = newShadeValue;
	}

	function changeSquareColor(e) {
		if (colorMode === "default") {
			e.currentTarget.style.backgroundColor = "rgb(0, 0, 0)";
		} else if (colorMode === "rgb") {
			e.currentTarget.style.backgroundColor = enableRGB();
		} else if (colorMode === "shade") {
			shade(e);
		}
	}
}

let colorMode = "default";

const rgbMode = document.querySelector("button.rgb");
const shadeMode = document.querySelector("button.shade");

rgbMode.addEventListener("click", () => changeColorMode("rgb"));
shadeMode.addEventListener("click", () => changeColorMode("shade"));

function changeColorMode(mode) {
	colorMode = mode;
}

newGrid();
