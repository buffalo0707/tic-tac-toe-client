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
  }
}

const createSuccess = (data) => {
  console.log('success', data)
}

const createFailure = (error) => {
  console.log('failure', error)
}

module.exports = {
  initializeSite,
  resetBoard,
  createSuccess,
  createFailure
}
