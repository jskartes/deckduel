import { useState, useEffect } from 'react';
import * as cardsAPI from '../utilities/cardsAPI';

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cards = await cardsAPI.getCards();
      setCards(cards);
    }
    getCards();
  }, []);

  return (
    <div className='card-container'>
      {cards.map((card, i) => (
        <div className='Card' key={i}>
          <div className='card-top'>
            <div className='card-name'>{card.name}</div>
            <div className={`card-cost ${!card.cost && 'mana'}`}>
              {card.cost}
            </div>
          </div>
          
          <div className='card-art'>
            <img
              src={card.art}
              alt={card.name}
            />
          </div>

          <div className='card-type'>{card.cardType}</div>
          
          <div className={
            `card-text ${card.cardType === 'Resource' ? 'mana' : ''}`
          }>
            {card.text}
            {card.strength &&
            <div className='str-def'>
              <span className='str'>
                <img src='/card-art/strength_icon.png' />
                {card.strength}
              </span>
              <span className='def'>
                {card.defense}
                <img src='/card-art/defense_icon.png' />
              </span>
            </div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
