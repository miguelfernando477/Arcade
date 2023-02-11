//Global Variables
let isSinglePlayer = false
let spaces = document.getElementsByClassName("Space");
let currentPlayer;
const gameState = {
  players: ["X", "O"],
  board: [null, null, null, null, null, null, null, null, null],
};

//Randomly Chooses Who Starts

x = Math.floor(Math.random() * 2);

if (x === 0) {
  currentPlayer = gameState.players[0];
} else {
  currentPlayer = gameState.players[1];
}

//Two Player

function displayNames() {
  const winText = document.querySelector("#winText");
  let player1Name = document.querySelector("#player1Name");
  let player2Name = document.querySelector("#player2Name");
  let displayNames = document.querySelector("#displayNames");
  displayNames.innerHTML =
    player1Name.value + " (X)" + " VS " + player2Name.value + " (O)";
  let whosTurn = document.querySelector("#whosTurn");
  whosTurn.innerHTML = `${currentPlayer}'s Turn`;

  for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", makeMove);
  }
}

function makeMove(evt) {
  const spot = evt.target.id;
  if (!gameState.board[spot]) {
    gameState.board[spot] = currentPlayer;
    evt.target.innerHTML = currentPlayer;
    if (playerWon()) {
      winText.innerHTML = `${currentPlayer}'s Wins!`;
      return;
    }
    if (currentPlayer === gameState.players[0]) {
      currentPlayer = gameState.players[1];
    } else {
      currentPlayer = gameState.players[0];
    }
    whosTurn.innerHTML = `${currentPlayer}'s Turn`;
  }
  if (!playerWon() && !gameState.board.includes(null)) {
    winText.innerHTML = `Draw`;
  }
}

//Enable & Disable Clicks Two Player

function disableClicks() {
  let buttons = document.querySelectorAll(".Space");
  buttons.forEach((button) => {
    button.removeEventListener("click", makeMove, false);
  });
}

function enableClicks() {
  let buttons = document.querySelectorAll(".Space");
  buttons.forEach((button) => {
    button.addEventListener("click", makeMove);
  });
}

//Enable & Disable Clicks Single Player

function disableSingleClicks() {
  let buttons = document.querySelectorAll(".Space");
  buttons.forEach((button) => {
    button.removeEventListener("click", makeSingleMove, false);
  });
}

function enableSingleClicks() {
  let buttons = document.querySelectorAll(".Space");
  buttons.forEach((button) => {
    button.addEventListener("click", makeSingleMove);
  });
}

// Single Player

function singlePlayer() {
  isSinglePlayer = true
  for (var i = 0; i < gameState.board.length; i++) {
    gameState.board[i] = null;
    document.getElementById(i).innerHTML = "";
  }
  winText.innerHTML = ``;
  whosTurn.innerHTML = ``;
  disableClicks();
  whosTurn.innerHTML = "";
  let displayNames = document.querySelector("#displayNames");
  displayNames.innerHTML = "";
  document.querySelector("#startSingle").style.display = "block";
  document.querySelector("#startTwo").style.display = "none";
  document.querySelector("#player2").style.display = "none";
}

function displaySingleName() {
  if (isSinglePlayer && currentPlayer === gameState.players[1]) {
    makeCompMove();
  }
  let player1Name = document.querySelector("#player1Name");
  let displayNames = document.querySelector("#displayNames");
  displayNames.innerHTML =
    player1Name.value + " (X)" + " VS " + "Computer" + " (O)";
  whosTurn.innerHTML = `${currentPlayer}'s Turn`;
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", makeSingleMove);
  }
}

function makeSingleMove(evt) {
  const spot = evt.target.id;
  if (gameState.board[spot]) {
    return;
  }
  gameState.board[spot] = currentPlayer;
  evt.target.innerHTML = currentPlayer;
  if (playerWon()) {
    winText.innerHTML = `${currentPlayer}'s Wins!`;
    return;
  }
  if (currentPlayer === gameState.players[0]) {
    currentPlayer = gameState.players[1];
  } else {
    currentPlayer = gameState.players[0];
  }
  whosTurn.innerHTML = `${currentPlayer}'s Turn`;

  if (!playerWon() && !gameState.board.includes(null)) {
    winText.innerHTML = `Draw`;
  }
  setTimeout(() => {
    makeCompMove()
  }, 1500);
  
  console.log(gameState.board);
}

function makeCompMove() {
  
  x = Math.floor(Math.random() * 9);
  while (gameState.board[x] !== null) {
    x = Math.floor(Math.random() * 9);
  }
  if (!gameState.board[x]) {
    gameState.board[x] = currentPlayer;
    document.getElementById(`${x}`).innerHTML = currentPlayer;
    if (playerWon()) {
      winText.innerHTML = `${currentPlayer}'s Wins!`;
      return;
    }
    if (currentPlayer === gameState.players[0]) {
      currentPlayer = gameState.players[1];
    } else {
      currentPlayer = gameState.players[0];
    }
    whosTurn.innerHTML = `${currentPlayer}'s Turn`;
  }
  if (!playerWon() && !gameState.board.includes(null)) {
    winText.innerHTML = `Draw`;
  }
}

//Winning Combos

// [0 , 1 , 2]
// [3 , 4 , 5]
// [6 , 7 . 8]

function playerWon() {
  if (gameState.board[0] === currentPlayer) {
    if (
      gameState.board[1] === currentPlayer &&
      gameState.board[2] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
    if (
      gameState.board[3] === currentPlayer &&
      gameState.board[6] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
    if (
      gameState.board[4] === currentPlayer &&
      gameState.board[8] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
  }
  if (gameState.board[4] === currentPlayer) {
    if (
      gameState.board[1] === currentPlayer &&
      gameState.board[7] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
    if (
      gameState.board[3] === currentPlayer &&
      gameState.board[5] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
    if (
      gameState.board[2] === currentPlayer &&
      gameState.board[6] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
  }
  if (gameState.board[8] === currentPlayer) {
    if (
      gameState.board[2] === currentPlayer &&
      gameState.board[5] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
    if (
      gameState.board[6] === currentPlayer &&
      gameState.board[7] === currentPlayer
    ) {
      disableSingleClicks();
      disableClicks();
      return true;
    }
  }
}

//Restart

function restart() {
  for (var i = 0; i < gameState.board.length; i++) {
    gameState.board[i] = null;
    document.getElementById(i).innerHTML = "";
  }
  winText.innerHTML = ``;
  whosTurn.innerHTML = ``;
  x = Math.floor(Math.random() * 2);

  if (x === 0) {
    currentPlayer = gameState.players[0];
  } else {
    currentPlayer = gameState.players[1];
  }
  whosTurn.innerHTML = `${currentPlayer}'s Turn`;
  if (isSinglePlayer) {
  enableSingleClicks();
  }
  enableClicks();
  if (isSinglePlayer && currentPlayer === gameState.players[1]) {
    makeCompMove();
  }
}
