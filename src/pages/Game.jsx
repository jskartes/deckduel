import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Chat from '../components/Chat';

const Game = ({ game, setGame }) => {
  const [gameState, setGameState] = useState(game);
  const [showGameChat, setShowGameChat] = useState(true);

  console.log(gameState);

  const navigate = useNavigate();

  const getCardsInZone = (player, zone) => (
    <>
      {gameState.players[player].zones[zone].cards.map((card, i) => (
        <Card
          key={i}
          name={card.name}
          cost={card.cost}
          art={card.art}
          cardType={card.cardType}
          text={card.text}
          strength={card.strength}
          defense={card.defense}
        />
      ))}
    </>
  );

  const toggleGameChat = () => {
    const currentShowGameChat = showGameChat;
    setShowGameChat(!currentShowGameChat);
  }

  const handleEndGame = () => {
    setGame(null);
    navigate('/');
  }

  return (
    <div className='Game'>
      <div className='game-window'>
        <div className='left'>
          <div className='opponent-data'>
            <div className='data-outer'>
              <div className='data-outer-left'>
                <span className='deck-size'>
                  {gameState.players[1].zones[0].cards.length}
                </span>
              </div>
              <div className='data-outer-right'>
                <span className='player-name'>
                  {gameState.players[1].player.username}
                </span>
                <span className='player-health'>
                  {gameState.players[1].health}
                </span>
              </div>
            </div>
            <div className='opponent-discard'>
              <span>Discard Pile</span>
            </div>
          </div>

          <div className='user-data'>
            <div className='user-discard'>
              <span>Discard Pile</span>
            </div>
            <div className='data-outer'>
              <div className='data-outer-left'>
                <span className='deck-size'>
                  {gameState.players[0].zones[0].cards.length}
                </span>
              </div>
              <div className='data-outer-right'>
                <span className='player-health'>
                  {gameState.players[0].health}
                </span>
                <span className='player-name'>
                  {gameState.players[0].player.username}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='opponent-in-play'>
            {!showGameChat &&
            <>
              <img className='mana-pool' src='/image-assets/mana_pool.png' />
              <span className='mana-remaining'>0</span>
            </>}
          </div>
          
          <div className='user-in-play'>
            {!showGameChat &&
            <>
              <img className='mana-pool' src='/image-assets/mana_pool.png' />
              <span className='mana-remaining'>0</span>
            </>}
          </div>
          
          <div className='user-hand'>
            {getCardsInZone(0, 1)}
          </div>
        </div>
      </div>

      <div className='game-status'>
        <span className='nav-button' onClick={handleEndGame}>
          End Game
        </span>
        <span className='nav-button' onClick={toggleGameChat}>
          {showGameChat ? 'Close' : 'Open'} Chat
        </span>
      </div>

      {showGameChat &&
      // <Chat />}
      <div className='game-chat'></div>}
    </div>
  );
}

export default Game;
