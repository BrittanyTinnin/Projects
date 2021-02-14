import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className='row '>
        <div className='col-md-4 mx-auto mt-5'>
          <form className=' bg-primary  rounded p-2 text-center mt-5'>
            <h3 className='text-light'>Login</h3>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Email' />
            </div>

            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
              />
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

export default Login;
