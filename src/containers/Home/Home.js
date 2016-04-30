import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../../actions/npmPackages'
import styles from './Home.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'
import { Link } from 'react-router'
import { Grid, Column, Segment } from 'react-semantify'
import CourseCard from '../../components/CourseCard/CourseCard'


class Home extends Component {

  static fetchData({ params, store, url }) {
    return store.dispatch( fetchPackages(url) )
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.dispatch(fetchPackages(location.origin))
  }

  render () {

    return (
      <Grid className="examplegrid">
        <Column className="five wide"/>
        <Column className="six wide">
          <div className={styles.descSegment}>
            <Segment className="raised" color="yellow">
              <h1 className={styles.descTitle}>Collaborate</h1>
              <p className={styles.descPara}>
                Yea so collabor8 is really cool and like people should use it because dank memes and all that jazz.
              </p>
            </Segment>
          </div>
        </Column>
        <Column className="five wide"/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    npmPackages: state.npmPackages.packages
  }
}

export default connect(mapStateToProps)(Home)
