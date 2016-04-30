import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import history from '../../../client'
import styles from './OfferingView.css'
import {Segment, Content, Header, Rating, Grid, Column, Divider, Icon, Card} from 'react-semantify'
import { setOffering } from '../../actions/offering'
import RatingCard from '../../components/RatingCard/RatingCard'

class OfferingView extends Component {

  componentWillMount() {
    console.log(this.props.params.id)
    this.props.setOfferingId(this.props.params.id)
  }

  render () {
    console.log(this.props.data)
    if (Object.keys(this.props.data).length === 0) {
      return null
    }
    let results = null;
    if(this.props.data.ratings.length) {
      const sorted_results = this.props.data.ratings.sort(function(a, b) {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
      })
      let self = this
      results = this.props.data.ratings.map(function(rating) {
        return <RatingCard data={rating} key={rating.id} />
      })
    }

    return (
      <div>
        <Grid>
          <Column className="three wide" />
          <Column className="ten wide">
            <Segment className="fluid">
              <Content>
                <Header className="huge">{this.props.data.course.code} - {this.props.data.year}s{this.props.data.semester}</Header>
                <div className={styles.lecturer}>Lecturer: {this.props.data.lecturer.name}</div>
                <Grid>
                  <Column className="twelve wide">
                    <div className="meta">
                      <div className={styles.rating}>Satisfaction:</div>
                      <Rating className="star massive" init={{initialRating: this.props.data.aggregated_ratings.overall_satisfaction_avg, maxRating: 5, interactive: false}} disabled></Rating>
                    </div>
                  </Column>
                  <Column className="four wide">
                    <div>
                      <Icon className={styles.thumb + " thumbs outline up big"} />
                      <div className={styles.reccomend}>{this.props.data.aggregated_ratings.percent_reccomended}%</div>
                    </div>
                  </Column>
                </Grid>
              </Content>
            </Segment>
          </Column>
          <Column className="three wide" />
        </Grid>
        <Grid>
          <Column className="four wide" />
          <Column className="eight wide">
            <Header>Offerings</Header>
            {results}
          </Column>
          <Column className="four wide" />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.offering
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOfferingId: (id) => {
      dispatch(setOffering(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferingView)
