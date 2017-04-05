const getFormFields = require(`../../../lib/get-form-fields`)
const gameData = require(`./data`)
const gameLogic = require(`./logic`)
const ui = require(`./ui`)
const api = require(`./api`)

let currentPlayer = 'x'

const nextTurn = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const onLoad = function () {
  ui.initializeSite()
}

const newGame = function () {
  $('#new-game').hide()
  gameData.resetData()
  gameData.gameOver = false
  ui.resetBoard()
  currentPlayer = 'x'
  api.createGame()
  .then(ui.createSuccess)
  .catch(ui.createFailure)
}

const chooseCell = function (event) {
  event.preventDefault()
  if (gameData.gameOver === true) {
    // do nothing for now
  } else if (this.innerHTML === '') {
    $('#cell-index-input').attr('value', this.id)
    $('#cell-value-input').attr('value', currentPlayer)
    this.innerHTML = currentPlayer
    gameData.updatePlayerArray(currentPlayer, this.id)
    gameData.cells.push(this.id)
    gameLogic.isGameOver(currentPlayer)
    // $('#game-form').submit(event, updateGame)
    // $('#game-form').submit()
    if (gameData.gameOver === true) {
    $('#new-game').show()
    }
    nextTurn()
  } else {
    // do nothing?
  }
}

const createGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()

}

const addHandlers = () => {
  $('.cell').on('click', chooseCell)
  $('#new-game').on('click', newGame)
  $('game-form').on('submit', createGame)
}

module.exports = {
  addHandlers,
  onLoad
}
