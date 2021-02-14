import React, { Component } from 'react';
import './SignUp.css';

// Sign Up(Form)
// 	- name
// 	- gender
// 	- country
// 	- introduction
// 	- password
// 	- confirmPassword

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      gender: '',
      password: '',
      confirmPassword: '',
      biography: '',
    };

    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
  };

  render() {
    return (
      <div className='row above-form'>
        <div className='col-md-6 mx-auto my-5'>
          <form
            onSubmit={this.handleSubmit}
            id='userSignUpForm'
            className='bg-primary text-light rounded p-2 text-center mb-5'
          >
            <h3 className='text-light'>Register</h3>
            <div className='form-group'>
              <input
                type='text'
                name='email'
                value={this.state.value}
                onChange={this.handleChange}
                className='form-control'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                value={this.state.value}
                onChange={this.handleChange}
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='inlineRadio1'
                  name='gender'
                  value='Female'
                  checked={this.state.gender === 'Female'}
                  onChange={this.handleChange}
                />
                <label className='form-check-label' htmlFor='inlineRadio1'>
                  Female
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='inlineRadio2'
                  name='gender'
                  value='Male'
                  checked={this.state.gender === 'Male'}
                  onChange={this.handleChange}
                />
                <label className='form-check-label' htmlFor='inlineRadio2'>
                  Male
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='inlineRadio3'
                  name='gender'
                  value='non-binary'
                  checked={this.state.gender === 'non-binary'}
                  onChange={this.handleChange}
                />
                <label className='form-check-label' htmlFor='inlineRadio3'>
                  Non-Binary
                </label>
              </div>
            </div>
            <div className='form-group'>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className='custom-select'
              >
                <option defaultValue disabled>
                  Choose Your Country
                </option>
                <option value='USA'>USA</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='China'>China</option>
                <option value='Mexico'>Mexico</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='password'
                value={this.state.value}
                onChange={this.handleChange}
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='confirmPassword'
                value={this.state.value}
                onChange={this.handleChange}
                className='form-control'
                placeholder='Confirm Password'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='biography'
                value={this.state.value}
                placeholder='Biography'
                className='form-control'
              ></textarea>
            </div>
            <button type='submit' className='btn btn-light'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
