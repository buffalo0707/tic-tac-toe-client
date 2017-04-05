'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-in-holder').show()
  $('#sign-up-holder').hide()

}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('success', data)
  store.user = data.user
  $('#sign-in-holder').hide()
  $('#game').show()
}

const signInFailure = (error) => {
  console.log('failure', error)
}

const signOutSuccess = () => {
  console.log('signOut success ran and nothing was returned')
  store.user = {}
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is:', error)
}

const changePasswordSuccess = () => {
  console.log('changePassword success ran and nothing was returned')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is:', error)
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
