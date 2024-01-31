import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as usersService from '../utilities/usersService';
import * as chatsAPI from '../utilities/chatsAPI';
import * as socket from '../utilities/socket';
import Card from '../components/Card';
import Chat from '../components/Chat';
import UserPageNav from '../components/UserPageNav';
import UserSearch from '../components/UserSearch';

const UserPage = ({ user, setUser }) => {
  const [pageStatus, setPageStatus] = useState({
    showUserSearch: false,
    activeChat: null,
    error: ''
  });

  useEffect(() => {
    socket.registerUpdateChat(updateChat);
  }, [user]);

  const initiateChat = async withUser => {
    try {
      const chat = await chatsAPI.initiateChat(withUser);
      setPageStatus({
        ...pageStatus,
        showUserSearch: false,
        activeChat: chat
      });
    } catch {
      setPageStatus({
        ...pageStatus,
        error: 'Chat initiation failed'
      });
    }
  }

  function updateChat(chat) {
    setPageStatus({...pageStatus, activeChat: chat});
  }

  const endChat = () => setPageStatus({...pageStatus, activeChat: null});

  const toggleShowUserSearch = () => {
    const currentShowUserSearch = pageStatus.showUserSearch;
    setPageStatus({...pageStatus, showUserSearch: !currentShowUserSearch});
  }

  const handleLogout = () => {
    usersService.logoutUser();
    setUser(null);
  }

  // CSS class on page component when UserSearch portal is showing
  const blur = pageStatus.showUserSearch ? 'blur' : '';
  
  return (
    <div className={`UserPage ${blur}`}>
      <Chat
        user={user}
        toggleShowUserSearch={toggleShowUserSearch}
        initiateChat={initiateChat}
        endChat={endChat}
        activeChat={pageStatus.activeChat}
      />

      <div className='main-content'>
        <UserPageNav user={user} handleLogout={handleLogout} />
        <Card />
      </div>

      {pageStatus.showUserSearch && createPortal(
        <UserSearch
          handleCancel={toggleShowUserSearch}
          initiateChat={initiateChat}
        />,
        document.getElementById('App')
      )}
    </div>
  );
}

export default UserPage;
