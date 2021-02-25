import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import TodoDataService from '../api/TodoDataService';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: '',
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      this.setState({
        todos: response.data,
      });
    });
  }

  deleteTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUsername();
    // console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Delete todo ${id} successfully` });
      this.refreshTodos();
    });
  };

  refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response.data);
      this.setState({
        todos: response.data,
      });
    });
  };

  addTodoClicked = () => {
    this.props.history.push(`/todos/-1`);
  };

  updateTodoClicked = (id) => {
    console.log(`update todo ${id}`);
    this.props.history.push(`/todos/${id}`);
  };

  render() {
    return (
      <div>
        <div className='container'>
          <h1>List Todos</h1>
          {this.state.message && (
            <div className='alert alert-success'>{this.state.message}</div>
          )}
          <table className='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todo.id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => this.deleteTodoClicked(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className='btn btn-success' onClick={this.addTodoClicked}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
