const NavPanel = ({ nav, to, navImg, navTitle, navText }) => (
  <div className='NavPanel' onClick={() => nav(to)}>
    <div className='nav-panel-image'>
      <div
        className='nav-panel-image-container'
        style={{
          background: `url(${navImg}) center / contain no-repeat`
        }}
      >
        {to === 'learnToPlay' && <span>?</span>}
      </div>
    </div>

    <div className='nav-panel-text'>
      <span>{navTitle}</span>
      <p>{navText}</p>
    </div>
  </div>
);

export default NavPanel;
