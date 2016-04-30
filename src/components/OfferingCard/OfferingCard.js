import React from 'react'
import marked from 'marked'
import styles from './OfferingCard.css'
import {Card, Content, Header, Rating, Grid, Column, Icon, Link} from 'react-semantify'

function OfferingCard(props) {

    return (
      <a onClick={props.onClick} className={styles.link}>
        <Card className="fluid">
          <Content>
            <Header className="huge">{props.data.year}s{props.data.semester}</Header>
            <div className={styles.lecturer}>Lecturer: {props.data.lecturer.name}</div>
            <Grid>
              <Column className="eleven wide">
                <div className="meta">
                  <div className={styles.rating}>Satisfaction:</div>
                  <Rating className="star massive" init={{initialRating: props.data.aggregated_ratings.overall_satisfaction_avg, maxRating: 5, interactive: false}} disabled></Rating>
                </div>
              </Column>
              <Column className="five wide">
                <div className={styles.rightio}>
                  <div className={styles.recommend}>{props.data.aggregated_ratings.percent_recommended}%</div>
                  <Icon className={styles.thumb + " thumbs outline up big"} />
                </div>
              </Column>
            </Grid>
          </Content>
        </Card>
      </a>
    );
}

export default OfferingCard
