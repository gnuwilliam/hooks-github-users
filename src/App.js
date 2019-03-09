import React, { useState } from 'react';

import User from './components/User';

const App = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleFormSubmit = event => {
    event.preventDefault();
    fetchUser(user);
  };

  const fetchUser = async user => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();

    if (data.message || data.message === 'Not Found') {
      alert('user not found!');
      return setUsers([...users]);
    }

    return setUsers([...users, data]);
  };

  return (
    <div className="app-container">
      <h1>GitHub Users</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="type username"
          onChange={e => setUser(e.target.value)}
        />
        <button type="submit">search user</button>
      </form>

      <div className="users">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
