import { Link } from 'react-router-dom';

function WelcomeComponent(props) {
  return (
    <div className='container'>
      <h1 className='display-4'>
        Welcome {props.match.params.name}
        <br />
        You can manage your todos <Link to='/todos'>here</Link>.
      </h1>
    </div>
  );
}

export default WelcomeComponent;
