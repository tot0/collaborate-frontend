const constants = require('../constants');

const initialState = {}

function search(state = initialState, action) {
	switch (action.type) {

		case constants.SEARCH_RECEIVE:
			return Object.assign([], [], action.json)
		default:
			return state
  }
}

function search_query(state = "", action) {

	switch (action.type) {
		case constants.SEARCH_SET_QUERY:
			if (action.query.query === undefined) {
				return state
			}
			return action.query.query
		default:
			return state
  }
}



module.exports = { search, search_query};
