import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersAPI from '../utilities/usersAPI';
import * as gamesAPI from '../utilities/gamesAPI';

const UserGames = ({ nav, user, setGame }) => {
  const [userGames, setUserGames] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await usersAPI.getAllUsers();
      const onlineUsers = allUsers.filter(user => user.isOnline);
      setOnlineUsers(onlineUsers);
    }
    getAllUsers();
  }, []);

  useEffect(() => {
    const getAllGames = async () => {
      const allGames = await gamesAPI.getAllGames();
      setUserGames(allGames);
    }
    getAllGames();
  }, []);

  const handleCreateGame = async withUser => {
    const game = await gamesAPI.createGame(withUser);
    setGame(game);
    navigate(`/game/${game._id.slice(-6)}`);
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
        <div className='game-history'>
          {userGames.map((game, i) => {
            const opp = game.players.filter(player => (
              player.player._id !== user._id
            ))[0];
            return (
              <div key={i}>
                Game {game._id.slice(-6)} vs. <span>{opp.player.username}</span>
                &nbsp;&mdash;&nbsp;
                {game.isInProgress ? 'In Progress' : 'Completed'}
                {game.isInProgress &&
                <div className='nav-button'>Resume</div>}
              </div>
            );
          })}
        </div>

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
