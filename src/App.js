import React, { useState } from 'react';

import UserForm from './components/UserForm';
import User from './components/User';

import { fetchUser } from './services/userService';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleFormSubmit = event => {
    event.preventDefault();
    setLoading(true);
    fetchUser(user, users, setLoading, setUsers);
  };

  return (
    <div className="app-container">
      <h1>GitHub Users</h1>

      <UserForm handleFormSubmit={handleFormSubmit} setUser={setUser} />

      {loading ? <h3>Loading...</h3> : null}

      <div className="users">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
