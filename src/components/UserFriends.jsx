const UserFriends = ({ friends, initiateChat, unfriend }) => (
  <div className='UserFriends'>
    <span>Friends</span>

    <div className='friends-list'>
      {friends.map((friend, i) => (
        <div className='friend' key={i}>
          <div className='name' onClick={() => initiateChat(friend)}>
            {friend.isOnline && <span className='online'>&#9679;</span>}
            {friend.username}
          </div>
          <div className='unfriend' onClick={() => unfriend(friend)}>
            &times;
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UserFriends;
