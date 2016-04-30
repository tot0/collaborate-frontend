import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchSearch(query) {
  return dispatch => {
    return fetch("http://108.61.213.229:5000/courses?q=" + query)
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

function setSearchQuery(query) {
  return {
    type: constants.SEARCH_SET_QUERY,
    query: query
  }
}

module.exports = { fetchSearch, receiveSearch, setSearchQuery }
