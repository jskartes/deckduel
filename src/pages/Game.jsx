import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from '../components/Card';
import Chat from '../components/Chat';

const Game = ({ game, setGame }) => {
  const [gameState, setGameState] = useState(game);
  const [showGameChat, setShowGameChat] = useState(false);

  const navigate = useNavigate();

  const getCardsInZone = (player, zone) => (
    <>
      {gameState.players[player].zones[zone].cards.map((card, i) => (
        <Draggable
          draggableId={`${zone}-${i}`}
          index={i}
          key={`${i}`}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}            
            >
              <Card
                name={card.name}
                cost={card.cost}
                art={card.art}
                cardType={card.cardType}
                text={card.text}
                strength={card.strength}
                defense={card.defense}
              />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    if (source.droppableId === destination.droppableId) {
      const reorderedCards = [
        ...gameState.players[0].zones[source.droppableId].cards
      ];
      const swapCard = reorderedCards[source.index];
      reorderedCards[source.index] = reorderedCards[destination.index];
      reorderedCards[destination.index] = swapCard;
      setGameState(prev => {
        const newGameState = JSON.parse(JSON.stringify(prev));
        newGameState.players[0].zones[source.droppableId].cards = reorderedCards;
        return newGameState;
      });
    } else {
      const sourceZoneCards = [
        ...gameState.players[0].zones[source.droppableId].cards
      ];
      const destinationZoneCards = [
        ...gameState.players[0].zones[destination.droppableId].cards
      ];
      const movedCard = sourceZoneCards.splice(source.index, 1);
      destinationZoneCards.push(movedCard[0]);
      setGameState(prev => {
        const newGameState = JSON.parse(JSON.stringify(prev));
        newGameState.players[0].zones[source.droppableId].cards = sourceZoneCards;
        newGameState.players[0].zones[destination.droppableId].cards = destinationZoneCards;
        return newGameState;
      });
    }
  }

  const toggleGameChat = () => {
    const currentShowGameChat = showGameChat;
    setShowGameChat(!currentShowGameChat);
  }

  const handleExitGame = () => {
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
          
          <DragDropContext onDragEnd={onDragEnd}>
            <div className='user-in-play'>
              <Droppable droppableId='3' direction='horizontal'>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='user-in-play-cards'
                  >
                    {getCardsInZone(0, 3)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {!showGameChat &&
              <>
                <img
                  className='mana-pool' 
                  src='/image-assets/mana_pool.png'
                />
                <span className='mana-remaining'>0</span>
              </>}
            </div>
            
            <Droppable droppableId='1' direction='horizontal'>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='user-hand'
                >
                  {getCardsInZone(0, 1)}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      <div className='game-status'>
        <span className='nav-button' onClick={handleExitGame}>
          Exit Game
        </span>
        <span className='nav-button' onClick={toggleGameChat}>
          {showGameChat ? 'Close' : 'Open'} Chat
        </span>
      </div>

      {showGameChat &&
      // <Chat />}
      <div className='game-chat'></div>}

      <audio src='/music-assets/game_theme.mp3' autoPlay={true} loop={true} />
    </div>
  );
}

export default Game;
