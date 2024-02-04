const Card = ({ name,
                cost,
                art,
                cardType,
                text,
                strength,
                defense }) => (
  <div className='Card'>
    <div className='card-top'>
      <div className='card-name'>{name}</div>
      <div className={`card-cost ${!cost && 'mana'}`}>
        {cost}
      </div>
    </div>
    
    <div className='card-art'>
      <img
        src={art}
        alt={name}
      />
    </div>

    <div className='card-type'>{cardType}</div>
    
    <div className={
      `card-text ${cardType === 'Resource' ? 'mana' : ''}`
    }>
      {text}
      {strength &&
      <div className='str-def'>
        <span className='str'>
          <img src='/card-art/strength_icon.png' />
          {strength}
        </span>
        <span className='def'>
          {defense}
          <img src='/card-art/defense_icon.png' />
        </span>
      </div>}
    </div>
  </div>
);

export default Card;
