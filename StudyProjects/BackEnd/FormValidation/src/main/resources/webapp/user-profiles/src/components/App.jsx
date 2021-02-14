import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import SignUp from './forms/SignUp';
import Login from './forms/Login';
import Profile from './Profile';
import Footer from './Footer';
import ProfileEdit from './ProfileEdit';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <div className='container'>
          <Switch>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/' exact component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/edit-profile' component={ProfileEdit} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
