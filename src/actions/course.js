import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchCourse(id) {
  return dispatch => {
    return fetch("http://108.61.213.229:5000/courses/" + id)
      .then(req => req.json())
      .then(json => dispatch(receiveCourse(json)))
  }
}

function receiveCourse(json) {
  return {
    type: constants.COURSE_RECEIVE,
    json: json
  }
}

function setCourse(id) {
  return dispatch => {
    dispatch(fetchCourse(id))
    return {
      type: constants.COURSE_SET,
      id: id
    }
  }
}
module.exports = { fetchCourse, receiveCourse, setCourse }
