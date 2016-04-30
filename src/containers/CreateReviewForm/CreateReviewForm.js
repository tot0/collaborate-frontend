import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Icon, Menu, Item, Text, Dropdown, Button, Column, Segment, Header, Image, Form, Field, Label, Rating, Checkbox } from 'react-semantify'
import { sendForm } from '../../actions/create_rating'


class CreateReviewForm extends Component {
  submit() {
    this.props.onSubmit()
    let state = {};
    [ state.overall_satisfaction,
      state.interesting,
      state.challenging,
      state.time_consuming,
      state.useful,
      state.lecture_quality,
      state.assessment_enjoyable,
      state.assessment_challenging,
      state.assessment_relevant] = $('.ui.rating').rating('get rating');

    [ state.recommended,
      state.lecture_videos,
      state.lecture_attendance,
      state.tutorial_attendance] = $('.ui.checkbox').checkbox('is checked')

    state.comment = $('textarea').val()
    state.offering_id = parseInt($('.ui.dropdown').first().dropdown('get value'))
    state.access_token = this.props.access_token
    console.log(state)
    this.props.sendRating(state)
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown()
  }

  render () {
    let rating = 4
    return (
      <Segment className="raised">
        <Form>
          <Field>
            <label>Select the year and session to review.</label>
            <div className="ui dropdown fluid selection">
              <input type="hidden" name="offering"/>
              <Icon className="dropdown"/>
            	<div className="default text">Select Offering</div>
            	<div className="menu">
                {this.props.course.offerings.map(function(item) {
                  return (
                    <div className="item" key={item.id} data-value={item.id}>
                      {item.year.toString().substr(2,2)}s{item.semester}
                    </div>
                  )
                })}
            	</div>
            </div>
          </Field>
          <Header className="dividing">General</Header>
          <Field>
            <label>Were you satisfied with the course?</label>
            <Rating className="star" init={{maxRating: 5}} onRate={this.rate}></Rating>
          </Field>
          <Field>
            <label>Would you recommend this course to a friend?</label>
            <Checkbox className="toggle" init={true}>
            <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
            </Checkbox>
          </Field>
          <Field>
            <label>How interesting was the course content?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>How challenging was the course?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>How time consuming was the course?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>How useful do you feel the course content will be in the future?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Header className="dividing">Lectures</Header>
          <Field>
            <label>Quality of lectures</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>Are lecture videos provided?</label>
            <Checkbox className="toggle" init={true}>
            <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
            </Checkbox>
          </Field>
          <Field>
            <label>Is lecture attendance recorded?</label>
            <Checkbox className="toggle" init={true}>
            <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
            </Checkbox>
          </Field>
          <Header className="dividing">Tutorials</Header>
          <Field>
            <label>Would you recommend this course to a friend?</label>
            <Checkbox className="toggle" init={true}>
            <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
            </Checkbox>
          </Field>
          <Header className="dividing">Assessments</Header>
          <Field>
            <label>How enjoyable were the assessments?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>How challenging were the assessments?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Field>
            <label>How relevant were the assessments to the course?</label>
            <Rating className="star" init={{maxRating: 5}}></Rating>
          </Field>
          <Header className="dividing">Other Comments</Header>
          <Field>
            <label>Do you have any other comments?</label>
            <textarea></textarea>
          </Field>
          <Button color="green" onClick={this.submit.bind(this)}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    search_query: state.search_query,
    course: state.course,
    access_token: state.facebook.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendRating: (form_data) => {
      dispatch(sendForm(form_data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)
