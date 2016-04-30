import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu, Item, Icon, Image, Grid, Column, Input } from 'react-semantify'
import FacebookLoginContainer from '../../containers/FacebookLoginContainer/FacebookLoginContainer'
import SearchBox from '../../containers/SearchBox/SearchBox'

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

      <Grid className="">
        <Column className="four wide" />
        <Column className="eight wide">
          <SearchBox />
        </Column>
        <Column className="four wide" />
      </Grid>
    </header>
  )
}

export default Header
