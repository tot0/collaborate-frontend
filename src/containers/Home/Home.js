import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Home.css'
import { Link } from 'react-router'
import { Grid, Column, Segment, Image } from 'react-semantify'
import CourseCard from '../../components/CourseCard/CourseCard'
import ResultList from '../ResultList/ResultList'
import { setSearchQuery } from '../../actions/search'

class Home extends Component {
  componentWillMount() {
    this.props.setQuery(this.props.params)
  }
  render () {
    console.log()
    return (
      <Grid className="examplegrid">
        <Column className="three wide"/>
        <Column className="ten wide">
          <ResultList />
          {Object.keys(this.props.search_query).length === 0 || this.props.search_query.query == "" ? <div className={styles.descSegment}>
            <Segment className="raised">
              <div className={styles.descLogo}>
                <Image className="medium" src="/public/Collaborate.png"></Image>
              </div>
               <p className={styles.descPara}>
                Yea so collabor8 is really cool and like people should use it because dank memes and all that jazz.
              </p>
            </Segment>
          </div> : null}
        </Column>
        <Column className="three wide"/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    search_query: state.search_query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setQuery: (query) => {
      dispatch(setSearchQuery(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
