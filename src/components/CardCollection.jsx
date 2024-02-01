import { useState, useEffect } from 'react';
import * as usersAPI from '../utilities/usersAPI';
import Card from '../components/Card';

const CardCollection = ({ user, nav }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cards = await usersAPI.getCards();
      console.log(cards);
      setCards(cards);
    }
    getCards();
  }, []);

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

      <div className='collection'>
        {cards.map(card => (
          <Card
            name={card.name}
            cost={card.cost}
            art={card.art}
            cardType={card.cardType}
            text={card.text}
            strength={card.strength}
            defense={card.defense}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCollection;
