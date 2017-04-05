const winningCombos = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diag
  [0, 4, 8],
  [2, 4, 6]
]

const oCells = []

const xCells = []

const gameOver = false

module.exports = {
  winningCombos,
  oCells,
  xCells,
  gameOver
}
