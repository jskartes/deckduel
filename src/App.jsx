import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/usersService';
import Splash from './pages/Splash';
import UserLogin from './pages/UserLogin';
import UserPage from './pages/UserPage';
import UserRegistration from './pages/UserRegistration';

const App = () => {
  const [user, setUser] = useState(getUser());

  return (
    <div className='App'>
      <Routes>
        {user ?
        <>
          <Route
            path={`/${user.username}`}
            element={<UserPage user={user} setUser={setUser} />}
          />
          <Route
            path='/*'
            element={<Navigate to={`/${user.username}`} />}
          />
        </> :
        <>
          <Route
            path='/'
            element={<Splash />}
          />
          <Route
            path='/register'
            element={<UserRegistration setUser={setUser} />}
          />
          <Route
            path='/login'
            element={<UserLogin setUser={setUser} />}
          />
          <Route
            path='/*'
            element={<Navigate to='/login' />}
          />
        </>}
      </Routes>
    </div>
  );
}

export default App;
