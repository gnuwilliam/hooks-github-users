import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user">
      <div className="user-img">
        <img src={user.avatar_url} alt="user" />
      </div>

      <div className="user-desc">
        <h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.login}
          </a>
        </h3>
        <span>
          <b>Company:</b> {user.company ? user.company : 'Not provided'}
        </span>
        <span>
          <b>Bio:</b> {user.bio ? user.bio : 'Not provided'}
        </span>
        <span>
          <b>Followers:</b> {user.followers}
        </span>
      </div>
    </div>
  );
};

export default User;
