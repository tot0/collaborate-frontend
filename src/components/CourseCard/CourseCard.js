import React from 'react'
import marked from 'marked'
import {Card, Content, Header, Rating} from 'react-semantify'

function CourseCard(props) {

    const {code, title} = props.data
    const rating = 4
    return (
        <Card className="fluid">
          <Content>
            <Header>{code} {title}</Header>
            <div className="meta">
              <Rating className="star" init={{initialRating: rating, maxRating: 5, interactive: false}} disabled></Rating>
            </div>
          </Content>
        </Card>
    );
}

export default CourseCard
