let squaresPerSide = 10;
let squareArray = [];
let rainbowBrush = false;

function buildGrid(newValue = null) {
    //newValue is set to "null" by default because on page load,
    //the user has not yet given a new value. buildGrid is called
    //by the moving of the slide, ie user inputting a new value
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
        squareArray[i - 1].addEventListener("mouseover", () =>
            applyColor(squareArray[i - 1]));
        grid.appendChild(squareArray[i - 1]);
    }
}

function buildButtons() {
    let lowerFrame = document.querySelector(".lowerFrame");
    lowerFrame.style.display = "flex";
    lowerFrame.style.justifyContent = "space-evenly";
    lowerFrame.style.alignItems = "center";

    let sliderInput = document.createElement("input");
    sliderInput.type = "range";
    sliderInput.min = 1;
    sliderInput.max = 64;
    sliderInput.value = 10;
    sliderInput.classList.add("userControl");

    let leftWheel = document.createElement("img");
    leftWheel.src = "./img/wheels.png";
    leftWheel.alt = "a soccer ball designed by OpenClipart-Vectors on pixabay.com";
    leftWheel.style.height = "80px";
    leftWheel.style.width = "80px";

    let rightWheel = document.createElement("img");
    rightWheel.src = "./img/wheels.png";
    rightWheel.alt = "a soccer ball designed by OpenClipart-Vectors on pixabay.com";
    rightWheel.style.height = "80px";
    rightWheel.style.width = "80px";

    let clearButton = document.createElement("button");
    clearButton.style.padding = "20px";
    clearButton.textContent = "Clear Board";
    clearButton.classList.add("userControl");

    let colorButton = document.createElement("button");
    colorButton.style.padding = "20px";
    colorButton.textContent = "Rainbow";
    colorButton.classList.add("userControl");

    /****************************************/
    /*The following section serves to ease the pain
    that is laying out a web page.*/
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");

    div1.style.width = "80px";
    div2.style.width = "130px";
    div3.style.width = "118px";
    div4.style.width = "98px";
    div5.style.width = "80px";
    /*Resize the divs to contain only their own element*/
    /****************************************/

    div1.appendChild(leftWheel);
    div2.appendChild(sliderInput);
    div3.appendChild(clearButton);
    div4.appendChild(colorButton);
    div5.appendChild(rightWheel);

    lowerFrame.appendChild(div1);
    lowerFrame.appendChild(div2);
    lowerFrame.appendChild(div3);
    lowerFrame.appendChild(div4);
    lowerFrame.appendChild(div5);
}

function applyColor(square) {
    if (!rainbowBrush) {
        square.style.backgroundColor = "rgb(0, 0, 0)";
    } else if (rainbowBrush) {
        let c = randomizeColor();
        let randomColor = `rgb( ${c[0]}, ${c[1]}, ${c[2]})`;
        square.style.backgroundColor = randomColor;
        //style.backgroundColor requires a string
    }
}

function randomizeColor() {
    let colors = [];
    colors[0] = Math.floor(Math.random() * 256);
    colors[1] = Math.floor(Math.random() * 256);
    colors[2] = Math.floor(Math.random() * 256);
    return colors;    
}

function rainbowOnOff() {
    rainbowBrush = !rainbowBrush;
}

function clearGrid() {
    let grid = document.querySelector(".drawingBoard");
    let gridItem = grid.children;
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "white";
    }
}

function enableButtons() {
    let controlButtons = document.querySelectorAll(".userControl");
    
    controlButtons[0].addEventListener("input", function () {
        buildGrid(this.value);
    });
    controlButtons[1].addEventListener("click", () => clearGrid());
    controlButtons[2].addEventListener("click", () => rainbowOnOff());
}

buildGrid();
buildButtons();
enableButtons();