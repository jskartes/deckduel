import ActiveChat from './ActiveChat';
import UserFriends from './UserFriends';
import * as usersAPI from '../utilities/usersAPI';

const Chat = ({ user,
                toggleShowUserSearch,
                initiateChat,
                endChat,
                activeChat }) => {
  const addFriend = friend => {
    usersAPI.addFriend(friend);
  }

  return (
    <div className='Chat'>
      <div className='nav-button' onClick={toggleShowUserSearch}>
        Search Users
      </div>

      <UserFriends initiateChat={initiateChat} />

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
