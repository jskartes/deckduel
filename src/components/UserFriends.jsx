const UserFriends = ({ friends, initiateChat }) => {
  return (
    <div className='UserFriends'>
      <span>Friends</span>

      <div className='friends-list'>
        {friends.map((friend, i) => (
          <div key={i} onClick={() => initiateChat(friend)}>
            {friend.isOnline && <span className='online'>&#9679;</span>}
            {friend.username}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFriends;
