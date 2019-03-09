import React from 'react';

const UserForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="type username"
        onChange={e => props.setUser(e.target.value)}
      />
      <button type="submit">search user</button>
    </form>
  );
};

export default UserForm;
