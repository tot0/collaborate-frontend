import React from 'react'
import marked from 'marked'
import {Card, Content, Header, Rating, Grid, Column, Icon, Image} from 'react-semantify'

function RatingCard(props) {

    let thumb = "thumbs outline down huge";
    if (props.data.recommended) {
      console.log("hello")
      thumb = "thumbs outline up huge";
    }

    return (
          <Card className="fluid">
            <Content>
              <Grid>
                <Column className="two wide">
                  <Image className="bordered massive" src={props.data.user.pic} />
                </Column>
                <Column className="eleven wide">
                  <Header>{props.data.user.name} - {props.data.offering.course.code} - {props.data.offering.year}s{props.data.offering.semester}</Header>
                  <div className="meta">
                    {props.data.comment}
                  </div>
                  <div className="meta">
                    <Rating className="star" init={{initialRating: props.data.overall_satisfaction, maxRating: 5, interactive: false}} disabled></Rating>
                  </div>
                </Column>
                <Column className="three wide"><Icon className={thumb} /></Column>
              </Grid>
            </Content>
          </Card>
    );
}

export default RatingCard
