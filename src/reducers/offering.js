const constants = require('../constants');

const initialState = {}

function offering(state = initialState, action) {
	switch (action.type) {

		case constants.OFFERING_RECEIVE:
			console.log(action.json)
			return Object.assign({}, state, action.json)

		default:
			return state
  }
}

function offering_id(state = -1, action) {
	switch (action.type) {

		case constants.OFFERING_SET:
			return action.id

		default:
			return state
  }
}

module.exports = { offering, offering_id };
