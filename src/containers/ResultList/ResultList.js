import React, { Component, PropTypes } from 'react'
import { Input } from 'react-semantify'
import { connect } from 'react-redux'
import { fetchSearch } from '../../actions/search'
import CourseCard from '../../components/CourseCard/CourseCard'

class ResultList extends Component {
  render () {
    if (this.props.query == "") {
      return null;
    }
    let results = null;
    if(this.props.results.length) {
      const sorted_results = this.props.results.sort(function(a, b) {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
      })
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
    results: state.search,
    query: state.search_query.query
  }
}

export default connect(mapStateToProps)(ResultList)
