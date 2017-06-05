import React from 'react';
import './App.css';
import NavBar from './NavBar';

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Wall Of Zen</h2>
      </div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default App;
