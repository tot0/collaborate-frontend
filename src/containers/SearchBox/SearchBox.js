import React, { Component, PropTypes } from 'react'
import styles from './SearchBox.css'
import { Input } from 'react-semantify'
import { connect } from 'react-redux'
import { fetchSearch, setSearchQuery } from '../../actions/search'
import history from '../../../client';

class SearchBox extends Component {
  componentDidMount() {
    this.props.sendSearch(this.props.query)
  }

  onChange(event) {
    history.push('/search/' + event.target.value)
    this.props.setQuery({query: event.target.value})
  }

  onKeyPress(event) {
    if (event.charCode == 13) {
      this.props.sendSearch(event.target.value)
    }
  }

  render () {
    console.log(this.props.query)
    return (
      <div className={styles.searchBox}>
        <div className="ui input searchBox fluid">
          <input className="search" value={this.props.query} placeholder="Search for courses..." type="text" onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    query: state.search_query
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
