const board = document.querySelector("#board");
const SQUARES_NUMBER = 400;
const colors = ["red", "blue", "green", "yellow", "purple", "brown", "deepskyblue", "teal"];

board.addEventListener("mouseover", setColor);
board.addEventListener("mouseout", removeColor);

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    board.append(square);
}

function setColor(event) {
    if (!event.target.classList.contains("square")) return;

    let color = getRandomColor();
    event.target.style.backgroundColor = color;
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    if (!event.target.classList.contains("square")) return;

    event.target.style.backgroundColor = "#1d1d1d";
    event.target.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
