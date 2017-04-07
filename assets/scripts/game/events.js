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
  console.log('clicked')
  event.preventDefault()
  if (gameData.gameOver === true) {
    // do nothing for now
  } else if (this.getAttribute('src') === 'http://i.imgur.com/BiJgF5Z.jpg') {
    // update hidden form
    $('#cell-index-input').attr('value', this.id)
    $('#cell-value-input').attr('value', currentPlayer)
    if (currentPlayer === 'x') {
      this.setAttribute('src', 'http://i.imgur.com/inG89Ay.jpg')
    } else {
      this.setAttribute('src', 'http://i.imgur.com/chXYzaK.jpg')
    }
    gameData.updatePlayerArray(currentPlayer, this.id)
    gameData.cells[this.id] = currentPlayer
    gameLogic.isGameOver(currentPlayer)
    // $('#game-form').submit(event, updateGame)
    $('#game-form').submit(event, onGameFormSubmit)
    $('#game-form').trigger('submit')
    if (gameData.gameOver === true) {
      $('#new-game').show()
    }
    nextTurn()
  } else {
    // do nothing?
  }
}

const onGameFormSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  event.preventDefault()
  api.updateGame(data)
  .then(ui.updateSuccess)
  .catch(ui.updateFailure)
}
const getAllGames = function () {
  api.getGames(true)
  .then(ui.getSuccess)
  .catch(ui.getFailure)
}

const addHandlers = () => {
  $('.cell').on('click', chooseCell)
  $('#new-game').on('click', newGame)
}

module.exports = {
  addHandlers,
  onLoad,
  getAllGames
}
