import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(AuthenticationService.isUserLoggedIn());

    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div className='container'>
            <a
              href='https://github.com/BrittanyTinnin'
              className='navbar-brand'>
              brittcodes
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbar'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav ms-auto'>
                <li>
                  <Link className='nav-link' to='/welcome/brittcodes'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='nav-link' to='/todos'>
                    Todos
                  </Link>
                </li>

                {!isUserLoggedIn && (
                  <li>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                  </li>
                )}
                {isUserLoggedIn && (
                  <li>
                    <Link
                      className='nav-link'
                      to='/logout'
                      onClick={AuthenticationService.logout}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
