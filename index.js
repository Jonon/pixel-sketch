const gridContainer = document.querySelector(".container");

function createSquare() {
	const square = document.createElement("div");
	square.classList.add("square");
	gridContainer.appendChild(square);
}
