const constants = require('../constants');

const initialState = {}

function course(state = initialState, action) {
	switch (action.type) {

		case constants.COURSE_RECEIVE:
			console.log(action.json)
			return Object.assign({}, state, action.json)

		default:
			return state
  }
}

function course_id(state = -1, action) {
	switch (action.type) {

		case constants.COURSE_SET:
			return action.id

		default:
			return state
  }
}

module.exports = { course, course_id };
