import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  // Navigation
  // - User Icon
  // - SignUp
  // - Login
  // - Profile
  // - Logout

  // constructor(props) {
  //   super(props);
  //   console.log(this.props); //{}
  //   // Don't call this.setState() here!
  //   // this.state = { counter: 0 };
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  /*
  where do i setup login state?
  */

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-2'>
        <Link className='navbar-brand' to='/login'>
          <i className='fas fa-users'></i> Users Registry
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#main-nav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='main-nav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-link'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-link'>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/logout' className='nav-link'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
