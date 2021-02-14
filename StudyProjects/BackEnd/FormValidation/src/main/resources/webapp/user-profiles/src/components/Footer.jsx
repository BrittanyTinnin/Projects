import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let fullYear = new Date().getFullYear();

    return (
      <footer id='footer' className='bg-primary text-light fixed-bottom'>
        <div className='row text-center'>
          <div className='col-md-6 ml-auto'>
            <p className='lead'>Brittany Tinnin</p>
          </div>
          <div className='col-md-6 ml-auto'>
            <p className='lead'>Copyright &copy; {fullYear}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
