const getFormFields = require(`../../../lib/get-form-fields`)
const gameData = require(`./data`)
const gameLogic = require(`./logic`)
const ui = require(`./ui`)
const api = require(`./api`)

let currentPlayer = 'x'

const nextTurn = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    $('#game-message').html(gameData.factionPlayerO + ' - your turn')
  } else {
    currentPlayer = 'x'
    $('#game-message').html(gameData.factionPlayerX + ' - your turn')
  }
}

const onLoad = function () {
  ui.initializeSite()
  gameData.gameOver = false
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
  } else if (this.getAttribute('src') === gameData.imageBlank) {
    // update hidden form
    $('#cell-index-input').attr('value', this.id)
    $('#cell-value-input').attr('value', currentPlayer)
    if (currentPlayer === 'x') {
      this.setAttribute('src', gameData.imagePlayerX)
    } else {
      this.setAttribute('src', gameData.imagePlayerO)
    }
    gameData.updatePlayerArray(currentPlayer, this.id)
    gameData.cells[this.id] = currentPlayer
    gameLogic.isGameOver(currentPlayer)
    // $('#game-form').submit(event, updateGame)
    $('#game-form').submit(event, onGameFormSubmit)
    $('#game-form').trigger('submit')
    if (gameData.gameOver === true) {
      $('#new-game').show()
      getCompletedGames()
    } else {
      nextTurn()
    }
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
const getCompletedGames = function () {
  api.getGames(true)
  .then(ui.getSuccess)
  .catch(ui.getFailure)
}
const chooseSide = function (event) {
  ui.onChooseSide
  if (this.id === 'empire') {
    gameData.imagePlayerX = gameData.imageEmpire
    gameData.factionPlayerX = 'Galactic Empire'
    gameData.imagePlayerO = gameData.imageRebel
    gameData.factionPlayerO = 'Rebel Alliance'
  } else {
    gameData.imagePlayerO = gameData.imageEmpire
    gameData.factionPlayerX = 'Rebel Alliance'
    gameData.imagePlayerX = gameData.imageRebel
    gameData.factionPlayerO = 'Galactic Empire'
  }
  $('#game').show()
  $('#select-side').hide()
  $('#game-message').html(gameData.factionPlayerX + ' - your turn')
}

const addHandlers = () => {
  $('.cell').on('click', chooseCell)
  $('#new-game').on('click', newGame)
  $('.side-option').on('click', chooseSide)
}

module.exports = {
  addHandlers,
  onLoad,
  getCompletedGames
}
