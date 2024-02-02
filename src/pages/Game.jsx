import Card from '../components/Card';

const Game = () => {
  return (
    <div className='Game'>
      <div className='game-window'>
        <div className='left'></div>

        <div className='right'>
          <div id='opponent-in-play'></div>
          <div id='user-in-play'></div>
          <div id='user-hand'></div>
        </div>
      </div>

      <div className='game-status'>

      </div>
    </div>
  );
}

export default Game;
