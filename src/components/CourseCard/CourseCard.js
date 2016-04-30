import React from 'react'
import marked from 'marked'
import {Card, Content, Header, Rating} from 'react-semantify'

function CourseCard(props) {

    const {name, rating, year, sem} = props.data

    return (
      <div>
        <Card className="fluid">
          <Content>
            <Header>{name} <small>{year}s{sem}</small></Header>
            <div className="meta">
              <Rating className="star" init={{initialRating: rating, maxRating: 5, interactive: false}} disabled></Rating>
            </div>
          </Content>
        </Card>
      </div>
    );
}

export default CourseCard
