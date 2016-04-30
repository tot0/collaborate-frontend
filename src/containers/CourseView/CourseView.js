import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import styles from './CourseView.css'
import {Segment, Content, Header, Rating, Grid, Column, Divider, Icon} from 'react-semantify'
import { setCourse } from '../../actions/course'
import OfferingCard from '../../components/OfferingCard/OfferingCard'

class CourseView extends Component {

  componentWillMount() {
    console.log(this.props.params.id)
    this.props.setCourseId(this.props.params.id)
  }

  render () {
    const [name, rating] = ["COMP1927", 5]
    console.log(this.props.data)
    if (Object.keys(this.props.data).length === 0) {
      return null
    }
    let results = null;
    if(this.props.data.offerings.length) {
      const sorted_results = this.props.data.offerings.sort(function(a, b) {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
      })
      let self = this
      results = this.props.data.offerings.map(function(offering) {
        return <OfferingCard data={offering} key={offering.id} />
      })
    }

    return (
      <div>
        <Grid>
          <Column className="four wide" />
          <Column className="eight wide">
            <Header className="ui top attached header">
              <div className={styles.header}>
                <div className={styles.code}>
                  {this.props.data.code}
                </div>
                <div className={styles.title}>
                  {this.props.data.title}
                </div>
              </div>
            </Header>
            <Segment className="bottom attached">
              <Content>
                <Grid>
                  <Column className="twelve wide">
                    <div className="meta">
                      <div className={styles.rating}>Semester 1:</div>
                      <Rating className="star massive" init={{initialRating: this.props.data.ratings.sem_1.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                    </div>
                  </Column>
                  <Column className="four wide">
                    <div>
                      <Icon className={styles.thumb + " thumbs outline up big"} />
                      <div className={styles.reccomend}>{this.props.data.ratings.sem_1.percent_reccomended}%</div>
                    </div>
                  </Column>
                </Grid>
                <Divider className="" />
                <Grid>
                  <Column className="twelve wide">
                    <div className="meta">
                      <div className={styles.rating}>Semester 2:</div>
                      <Rating className="star massive" init={{initialRating: this.props.data.ratings.sem_2.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                    </div>
                  </Column>
                  <Column className="four wide">
                    <div>
                      <Icon className={styles.thumb + " thumbs outline up big"} />
                      <div className={styles.reccomend}>{this.props.data.ratings.sem_2.percent_reccomended}%</div>
                    </div>
                  </Column>
                </Grid>
              </Content>
            </Segment>
          </Column>
          <Column className="four wide" />
        </Grid>
        <Grid>
          <Column className="four wide" />
          <Column className="eight wide">
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
    data: state.course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCourseId: (id) => {
      dispatch(setCourse(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseView)
