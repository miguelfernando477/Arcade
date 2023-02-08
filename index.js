//Display Names

function displayNames() {
  let player1Name = document.querySelector('#player1Name')
  let player2Name = document.querySelector('#player2Name')
  let displayNames = document.querySelector('#displayNames')
  displayNames.innerHTML = player1Name.value + ' (X)'+ ' VS '  + player2Name.value + " (O)";
  let spaces = document.getElementsByClassName('Space')
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', makeMove);
  }
}


const gameState = {
  players: ['x', 'o'],
  board: [null, null, null , null, null, null, null, null, null]
}

currentPlayer = gameState.players[0]

function makeMove(evt){
  const spot = evt.target.id;
  console.log(spot);
  if (!gameState.board[spot]){
    gameState.board[spot] = currentPlayer;
    evt.target.innerHTML = currentPlayer
    currentPlayer = currentPlayer === gameState.players[0] ? gameState.players[1] : gameState.players[0]
  }

}


