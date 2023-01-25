import React from 'react';
import './App.scss';
import Table from './components/atoms/table/table';
import getUsersList from './services/get-users/get-users';

function App() {
  getUsersList();
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
