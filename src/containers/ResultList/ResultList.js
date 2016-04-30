import React, { Component, PropTypes } from 'react'
import { Input } from 'react-semantify'
import { connect } from 'react-redux'
import { fetchSearch } from '../../actions/search'
import CourseCard from '../../components/CourseCard/CourseCard'

class ResultList extends Component {
  render () {
    let results = null;
    if(this.props.results.length) {
      results = this.props.results.map(function(course) {
        return <CourseCard data={course} key={course.id} />
      })
    }
    return (
      <div>
      {results}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.search
  }
}

export default connect(mapStateToProps)(ResultList)
