import { useState, useEffect } from 'react';
import * as chatsAPI from '../utilities/chatsAPI';

const ActiveChat = ({ user, activeChat, endChat }) => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const getMessageHistory = async () => {
      const messages = await chatsAPI.getMessageHistory(activeChat);
      setMessageHistory(messages);
    }
    getMessageHistory();
  }, []);

  const handleChange = event => setNewMessage(event.target.value);

  const sendMessage = () => {}

  const chatWith = activeChat.players.find(player => {
    return player.username !== user.username
  });

  return (
    <div className='ActiveChat'>
      <span className='chat-title'>
        Chat with <span>{chatWith.username}</span>
      </span>

      <div className='chat-actions'>
        <div className='nav-button' onClick={() => {}}>
          Add as Friend
        </div>
        <div className='nav-button' onClick={endChat}>
          End Chat
        </div>
      </div>

      <div className='message-window'>
        {messageHistory.map((message, i) => (
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
