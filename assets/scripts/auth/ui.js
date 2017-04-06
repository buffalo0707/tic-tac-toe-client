'use strict'

const store = require('../store.js')
const gameApi = require('../game/api.js')
const gameUi = require('../game/ui.js')
const gameEvents = require('../game/events.js')

const signUpSuccess = (data) => {
$('#myModal').modal('hide');
console.log("signed up");
}

const signUpFailure = (error) => {
  console.error(error)
  // need to display error to user
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-holder').hide()
  $('#jumbotron').hide()
  $('#game').show()
  gameApi.createGame()
  .then(gameUi.createSuccess)
  .catch(gameUi.createFailure)
  $('#sign-out-holder').hide()
  $('#sign-out-holder').show()
  $('#change-password-holder').show()
  gameEvents.getAllGames()
}

const signInFailure = (error) => {
  console.log('failure', error)
  // Need to display a message to user
}

const signOutSuccess = () => {
  console.log('signOut success ran and nothing was returned')
  store.user = {}
  $('#new-game').hide()
  $('#game').hide()
  $('#sign-up-holder').hide()
  $('#sign-out-holder').hide()
  $('#change-password-holder').hide()
    $('#sign-in-holder').show()
  // need to change view
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is:', error)
}

const changePasswordSuccess = () => {
  // need to let user know password was changed
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is:', error)
  // need to display message to user
}
const showSignUp = () => {
  $('#sign-in-holder').hide()
  $('#sign-up-holder').show()
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
  showSignUp
}
