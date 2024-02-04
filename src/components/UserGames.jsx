import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as usersAPI from '../utilities/usersAPI';
import * as gamesAPI from '../utilities/gamesAPI';

const UserGames = ({ nav }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await usersAPI.getAllUsers();
      const onlineUsers = allUsers.filter(user => user.isOnline);
      setOnlineUsers(onlineUsers);
    }
    getAllUsers();
  }, []);

  const handleCreateGame = async withUser => {
    const game = await gamesAPI.createGame(withUser);
    console.log(game);
  }

  return (
    <div className='UserGames'>
      <nav>
        <span>Your Games</span>
        <div className='nav-links'>
          <span onClick={() => nav('navPanels')}>Home</span>
          <span onClick={() => nav('collection')}>Card Collection</span>
          <span onClick={() => nav('learnToPlay')}>Learn to Play</span>
        </div>
      </nav>

      <div className='game-screen'>
        <div className='game-history'></div>

        <div className='start-game'>
          <span>Start a Game</span>
          <div className='online-players'>
            <span>Online Players:</span>
            {onlineUsers.map((user, i) => (
              <div
                key={i}
                className='nav-button'
                onClick={() => handleCreateGame(user)}
              >{user.username}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGames;
