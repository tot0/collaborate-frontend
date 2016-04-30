const constants = require('../constants');

const initialState = {}

function update(state = initialState, action) {
	switch (action.type) {

		case constants.SEARCH_RECEIVE:
			return Object.assign([], state, action.json)
		default:
			return state
  }
}

module.exports = update;
