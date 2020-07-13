import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';

function App() {
  const [newMember, setNewMember] = useState([]);
  return (
    <div className='App'>
      <h1>Team Members</h1>
      <TeamForm newMember={newMember} setNewMember={setNewMember} />
      <TeamList TeamList={TeamList} />
    </div>
  );
}

export default App;
