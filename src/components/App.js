import React from 'react';
import user from 'data/user.json';
import Profile from "./profile/Profile";
export default function App ()  {
  return (
    <div className="container">
      <div>
        <h3>Profile</h3>
        <Profile name={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />

      </div>
    
    </div>
  );
};
