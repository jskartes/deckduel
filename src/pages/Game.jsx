import { useEffect, useRef } from 'react';
import Card from '../components/Card';

const Game = () => {
  const rightWindowRef = useRef(null);

  useEffect(() => {
    let chosenCard = null;
    let zones = [];
    let cards = [];

    for (const zone of rightWindowRef.current.children) {
      zones.push(zone);
      for (const card of zone.children) {
        cards.push(card);
      }
    }

    for (const zone of zones) {
      zone.addEventListener('dragover', event => {
        if (event.preventDefault) event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        return false;  
      }, false);

      zone.addEventListener('dragenter', event => {
        zone.classList.add('over');
      }, false);

      zone.addEventListener('dragleave', event => {
        zone.classList.remove('over');
      }, false);

      zone.addEventListener('drop', event => {
        zone.classList.remove('over');
      }, false);
    }

    for (const card of cards) {
      card.addEventListener('dragstart', event => {
        card.className = 'Card drag-opacity';
        chosenCard = card;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', card.innerHTML);
      }, false);

      card.addEventListener('drop', event => {
        if (event.stopPropagation) event.stopPropagation();        
        if (chosenCard != card) {
          chosenCard.innerHTML = card.innerHTML;
          card.innerHTML = event.dataTransfer.getData('text/html');
        }
        return false;  
      }, false);

      card.addEventListener('dragend', event => {
        card.className = 'Card'
      }, false);
    }
  }, []);

  return (
    <div className='Game'>
      <div className='game-window'>
        <div className='game-window-left'>
          <div className='left'>
            <Card
              name='Mana'
              art='/card-art/mana.jpeg'
              cardType='Resource'
            />
            <Card
              name='Goblin Grunt'
              art='/card-art/goblin_grunt.jpeg'
              cardType='Character'
            />
            <Card
              name='Lightning Bolt'
              art='/card-art/lightning_bolt.jpeg'
              cardType='Spell'
            />
          </div>
        </div>
        
        <div className='game-window-right' ref={rightWindowRef}>
          <div className='opponent-in-play'>
            <Card
              name='Mana'
              art='/card-art/mana.jpeg'
              cardType='Resource'
            />
            <Card
              name='Goblin Grunt'
              art='/card-art/goblin_grunt.jpeg'
              cardType='Character'
            />
            <Card
              name='Lightning Bolt'
              art='/card-art/lightning_bolt.jpeg'
              cardType='Spell'
            />
          </div>
          
          <div className='user-in-play'>

          </div>
          
          <div className='user-hand'>
          <Card
              name='Mana'
              art='/card-art/mana.jpeg'
              cardType='Resource'
            />
            <Card
              name='Goblin Grunt'
              art='/card-art/goblin_grunt.jpeg'
              cardType='Character'
            />
            <Card
              name='Lightning Bolt'
              art='/card-art/lightning_bolt.jpeg'
              cardType='Spell'
            />
          </div>
        </div>
      </div>

      <div className='game-status'></div>
    </div>
  );
}

export default Game;
