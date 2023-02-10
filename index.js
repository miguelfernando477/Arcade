let spaces = document.getElementsByClassName("Space");
const gameState = {
  players: ["X", "O"],
  board: [null, null, null, null, null, null, null, null, null],
};

currentPlayer = gameState.players[0];

//Display Names & Start Game

function displayNames() {
  let player1Name = document.querySelector("#player1Name");
  let player2Name = document.querySelector("#player2Name");
  let displayNames = document.querySelector("#displayNames");
  let whosTurn = document.querySelector('#whosTurn')
  displayNames.innerHTML =
  player1Name.value + " (X)" + " VS " + player2Name.value + " (O)";
  const winText = document.querySelector("#winText");
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", makeMove);
  }
}

//Game Play

function makeMove(evt) {
  whosTurn.innerHTML = `${currentPlayer}'s Turn` 
  const spot = evt.target.id;
  console.log(spot)
  if (!gameState.board[spot]) {
    gameState.board[spot] = currentPlayer;
    evt.target.innerHTML = currentPlayer;
    if (playerWon()) {
      winText.innerHTML = `${currentPlayer}'s Wins!`;
      
      return;
    }
      if (currentPlayer === gameState.players[0]){
        currentPlayer = gameState.players[1]
    } else {
      currentPlayer = gameState.players[0]
    } 
  }
  if (
    !playerWon() &&
    !gameState.board.includes(null)
  ) {
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
    
}