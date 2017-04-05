const getFormFields = require(`../../../lib/get-form-fields`)
const gameData = require(`./data`)
const logic = require(`./logic`)

// const onSignUp = function (event) {
//   // this refers to event.target
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
let currentPlayer = 'x'

const nextTurn = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

const chooseCell = function (event) {
  event.preventDefault()
  if (this.innerHTML === '' && gameData.gameOver === false) {
    $('#cell-index-input').attr('value', this.id)
    $('#cell-value-input').attr('value', currentPlayer)
    this.innerHTML = currentPlayer
    gameData.updatePlayerArray(currentPlayer, this.id)
    console.log(logic.isWin(currentPlayer))
    nextTurn()
  } else { console.log('Space already taken, try again') }
}

const addHandlers = () => {
  $('.cell').on('click', chooseCell)
}

module.exports = {
  addHandlers
}
