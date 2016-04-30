const constants = require('../constants');

const initialState = {facebook: 0}

function setFacebookReducer(state = {}, action) {
	switch (action.type) {
		case constants.SET_FACEBOOK_ACCESS_TOKEN:
			return {
				...state,
				token: action.token
			}
		default:
			return state
  }
}

module.exports = setFacebookReducer;
