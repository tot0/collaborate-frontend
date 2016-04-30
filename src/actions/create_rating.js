
import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function sendForm(form_data) {
  console.log(form_data.access_token)
  return dispatch => {
    return fetch("http://108.61.213.229:5000/offerings/" + form_data.offering_id + "/ratings", {
      method: 'POST',
      headers: {
        'X-Access-Token': form_data.access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form_data)
    })
      .then(req => req.json())
      .then(json => dispatch(receiveForm(json)))
  }
}

function receiveForm(json) {
  return {
    type: constants.FORM_RECEIVE,
    json: json
  }
}

module.exports = { sendForm, receiveForm }
