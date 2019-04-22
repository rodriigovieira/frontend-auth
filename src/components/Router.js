import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import UsersPage from '../pages/UsersPage'
import CreateUserPage from '../pages/CreateUserPage'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/registrar" component={SignUpPage} />
          <Route path="/usuarios" component={UsersPage} />
          <Route path="/criar" component={CreateUserPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
