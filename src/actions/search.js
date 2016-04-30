import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchSearch(query) {
  return dispatch => {
    return fetch("http://jsonplaceholder.typicode.com/posts")
      .then(req => req.json())
      .then(json => dispatch(receiveSearch(json)))
  }
}

function receiveSearch(json) {
  console.log(json)
  return {
    type: constants.SEARCH_RECEIVE,
    json: json
  }
}

module.exports = { fetchSearch, receiveSearch }
