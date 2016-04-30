import React from 'react'
import marked from 'marked'
import {Card, Content, Header, Rating} from 'react-semantify'

function RatingCard(props) {

    return (
          <Card className="fluid">
            <Content>
              <Header>{props.data.user.name}</Header>
              <div className="meta">
                {props.data.comment}
              </div>
              <div className="meta">
                <Rating className="star" init={{initialRating: props.data.overall_satisfaction, maxRating: 5, interactive: false}} disabled></Rating>
              </div>
            </Content>
          </Card>
    );
}

export default RatingCard
