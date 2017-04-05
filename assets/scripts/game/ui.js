const initializeSite = function () {
  $('#new-game').hide()
  $('#game').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const resetBoard = function () {
  const array = document.getElementsByClassName('cell')
  for (let i = 0; i < array.length; i++) {
    // remove image from card (flip face down)
    array[i].innerHTML = ''
  }
}

module.exports = {
  initializeSite,
  resetBoard
}
