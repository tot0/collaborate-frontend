import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import styles from './CourseView.css'
import {Segment, Content, Header, Rating, Grid, Column, Divider, Icon} from 'react-semantify'

class CourseView extends Component {
  
  render () {
    const [name, rating] = ["COMP1927", 5]
    return (
      <div>
          <div className="ui top attached header">
            <div className={styles.header}>
              <div className={styles.code}>
                {props.data.code}
              </div>
              <div className={styles.title}>
                {props.data.title}
              </div>
            </div>
          </div>
          <Segment className="bottom attached">
            <Content>
              <Grid>
                <Column className="twelve wide">
                  <div className="meta">
                    <div className={styles.rating}>Semester 1:</div>
                    <Rating className="star massive" init={{initialRating: props.data.ratings.sem_1.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                  </div>
                </Column>
                <Column className="four wide">
                  <div>
                    <Icon className={styles.thumb + " thumbs outline up big"} />
                    <div className={styles.reccomend}>{props.data.ratings.sem_1.percent_reccomended}%</div>
                  </div>
                </Column>
              </Grid>
              <Divider className="" />
              <Grid>
                <Column className="twelve wide">
                  <div className="meta">
                    <div className={styles.rating}>Semester 2:</div>
                    <Rating className="star massive" init={{initialRating: props.data.ratings.sem_2.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                  </div>
                </Column>
                <Column className="four wide">
                  <div>
                    <Icon className={styles.thumb + " thumbs outline up big"} />
                    <div className={styles.reccomend}>{props.data.ratings.sem_2.percent_reccomended}%</div>
                  </div>
                </Column>
              </Grid>
            </Content>
          </Segment>
      </div>
    );
  }
}

export default CourseView
