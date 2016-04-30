import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Home.css'
import { Link } from 'react-router'
import { Grid, Column, Segment, Image, Header } from 'react-semantify'
import { setRecent } from '../../actions/recent'
import RecentCard from '../../components/RecentCard/RecentCard'


class Home extends Component {
  componentWillMount() {
    this.props.setRecentId(0)
  }

  render () {
    let results = null;
    console.log(this.props.data);
    if(this.props.data.length) {
      const sorted_results = this.props.data.sort(function(a, b) {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
      })
      let self = this
      results = this.props.data.map(function(rating) {
        return <RecentCard data={rating} key={rating.id} />
      })
    }
    console.log(results)

    return (
      <Grid>
        <Column className="three wide"/>
        <Column className="ten wide">
          <div className={styles.descSegment}>
            <Segment className="raised top attached">
              <div className={styles.descLogo}>
                <Image src="/public/Collaborate.png"></Image>
              </div>
            </Segment>
            <Header className={styles.descLogo}>Recent Reviews</Header>
            {results}
          </div>
        </Column>

      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.recent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRecentId: (id) => {
      dispatch(setRecent(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
