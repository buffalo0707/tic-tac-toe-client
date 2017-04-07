const gameData = require(`./data`)
const store = require('../store.js')
const gameLogic = require('./logic.js')

const initializeSite = function () {
  $('#jumbotron').show()
  $('#new-game').hide()
  $('#game').hide()
  $('#sign-up-holder').hide()
  $('#sign-out.nav').hide()
  $('#change-password-nav').hide()
  $('#sign-in-alert').hide()
  $('#sign-up-alert').hide()
  $('#change-password-alert').hide()
  $('#sign-in-button').show()
  $('#sign-in-nav').show()
  $('#sign-out-nav').hide()
  $('#sign-up-nav').show()
  $('#landing').show()
  $('#stats-nav').hide()
}

const resetBoard = function () {
  const array = document.getElementsByClassName('cell')
  for (let i = 0; i < array.length; i++) {
    // remove image from card (flip face down)
    array[i].src = "http://i.imgur.com/BiJgF5Z.jpg"
    $('#game-over-input').attr('value', gameData.gameOver)
    $('#game-message').html('Let the battle begin!')
    $('#game-message').removeClass('alert-success')
  }
}

const createSuccess = (data) => {
  store.game = data.game
}

const createFailure = (error) => {
  console.log('failure', error)
}

const updateSuccess = (data) => {
}

const updateFailure = (error) => {
  console.log('failure', error)
}

const getSuccess = (data) => {
  getGameStats(data)
}
const getFailure = (error) => {
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
