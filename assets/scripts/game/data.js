let cells = []
const winningCombos = [
  // rows
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  // columns
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  // diag
  ['0', '4', '8'],
  ['2', '4', '6']
]

let oCells = []

let xCells = []

let gameOver = false

const updatePlayerArray = function (player, id) {
  if (player === 'o') {
    oCells.push(id)
  } else if (player === 'x') {
    xCells.push(id)
  }
}

const resetData = function () {
  for (let i = cells.length; i > 0; i--) {
    cells.pop()
  }
  for (let i = xCells.length; i > 0; i--) {
    xCells.pop()
  }
  for (let i = oCells.length; i > 0; i--) {
    oCells.pop()
  }
}

module.exports = {
  cells,
  winningCombos,
  oCells,
  xCells,
  gameOver,
  updatePlayerArray,
  resetData
}
