const Card = () => {
  return (
    <div className='Card'>
      <div className='card-top'>
        <div className='card-name'>Militant Monk</div>
        <div className='card-cost'>3</div>
      </div>
      
      <div className='card-art'>
        <img
          src='/card-art/militant_monk.jpeg'
          alt='militant monk'
        />
      </div>

      <div className='card-type'>Character</div>
      
      <div className='card-text'>
        <div className='str-def'>
          <span className='str'>3</span>
          <span className='def'>3</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
