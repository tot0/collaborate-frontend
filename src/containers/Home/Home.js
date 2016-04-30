import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Home.css'
import { Link } from 'react-router'
import { Grid, Column, Segment, Image } from 'react-semantify'

class Home extends Component {

  render () {
    return (
      <Grid>
        <Column className="three wide"/>
        <Column className="ten wide">
          <div className={styles.descSegment}>
            <Segment className="raised">
              <div className={styles.descLogo}>
                <Image className="medium" src="/public/Collaborate.png"></Image>
              </div>
               <p className={styles.descPara}>
                Yea so collabor8 is really cool and like people should use it because dank memes and all that jazz.
              </p>
            </Segment>
          </div>
        </Column>
        <Column className="three wide"/>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
