import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchRecent(id) {
  return dispatch => {
    return fetch("http://108.61.213.229:5000/ratings/recent")
      .then(req => req.json())
      .then(json => dispatch(receiveRecent(json)))
  }
}

function receiveRecent(json) {
  return {
    type: constants.RECENT_RECEIVE,
    json: json
  }
}

function setRecent(id) {
  return dispatch => {
    dispatch(fetchRecent(id))
    return {
      type: constants.RECENT_SET,
      id: id
    }
  }
}
module.exports = { fetchRecent, receiveRecent, setRecent }
