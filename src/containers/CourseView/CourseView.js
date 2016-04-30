import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import {Segment, Content, Header, Rating} from 'react-semantify'

class CourseView extends Component {
  
  render () {
    const [name, rating] = ["COMP1927", 5]
    return (
      <div>
        <Segment className="fluid">
          <Content>
            <Header>{name}</Header>
            <div className="meta">
              <Rating className="star" init={{initialRating: rating, maxRating: 5, interactive: false}}></Rating>
            </div>
          </Content>
        </Segment>
      </div>
    );
  }
}

export default CourseView
