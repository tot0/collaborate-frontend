import React from 'react'
import marked from 'marked'
import styles from './OfferingCard.css'
import {Card, Content, Header, Rating, Grid, Column, Icon} from 'react-semantify'

function OfferingCard(props) {

    return (
        <Card className="fluid">
          <Content>
            <Header className="huge">{props.data.year}s{props.data.semester}</Header>
            <div className={styles.lecturer}>Lecturer: {props.data.lecturer.name}</div>
            <Grid>
              <Column className="twelve wide">
                <div className="meta">
                  <div className={styles.rating}>Satisfaction:</div>
                  <Rating className="star massive" init={{initialRating: props.data.ratings.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                </div>
              </Column>
              <Column className="four wide">
                <div>
                  <Icon className={styles.thumb + " thumbs outline up big"} />
                  <div className={styles.reccomend}>{props.data.ratings.percent_reccomended}%</div>
                </div>
              </Column>
            </Grid>
          </Content>
        </Card>
    );
}

export default OfferingCard
