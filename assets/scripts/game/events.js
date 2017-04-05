const getFormFields = require(`../../../lib/get-form-fields`)
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
  $('#cell-index-input').attr('value', this.id)
  $('#cell-value-input').attr('value', currentPlayer)
  this.innerHTML = currentPlayer
  nextTurn()
}

const addHandlers = () => {
  $('.cell').on('click', chooseCell)
}

module.exports = {
  addHandlers
}
