import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = ({ game, setGame }) => {
  const [gameState, setGameState] = useState(game);

  const navigate = useNavigate();

  const handleEndGame = () => {
    setGame(null);
    navigate('/');
  }

  return (
    <div className='Game'>
      <div className='game-window'>
        <div className='left'>
          <div className='opponent-data'>
            <span className='player-name'>
              {gameState.players[1].player.username}
            </span>
            <span className='player-health'>
              {gameState.players[1].health}
            </span>
            <div className='opponent-discard'></div>
          </div>

          <div className='user-data'>
            <span className='player-health'>
              {gameState.players[0].health}
            </span>
            <span className='player-name'>
              {gameState.players[0].player.username}
            </span>
            <div className='user-discard'></div>
          </div>
        </div>

        <div className='right'>
          <div className='opponent-in-play'></div>
          
          <div className='user-in-play'></div>
          
          <div className='user-hand'></div>
        </div>
      </div>

      <div className='game-status'>
        <span className='nav-button' onClick={handleEndGame}>
          End Game
        </span>
      </div>
    </div>
  );
}

export default Game;
