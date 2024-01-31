import { useState } from 'react';
import { createPortal } from 'react-dom';
import * as usersService from '../utilities/usersService';
import * as chatsAPI from '../utilities/chatsAPI';
import Chat from '../components/Chat';
import UserPageNav from '../components/UserPageNav';
import UserSearch from '../components/UserSearch';

const UserPage = ({ user, setUser }) => {
  const [pageStatus, setPageStatus] = useState({
    showUserSearch: false,
    activeChat: null,
    error: ''
  });

  const initiateChat = withUser => {

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
