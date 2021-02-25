import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent';
import WelcomeComponent from './WelcomeComponent';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path='/' exact component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <AuthenticatedRoute
              path='/welcome/:name'
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path='/todos/:id' component={TodoComponent} />
            <AuthenticatedRoute path='/todos' component={ListTodosComponent} />
            <AuthenticatedRoute path='/logout' component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
