'use strict'

const store = require('../store.js')
const gameApi = require('../game/api.js')
const gameUi = require('../game/ui.js')
const gameEvents = require('../game/events.js')
const gameData = require('../game/data.js')

const signUpSuccess = (data) => {
  $('#sign-up-modal').modal('hide')
}

const signUpFailure = () => {
  $('#sign-up-alert').show()
}

const signInSuccess = (data) => {
  $('#change-password-nav').show()
  $('#sign-out-nav').show()
  $('#select-side').show()
  $('#stats-nav').show()
  $('#jumbotron').hide()
  $('#sign-in-modal').modal('hide')
  $('#sign-in-nav').hide()
  $('#sign-up-nav').hide()
  store.user = data.user
  gameApi.createGame()
  .then(gameUi.createSuccess)
  .catch(gameUi.createFailure)
  $('#sign-out-nav').show()
  gameEvents.getCompletedGames()
}

const signInFailure = () => {
  $('#sign-in-alert').show()
}

const signOutSuccess = () => {
  store.user = {}
  gameUi.initializeSite()
  gameData.resetData()
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide')
  $('#current-password').val('')
  $('#new-password').val('')
  $('#change-password-alert').hide()
}

const changePasswordFailure = () => {
  $('#change-password-alert').show()
}

const showSignUp = () => {
  $('#sign-in-holder').hide()
  $('#sign-up-holder').show()
}

const clearSignIn = () => {
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-in-alert').hide('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  showSignUp,
  clearSignIn
}
