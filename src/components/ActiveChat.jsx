import { useState, useEffect, useRef } from 'react';
import * as socket from '../utilities/socket';

const ActiveChat = ({ user, activeChat, endChat, addFriend }) => {
  const [newMessage, setNewMessage] = useState('');
  
  useEffect(() => {
    socket.joinChat(activeChat._id);
  }, []);

  const handleChange = event => setNewMessage(event.target.value);

  const sendMessage = event => {
    event.preventDefault();
    socket.sendMessage(activeChat._id, user, newMessage);
    setNewMessage('');
  }

  const chatWith = activeChat.players.find(player => {
    return player.username !== user.username
  });

  return (
    <div className='ActiveChat'>
      <span className='chat-title'>
        Chat with <span>{chatWith.username}</span>
      </span>

      <div className='chat-actions'>
        <div className='nav-button' onClick={() => addFriend(chatWith)}>
          Add as Friend
        </div>
        <div className='nav-button' onClick={endChat}>
          End Chat
        </div>
      </div>

      <div className='message-window'>
        {activeChat.messages.map((message, i) => (
          <div
            key={i}
            className={`message ${
              user._id === message.author ?
              'user-author' : 'user-not-author'
            }`}
          >{message.content}</div>
        ))}
      </div>

      <form onSubmit={sendMessage} autoComplete='off'>
        <input
          required
          type='text'
          value={newMessage}
          onChange={handleChange}
        />

        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default ActiveChat;
