import { Link } from 'react-router-dom';

const UserGames = ({ nav }) => {
  return (
    <div className='UserGames'>
      <nav>
        <span>Your Games</span>
        <div className='nav-links'>
          <span onClick={() => nav('navPanels')}>Home</span>
          <span onClick={() => nav('collection')}>Card Collection</span>
          <span onClick={() => nav('learnToPlay')}>Learn to Play</span>
        </div>
      </nav>
      
      <Link to='/game'>Play a game</Link>
    </div>
  );
}

export default UserGames;
