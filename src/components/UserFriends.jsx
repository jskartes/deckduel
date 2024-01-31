import { useState, useEffect } from 'react';
import * as usersAPI from '../utilities/usersAPI';

const UserFriends = ({ initiateChat }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const friends = await usersAPI.getFriends();
      setFriends(friends);
    }
    getFriends();
  }, []);

  return (
    <div className='UserFriends'>
      <span>Friends</span>

      <div className='friends-list'>
        {friends.map((friend, i) => (
          <p key={i} onClick={() => initiateChat(friend)}>
            {friend.username}
          </p>
        ))}
      </div>
    </div>
  );
}

export default UserFriends;
