import React from 'react'
import marked from 'marked'
import {Segment, Content, Header, Rating} from 'react-semantify'

function CourseView(props) {
    return (
      <div>
        <Segment className="fluid">
          <Content>
            <Header>{props.data.name} <small>{props.data.year}s{props.data.sem}</small></Header>
            <div className="meta">
              <Rating className="star" init={{initialRating: props.data.rating, maxRating: 5, interactive: false}} disabled></Rating>
            </div>
          </Content>
        </Segment>
      </div>
    );
}

export default CourseView
