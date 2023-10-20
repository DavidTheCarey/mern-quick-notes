import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesIndex from '../NotesIndex/NotesIndex';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser());

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
}

  return (
    <main className="App">
      { user ?
          <>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            <NotesIndex user={user} />
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
