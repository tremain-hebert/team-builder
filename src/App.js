import React, { useState } from 'react';
import './App.css';
import TeamList from './TeamList';
import TeamForm from './TeamForm';

function App() {
  console.log({TeamList});
  const [members, setMembers] = useState([]);
  return (
    <div className='App'>
      <h1>Team Members</h1>
      <TeamForm members={members} setMembers={setMembers} />
      <TeamList team={TeamList} />
    </div>
  );
};

export default App;
