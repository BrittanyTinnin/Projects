import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'brittcodes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = (event) => {
    //brittcodes,awesome
    if (
      this.state.username === 'brittcodes' &&
      this.state.password === 'awesome'
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      //   this.setState({ hasLoginFailed: false });
      //   this.setState({ showSuccessMessage: true });
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
  };

  // handleUsernameChange = (event) => {
  //     console.log(event.target.value);
  //     this.setState({
  //         [event.target.name]: event.target.value
  //     })
  // }

  // handlePasswordChange = (event) => {
  //     console.log(event.target.value);
  //     this.setState({
  //         password: event.target.value
  //     })
  // }

  render() {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1>Login</h1>
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                  <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
          {this.state.hasLoginFailed && (
            <div className='alert alert-warning'>Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && (
            <div className='alert alert-successful'>Login Successful</div>
          )}
          <div className='mb-3'>
            <input
              className='form-control'
              placeholder='username'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <input
              className='form-control'
              placeholder='password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className='btn btn-success' onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
