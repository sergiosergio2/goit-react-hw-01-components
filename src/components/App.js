import React from 'react';
import user from 'data/user.json';
import Profile from "./profile/Profile";
import Statistics from './statistics/Statistics';
import data from 'data/data.json';

export default function App ()  {
  return (
    <div className="container">
      <div>
        <h3>Profile</h3>
        <Profile name={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />

      </div>
      <div>
        <h3>Statistics</h3>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

      </div>
    
    </div>
  );
};
