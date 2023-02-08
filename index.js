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
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

function makeMove(evt){
  evt.target.innerHTML = gameState.players[0]
  let a = gameState.players[0]
  gameState.players[0] = gameState.players[1]
  gameState.players[1] = a
}


