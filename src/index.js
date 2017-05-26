import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './components/Container';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import App from './App';

import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router';

render(
  <Router history={hashHistory}>
    <Route path='/' component={Login}></Route>
    <Route path='/signup' component={Signup}></Route>
  </Router>,
  document.getElementById('root')
)