import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import Home from './containers/Home/Home'
import ResultList from './containers/ResultList/ResultList'
import CourseView from './containers/CourseView/CourseView'
import OfferingView from './containers/OfferingView/OfferingView'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/search/:query" component={ResultList}/>
    <Route path="/search/" component={Home}/>
    <Route path="/course/:id" component={CourseView}/>
    <Route path="/offering/:id" component={OfferingView}/>
  </Route>
)

export default routes
