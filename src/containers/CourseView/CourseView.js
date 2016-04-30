import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import history from '../../../client'
import styles from './CourseView.css'
import {Segment, Modal, Button, Content, Header, Rating, Grid, Column, Divider, Icon} from 'react-semantify'
import { setCourse, fetchCourse, clearCourse } from '../../actions/course'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import { setOffering } from '../../actions/offering'
import OfferingCard from '../../components/OfferingCard/OfferingCard'

class CourseView extends Component {

  componentWillMount() {
    console.log(this.props.params.id)
    this.props.setCourseId(this.props.params.id)
  }

  onClick() {
    $('.ui.modal').modal('show')
  }

  killModal() {
    $('.ui.modal').modal('hide')
  }

  handleClick(offeringId, props) {
    this.props.setOfferingId(offeringId);
    history.push('/offering/'+offeringId);
  }

  render () {
    if (Object.keys(this.props.data).length === 0 &&
        this.props.course_id_1 != this.props.course_id_2) {
      return null
    }
    let results = null;
    if(this.props.data.offerings.length) {
      const sorted_results = this.props.data.offerings.sort(function(a, b) {
        if (a.id < b.id) return -1
        if (a.id > b.id) return 1
        return 0
      })
      let self = this
      results = this.props.data.offerings.map(function(offering) {
        return <OfferingCard onClick={self.handleClick.bind(self, offering.id, self.props)} data={offering} key={offering.id} />
      })
    }
    console.log(this.props.data.ratings)
    return (
        <Grid>
          <Column className="three wide" />
          <Column className="ten wide">
          <Modal init={true}>
            <CreateReviewForm onSubmit={this.killModal}/>
          </Modal>
          <Button color="green" onClick={this.onClick}>Rate this course</Button>

            <Header className="ui top attached header">
              <div className={styles.header}>
                <div className={styles.code}>
                  {this.props.data.code}
                </div>
                <div className={styles.title}>
                  {this.props.data.title}
                </div>
              </div>
            </Header>
            <Segment className="bottom attached">
              <Content>
                <Grid>
                  <Column className="eleven wide">
                    <div className="meta">
                      <div className={styles.rating}>Sem 1:</div>
                      <Rating className="star massive" init={{initialRating: this.props.data.ratings.sem_1.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                    </div>
                  </Column>
                  <Column className="five wide">
                    <div>
                      <Icon className={styles.thumb + " thumbs outline up big"} />
                      <div className={styles.recommend}>{this.props.data.ratings.sem_1.percent_recommended}%</div>
                    </div>
                  </Column>
                </Grid>
                <Divider className="" />
                <Grid>
                  <Column className="eleven wide">
                    <div className="meta">
                      <div className={styles.rating}>Sem 2:</div>
                      <Rating className="star massive" init={{initialRating: this.props.data.ratings.sem_2.avg_rating, maxRating: 5, interactive: false}} disabled></Rating>
                    </div>
                  </Column>
                  <Column className="five wide">
                    <div>
                      <Icon className={styles.thumb + " thumbs outline up big"} />
                      <div className={styles.recommend}>{this.props.data.ratings.sem_2.percent_recommended}%</div>
                    </div>
                  </Column>
                </Grid>
              </Content>
            </Segment>
            <Header>Offerings</Header>
            {results}
          </Column>
          <Column className="three wide" />
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.course,
    course_id_1: state.course_id,
    course_id_2: state.course.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCourseId: (id) => {
      dispatch(clearCourse()),
      dispatch(setCourse(id)),
      dispatch(fetchCourse(id))
    },
    setOfferingId: (id) => {
      dispatch(setOffering(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseView)
