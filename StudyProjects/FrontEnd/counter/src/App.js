import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default App;
