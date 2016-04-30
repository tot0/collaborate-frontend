import React from 'react'
import marked from 'marked'
import {Card, Content, Header, Rating} from 'react-semantify'

function CourseCard(props) {

    return (
        <a onClick={props.onClick}>
        <Card className="fluid">
          <Content>
            <Header>{props.data.code} {props.data.title}</Header>
            <div className="meta">
              <Rating className="star" init={{initialRating: props.data.rating, maxRating: 5, interactive: false}} disabled></Rating>
            </div>
          </Content>
        </Card>
        </a>
    );
}

export default CourseCard
