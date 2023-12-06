function buildGrid() {
    let squareArray = [];
    let squaresPerSide = 10;
    let squareSize = (600 / squaresPerSide) + "px";
    let grid = document.querySelector(".drawingBoard");    
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";

    for (let i = 1; i <= squaresPerSide ** 2; i++) {
        squareArray[i - 1] = document.createElement("div");
        squareArray[i - 1].style.height = squareSize;
        squareArray[i - 1].style.width = squareSize;
        squareArray[i - 1].style.backgroundColor = "white";
        grid.appendChild(squareArray[i - 1]);
    }
}

function buildButtons() {
    let frame = document.querySelector(".frame");
}

buildGrid();
buildButtons();