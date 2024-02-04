import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

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
            <div className='opponent-discard'>
              <span>Discard Pile</span>
            </div>
          </div>

          <div className='user-data'>
            <div className='user-discard'>
              <span>Discard Pile</span>
            </div>
            <span className='player-health'>
              {gameState.players[0].health}
            </span>
            <span className='player-name'>
              {gameState.players[0].player.username}
            </span>
          </div>
        </div>

        <div className='right'>
          <div className='opponent-in-play'></div>
          
          <div className='user-in-play'></div>
          
          <div className='user-hand'>
            <Card
              name='Mana'
              art='/card-art/mana.jpeg'
              cardType='Resource'
              text='Increases your available mana by 1 mana'
            />
            <Card
              name='Goblin Grunt'
              cost='1'
              art='/card-art/goblin_grunt.jpeg'
              cardType='Monster'
              strength='1'
              defense='1'
            />
            <Card
              name='Lightning Bolt'
              cost='3'
              art='/card-art/lightning_bolt.jpeg'
              cardType='Spell'
              text='Deals 3 damage to any target'
            />
          </div>
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
