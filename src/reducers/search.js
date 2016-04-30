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

function search_query(state = initialState, action) {
	switch (action.type) {

		case constants.SEARCH_SET_QUERY:
			return Object.assign({}, state, action.query)
		default:
			return state
  }
}



module.exports = { search, search_query};
