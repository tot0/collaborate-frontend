import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu, Item, Icon, Image } from 'react-semantify'
import FacebookLoginContainer from '../../containers/FacebookLoginContainer/FacebookLoginContainer'

function Header() {
  return (
    <header>
      <Menu className="large main inverted top fixed">
        <Item className="header" type="div">
              Collaborate
        </Item>
        <Item type="link" className="right">
            <FacebookLoginContainer />
        </Item>
      </Menu>
    </header>
  )
}

export default Header
