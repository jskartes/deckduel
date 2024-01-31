import { useState, useEffect } from 'react';
import ActiveChat from './ActiveChat';
import UserFriends from './UserFriends';
import * as usersAPI from '../utilities/usersAPI';

const Chat = ({ user,
                toggleShowUserSearch,
                initiateChat,
                endChat,
                activeChat }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const friends = await usersAPI.getFriends();
      setFriends(friends);
    }
    getFriends();
  }, []);

  const addFriend = async friend => {
    const updatedFriends = await usersAPI.addFriend(friend);
    setFriends(updatedFriends);
  }

  return (
    <div className='Chat'>
      <div className='nav-button' onClick={toggleShowUserSearch}>
        Search Users
      </div>

      <UserFriends friends={friends} initiateChat={initiateChat} />

      {activeChat ?
      <ActiveChat
        user={user}
        activeChat={activeChat}
        endChat={endChat} 
        addFriend={addFriend}
      /> :
      <div className='inset-text'>
        <span>No</span><span>Active</span><span>Chat</span>
      </div>}
    </div>
  );
}

export default Chat;
