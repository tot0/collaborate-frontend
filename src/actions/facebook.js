const constants = require('../constants')

var setFacebookAction = function (token) { {
  return {
      type: constants.SET_FACEBOOK_ACCESS_TOKEN,
      token: token
    }
  }
}

module.exports = { setFacebookAction }
