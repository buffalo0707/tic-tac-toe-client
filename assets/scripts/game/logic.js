const gameData = require(`./data`)
const ui = require(`./ui`)
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
    console.log("You Win!")
    updateStats(true)
  } else if (gameData.xCells.length + gameData.oCells.length === 9) {
    gameData.gameOver = true
    console.log("Cat's Game")
    updateStats()
  }
  $('#game-over-input').attr('value', gameData.gameOver)
}
const updateStats = (isWin) => {
  let games = $('#completed-games').html()
  let wins = $('#won-games').html()
  games = +games + 1
  if (isWin) {
    wins = +wins + 1
  }
  $('#completed-games').html(games)
  $('#won-games').html(wins)
}

module.exports = {
  getWinHistory,
  isGameOver,
  isWin
}
