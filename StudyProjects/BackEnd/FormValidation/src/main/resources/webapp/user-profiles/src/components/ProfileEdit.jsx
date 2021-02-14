import React from 'react';

import imagePlaceholder from '../css/images/image-goes-here.png';

class ProfileEdit extends React.Component {
  componentDidMount() {
    //call the api to get the user details
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-4 mb-5'>
          <img
            id='update-profile-pic'
            src={imagePlaceholder}
            className='mx-auto d-block rounded-circle py-2'
            height='200'
            alt=''
          />
          <div className='custom-file mb-3'>
            <input
              type='file'
              className='custom-file-input'
              id='validatedCustomFile'
              required
            />
            <label className='custom-file-label' htmlFor='validatedCustomFile'>
              Choose file...
            </label>
            <div className='invalid-feedback'>
              Example invalid custom file feedback
            </div>
          </div>
        </div>
        {/* profile update form */}
        <div className='col-md-8'>
          <form>
            <div className='form-row'>
              <div className='form-group col'>
                <label htmlFor='userName'>Name</label>
                <input type='text' className='form-control' id='userName' />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-2'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='female'
                  />
                  <label className='form-check-label' htmlFor='inlineCheckbox1'>
                    Female
                  </label>
                </div>
              </div>
              <div className='form-group col-md-2'>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='male'
                  />
                  <label className='form-check-label' htmlFor='inlineCheckbox2'>
                    Male
                  </label>
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col'>
                <select className='custom-select'>
                  <option defaultValue>Choose Your Country</option>
                  <option value='USA'>USA</option>
                  <option value='Nigeria'>Nigeria</option>
                  <option value='China'>China</option>
                  <option value='Mexico'>Mexico</option>
                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col'>
                <label htmlFor='userName'>Occupation</label>
                <input type='text' className='form-control' id='userName' />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='userName'>Favorite Quote</label>
                <input type='text' className='form-control' id='userName' />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='userName'>Author</label>
                <input type='text' className='form-control' id='userName' />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <textarea
                  name='biography'
                  placeholder='Biography'
                  className='form-control'
                  rows='5'
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Sign Up(Form)
// 	- name
// 	- gender
// 	- country
// 	- introduction
// 	- password
// 	- confirmPassword

export default ProfileEdit;
