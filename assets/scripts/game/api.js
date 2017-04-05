const config = require('../config')
const store = require('../store.js')

const createGame = () => {
  console.log('createGame API ran')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame
}
