let spaces = document.getElementsByClassName("Space");
let currentPlayer
const gameState = {
  players: ["X", "O"],
  board: [null, null, null, null, null, null, null, null, null],
};

x = Math.floor(Math.random() *2) 
console.log(x)
if (x === 0) {
  currentPlayer = gameState.players[0]
} else {
  currentPlayer = gameState.players[1]
}

//Display Names & Start Game

function displayNames() {
  let player1Name = document.querySelector("#player1Name");
  let player2Name = document.querySelector("#player2Name");
  let displayNames = document.querySelector("#displayNames");
  displayNames.innerHTML =
  player1Name.value + " (X)" + " VS " + player2Name.value + " (O)";
  let whosTurn = document.querySelector('#whosTurn')
  whosTurn.innerHTML = `${currentPlayer}'s Turn` 
  const winText = document.querySelector("#winText");
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", makeMove);
  }
}

//Game Play
function disableButtons(){let buttons = document.querySelectorAll(".Space")
buttons.forEach(button => {
 button.removeEventListener('click', makeMove, false)
})
}

function enableButtons(){
let buttons = document.querySelectorAll(".Space")
     buttons.forEach(button => {
      button.addEventListener('click', makeMove)
     })

}

function makeMove(evt) {
  const spot = evt.target.id;
  if (!gameState.board[spot]) {
    gameState.board[spot] = currentPlayer;
    evt.target.innerHTML = currentPlayer;
    if (playerWon()) {
      winText.innerHTML = `${currentPlayer}'s Wins!`;
      disableButtons();
      return;
    }
    if (currentPlayer === gameState.players[0]){
      currentPlayer = gameState.players[1]
    } else {
      currentPlayer = gameState.players[0]
    } 
    whosTurn.innerHTML = `${currentPlayer}'s Turn` 
  }
  if (
    !playerWon() &&
    !gameState.board.includes(null)
  ) {
    winText.innerHTML = `Draw`;
  }
}
// Single Player

function singlePlayer(){
  let player1Name = document.querySelector("#player1Name");
  let player2Name = document.querySelector("#player2Name");
  let player2 = document.querySelector("#player2Name");
  player2Name.hide;
  player2.hide;
  let displayNames = document.querySelector("#displayNames");
  displayNames.innerHTML =
  player1Name.value + " (X)" + " VS " + "Computer (O)";
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
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (
      gameState.board[3] === currentPlayer &&
      gameState.board[6] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (
      gameState.board[4] === currentPlayer &&
      gameState.board[8] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  if (gameState.board[4] === currentPlayer) {
    if (
      gameState.board[1] === currentPlayer &&
      gameState.board[7] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (
      gameState.board[3] === currentPlayer &&
      gameState.board[5] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (
      gameState.board[2] === currentPlayer &&
      gameState.board[6] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  if (gameState.board[8] === currentPlayer) {
    if (
      gameState.board[2] === currentPlayer &&
      gameState.board[5] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (
      gameState.board[6] === currentPlayer &&
      gameState.board[7] === currentPlayer
    ) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
}

//Restart
function restart(){
 console.log(gameState.board)
    for (var i = 0; i < gameState.board.length; i++){
    gameState.board[i] = null
    document.getElementById(i).innerHTML = ""
    }
    winText.innerHTML = ``
    whosTurn.innerHTML = `` 
    x = Math.floor(Math.random() *2) 
console.log(x)
if (x === 0) {
  currentPlayer = gameState.players[0]
} else {
  currentPlayer = gameState.players[1]
}
    whosTurn.innerHTML = `${currentPlayer}'s Turn` 
    enableButtons()
}