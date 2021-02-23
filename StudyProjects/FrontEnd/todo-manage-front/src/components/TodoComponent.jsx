import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import AuthenticationService from './AuthenticationService';
import TodoDataService from '../api/TodoDataService';
import moment from 'moment';

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: '',
      targetDate: moment(new Date()).format('YYYY-MM-DD'),
    };
  }

  componentDidMount() {
    if (this.state.id == -1) {
      return;
    }

    let username = AuthenticationService.getLoggedInUsername();

    TodoDataService.retrieveTodo(username, this.state.id).then((response) => {
      console.log(response);
      this.setState({
        id: response.data.id,
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
      });
    });
  }

  onSubmit = (values) => {
    let username = AuthenticationService.getLoggedInUsername();
    let todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };
    if (this.state.id == -1) {
      TodoDataService.createTodo(username, todo).then(() =>
        this.props.history.push('/todos')
      );
    } else {
      TodoDataService.updateTodo(username, this.state.id, todo).then(() =>
        this.props.history.push('/todos')
      );
    }
    console.log(values);
  };

  validate = (values) => {
    let errors = {};
    if (!values.description) {
      errors.description = 'Enter a Description';
    } else if (values.description.length < 5) {
      errors.description = 'Enter at least 5 characters in description';
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = 'Enter a valid Target Date';
    }
    return errors;
  };

  render() {
    let { description, targetDate } = this.state;
    // let targetDate = this.state.targetDate;

    return (
      <div>
        <div className='container'>
          <h1>Todo</h1>
          <Formik
            initialValues={{
              // description: description,
              // targetDate: targetDate
              description,
              targetDate,
            }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}>
            {(props) => (
              <div>
                <Form>
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='alert alert-danger'
                  />
                  <ErrorMessage
                    name='targetDate'
                    component='div'
                    className='alert alert-danger'
                  />
                  <fieldset className='mb-3'>
                    <label className='form-label'>Description</label>
                    <Field
                      className='form-control'
                      type='text'
                      name='description'
                    />
                  </fieldset>
                  <fieldset className='mb-3'>
                    <label className='form-label'>Target Date</label>
                    <Field
                      className='form-control'
                      type='date'
                      name='targetDate'
                    />
                  </fieldset>
                  <button className='btn btn-success' type='submit'>
                    Save
                  </button>
                </Form>
                Something
              </div>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
