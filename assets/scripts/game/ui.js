const gameData = require(`./data`)
const store = require('../store.js')

const initializeSite = function () {
  $('#new-game').hide()
  $('#game').hide()
  $('#sign-up-holder').hide()
  $('#sign-out-holder').hide()
  $('#change-password-holder').hide()
}

const resetBoard = function () {
  const array = document.getElementsByClassName('cell')
  for (let i = 0; i < array.length; i++) {
    // remove image from card (flip face down)
    array[i].innerHTML = ''
    $('#game-over-input').attr('value', gameData.gameOver)
  }
}

const createSuccess = (data) => {
  console.log('success', data)
  store.game = data.game
}

const createFailure = (error) => {
  console.log('failure', error)
}

const updateSuccess = (data) => {
  console.log('update success', data)
}

const updateFailure = (error) => {
  console.log('failure', error)
}

const getSuccess = (data) => {
  console.log('got games ok. here is the data:', data);
}

const getFailure = (error) => {
  console.log('failed to get games', error);
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