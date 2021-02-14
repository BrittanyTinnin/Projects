import React from 'react';
import { Link } from 'react-router-dom';

import person from '../css/images/person4.jpg';
import '../css/styles.css';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className='background-picture rounded'></div>
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-4 mb-5'>
            <div className='card mb-2 text-center'>
              <div className='card-body '>
                <img
                  id='profile-picture'
                  src={person}
                  className='mx-auto d-block rounded-circle mb-3'
                  height='200'
                  alt=''
                />
                <h4 className='card-title'>Brittany Tinnin</h4>

                <p className='card-text'>Female</p>

                <p className='card-text'>USA</p>
                <p className='card-text'>Software Engineer</p>
                <blockquote className='blockquote text-center'>
                  <p className='mb-0'>Be the change you want to see.</p>
                  <footer className='blockquote-footer'>
                    <cite title='Source Title'>Ghandi</cite>
                  </footer>
                </blockquote>

                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora, totam in. Quod atque temporibus inventore?
                </p>

                <div className='d-flex justify-content-center'>
                  <div className='p-2'>
                    <a href='http://www.linkedin.com/in/brittanytinnin'>
                      <i className='fab fa-linkedin fa-2x'></i>
                    </a>
                  </div>
                  <div className='p-2'>
                    <a href='http://www.facebook.com'>
                      <i className='fab fa-facebook-square fa-2x'></i>
                    </a>
                  </div>
                  <div className='p-2'>
                    <a href='http://www.twitter.com'>
                      <i className='fab fa-twitter-square fa-2x'></i>
                    </a>
                  </div>
                </div>
              </div>
              <Link className='btn btn-outline-primary m-2' to='/edit-profile'>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
  - profile pic
  - name
  - gender
  - country
  - occupation
  - hobbies
  - favorite quotes
  - find me here (link to another website)
*/

export default Profile;
