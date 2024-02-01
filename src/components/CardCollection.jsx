const CardCollection = ({ nav }) => {
  return (
    <div className='CardCollection'>
      <nav>
        <span>Card Collection</span>
        <div className='nav-links'>
          <span onClick={() => nav('navPanels')}>Home</span>
          <span onClick={() => nav('games')}>Your Games</span>
          <span onClick={() => nav('learnToPlay')}>Learn to Play</span>
        </div>
      </nav>
    </div>
  );
}

export default CardCollection;
