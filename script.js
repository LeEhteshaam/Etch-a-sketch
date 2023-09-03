let color = "black";
let colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function() {
  color = this.value;
});

function colorSquare() {
    if (color === "Rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
}

function changeColor(newChoice) {
  color = newChoice;
}

function populateBoard(size) {
  let board = document.querySelector(".board");
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);  
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 1 && input <= 100) {
    populateBoard(input);
  }
  else {
    alert("This is an invalid amount. Input must be around 1-100.");
  }
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

