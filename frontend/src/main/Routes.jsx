import React from 'react'

import Todo from '../todo/Todo'

import About from '../about/About'

import { Switch, Route } from 'react-router-dom';

export default props => 
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route path="/about" component={About} />
    </Switch>
