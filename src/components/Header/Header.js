import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import {Menu, Item, Icon, Grid, Column, Input} from 'react-semantify'

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

      <Grid className="">
        <Column className="four wide" />
        <Column className="eight wide">
          <div className={styles.searchBox}>
            <Input className="searchBox fluid" placeholder="Search for courses..." type="text" />
          </div>
        </Column>
        <Column className="four wide" />
      </Grid>

    </header>
  )
}

export default Header
