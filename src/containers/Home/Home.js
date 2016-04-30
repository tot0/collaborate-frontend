import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Home.css'
import { Link } from 'react-router'
import { Grid, Column, Input, Icon, Field } from 'react-semantify'
import CourseView from '../../components/CourseView/CourseView'


class Home extends Component {

  render () {

    return (
      <div className={styles.home}>
        <Grid className="examplegrid">
          <Column className="two wide"/>
          <Column className="twelve wide">
            <CourseView data={{name: "COMP1927", rating: 5, year: 15, sem: 2}}/>
          </Column>
          <Column className="two wide"/>
        </Grid>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(Home)
