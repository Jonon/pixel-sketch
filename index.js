const gridContainer = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderSize = document.querySelector(".slider-size");
const randomizeColorBtnMode = document.querySelector("button.color-randomize");
const shadeBtnMode = document.querySelector("button.shade");
const colorPickerBtnMode = document.querySelector(".color-picker input");

let colorMode = "colorPicker";

slider.addEventListener("click", newGrid);
randomizeColorBtnMode.addEventListener("click", () =>
	changeColorMode("color-randomizer")
);
shadeBtnMode.addEventListener("click", () => changeColorMode("shade"));
colorPickerBtnMode.addEventListener("click", () =>
	changeColorMode("colorPicker")
);

function setGridSize() {
	gridSize = slider.value;
	sliderSize.textContent = slider.value;
	return gridSize;
}

function createSquare() {
	const square = document.createElement("div");
	square.classList.add("square");
	square.style.opacity = 1;
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

		square.addEventListener("mouseenter", (e) => {
			if (mouseMove) {
				changeSquareColor(e);
			}
		});

		square.addEventListener("mouseup", () => {
			mouseMove = false;
		});
	});

	function changeSquareColor(e) {
		if (colorMode === "colorPicker") {
			let squareColor = colorPickerBtnMode.value;
			colorPickerBtnMode.addEventListener("change", watchColorPicker, false);

			function watchColorPicker(e) {
				squareColor = e.target.value;
			}
			e.currentTarget.style.backgroundColor = squareColor;
		} else if (colorMode === "color-randomizer") {
			function randomizeColor() {
				function randomNum() {
					return Math.floor(Math.random() * 256);
				}
				return (backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);
			}

			e.currentTarget.style.backgroundColor = randomizeColor();
		} else if (colorMode === "shade") {
			function shadeColor(e) {
				let shadeValue = parseFloat(e.currentTarget.style.opacity);

				function incrementShade() {
					if (shadeValue >= 1) {
						return (shadeValue = 0.1);
					} else {
						return (shadeValue = Math.round((shadeValue += 0.1) * 100) / 100);
					}
				}

				let newShadeValue = incrementShade();
				e.currentTarget.style.opacity = newShadeValue;
			}
			shadeColor(e);
		}
	}
}

function changeColorMode(mode) {
	colorMode = mode;
}

newGrid();
