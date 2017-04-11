const gameData = require(`./data`)
const store = require('../store.js')
const gameLogic = require('./logic.js')

const initializeSite = function () {
  $('#sign-in-button, #sign-in-nav, #jumbotron, #sign-up-nav').show()
  $('#new-game, #game, #sign-out.nav, #change-password-nav, #sign-in-alert, #sign-up-alert, #change-password-alert, #sign-out-nav, #select-side, #stats-nav').hide()
  resetBoard()
  $('#empire').attr('src', gameData.imageEmpire)
  $('#rebel').attr('src', gameData.imageRebel)
}

const resetBoard = function () {
  const array = document.getElementsByClassName('cell')
  for (let i = 0; i < array.length; i++) {
    // remove image from card (flip face down)
    array[i].src = 'https://i.imgur.com/BiJgF5Z.jpg'
    array[i].classList.remove('winner')
  }
  $('#game-over-input').attr('value', gameData.gameOver)
  $('#game-message').html(gameData.factionPlayerX + ' - your turn')
  $('#game-message').removeClass('alert-success')
  $('#game-message').removeClass('alert-warning')
}

const createSuccess = (data) => {
  store.game = data.game
}

const createFailure = () => {
  // do nothing
}

const updateSuccess = () => {
  // do nothing
}

const updateFailure = () => {
  // do nothing
}

const getSuccess = (data) => {
  store.games = data.games
  const games = store.games.length
  const wins = gameLogic.getWinHistory()
  $('#completed-games').html(games)
  $('#won-games').html('')
  $('#won-games').html(wins)
}

const getFailure = () => {
}

module.exports = {
  initializeSite,
  resetBoard,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  getSuccess,
  getFailure
}
