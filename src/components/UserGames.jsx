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
    </div>
  );
}

export default UserGames;
