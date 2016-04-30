import React, { Component, PropTypes } from 'react'
import styles from './SearchBox.css'
import { Input } from 'react-semantify'
import { connect } from 'react-redux'
import { fetchSearch, setSearchQuery } from '../../actions/search'

class SearchBox extends Component {


  componentWillUpdate() {
    console.log(this.props.query)
  }
  onChange(event) {
    this.props.setQuery({query: event.target.value})
    this.props.sendSearch(event.target.value)
  }

  render () {
    return (
      <div className={styles.searchBox}>
        <div className="ui input searchBox fluid">
          <input defaultValue={this.props.query} placeholder="Search for courses..." type="text" onChange={this.onChange.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    query: state.search_query.query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendSearch: (query) => {
      dispatch(fetchSearch(query))
    },
    setQuery: (query) => {
      dispatch(setSearchQuery(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
