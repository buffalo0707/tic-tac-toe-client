const gameData = require(`./data`)
const store = require('../store.js')
const gameLogic = require('./logic.js')

const initializeSite = function () {
  $('#sign-in-button, #sign-in-nav, #jumbotron, #sign-up-nav').show()
  $('#new-game, #game, #sign-out.nav, #change-password-nav, #sign-in-alert, #sign-up-alert, #change-password-alert, #sign-out-nav, #stats-nav, #select-side').hide()
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
  $('#game-message').html('Let the battle begin!')
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
  getGameStats(data)
}

const getFailure = () => {
}

const getGameStats = (data) => {
  const games = data.games.length
  const wins = gameLogic.getWinHistory(data)
  $('#completed-games').html(games)
  $('#won-games').html(wins)
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
  initializeSite,
  resetBoard,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  getSuccess,
  getFailure,
  getGameStats,
  updateStats
}
