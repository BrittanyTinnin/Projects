import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path='/' exact component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/welcome/:name' component={WelcomeComponent} />
            <Route path='/todos' component={ListTodosComponent} />
            <Route path='/logout' component={LogoutComponent}/>
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div className='container'>
            <a href='#' className='navbar-brand'>
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

                <li>
                  {' '}
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link className='nav-link' to='/logout'>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className='footer bg-dark'>
          <span className='text-muted'>All Rights Reserved 2018 @brittcodes</span>
      </footer>
    );
  }
}


class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className="container">
            Thank you for using out application.
        </div>
      </>
    );
  }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null;
// }

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.match.params.name} You can manage your todos{' '}
        <Link to='/todos'>here</Link>.
      </div>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'Become an Expert at React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: 'Visit India',
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function ErrorComponent() {
  return (
    <div>
      An Error Occurred. I don't know what to do! Please contact support :)
    </div>
  );
}

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
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = (event) => {
    //brittcodes,awesome
    console.log(this.state);
    if (
      this.state.username === 'brittcodes' &&
      this.state.password === 'awesome'
    ) {
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
      <>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name:{' '}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{' '}
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </>
    );
  }
}

export default TodoApp;
