const gameData = require(`./data`)
// function used to get all of a player's claimed cells from the cells array
// will be called when starting an in-progress game returned from the api
const getWinHistory = function (data) {
  let result = 0
  for (let i = 0; i < data.games.length; i++) {
    gameData.gameHistory.push(selectedCells(data.games[i].cells, 'x'))
  }
  for (let i = 0; i < gameData.gameHistory.length; i++) {
    const selectedArray = gameData.gameHistory[i]
    const wins = gameData.winningCombos.some(function (array) {
      // check to see if every element inner array combo
      return array.every(function (e) {
        // is present in array of cells selected by player
        return selectedArray.indexOf(e) !== -1
      })
    })
    if (wins === true) {
      result += 1
    }
  }
  return result
}

const selectedCells = function (array, player) {
  const result = []
  array.forEach(function (element, index) {
    if (element === player) {
      result.push(String(index))
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
  // is there a way to show which cells won?
  return gameData.winningCombos.some(function (array) {
    // check to see if every element inner array combo
    return array.every(function (e) {
      // is present in array of cells selected by player
      return selectedArray.indexOf(e) !== -1
    })
  })
}

const isGameOver = function (currentPlayer) {
  if (isWin(currentPlayer) === true) {
    gameData.gameOver = true
    // need to alert user that they won.
    // is there a way to show which cells won?
  } else if (gameData.xCells.length + gameData.oCells.length === 9) {
    gameData.gameOver = true
  }
  $('#game-over-input').attr('value', gameData.gameOver)
}

module.exports = {
  getWinHistory,
  isGameOver,
  isWin
}
