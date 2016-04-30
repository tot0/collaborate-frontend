import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchSearch(query) {
  return dispatch => {
    return fetch("http://echo.jsontest.com/key/value/one/" + query)
      .then(req => req.json())
      .then(json => dispatch(receiveSearch(json)))
  }
}

function receiveSearch(json) {
  return {
    type: constants.SEARCH_RECEIVE,
    json: json
  }
}

module.exports = { fetchSearch, receiveSearch }
