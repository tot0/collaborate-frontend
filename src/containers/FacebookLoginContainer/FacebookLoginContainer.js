import React, { Component, PropTypes } from 'react'
import styles from './FacebookLoginContainer.css'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import {setFacebookAction} from '../../actions/facebook'

class FacebookLoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      name: ''
    }
  }
  responseFacebook(response) {
    // check the token actually exists
    if (response.accessToken) {
        this.props.onFacebookConnected(response.accessToken)
        this.setState({
          isLoggedIn: true,
          name: response.name});
    }
  }

  render () {
    let button = null;
    if (!this.state.isLoggedIn) {
      button = <FacebookLogin
            appId="476180995908469"
            autoLoad={true}
            cssClass={styles.facebookBtn + " ui tiny button blue"}
            callback={this.responseFacebook.bind(this)} />
    } else {
      button = <span>{this.state.name}</span>
    }
    return (
      button
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFacebookConnected: (token) => {
      dispatch(setFacebookAction(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginContainer)
