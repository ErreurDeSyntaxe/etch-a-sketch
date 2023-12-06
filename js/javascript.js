let squaresPerSide = 10;

function buildGrid(newValue = null) {
    let squareArray = [];
    if (newValue != null) squaresPerSide = newValue;
    let squareSize = (600 / squaresPerSide) + "px";
    let grid = document.querySelector(".drawingBoard");    
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    for (let i = 1; i <= squaresPerSide ** 2; i++) {
        squareArray[i - 1] = document.createElement("div");
        squareArray[i - 1].style.height = squareSize;
        squareArray[i - 1].style.width = squareSize;
        squareArray[i - 1].style.backgroundColor = "white";
        squareArray[i - 1].textContent = i;
        grid.appendChild(squareArray[i - 1]);
    }
}

function buildButtons() {
    let lowerFrame = document.querySelector(".lowerFrame");
    let sliderInput = document.createElement("input");
    sliderInput.type = "range";
    sliderInput.min = 1;
    sliderInput.max = 64;
    sliderInput.value = 10;
    sliderInput.style.marginTop = "20px";
    sliderInput.classList.add("userControl");

    let leftWheel = document.createElement("img");
    leftWheel.src = "./img/wheels.png";
    leftWheel.alt = "a soccer ball designed by OpenClipart-Vectors on pixabay.com";
    leftWheel.style.height = "80px";
    leftWheel.style.width = "80px";
    leftWheel.style.marginTop = "10px";
    leftWheel.style.marginRight = "20px";
    leftWheel.style.marginLeft = "110px";

    let rightWheel = document.createElement("img");
    rightWheel.src = "./img/wheels.png";
    rightWheel.alt = "a soccer ball designed by OpenClipart-Vectors on pixabay.com";
    rightWheel.style.height = "80px";
    rightWheel.style.width = "80px";
    rightWheel.style.marginTop = "10px";
    rightWheel.style.marginLeft = "15px";

    let clearButton = document.createElement("button");
    clearButton.style.padding = "20px";
    clearButton.style.marginTop = "20px";
    clearButton.style.marginLeft = "15px";
    clearButton.style.marginRight = "15px";
    clearButton.textContent = "Clear Board";
    clearButton.classList.add("userControl");

    let colorButton = document.createElement("button");
    colorButton.style.padding = "20px";
    colorButton.style.marginTop = "20px";
    colorButton.style.marginLeft = "15px";
    colorButton.style.marginRight = "15px";
    colorButton.textContent = "Rainbow";
    colorButton.classList.add("userControl");

    lowerFrame.appendChild(leftWheel);
    lowerFrame.appendChild(sliderInput);
    lowerFrame.appendChild(clearButton);
    lowerFrame.appendChild(colorButton);
    lowerFrame.appendChild(rightWheel);
}

function randomizeColor() {
    let colors = [];
    colors[0] = Math.floor(Math.random() * 255);
    colors[1] = Math.floor(Math.random() * 255);
    colors[2] = Math.floor(Math.random() * 255);
}

function enableButtons() {
    let controlButtons = document.querySelectorAll(".userControl");
    controlButtons[0].addEventListener("input", function () {
        buildGrid(this.value);
    });
    controlButtons[1].addEventListener("click", () => buildGrid);
    controlButtons[2].addEventListener("click", () => randomizeColor);
}

buildGrid();
buildButtons();
enableButtons();
