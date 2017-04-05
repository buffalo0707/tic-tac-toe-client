const gameData = require(`./data`)
// function used to get all of a player's claimed cells from the cells array
// will be called when starting an in-progress game returned from the api
const cellsInProgress = function (array, player) {
  const result = []
  array.forEach(function (element, index) {
    if (element === player) {
      result.push(index)
    }
  })
  return result
}

const isWin = function (player) {
  let selectedArray = []
  if (player === 'x') {
    selectedArray = gameData.xCells
  } else {
    selectedArray = gameData.oCells
  }
  // for every array in winningCombos array
  return gameData.winningCombos.some(function (array) {
    // check to see if every element inner array combo
    return array.every(function (e) {
      // is present in array of cells selected by player
      return selectedArray.indexOf(e) !== -1
    })
  })
}

const gameOver = function () {
  if (isWin(gameData.oCells) || isWin(gameData.xCells) || gameData.cells.length === 9) {
    gameData.gameOver = true
  }
}

module.exports = {
  cellsInProgress,
  gameOver,
  isWin
}
