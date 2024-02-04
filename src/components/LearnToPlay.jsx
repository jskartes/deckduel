const LearnToPlay = ({ nav }) => (
  <div className='LearnToPlay'>
    <nav>
      <span>Learn to Play</span>
      <div className='nav-links'>
        <span onClick={() => nav('navPanels')}>Home</span>
        <span onClick={() => nav('collection')}>Card Collection</span>
        <span onClick={() => nav('games')}>Your Games</span>
      </div>
    </nav>
  </div>
);

export default LearnToPlay;
