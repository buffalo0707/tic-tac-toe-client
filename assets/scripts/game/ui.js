const initializeGame = function () {
  $('#new-game').hide()
}

const resetBoard = function () {
  const array = document.getElementsByClassName('cell')
  for (let i = 0; i < array.length; i++) {
    // remove image from card (flip face down)
    array[i].innerHTML = ''
  }
}

module.exports = {
  initializeGame,
  resetBoard
}
