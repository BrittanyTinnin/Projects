import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/HelloWorldService';

class WelcomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'initial message',
    };
  }

  handleSuccessfulResponse = (response) => {
    this.setState({ message: response.data.message });
  };

  handleError = (error) => {
    this.setState({ message: error.response.data.message });
  };

  retrieveWelcomeMessage = () => {
    // HelloWorldService.executeHelloWorldService().then((response) => {
    //   console.log(response);
    //   this.handleSuccessfulResponse(response);
    // });
    // HelloWorldService.executeHelloWorldService2().then((response) => {
    //   console.log(response);
    //   this.handleSuccessfulResponse(response);
    // });
    HelloWorldService.executeHelloWorldService3(this.props.match.params.name)
      .then((response) => {
        console.log(response);
        this.handleSuccessfulResponse(response);
      })
      .catch((error) => this.handleError(error));
  };

  render() {
    return (
      <div className='container'>
        <h1 className='display-4'>
          Welcome {this.props.match.params.name}
          <br />
          You can manage your todos <Link to='/todos'>here</Link>.
        </h1>
        <p>Customized welcome message, click below.</p>
        <button
          type='button'
          className='btn btn-success'
          onClick={this.retrieveWelcomeMessage}>
          HelloWorld
        </button>
        <p>Message: {this.state.message}</p>
      </div>
    );
  }
}

export default WelcomeComponent;
