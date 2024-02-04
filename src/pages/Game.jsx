const Game = () => {
  return (
    <div className='Game'>
      <div className='game-window'>
        <div className='left'>
          <div className='opponent-discard'></div>
          <div className='user-discard'></div>
        </div>

        <div className='right'>
          <div className='opponent-in-play'></div>
          <div className='user-in-play'></div>
          <div className='user-hand'></div>
        </div>
      </div>

      <div className='game-status'></div>
    </div>
  );
}

export default Game;
