const constants = require('../constants');

const initialState = {}

function recent(state = initialState, action) {
	switch (action.type) {

		case constants.RECENT_RECEIVE:
			console.log(action.json)
			return Object.assign([], state, action.json)

		default:
			return state
  }
}

function recent_id(state = -1, action) {
	switch (action.type) {

		case constants.OFFERING_SET:
			return action.id

		default:
			return state
  }
}

module.exports = { recent, recent_id };
