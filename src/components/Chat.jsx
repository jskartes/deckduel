import ActiveChat from './ActiveChat';
import UserFriends from './UserFriends';

const Chat = ({ user,
                toggleShowUserSearch,
                initiateChat,
                endChat,
                activeChat }) => (
  <div className='Chat'>
    <div className='nav-button' onClick={toggleShowUserSearch}>
      Search Users
    </div>

    <UserFriends initiateChat={initiateChat} />

    {activeChat ?
    <ActiveChat user={user} activeChat={activeChat} endChat={endChat} /> :
    <div className='inactive'>
      <span>No</span><span>Active</span><span>Chat</span>
    </div>}
  </div>
);

export default Chat;
