import React, { Component, PropTypes } from 'react'
import { Input, Grid, Column} from 'react-semantify'

import history from '../../../client'
import { connect } from 'react-redux'
import { fetchSearch, setSearchQuery } from '../../actions/search'
import CourseCard from '../../components/CourseCard/CourseCard'
import { setCourse } from '../../actions/course'

class ResultList extends Component {
  handleClick(courseId, props) {
    this.props.setCourseId(courseId);
    console.log(courseId)
    history.push('/course/'+courseId);
  }

  componentWillMount() {
    this.props.setQuery(this.props.params)
  }
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
      let self = this
      results = this.props.results.map(function(course) {
        return <CourseCard onClick={self.handleClick.bind(self, course.id, self.props)} data={course} key={course.id} />
      })
    }
    return (
      <Grid>
        <Column className="three wide"/>
        <Column className="ten wide">{results}</Column>
        <Column className="three wide"/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.search,
    query: state.search_query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCourseId: (id) => {
      dispatch(setCourse(id))
    },
    setQuery: (query) => {
      dispatch(setSearchQuery(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList)
