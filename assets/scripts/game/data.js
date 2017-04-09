const cells = ['', '', '', '', '', '', '', '', '']
const gameHistory = []
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
const imageEmpire = 'https://i.imgur.com/inG89Ay.jpg'
const imageRebel = 'https://i.imgur.com/chXYzaK.jpg'
const imageBlank = 'https://i.imgur.com/BiJgF5Z.jpg'

const imagePlayerX = ''
const imagePlayerO = ''

const oCells = []

const xCells = []

const gameOver = false

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
  resetData,
  gameHistory,
  imageEmpire,
  imageRebel,
  imageBlank,
  imagePlayerX,
  imagePlayerO
}
