import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as usersService from '../utilities/usersService';
import * as chatsAPI from '../utilities/chatsAPI';
import * as socket from '../utilities/socket';
import CardCollection from '../components/CardCollection';
import Chat from '../components/Chat';
import LearnToPlay from '../components/LearnToPlay';
import NavPanel from '../components/NavPanel';
import UserGames from '../components/UserGames';
import UserPageNav from '../components/UserPageNav';
import UserSearch from '../components/UserSearch';

const UserPage = ({ user, setUser }) => {
  const [pageStatus, setPageStatus] = useState({
    showUserSearch: false,
    activeChat: null,
    mainContent: 'navPanels',
    error: ''
  });

  useEffect(() => {
    socket.registerUpdateChat(updateChat);
  }, [user]);

  const nav = content => {
    setPageStatus({
      ...pageStatus,
      mainContent: content
    });
  }

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

        {pageStatus.mainContent === 'navPanels' &&
        <div className='nav-panels'>
          <NavPanel
            nav={nav} to='collection'
            navImg='/image-assets/collection.png'
            navTitle='Card Collection'
            navText='Browse your card collection. Build and manage your decks. Purchase new cards.'
          />
          <NavPanel
            nav={nav} to='games'
            navImg='/image-assets/play.png'
            navTitle='Your Games'
            navText='Start a new game. Pick up a saved game. View your game history.'
          />
          <NavPanel
            nav={nav} to='learnToPlay'
            navImg='/image-assets/learn_to_play.webp'
            navTitle='Learn to Play'
            navText='Never played DeckDuel? Learn the basics. Mastery is entirely up to you.'
          />
        </div>}

        {pageStatus.mainContent === 'collection' &&
        <CardCollection nav={nav} />}

        {pageStatus.mainContent === 'games' &&
        <UserGames nav={nav} />}

        {pageStatus.mainContent === 'learnToPlay' &&
        <LearnToPlay nav={nav} />}
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
