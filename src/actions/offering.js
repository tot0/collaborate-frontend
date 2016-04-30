import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchOffering(id) {
  return dispatch => {
    return fetch("http://108.61.213.229:5000/offerings/" + id)
      .then(req => req.json())
      .then(json => dispatch(receiveOffering(json)))
  }
}

function receiveOffering(json) {
  return {
    type: constants.OFFERING_RECEIVE,
    json: json
  }
}

function setOffering(id) {
  return dispatch => {
    dispatch(fetchOffering(id))
    return {
      type: constants.OFFERING_SET,
      id: id
    }
  }
}
module.exports = { fetchOffering, receiveOffering, setOffering }
