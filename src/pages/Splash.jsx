import { Link } from 'react-router-dom';

const Splash = () => (
  <div className='Splash'>
    <div className='splash-title'>
      <span>D</span><span>e</span><span>c</span><span>k</span>
      <span>D</span><span>u</span><span>e</span><span>l</span>
    </div>

    <div className='splash-nav'>
      <Link className='nav-button' to='/register'>Register</Link>
      <Link className='nav-button' to='/login'>Log In</Link>
    </div>

    <audio src='/music-assets/title_theme.mp3' autoPlay={true} />
  </div>
);

export default Splash;
