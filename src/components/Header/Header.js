import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import {Menu, Item, Icon} from 'react-semantify'

function Header() {
  return (
    <header>
      <Menu className="inverted top fixed">
        <Item className="active" type="link">
          <Icon className="home" />Home
        </Item>
        <Item type="link">
          <Icon className="mail"/> Messages
        </Item>
      </Menu>
    </header>
  )
}

export default Header
