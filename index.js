//Display Names

function displayNames() {
  let player1Name = document.querySelector('#player1Name')
  let player2Name = document.querySelector('#player2Name')
  let displayNames = document.querySelector('#displayNames')
  displayNames.innerHTML =player1Name.value + ' (X)'+ ' VS '  + player2Name.value + " (O)";
}

const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

const spaces = Array.from(document.getElementsByClassName('Spaces'))
