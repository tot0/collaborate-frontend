import React, { Component, PropTypes } from 'react'
import styles from './SearchBox.css'
import { Input } from 'react-semantify'
import { connect } from 'react-redux'
import { fetchSearch } from '../../actions/search'

class SearchBox extends Component {
  onChange(event) {
    this.props.sendSearch(event.target.value)
  }

  render () {
    return (
      <div className={styles.searchBox}>
        <Input className="searchBox fluid" placeholder="Search for courses..." type="text" onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    sendSearch: (query) => {
      dispatch(fetchSearch(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
