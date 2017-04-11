const config = require('../config')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getGames = (isComplete) => {
  store.games = {}
  if (isComplete) {
    return $.ajax({
      url: config.apiOrigin + '/games?over=true',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  } else {
    return $.ajax({
      url: config.apiOrigin + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }
}

module.exports = {
  updateGame,
  createGame,
  getGames
}
